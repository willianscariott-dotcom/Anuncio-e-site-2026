import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/artigos' }),
  schema: z
    .object({
      titulo: z.string(),
      estado: z.enum(['rascunho', 'publicado']),
      resumo: z.string().optional(),
      dataPublicacao: z.string().optional(),
      dataAtualizacao: z.string().optional(),
      categoria: z.string().optional(),
      tituloSeo: z.string().optional(),
      descricaoSeo: z.string().optional(),
      fontes: z.array(z.string()).optional(),
    })
    .refine((entry) => entry.estado !== 'publicado' || Boolean(entry.dataPublicacao), {
      message: 'Data de publicação é obrigatória quando o estado é publicado',
      path: ['dataPublicacao'],
    }),
});

const estudosDeCaso = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/estudos-de-caso' }),
  schema: z.object({
    titulo: z.string(),
    estado: z.enum(['rascunho', 'publicado']),
    resumo: z.string().optional(),
    cliente: z.string().optional(),
    segmento: z.string().optional(),
    servicosRealizados: z.string().optional(),
    enderecoProjeto: z.string().optional(),
    tituloSeo: z.string().optional(),
    descricaoSeo: z.string().optional(),
  }),
});

export const collections = { artigos, estudosDeCaso };
