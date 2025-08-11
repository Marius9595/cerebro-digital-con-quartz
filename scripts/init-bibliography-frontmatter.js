import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.join(__dirname, '../content/Bibliografía')

function getAllMarkdownFiles(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath))
    } else if (file.endsWith('.md')) {
      results.push(filePath)
    }
  })
  return results
}

function ensureFrontmatter(md, typeFlag) {
  const hasYaml = /^---[\s\S]*?---\s*/.test(md)
  const typeLine = `${typeFlag}: true\n`
  if (!hasYaml) {
    return `---\n${typeLine}---\n\n${md}`
  }
  // already has YAML; inject type if missing
  return md.replace(/^---([\s\S]*?)---/, (m, body) => {
    if (new RegExp(`(^|\n)${typeFlag}:\s*true(\n|$)`).test(body)) return m
    const updated = body.trimEnd() + `\n${typeLine}`
    return `---${updated}---`
  })
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
