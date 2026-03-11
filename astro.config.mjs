// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// For alias imports
import { fileURLToPath, URL } from "node:url"

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@i18n": fileURLToPath(new URL("./src/i18n", import.meta.url)),
      },
    },
  },

  output: "static",
  build: { inlineStylesheets: "auto" },
  server: { host: true, port: 4321 },
})
