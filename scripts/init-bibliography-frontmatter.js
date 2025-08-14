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
    const md = fs.readFileSync(f, 'utf8')
    let typeFlag = null
    if (rel.includes('/Libros/')) typeFlag = 'libro'
    else if (rel.includes('/Cursos/')) typeFlag = 'curso'
    else if (rel.includes('/Videos/')) typeFlag = 'video'
    else if (rel.includes('/Artículos/') || rel.includes('/Articulos/')) typeFlag = 'articulo'

    if (!typeFlag) continue
    const updated = ensureFrontmatter(md, typeFlag)
    if (updated !== md) {
      fs.writeFileSync(f, updated, 'utf8')
      console.log('Frontmatter añadido:', rel)
    }
  }
}

main()
