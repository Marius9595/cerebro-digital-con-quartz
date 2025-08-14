// Sincroniza frontmatter de ítems de Bibliografía desde un vault (scan-base)
// hacia el contenido del proyecto (write-base), sin tocar el cuerpo.
// Uso:
//   node scripts/sync-bibliography-frontmatter.js \
//     --scan-base "G:\\Mi unidad\\OBSIDIAN\\cerebro-digital" \
//     --write-base "c:\\Users\\mario\\Documents\\pruebas-de-concepto\\pco-obsidian\\Quartz\\content" \
//     [--biblio Bibliografía] [--overwrite] [--dry-run]

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import yaml from 'js-yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DEFAULT_CONTENT = path.join(__dirname, '../content')

const argv = process.argv.slice(2)
const getArg = (name) => {
  const idx = argv.findIndex(a => a === name || a.startsWith(name + '='))
  if (idx === -1) return undefined
  const val = argv[idx].includes('=') ? argv[idx].split('=').slice(1).join('=') : argv[idx + 1]
  return val
}

const scanBase = path.resolve(getArg('--scan-base') || getArg('--base') || process.env.CONTENT_BASE || DEFAULT_CONTENT)
const writeBase = path.resolve(getArg('--write-base') || getArg('--base') || process.env.CONTENT_BASE || DEFAULT_CONTENT)
const biblioNameArg = getArg('--biblio')
const OVERWRITE = argv.includes('--overwrite')
const REPLACE = argv.includes('--replace') || argv.includes('--replace-frontmatter')
const DRY_RUN = argv.includes('--dry-run')
const VERBOSE = argv.includes('--verbose')

const CANDIDATES = [biblioNameArg, 'Bibliografía', 'Bibliografia', 'Bibliography'].filter(Boolean)
function findExistingDir(base, names) {
  for (const n of names) {
    const p = path.join(base, n)
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) return p
  }
  return null
}

const DEST_BIB_DIR = findExistingDir(writeBase, CANDIDATES)
if (!DEST_BIB_DIR) {
  console.error(`No se encontró la carpeta de Bibliografía bajo: ${writeBase} (probadas: ${CANDIDATES.join(', ')})`)
  process.exit(1)
}

const IGNORE_DIRS = new Set(['.git', 'node_modules', '.obsidian', 'public', '.quartz-cache', 'dist'])

const normalize = (s) => s
  .toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar acentos
  .replace(/[^a-z0-9]+/g, ' ') // dejar solo alfanum y espacios
  .trim()
function getAllMarkdownFiles(dir) {
  let out = []
  let list = []
  try { list = fs.readdirSync(dir) } catch { return out }
  for (const file of list) {
    const p = path.join(dir, file)
    let st
    try { st = fs.statSync(p) } catch { continue }
    if (st.isDirectory()) {
      if (IGNORE_DIRS.has(file)) continue
      out = out.concat(getAllMarkdownFiles(p))
    } else if (file.toLowerCase().endsWith('.md')) {
      out.push(p)
    }
  }
  return out
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

let DEST_FILES = getAllMarkdownFiles(DEST_BIB_DIR)
let SRC_FILES = getAllMarkdownFiles(scanBase)

// Índice rápido por nombre de archivo (sin extensión), case-insensitive
let srcIndex = new Map()

function firstNonEmptyLine(s) {
  const lines = (s || '').split(/\r?\n/)
  for (const ln of lines) {
    const t = ln.trim()
    if (!t) continue
    // si parece cabecera markdown, quítala
    return t.replace(/^#+\s*/, '')
  }
  return ''
}

function addToIndex(key, file) {
  if (!key) return
  if (!srcIndex.has(key)) srcIndex.set(key, [])
  const arr = srcIndex.get(key)
  if (!arr.includes(file)) arr.push(file)
}

function parseFrontmatterAnywhere(raw) {
  // Primero intenta frontmatter estándar (al inicio)
  try {
    const p = matter(raw)
    if (p && p.data && Object.keys(p.data).length > 0) return p
  } catch {}

  // Buscar un bloque YAML en cualquier parte del archivo delimitado por --- ... ---
  // Nota: simplificado; asume que no hay otro bloque --- que no sea YAML.
  try {
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/m)
    if (m && m[1]) {
      const data = yaml.load(m[1]) || {}
      return { data, content: raw }
    }
  } catch {}
  return { data: {}, content: raw }
}

for (const f of SRC_FILES) {
  let raw = ''
  try { raw = fs.readFileSync(f, 'utf8') } catch {}
  const p = parseFrontmatterAnywhere(raw)
  let fm = p.data || {}
  let content = p.content || ''

  const base = path.basename(f).replace(/\.[Mm][Dd]$/,'')
  const keyFile = normalize(base)
  const keyTitle = fm?.title ? normalize(String(fm.title)) : ''
  const keyFirst = normalize(firstNonEmptyLine(content))

  addToIndex(keyFile, f)
  addToIndex(keyTitle, f)
  addToIndex(keyFirst, f)
}

// Campos soportados a copiar
const META_KEYS = [
  'autores','autor','año','year','editorial','edición','idioma','language','isbn',
  'plataforma','platform','duración','horas','nivel','canal','evento','ponente','fecha',
  'revista','medio','doi','enlace','url','title','titulo','link','links'
]
const TYPE_FLAGS = ['libro','curso','video','charla','articulo']

// Acepta formatos tipo "Clave: valor" y Dataview inline "clave:: valor"
const labelRegex = new RegExp(
  '^[\t\s]*[-*]?[\t\s]*(Autores?|Autor|Año|Year|Editorial|Edición|Idioma|ISBN|Plataforma|Duración|Horas|Nivel|Canal|Evento|Conferencia|Ponente|Fecha|Revista|Medio|DOI|Enlace|Enlaces|URL|Link|Links)\s*::?\s*(.+)$',
  'i'
)

function parseHeuristicValue(key, rawVal) {
  const v = (rawVal || '').trim()
  // Intentar parsear arrays estilo [a, b] o ["a", "b"]
  if ((v.startsWith('[') && v.endsWith(']'))) {
    try {
      const arr = yaml.load(v)
      if (Array.isArray(arr)) return arr
    } catch {}
  }
  // Para autores separados por coma, devolver array
  if ((key === 'autores' || key === 'autor') && v.includes(',')) {
    return v.split(',').map(s => s.trim()).filter(Boolean)
  }
  return v
}

function extractHeuristicFromBody(body) {
  const result = {}
  const lines = body.split(/\r?\n/).slice(0, 200) // primeras 200 líneas
  for (const line of lines) {
    const m = line.match(labelRegex)
    if (m) {
      let key = m[1].toLowerCase()
      // normalizar claves
      key = key.replace('autor', 'autor')
      if (key === 'autores') key = 'autores'
      if (key === 'conferencia') key = 'evento'
      if (key === 'año') key = 'año'
      if (key === 'year') key = 'year'
      if (key === 'edición') key = 'edición'
      if (key === 'idioma') key = 'idioma'
      if (key === 'isbn') key = 'isbn'
      if (key === 'plataforma') key = 'plataforma'
      if (key === 'duración') key = 'duración'
      if (key === 'horas') key = 'horas'
      if (key === 'nivel') key = 'nivel'
      if (key === 'canal') key = 'canal'
      if (key === 'evento') key = 'evento'
      if (key === 'ponente') key = 'ponente'
      if (key === 'fecha') key = 'fecha'
      if (key === 'revista') key = 'revista'
      if (key === 'medio') key = 'medio'
      if (key === 'doi') key = 'doi'
      if (key === 'enlace' || key === 'enlaces' || key === 'link' || key === 'links' || key === 'url') key = 'url'
      const value = parseHeuristicValue(key, m[2])
      if (META_KEYS.includes(key) && value !== undefined && value !== null && `${value}` !== '') {
        result[key] = value
      }
    }
  }
  return result
}

function ensureTypeFlag(frontmatter, destPath) {
  // Si ya hay algún flag, mantén
  if (TYPE_FLAGS.some(k => frontmatter?.[k])) return frontmatter
  const seg = destPath.replace(/\\/g,'/').toLowerCase()
  if (seg.includes('/libros/')) frontmatter.libro = true
  else if (seg.includes('/cursos/')) frontmatter.curso = true
  else if (seg.includes('/videos/')) frontmatter.video = true
  else if (seg.includes('/artículos/') || seg.includes('/articulos/')) frontmatter.articulo = true
  return frontmatter
}

function mergeFrontmatter(destFm, srcFm, srcBody, overwrite) {
  const out = { ...(destFm || {}) }
  // copiar solo claves soportadas
  for (const k of META_KEYS) {
    const hasDest = Object.prototype.hasOwnProperty.call(out, k)
    const sv = srcFm?.[k]
    if (sv == null || sv === '') continue
    if (overwrite || !hasDest || out[k] == null || out[k] === '') {
      out[k] = sv
    }
  }
  // fallback heurístico si faltan claves
  const missing = META_KEYS.filter(k => out[k] == null || out[k] === '')
  if (missing.length) {
    const heur = extractHeuristicFromBody(srcBody || '')
    for (const k of missing) {
      if (heur[k] != null && (overwrite || out[k] == null || out[k] === '')) {
        out[k] = heur[k]
      }
    }
  }
  return out
}

function syncOne(destFile) {
  const name = path.basename(destFile).replace(/\.[Mm][Dd]$/,'')
  const keyFile = normalize(name)

  // 1) Intento directo por ruta relativa (estructura espejo)
  const relFromWrite = path.relative(writeBase, destFile)
  const directCandidate = path.join(scanBase, relFromWrite)
  let candidates = []
  if (fs.existsSync(directCandidate)) {
    candidates.push(directCandidate)
    if (VERBOSE) console.log(`Candidato directo por ruta: ${directCandidate}`)
  }

  // 2) Intento por nombre/título/H1 si no hay candidato directo
  let destRaw = ''
  try { destRaw = fs.readFileSync(destFile, 'utf8') } catch {}
  let destParsedTmp = parseFrontmatterAnywhere(destRaw || '')
  const destTitle = destParsedTmp.data?.title ? normalize(String(destParsedTmp.data.title)) : ''
  const destFirst = normalize(firstNonEmptyLine(destParsedTmp.content || ''))

  if (candidates.length === 0) {
    const keysToTry = [keyFile, destTitle, destFirst].filter(Boolean)
    for (const k of keysToTry) {
      const arr = srcIndex.get(k)
      if (arr && arr.length) candidates = candidates.concat(arr)
    }
    // de-duplicar
    candidates = Array.from(new Set(candidates))
    if (VERBOSE) console.log(`Claves probadas: ${keysToTry.join(' | ')}, candidatos: ${candidates.length}`)
  }
  if (candidates.length === 0) {
    // intentar coincidencias parciales dentro de Bibliografía
    const keyRef = keyFile
    const keyWords = keyRef.split(' ').filter(Boolean)
    for (const [n, arr] of srcIndex.entries()) {
      const score = keyWords.reduce((acc, w) => acc + (n.includes(w) ? w.length : 0), 0)
      if (score >= Math.max(3, Math.floor(keyRef.length * 0.3))) {
        candidates = candidates.concat(arr)
      }
    }
  }
  if (candidates.length === 0) {
    if (VERBOSE) console.warn(`No se encontró fuente para: ${name} (keys probadas: ${[keyFile, destTitle, destFirst].filter(Boolean).join(' | ')})`)
    return { updated: false }
  }
  // preferir fuentes bajo alguna carpeta Bibliografía
  let srcPath = candidates[0]
  const destSeg = destFile.replace(/\\/g,'/').toLowerCase()
  const preferredCat = destSeg.includes('/libros/') ? 'libros' : destSeg.includes('/cursos/') ? 'cursos' : destSeg.includes('/videos/') ? 'videos' : destSeg.includes('/artículos/') || destSeg.includes('/articulos/') ? 'articulos' : ''
  for (const c of candidates) {
    const lc = c.replace(/\\/g,'/').toLowerCase()
    if (/bibliograf[ií]a/.test(lc)) {
      if (!preferredCat || lc.includes('/' + preferredCat + '/')) { srcPath = c; break }
      srcPath = c
    }
  }
  if (VERBOSE) console.log(`Origen elegido: ${srcPath}`)

  let srcRaw = ''
  try { srcRaw = fs.readFileSync(srcPath, 'utf8') } catch {}
  if (!srcRaw) {
    console.warn(`No se pudo leer fuente: ${srcPath}`)
    return { updated: false }
  }

  const destParsed = destRaw ? parseFrontmatterAnywhere(destRaw) : { data: {}, content: '' }
  const srcParsed = parseFrontmatterAnywhere(srcRaw)
  if (VERBOSE) console.log(`Claves en origen: ${Object.keys(srcParsed.data || {}).join(', ') || '(sin frontmatter)'}`)

  // Mapear variaciones de claves (link/links -> url)
  const srcData = { ...(srcParsed.data || {}) }
  if (srcData.link && !srcData.url) srcData.url = srcData.link
  if (Array.isArray(srcData.links) && srcData.links.length && !srcData.url) srcData.url = srcData.links[0]
  // Mapear 'conferencia' -> 'evento'
  if (srcData.conferencia && !srcData.evento) srcData.evento = srcData.conferencia

  let merged
  if (REPLACE) {
    // En modo REPLACE usar también heurísticas del cuerpo para completar metadatos faltantes
    const heur = extractHeuristicFromBody(srcParsed.content || srcRaw)
    if (VERBOSE && Object.keys(heur).length) console.log(`Heurística encontrada en origen: ${Object.keys(heur).join(', ')}`)
    const combined = { ...srcData }
    for (const k of Object.keys(heur)) {
      if (combined[k] == null || `${combined[k]}` === '') combined[k] = heur[k]
    }
    merged = ensureTypeFlag({ ...combined }, destFile)
  } else {
    merged = mergeFrontmatter(destParsed.data || {}, srcData, srcParsed.content || '', OVERWRITE)
    merged = ensureTypeFlag(merged, destFile)
  }

  // ¿Cambió algo?
  const before = JSON.stringify(destParsed.data || {})
  const after = JSON.stringify(merged)
  if (before === after) {
  if (VERBOSE) console.log(`Sin diferencias de metadatos (destino vs origen)`)
    return { updated: false }
  }

  if (DRY_RUN) {
    if (VERBOSE) console.log(`[dry-run] ${name} <= ${srcPath}`)
    console.log(`[dry-run] Actualizaría ${name}:`, diffKeys(destParsed.data || {}, merged))
    return { updated: false, dry: true }
  }

  const out = matter.stringify(destParsed.content || '', merged)
  fs.writeFileSync(destFile, out, 'utf8')
  return { updated: true, keys: diffKeys(destParsed.data || {}, merged) }
}

function diffKeys(a, b) {
  const changed = []
  const keys = new Set([...Object.keys(a||{}), ...Object.keys(b||{})])
  for (const k of keys) {
    const av = a?.[k]
    const bv = b?.[k]
    if (JSON.stringify(av) !== JSON.stringify(bv)) changed.push(k)
  }
  return changed
}

console.log(`Sincronizando frontmatter desde: ${scanBase}`)
console.log(`Hacia Bibliografía en: ${DEST_BIB_DIR}`)
console.log(OVERWRITE ? 'Modo overwrite: ON' : 'Modo overwrite: OFF (solo faltantes)')
console.log(REPLACE ? 'Modo replace-frontmatter: ON' : 'Modo replace-frontmatter: OFF')
console.log(DRY_RUN ? 'Dry-run: ON' : 'Dry-run: OFF')
if (VERBOSE) console.log('Verbose: ON')
if (VERBOSE) {
  try {
    const countSrc = getAllMarkdownFiles(scanBase).length
    const countDest = getAllMarkdownFiles(DEST_BIB_DIR).length
    console.log(`Archivos fuente escaneados: ${countSrc}, destino bibliografía: ${countDest}`)
  } catch {}
}

DEST_FILES = getAllMarkdownFiles(DEST_BIB_DIR)
SRC_FILES = getAllMarkdownFiles(scanBase)

// Índice rápido por nombre de archivo (sin extensión), case-insensitive
srcIndex = new Map()
for (const f of SRC_FILES) {
  const base = path.basename(f).replace(/\.[Mm][Dd]$/,'')
  const key = normalize(base)
  if (!srcIndex.has(key)) srcIndex.set(key, [])
  srcIndex.get(key).push(f)
}

let updatedCount = 0
for (const f of DEST_FILES) {
  if (VERBOSE) console.log(`\n== Procesando: ${path.basename(f)} ==`)
  const res = syncOne(f)
  if (res.updated) {
    updatedCount++
    console.log(`Actualizado: ${path.basename(f)} ${res.keys ? '(' + res.keys.join(', ') + ')' : ''}`)
  } else if (VERBOSE) {
    console.log(`Sin cambios: ${path.basename(f)}`)
  }
}

console.log(`Hecho. Archivos actualizados: ${updatedCount}/${DEST_FILES.length}`)
