import type { APIRoute } from 'astro';
import { SITE, SITE_STATE } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const production = SITE_STATE === 'production';
  const body = production
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : `User-agent: *\nAllow: /\n`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
