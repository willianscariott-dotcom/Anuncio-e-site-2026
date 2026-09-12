import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

const siteUrl = 'https://www.anuncioesite.com.br';
const production = process.env.SITE_STATE === 'production';

export default defineConfig({
  site: siteUrl,
  output: 'server',
  adapter: vercel(),
  integrations: [react(), markdoc(), keystatic(), ...(production ? [sitemap()] : [])],
});
