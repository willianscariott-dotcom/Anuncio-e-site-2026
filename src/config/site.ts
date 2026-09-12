export const SITE_STATE: 'construction' | 'production' =
  (process.env.SITE_STATE as 'construction' | 'production') ?? 'construction';

export const SITE = {
  url: 'https://www.anuncioesite.com.br',
  brand: 'Anúncio e Site',
  tagline:
    'Criação de sites, landing pages e gestão de anúncios online para prestadores de serviços e pequenos negócios.',
  language: 'pt-BR',
  email: 'contrato@grupows.com',
  author: {
    display: 'Willian Souza',
    role: 'criador de sites e gestor de tráfego pago',
  },
  repositoryUrl: '',
  whatsapp: '',
} as const;
