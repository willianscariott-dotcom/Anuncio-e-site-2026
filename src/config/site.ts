export const SITE_STATE: 'construction' | 'production' =
  (process.env.SITE_STATE as 'construction' | 'production') ?? 'construction';

export const SITE = {
  url: 'https://www.anuncioesite.com.br',
  brand: 'Anúncio e Site',
  tagline:
    'Criação de sites, landing pages e gestão de anúncios online para prestadores de serviços e pequenos negócios.',
  language: 'pt-BR',
  email: 'contrato@grupows.com',
  city: 'Novo Hamburgo',
  state: 'Rio Grande do Sul',
  country: 'Brasil',
  author: {
    display: 'Willian Souza',
    role: 'criador de sites e gestor de tráfego pago',
  },
  repositoryUrl: 'https://github.com/wscariott1988/Anuncio-e-site-2026',
  whatsapp: '',
} as const;
