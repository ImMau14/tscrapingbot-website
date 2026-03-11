import { defineMiddleware } from "astro:middleware"

export const onRequest = defineMiddleware(async (_, next) => {
  const response = await next()

  const contentType = response.headers.get("content-type") || ""
  if (!contentType.includes("text/html")) return response

  const isDev = import.meta.env.DEV

  const cspDirectives = [
    "default-src 'self'",
    "img-src 'self' https://img.shields.io data: blob:",
    "script-src 'self'",
    "style-src 'self'",
    "font-src 'self' data:",
    "connect-src 'self'",
    "manifest-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ]

  if (isDev) {
    const devCsp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self' ws: localhost:*",
      "upgrade-insecure-requests",
    ]
    response.headers.set("Content-Security-Policy", devCsp.join("; "))
  } else {
    response.headers.set("Content-Security-Policy", cspDirectives.join("; "))
  }

  response.headers.set("X-Robots-Tag", "index, follow")

  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  return response
})
