import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  adapter: netlify(),
})
