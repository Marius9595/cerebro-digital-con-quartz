import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    // Backlink a la fuente bibliográfica (usa el frontmatter original del vault)
    Component.ConditionalRender({
      component: Component.FrontmatterProps({
        fields: ["libro", "curso", "video", "charla", "articulo"],
        labels: {
          libro: "Fuente",
          curso: "Fuente",
          video: "Fuente",
          charla: "Fuente",
          articulo: "Fuente",
        },
        inline: true,
      }),
      // Solo mostrar cuando estos campos sean enlaces/texto (no flags booleanos)
      condition: (page) => {
        const fm = (page.fileData.frontmatter ?? {}) as Record<string, unknown>
        const keys = ["libro", "curso", "video", "charla", "articulo"]
        return keys.some((k) => {
          const v = fm[k]
          return typeof v === "string" || (Array.isArray(v) && v.length > 0)
        })
      },
    }),
  // Componente de metadatos para bibliografía (solo en páginas bibliográficas)
  Component.ConditionalRender({
    component: Component.BibliographyMeta(),
    condition: (page) => {
      const slug = page.fileData.slug?.toString() ?? ""
      const fm = (page.fileData.frontmatter ?? {}) as Record<string, unknown>
      const isBool = (v: unknown) => typeof v === "boolean" && v
      const byFlag = isBool(fm.libro) || isBool(fm.curso) || isBool(fm.video) || isBool(fm.charla) || isBool(fm.articulo)
      const inBiblio = /\/(Bibliografía|Bibliografia)\//i.test(slug)
      return byFlag || inBiblio
    },
  }),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
