import { defineMiddleware } from "astro:middleware"
import { locales, defaultLocale } from "@i18n/utils"

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url)
  const pathname = url.pathname

  if (
    /\.[^/.]+$/.test(pathname) ||
    pathname.startsWith("/_astro/") ||
    pathname.startsWith("/_actions") ||
    pathname.startsWith("/api/")
  ) {
    return next()
  }

  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]
  const hasLocale = locales.includes(firstSegment)

  if (!hasLocale) {
    const acceptLanguage = context.request.headers.get("accept-language") || ""
    let userLang = defaultLocale

    const primaryLang = acceptLanguage.split(",")[0]?.split("-")[0] || ""
    if (locales.includes(primaryLang)) {
      userLang = primaryLang
    }

    const redirectPath = `/${userLang}${pathname === "/" ? "" : pathname}`
    return context.redirect(redirectPath, 302)
  }

  if (import.meta.env.PROD) {
    const response = await next()
    const contentType = response.headers.get("content-type") || ""
    if (contentType.includes("text/html")) {
      const clone = response.clone()
      const headers = new Headers(clone.headers)

      const csp = [
        "default-src 'self'",
        "img-src 'self' https: data: blob:",
        "script-src 'self'",
        "style-src 'self' 'unsafe-hashes' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
        "font-src 'self' data:",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "upgrade-insecure-requests",
      ].join("; ")

      headers.set("Content-Security-Policy", csp)
      headers.set("X-Frame-Options", "DENY")
      headers.set("X-Content-Type-Options", "nosniff")
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
      headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
      headers.set("Cross-Origin-Resource-Policy", "same-origin")

      return new Response(clone.body, {
        status: clone.status,
        statusText: clone.statusText,
        headers,
      })
    }
    return response
  }

  return next()
})
