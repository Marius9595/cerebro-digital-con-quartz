import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.join(__dirname, '../content/Bibliografía')

function getAllMarkdownFiles(dir) {
  let results = []
  if (!fs.existsSync(dir)) return results
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
  // determine base indentation (smallest indent among key lines)
  let baseIndent = Infinity
  const keyLineRx = /^(\s*)([^\s#][^:]*):/ // capture indent and key
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
        // skip this key and any indented continuation lines
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

function ensureFrontmatter(md, typeFlag) {
  // Use gray-matter to parse and modify frontmatter safely (avoids duplicated YAML keys)
  const parsed = matter(md || '')
  const data = parsed.data || {}
  if (data[typeFlag]) return md
  data[typeFlag] = true
  return matter.stringify(parsed.content || '', data)
}

function main() {
  if (!fs.existsSync(ROOT)) return
  const files = getAllMarkdownFiles(ROOT)
  for (const f of files) {
    const rel = f.replace(/\\/g, '/')
    let md = fs.readFileSync(f, 'utf8')
    // sanitize frontmatter if needed
    const sanitized = sanitizeFrontmatter(md)
    if (sanitized !== md) {
      const bak = f + '.bak-frontmatter'
      if (!fs.existsSync(bak)) fs.writeFileSync(bak, md, 'utf8')
      md = sanitized
      fs.writeFileSync(f, md, 'utf8')
      console.log('Frontmatter saneado y backup creado:', rel)
    }
    let typeFlag = null
    if (rel.includes('/Libros/')) typeFlag = 'libro'
    else if (rel.includes('/Cursos/')) typeFlag = 'curso'
    else if (rel.includes('/Videos/')) typeFlag = 'video'
    else if (rel.includes('/Artículos/') || rel.includes('/Articulos/')) typeFlag = 'articulo'

    if (!typeFlag) continue
    const updated = ensureFrontmatter(md, typeFlag)
    if (updated !== md) {
      const bak = f + '.bak-frontmatter'
      if (!fs.existsSync(bak)) fs.writeFileSync(bak, md, 'utf8')
      fs.writeFileSync(f, updated, 'utf8')
      console.log('Frontmatter añadido:', rel)
    }
  }
}

main()
