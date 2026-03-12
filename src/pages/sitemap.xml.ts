import type { APIRoute } from "astro"
import { locales } from "@i18n/utils"

export const GET: APIRoute = async () => {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "localhost:4321"
  const protocol = host.includes("localhost") ? "http" : "https"
  const siteUrl = `${protocol}://${host}`

  const pages = import.meta.glob("./**/*.{astro,md,mdx}", { eager: false })
  const finalRoutes = new Set<string>()

  for (const path of Object.keys(pages)) {
    let route = path
      .replace("./", "/")
      .replace(/\.[^/.]+$/, "")
      .replace(/\/index$/, "")

    if (route === "") route = "/"

    const isDynamicLang = route.includes("[")

    if (isDynamicLang) {
      locales.forEach((lang) => {
        let localizedRoute = route.replace(/\[.*?lang.*?\]/, lang)
        localizedRoute = localizedRoute.replace(/\/+/g, "/")
        finalRoutes.add(localizedRoute.startsWith("/") ? localizedRoute : `/${localizedRoute}`)
      })
    } else if (route !== "/") {
      locales.forEach((lang) => {
        finalRoutes.add(`/${lang}${route}`)
      })
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Array.from(finalRoutes)
    .filter((url) => url !== "/")
    .map((route) => {
      const isHome = locales.some((l) => route === `/${l}`)
      const priority = isHome ? "1.0" : "0.8"

      return `
    <url>
      <loc>${siteUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`
    })
    .join("")}
</urlset>`.trim()

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
