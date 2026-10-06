import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Eski adresler public/_redirects ile yönlenir (Cloudflare Pages).
export default defineConfig({
  site: 'https://fortiay.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
