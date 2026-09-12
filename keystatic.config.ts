import { config, collection, fields } from '@keystatic/core';

const estado = fields.select({
  label: 'Estado',
  options: [
    { label: 'Rascunho', value: 'rascunho' },
    { label: 'Publicado', value: 'publicado' },
  ],
  defaultValue: 'rascunho',
});

export default config({
  storage: process.env.KEYSTATIC_CLOUD_API_KEY ? { kind: 'cloud' } : { kind: 'local' },
  cloud: process.env.KEYSTATIC_CLOUD_API_KEY
    ? { project: process.env.KEYSTATIC_CLOUD_PROJECT ?? 'anuncioesite/anuncioesite' }
    : undefined,
  collections: {
    artigos: collection({
      label: 'Artigos',
      slugField: 'titulo',
      path: 'src/content/artigos/*',
      format: { contentField: 'content' },
      columns: ['estado', 'dataPublicacao', 'categoria'],
      entryLayout: 'content',
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        estado,
        resumo: fields.text({ label: 'Resumo', multiline: true }),
        dataPublicacao: fields.date({ label: 'Data de publicação' }),
        dataAtualizacao: fields.date({ label: 'Data de atualização' }),
        categoria: fields.text({ label: 'Categoria' }),
        tituloSeo: fields.text({ label: 'Título de SEO' }),
        descricaoSeo: fields.text({ label: 'Descrição de SEO', multiline: true }),
        content: fields.markdoc({ label: 'Conteúdo' }),
        fontes: fields.array(fields.text({ label: 'Fonte' }), {
          label: 'Fontes',
        }),
      },
    }),
    estudosDeCaso: collection({
      label: 'Estudos de caso',
      slugField: 'titulo',
      path: 'src/content/estudos-de-caso/*',
      format: { contentField: 'content' },
      columns: ['estado', 'cliente', 'segmento'],
      entryLayout: 'content',
      schema: {
        titulo: fields.slug({ name: { label: 'Título' } }),
        estado,
        resumo: fields.text({ label: 'Resumo', multiline: true }),
        cliente: fields.text({ label: 'Cliente' }),
        segmento: fields.text({ label: 'Segmento' }),
        servicosRealizados: fields.text({ label: 'Serviços realizados', multiline: true }),
        enderecoProjeto: fields.url({ label: 'Endereço do projeto' }),
        tituloSeo: fields.text({ label: 'Título de SEO' }),
        descricaoSeo: fields.text({ label: 'Descrição de SEO', multiline: true }),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
});
