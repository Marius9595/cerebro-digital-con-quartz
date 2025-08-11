import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSX } from "preact"
import { FullSlug, resolveRelative } from "../util/path"
import style from "./styles/bibliographyMeta.scss"

type AnyRecord = Record<string, unknown>

const pick = (fm: AnyRecord | undefined, keys: string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = {}
  if (!fm) return out
  for (const k of keys) {
    const v = fm[k]
    if (v != null && v !== "") out[k] = v
  }
  return out
}

export default (() => {
  function BibliographyMeta({ fileData, allFiles }: QuartzComponentProps) {
  const fm = (fileData.frontmatter ?? {}) as AnyRecord
  const slug = fileData.slug?.toString() ?? ""

    // Detect type by flag fields already used in your layout (libro, curso, video, charla)
  type BibType = "libro" | "curso" | "video" | "charla" | "articulo"
    const typeFromPath: BibType | undefined = slug.includes("/Libros/")
      ? "libro"
      : slug.includes("/Cursos/")
      ? "curso"
      : slug.includes("/Videos/")
      ? "video"
      : slug.includes("/Artículos/") || slug.includes("/Articulos/")
      ? "articulo"
      : undefined

    const type = ((fm.libro && "libro") || (fm.curso && "curso") || (fm.video && "video") || (fm.charla && "charla") || (fm.articulo && "articulo") || typeFromPath || undefined) as BibType | undefined
    if (!type) return null

    // Per-type fields
    const common = [
      "titulo",
      "title",
      "autores",
      "autor",
      "año",
      "anyo",
      "year",
      "editorial",
      "plataforma",
      "platform",
      "edición",
      "edition",
      "idioma",
      "language",
      "isbn",
      "profesores",
      "enlace",
      "links",
      "url",
    ]
    const byType: Record<BibType, string[]> = {
      libro: ["titulo", "title", "autores", "autor", "año", "anyo", "editorial", "edición", "idioma", "isbn", "enlace", "links", "url"],
      curso: ["titulo", "title", "autores", "autor", "profesores", "plataforma", "duración", "horas", "nivel", "enlace", "links", "url"],
      video: ["titulo", "title", "autores", "autor", "canal", "evento", "duración", "enlace", "links", "url"],
      charla: ["titulo", "title", "ponente", "evento", "fecha", "duración", "enlace", "links", "url"],
      articulo: ["titulo", "title", "autores", "revista", "medio", "fecha", "doi", "enlace", "links", "url"],
    }

  const chosenKeys = Array.from(new Set([...(type ? byType[type] : []), ...common]))
    const data = pick(fm, chosenKeys)
    const labelMap: Record<string, string> = {
      titulo: "Título",
      title: "Título",
      autores: "Autores",
      autor: "Autor",
      año: "Año",
      anyo: "Año",
      year: "Año",
      editorial: "Editorial",
      edición: "Edición",
      idioma: "Idioma",
      language: "Idioma",
      isbn: "ISBN",
      profesores: "Profesores",
      plataforma: "Plataforma",
      platform: "Plataforma",
      duración: "Duración",
      horas: "Horas",
      nivel: "Nivel",
      canal: "Canal",
      evento: "Evento",
      ponente: "Ponente",
      fecha: "Fecha",
      revista: "Revista",
      medio: "Medio",
      doi: "DOI",
      enlace: "Enlace",
      links: "Enlaces",
      url: "Enlace",
    }

    // Helpers to render wikilinks and URLs smartly
    const parseWikilink = (s: string): { target: string; alias?: string } | undefined => {
      const m = s.match(/^\[\[([^\]|#]+?)(?:\|([^\]]+))?\]\]$/)
      if (!m) return undefined
      const target = m[1].trim()
      const alias = m[2]?.trim()
      return { target, alias }
    }

  const renderSmart = (v: unknown): JSX.Element | string => {
      if (Array.isArray(v)) {
        return (
          <span>
            {v.map((item, i) => (
              <span>
                {i > 0 ? ", " : ""}
                {renderSmart(item)}
              </span>
            ))}
          </span>
        )
      }
      const raw = String(v).trim()
      if (!raw) return ""
      // External URL
      try {
        const u = new URL(raw)
        if (u.protocol === "http:" || u.protocol === "https:") {
          return (
            <a href={raw} target="_blank" rel="noopener noreferrer">
              {raw}
            </a>
          )
        }
      } catch {
        // not a URL
      }
      // Wikilink
      const wl = parseWikilink(raw)
      if (wl) {
        const target = (allFiles ?? []).find((f: any) => f.frontmatter?.title === wl.target || f.slug?.toString().split("/").pop() === wl.target)
        const displayText = wl.alias ?? target?.frontmatter?.title ?? wl.target
        const href = target ? resolveRelative(fileData.slug!, target.slug! as FullSlug) : undefined
        return href ? (
          <a href={href} class="internal">
            {displayText}
          </a>
        ) : (
          <span>{displayText}</span>
        )
      }
      return raw
    }

    const asUrl = (v: unknown): string | undefined => {
      if (typeof v !== "string") return undefined
      const s = v.trim()
      if (!s) return undefined
      try {
        const u = new URL(s)
        return u.protocol === "http:" || u.protocol === "https:" ? s : undefined
      } catch {
        return undefined
      }
    }

    const rows = Object.entries(data).map(([k, v]) => {
      const label = labelMap[k] ?? k
      const url = asUrl(v)
      return (
        <>
          <div class="label"><strong>{label}</strong></div>
          <div class="value">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            ) : (
              renderSmart(v)
            )}
          </div>
        </>
      )
    })

    const titleMap: Record<BibType, string> = { libro: "Libro", curso: "Curso", video: "Video", charla: "Charla", articulo: "Artículo" }

    if (rows.length === 0) {
      return (
        <section class="bibliography-meta">
          <h3>{titleMap[type]}</h3>
          <div class="meta-grid">
            <div class="label"><strong>Info</strong></div>
            <div class="value">Añade metadatos en el frontmatter (YAML) de esta nota: autores, enlace, año, etc.</div>
          </div>
        </section>
      )
    }

    return (
      <section class="bibliography-meta">
        <h3>{titleMap[type]}</h3>
        <div class="meta-grid">
          {rows}
        </div>
      </section>
    )
  }

  BibliographyMeta.css = style
  return BibliographyMeta
}) satisfies QuartzComponentConstructor
