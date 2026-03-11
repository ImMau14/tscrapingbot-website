import { defineConfig } from "astro/config"

import react from "@astrojs/react"
import vercel from "@astrojs/vercel"

import tailwind from "@tailwindcss/vite"

import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@i18n": fileURLToPath(new URL("./src/i18n", import.meta.url)),
      },
    },
  },

  output: "server",
  adapter: vercel(),
})
