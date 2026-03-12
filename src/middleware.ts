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

  return next()
})
