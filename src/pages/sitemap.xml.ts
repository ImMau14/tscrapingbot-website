import type { APIRoute } from "astro"
import { locales } from "@i18n/utils"

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export const GET: APIRoute = async () => {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "localhost:4321"

  const protocol = host.includes("localhost") ? "http" : "https"
  const siteUrl = `${protocol}://${host}`

  const pages = import.meta.glob("./**/*.{astro,md,mdx}")

  const routes = new Set<string>()

  for (const path of Object.keys(pages)) {
    let route = path
      .replace("./", "/")
      .replace(/\.[^/.]+$/, "")
      .replace(/\/index$/, "")
    if (route === "") route = "/"
    if (route.includes("[")) {
      for (const lang of locales) {
        const localized = route.replace(/\[.*?lang.*?\]/, lang).replace(/\/+/g, "/")
        routes.add(localized.startsWith("/") ? localized : `/${localized}`)
      }
    } else {
      if (route === "/") {
        for (const lang of locales) routes.add(`/${lang}`)
      } else {
        for (const lang of locales) routes.add(`/${lang}${route}`)
      }
    }
  }

  const grouped = new Map<string, Set<string>>()
  for (const route of routes) {
    const parts = route.split("/").filter(Boolean)
    const base = parts.length > 1 ? "/" + parts.slice(1).join("/") : "/"
    if (!grouped.has(base)) grouped.set(base, new Set())
    grouped.get(base)!.add(route)
  }

  const lastmod = new Date().toISOString().split("T")[0]
  const defaultLocale = locales[0] ?? "en"

  const urls = Array.from(grouped.entries())
    .map(([base, localizedSet]) => {
      const localizedRoutes = Array.from(localizedSet).sort()
      const isHome = base === "/"
      const priority = isHome ? "1.0" : "0.8"
      const loc = `${siteUrl}${localizedRoutes[0]}`

      const alternates = localizedRoutes
        .map((route) => {
          const lang = route.split("/")[1] ?? defaultLocale
          return `<xhtml:link rel="alternate" hreflang="${escapeXml(lang)}" href="${escapeXml(
            `${siteUrl}${route}`,
          )}" />`
        })
        .join("\n    ")

      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
        `${siteUrl}/${defaultLocale}`,
      )}" />`

      return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    ${alternates}
    ${xDefault}
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
 xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
 xmlns:xhtml="http://www.w3.org/1999/xhtml"
 xmlns:xml="http://www.w3.org/XML/1998/namespace">
${urls}
</urlset>`

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
