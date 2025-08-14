// Genera/actualiza una sección delimitada de "backlinks" dentro de los items de Bibliografía
// sin sobrescribir frontmatter ni el resto del contenido.
// Ejecutar con: node scripts/generate-bibliography-backlinks.js

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Rutas
const CONTENT_DIR = path.join(__dirname, '../content')
const BIBLIOGRAPHY_DIR = path.join(CONTENT_DIR, 'Bibliografía')

// Marcadores de la sección a mantener actualizada
const START = '<!-- backlinks:start -->'
const END = '<!-- backlinks:end -->'

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getAllMarkdownFiles(dir) {
  let results = []
  let list = []
  try { list = fs.readdirSync(dir) } catch { return results }
  for (const file of list) {
    const filePath = path.join(dir, file)
    let stat
    try { stat = fs.statSync(filePath) } catch { continue }
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath))
    } else if (file.toLowerCase().endsWith('.md')) {
      results.push(filePath)
    }
  }
  return results
}

function sanitizeFrontmatter(raw) {
  if (!raw) return raw
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/m)
  if (!m) return raw
  const body = m[1]
  const lines = body.split(/\r?\n/)
  let baseIndent = Infinity
  const keyLineRx = /^(\s*)([^\s#][^:]*):/
  for (const ln of lines) {
    const mm = ln.match(keyLineRx)
    if (mm) {
      const indent = mm[1].length
      if (indent < baseIndent) baseIndent = indent
    }
  }
  if (baseIndent === Infinity) return raw
  const seen = new Set()
  const outLines = []
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i]
    const mm = ln.match(keyLineRx)
    if (mm && mm[1].length === baseIndent) {
      const key = mm[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      if (seen.has(key)) {
        const skipIndent = mm[1].length
        i++
        while (i < lines.length) {
          const nextLine = lines[i]
          const nextIndent = nextLine.match(/^(\s*)/)[1].length
          if (nextLine.trim() === '') { i++; continue }
          if (nextIndent > skipIndent) { i++; continue }
          break
        }
        i--
        continue
      }
      seen.add(key)
      outLines.push(ln)
    } else {
      outLines.push(ln)
    }
  }
  const newBody = outLines.join('\n')
  if (newBody === body) return raw
  const replaced = raw.replace(body, newBody)
  return replaced
}

function buildLinkCandidates(bibFile) {
  const base = path.basename(bibFile, '.md')
  const rel = path.relative(CONTENT_DIR, bibFile).replace(/\\/g, '/').replace(/\.md$/, '')
  // candidatos: por nombre y por ruta relativa (sin extensión)
  return [base, rel]
}

function getBacklinksFor(bibFile, allFiles) {
  const candidates = buildLinkCandidates(bibFile)
  const patterns = candidates.map(c => new RegExp(`\\[\\[${escapeRegExp(c)}(?:\\||\\])`, 'i'))
  const backlinks = []
  for (const file of allFiles) {
    // No backlinks desde Bibliografía
    if (file.includes('Bibliografía')) continue
    let content = ''
    try { content = fs.readFileSync(file, 'utf8') } catch { continue }
    if (patterns.some(rx => rx.test(content))) {
      const rel = path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.md$/, '')
      backlinks.push(`[[${rel}]]`)
    }
  }
  // Orden estable para evitar ruido en git
  return backlinks.sort((a, b) => a.localeCompare(b, 'es'))
}

function renderBacklinksSection(backlinks) {
  const body = backlinks.length
    ? `## Notas\n\n${backlinks.map(b => `- ${b}`).join('\n')}`
    : '_Sin notas_'
  return `${START}\n\n${body}\n\n${END}`
}

function upsertBacklinksSection(rawContent, backlinksSection) {
  const rx = new RegExp(`${escapeRegExp(START)}[\\s\\S]*?${escapeRegExp(END)}`)
  if (rx.test(rawContent)) {
    return rawContent.replace(rx, backlinksSection)
  }
  // Si no existe, añadir al final con separación
  const needsNL = rawContent.endsWith('\n') ? '' : '\n'
  return `${rawContent}${needsNL}\n${backlinksSection}\n`
}

// Quitar la primera sección titulada "Notas" (si existe) antes de insertar backlinks.
// Busca un encabezado Markdown (#{1,6} Notas) o una línea solitaria "Notas" y elimina
// todo su contenido hasta el siguiente encabezado o el final del archivo.
function stripOriginalNotasSection(content) {
  if (!content) return content
  // Si ya contiene los marcadores de backlinks, no tocar esa región
  if (content.includes(START) || content.includes(END)) return content

  // Regex para capturar una sección que empieza con un heading `#.. Notas` o una línea "Notas"
  const rx = new RegExp(
    "(^|\\r?\\n)(?:#{1,6}\\s*Notas\\s*|Notas\\s*\\r?\\n)([\\s\\S]*?)(?=\\r?\\n#{1,6}\\s|$)",
    'i'
  )
  const match = content.match(rx)
  if (!match) return content

  // Remove the matched region and tidy up extra blank lines
  const startIndex = match.index + (match[1] ? match[1].length : 0)
  const before = content.slice(0, startIndex)
  const after = content.slice(startIndex + match[0].length)
  const combined = `${before}\n${after}`.replace(/\n{3,}/g, '\n\n')
  return combined.trimStart()
}

function processBibliography() {
  if (!fs.existsSync(BIBLIOGRAPHY_DIR)) {
    console.warn(`No existe carpeta de Bibliografía: ${BIBLIOGRAPHY_DIR}`)
    return
  }
  const bibFiles = getAllMarkdownFiles(BIBLIOGRAPHY_DIR)
  const allFiles = getAllMarkdownFiles(CONTENT_DIR)

  for (const bibFile of bibFiles) {
    let raw = ''
    try { raw = fs.readFileSync(bibFile, 'utf8') } catch { continue }
    // sanitize frontmatter first if necessary (create backup once)
    const sanitized = sanitizeFrontmatter(raw)
    if (sanitized !== raw) {
      const bak = bibFile + '.bak-frontmatter'
      if (!fs.existsSync(bak)) fs.writeFileSync(bak, raw, 'utf8')
      raw = sanitized
      fs.writeFileSync(bibFile, raw, 'utf8')
      console.log(`Sanitizado frontmatter y backup: ${bibFile}`)
    }
    let parsed
    try {
      parsed = matter(raw)
    } catch (err) {
      console.warn(`No se pudo parsear frontmatter de ${bibFile}, se omite: ${err.message}`)
      continue
    }
  const backlinks = getBacklinksFor(bibFile, allFiles)
  const section = renderBacklinksSection(backlinks)
  // Si no hay marcadores existentes, eliminar una sección "Notas" previa
  const baseContent = parsed.content || ''
  const contentToUse = baseContent.includes(START) ? baseContent : stripOriginalNotasSection(baseContent)
  const updatedContent = upsertBacklinksSection(contentToUse, section)
    const out = matter.stringify(updatedContent, parsed.data || {})
    // Escribir solo si hay cambios para minimizar ruido en git
    if (out !== raw) {
      fs.writeFileSync(bibFile, out, 'utf8')
      const name = path.basename(bibFile, '.md')
      console.log(`Actualizado: ${name} (${backlinks.length} backlinks)`)
    } else {
      if (process.env.DEBUG) console.log(`Sin cambios: ${bibFile}`)
    }
  }
}

processBibliography()
