import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSX } from "preact"
import { classNames } from "../util/lang"
import { FullSlug, resolveRelative } from "../util/path"
import style from "./styles/frontmatterProps.scss"

interface Options {
  fields: string[]
  labels?: Record<string, string>
  inline?: boolean
}

const defaultOptions: Options = {
  fields: [],
  labels: {},
  inline: true,
}

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  function FrontmatterProps({ fileData, allFiles, displayClass }: QuartzComponentProps) {
    const fm = fileData.frontmatter as Record<string, unknown> | undefined
    if (!fm || !opts.fields.length) return null

    // Helpers scoped here to access fileData and allFiles
    const parseWikilink = (s: string): { target: string; alias?: string } | undefined => {
      const m = s.match(/^\[\[([^\]|#]+?)(?:\|([^\]]+))?\]\]$/)
      if (!m) return undefined
      const target = m[1].trim()
      const alias = m[2]?.trim()
      return { target, alias }
    }

    const findTargetFile = (label: string) => {
      const lower = label.toLowerCase()
      // 1) by title
      let file = allFiles.find((f) => f.frontmatter?.title?.toString().toLowerCase() === lower)
      if (file) return file
      // 2) by last slug segment
      file = allFiles.find((f) => {
        const slug = f.slug?.toString().toLowerCase() ?? ""
        const last = slug.split("/").filter(Boolean).pop() ?? ""
        const normalized = last.replace(/-/g, " ")
        return normalized === lower || last === lower
      })
      return file
    }

    const asString = (v: unknown): string | undefined => {
      if (v == null) return undefined
      const s = String(v).trim()
      return s.length > 0 ? s : undefined
    }

    const extractPlainText = (v: unknown): string => {
      if (Array.isArray(v)) return v.map((x) => extractPlainText(x)).join(", ")
      const s = String(v)
      const wl = parseWikilink(s)
      if (wl) return wl.alias ?? wl.target
      return s
    }

    const renderSmart = (v: unknown): JSX.Element | string => {
      const raw = String(v).trim()
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
        const target = findTargetFile(wl.target)
        const displayText = wl.alias ?? target?.frontmatter?.title ?? wl.target

        const externalUrl = asString(target?.frontmatter?.url)
        const internalHref = target
          ? resolveRelative(fileData.slug!, target.slug! as FullSlug)
          : undefined

        const anchor = externalUrl ? (
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {displayText}
          </a>
        ) : internalHref ? (
          <a href={internalHref} class="internal">
            {displayText}
          </a>
        ) : (
          <span>{displayText}</span>
        )

        const platformRaw = target?.frontmatter?.plataforma ?? target?.frontmatter?.platform
        const platformText = platformRaw ? extractPlainText(platformRaw) : undefined

        return platformText ? (
          <span>
            {anchor}
            <span> — {platformText}</span>
          </span>
        ) : (
          anchor
        )
      }

      // Plain text fallback
      return raw
    }

    const rendered: JSX.Element[] = []
    for (const key of opts.fields) {
      const val = fm[key]
      if (val == null || val === "") continue

      const label = opts.labels?.[key] ?? key
      let content: JSX.Element | string

      if (Array.isArray(val)) {
        content = (
          <span class="prop-value">
            {val.map((v, i) => (
              <span>
                {i > 0 ? ", " : ""}
                {renderSmart(v)}
              </span>
            ))}
          </span>
        )
      } else {
        content = <span class="prop-value">{renderSmart(val)}</span>
      }

      rendered.push(
        <span class="prop" data-key={key}>
          <strong class="prop-label">{label}:</strong> {content}
        </span>,
      )
    }

    if (rendered.length === 0) return null

    return (
      <p class={classNames(displayClass, "frontmatter-props")} data-inline={opts.inline}>
        {rendered}
      </p>
    )
  }

  FrontmatterProps.css = style
  return FrontmatterProps
}) satisfies QuartzComponentConstructor
