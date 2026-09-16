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
  whatsapp: {
    display: '(51) 99940-2810',
    number: '5551999402810',
    message:
      'Olá, Willian! Vim pelo site Anúncio e Site e gostaria de conversar sobre meu projeto.',
  },
} as const;

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? SITE.whatsapp.message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${text}`;
}
