# Inventário — site atual (produção) e rebuild Astro

**Data:** 12 de setembro de 2026
**Contexto:** preparação da branch `rebuild/astro` para substituir o site Next.js por Astro, com teste em Preview na Vercel.

## 1. Site atual em produção (branch `master`, Next.js)

### 1.1 URLs

| Rota | Função |
|---|---|
| `/` | Landing page oferta completa (R$ 997) |
| `/landingpage` | Mesma oferta completa (LP) |
| `/landingpage-essencial` | Oferta essencial (R$ 399) |
| `/contato` | Endpoint de API (POST) para envio de leads |
| `/politica-de-privacidade` | Página legal |
| `/termos` | Página legal |

- Domínio canônico: `https://www.anuncioesite.com.br` (sem `www` redireciona para canônico).
- Repositório: `wscariott1988/Anuncio-e-site-2026` (URL real sem acento).
- Vercel: projeto `anuncio-e-site-2026`; `master` = produção; demais branches = Preview.

### 1.2 Arquivos importantes do site atual

| Arquivo | Função |
|---|---|
| `package.json` | Stack Next 16 + React 19; scripts, deps e devDeps |
| `next.config.ts` | Configuração Next (vazia/neutra) |
| `src/app/layout.tsx`, `page.tsx` | Layout raiz e home |
| `src/app/landingpage/*` | LP oferta completa (R$ 997) |
| `src/app/landingpage-essencial/*` | LP essencial (R$ 399) |
| `src/app/contato/route.ts` | API de leads |
| `src/app/{politica-de-privacidade,termos}/page.tsx` | Páginas legais |
| `src/lib/constants.ts` | Marca, preço R$ 997, FAQ, portfólio, WhatsApp |
| `src/lib/essential.ts` | Textos/FAQ da oferta essencial R$ 399 |
| `src/lib/tracking.ts` | Eventos `/dataLayer` (cta_click, whatsapp_click, portfolio_*) |
| `src/lib/whatsapp.ts` | Montagem de link `wa.me` |
| `src/lib/consent.ts` | Consentimento de rastreamento |
| `public/images/portfolio/*.webp` | 5 projetos com cover/desktop/mobile |
| `public/images/willian-souza.webp` | Foto do responsável |
| `public/fonts/Geist-*.ttf` | Fontes locais (substituídas por Fontsource no Astro) |
| `.env.example` | Variáveis: Google Apps Script, WhatsApp, GTM, GA4, Google Ads, Meta Pixel |

### 1.3 Variáveis de ambiente usadas em produção (referência; valores não versionados)

`GOOGLE_APPS_SCRIPT_WEB_APP_URL`, `GOOGLE_APPS_SCRIPT_SECRET`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.

## 2. Rebuild Astro (branch `rebuild/astro`)

### 2.1 Rotas do novo site

| Rota | Arquivo |
|---|---|
| `/` | `src/pages/index.astro` |
| `/robots.txt` | `src/pages/robots.txt.ts` (prerender; `Disallow` fora de produção) |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| `/portfolio/[slug]` | `src/pages/portfolio/[slug].astro` |

### 2.2 Stack e configuração

- Astro 7 + `@astrojs/react`, `@astrojs/markdoc`, `@astrojs/sitemap`, `@astrojs/vercel`, `@keystatic/astro`.
- `output: 'server'` com adapter Vercel; `site: https://www.anuncioesite.com.br`.
- Sitemap somente quando `SITE_STATE=production`.
- Node 24 (`.nvmrc`), pnpm 12.4.1.
- `.env.example`: `SITE_STATE=construction`, `KEYSTATIC_CLOUD_API_KEY`, `KEYSTATIC_CLOUD_PROJECT`.
- Conteúdo: `src/content/artigos` e `src/content/estudos-de-caso` (vazios, com `.gitkeep`); gerenciados via Keystatic.

### 2.3 Documentação do projeto

`README.md`, `PRODUCT.md`, `docs/` (ARQUITETURA, CONTEUDO-SEO, DECISOES, DESIGN, FONTES, IMPLEMENTACAO, NOTEBOOKLM, OFERTA, ROADMAP, pesquisa/, referencias/).

## 3. O que foi feito na branch `rebuild/astro`

- Removidos os arquivos Next.js do checkout da branch (`master` permanece intacto).
- Copiados o Astro, as configurações, `public/` (vazio), `README.md`, `PRODUCT.md` e `docs/` do código novo.
- Pendência de commit separado: portar `public/images/portfolio/*.webp` e `public/images/willian-souza.webp` quando o novo site tiver portfólio.