import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://openclaw-guide-red.vercel.app',
  output: 'static',
  build: {
    assets: '_assets'
  },
  integrations: [sitemap()],
});
