import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: globalThis.Date
  locale?: ValidLocale
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): globalThis.Date | undefined {
  // If frontmatter contains an explicit date-like property, prefer it.
  // Common frontmatter fields we accept: displayDate, date, published, published_at, created, modified
  const fm: any = (data as any).frontmatter
  if (fm) {
    const candidates = ["created"]
    for (const key of candidates) {
      if (Object.prototype.hasOwnProperty.call(fm, key)) {
        const parsed = parseFrontmatterDate(fm[key])
        if (parsed) return parsed
      }
    }
  }

  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }

  return data.dates?.[cfg.defaultDateType]
}

function parseFrontmatterDate(v: unknown): globalThis.Date | undefined {
  if (!v && v !== 0) return undefined
  if (v instanceof globalThis.Date) return v
  if (typeof v === "string") {
    // allow date-only strings and ISO strings
    const d = new globalThis.Date(v)
    if (!isNaN(d.getTime())) return d
  }
  if (typeof v === "number") {
    const d = new globalThis.Date(v)
    if (!isNaN(d.getTime())) return d
  }
  return undefined
}

export function formatDate(d: globalThis.Date, locale: ValidLocale = "en-US"): string {
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function Date({ date, locale }: Props) {
  return <time datetime={date.toISOString()}>{formatDate(date, locale)}</time>
}
