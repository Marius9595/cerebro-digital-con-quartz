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
    ? `## Backlinks\n\n${backlinks.map(b => `- ${b}`).join('\n')}`
    : '_Sin backlinks_'
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
    const parsed = matter(raw)
    const backlinks = getBacklinksFor(bibFile, allFiles)
    const section = renderBacklinksSection(backlinks)
    const updatedContent = upsertBacklinksSection(parsed.content || '', section)
    const out = matter.stringify(updatedContent, parsed.data || {})
    fs.writeFileSync(bibFile, out, 'utf8')
    const name = path.basename(bibFile, '.md')
    console.log(`Actualizado: ${name} (${backlinks.length} backlinks)`)    
  }
}

processBibliography()
