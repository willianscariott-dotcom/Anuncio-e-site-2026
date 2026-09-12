# PESQUISA-SEO-GEO.md — Diretrizes verificadas para busca e recursos de IA

**Versão:** 1.0  
**Data da verificação:** 11 de setembro de 2026  
**Estado:** pesquisa técnica consolidada a partir de fontes oficiais  
**Responsável pela decisão final:** Willian Souza

## 1. Função deste documento

Este arquivo transforma documentação oficial de buscadores, plataformas e Astro em uma orientação técnica aplicável à **Anúncio e Site**.

Ele é auxiliar. As decisões ativas permanecem em `docs/DECISOES.md`, `docs/CONTEUDO-SEO.md`, `docs/ARQUITETURA.md` e `docs/IMPLEMENTACAO.md`.

## 2. Conclusão executiva

Não existe um botão ou truque que faça Google, Gemini, ChatGPT ou outra IA recomendar a Anúncio e Site. O caminho defensável é:

1. ter páginas públicas rastreáveis, indexáveis, rápidas e fáceis de compreender;
2. explicar serviços, preços e limites com consistência;
3. publicar conteúdo original, útil e assinado por uma pessoa real;
4. mostrar experiência e estudos de caso verdadeiros;
5. usar dados estruturados somente quando refletirem o conteúdo visível;
6. permitir o rastreador de busca desejado;
7. conquistar confirmação externa legítima ao longo do tempo;
8. medir consultas, cliques e contatos sem transformar elegibilidade em garantia.

Segundo o Google, as práticas fundamentais de SEO continuam válidas para AI Overviews e AI Mode. Não há requisito técnico adicional, arquivo especial de IA ou schema especial necessário para aparecer nesses recursos.

## 3. O que “GEO” significa neste projeto

Neste projeto, GEO não será vendido ou implementado como hack separado. O termo representa a aplicação disciplinada de SEO, conteúdo e identidade digital para que mecanismos de busca e sistemas generativos consigam:

- acessar a página;
- identificar quem presta o serviço;
- entender o que é oferecido;
- localizar evidências e limitações;
- distinguir decisão, opinião, experiência e dado externo;
- encontrar confirmação coerente em outras presenças públicas.

Isso aumenta clareza e elegibilidade. Não garante menção, citação, posição nem recomendação.

## 4. O que não é necessário

### 4.1 `llms.txt`

O Google declara que não usa `llms.txt` nem outros arquivos especiais desse tipo para sua Busca, inclusive recursos generativos. Criá-lo não ajuda nem prejudica a visibilidade no Google.

Decisão operacional:

- não incluir `llms.txt` como prioridade de lançamento;
- avaliar no futuro somente se uma plataforma-alvo documentar uso real e houver capacidade de mantê-lo correto;
- nunca deixar esse arquivo divergir das páginas públicas.

### 4.2 Arquivos Markdown alternativos

Não criar cópias `.md` das páginas, rotas paralelas para IA ou marcações `rel="alternate"` sem padrão oficial aplicável. O HTML público deve conter o conteúdo importante em texto acessível.

### 4.3 Schema especial para IA

Não existe schema.org especial exigido pelo Google para AI Overviews ou AI Mode. Dados estruturados continuam úteis quando correspondem a recursos suportados e ao conteúdo visível, não como atalho para recomendação.

### 4.4 “Schemamap”

Não implementar `schemamap.xml`, diretiva `Schemamap:` em `robots.txt` ou qualquer mapa paralelo não documentado pelos padrões e ferramentas usados no projeto.

### 4.5 Conteúdo fragmentado artificialmente

Não quebrar cada resposta em páginas pequenas nem reescrever textos exclusivamente para uma IA. O tamanho deve ser determinado pela necessidade do leitor.

## 5. Rastreamento e indexação

### 5.1 Durante a construção

Enquanto o domínio real exibir uma versão incompleta:

- impedir indexação por mecanismo confiável da plataforma ou `noindex`;
- não bloquear uma página com `robots.txt` quando for necessário que o robô veja o `noindex`;
- remover a proteção de indexação somente depois da revisão de lançamento;
- confirmar que não existe conteúdo antigo acessível por rotas esquecidas.

### 5.2 No lançamento

- responder com HTTP 200 nas páginas públicas válidas;
- usar redirecionamento permanente para URLs antigas substituídas;
- manter um único host canônico entre `www` e sem `www`;
- usar `rel="canonical"` absoluto e coerente;
- incluir somente URLs públicas, canônicas e indexáveis no sitemap;
- verificar o domínio no Search Console;
- enviar o sitemap e inspecionar páginas essenciais;
- testar a versão renderizada em celular.

## 6. Sitemap correto no Astro

Com `@astrojs/sitemap`, a configuração precisa do endereço público em `site`, por exemplo:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anuncioesite.com.br',
  integrations: [sitemap()],
});
```

A integração oficial gera `sitemap-index.xml` e `sitemap-0.xml`. Portanto, o endereço esperado para descoberta é:

```text
https://anuncioesite.com.br/sitemap-index.xml
```

Não presumir `/sitemaps.xml`. Se a implementação final alterar o nome, registrar a mudança e testar o arquivo real.

O `robots.txt` deverá apontar para o índice:

```text
Sitemap: https://anuncioesite.com.br/sitemap-index.xml
```

O Google ignora `changefreq` e `priority`; não gastar esforço ajustando esses campos como se influenciassem ranking.

## 7. Rastreadores da OpenAI

A OpenAI documenta funções diferentes:

- `OAI-SearchBot`: usado para que sites possam aparecer nos resultados de busca do ChatGPT;
- `GPTBot`: relacionado a conteúdo que pode ser usado no treinamento de modelos;
- as duas escolhas são independentes.

Decisão confirmada do projeto: não bloquear `OAI-SearchBot` por engano.

A política específica para `GPTBot` permanece uma decisão separada. Não apresentar a escolha sobre treinamento como requisito para aparecer na busca do ChatGPT.

Antes do lançamento, o teste de `robots.txt` deve confirmar:

- rastreamento geral permitido nas páginas públicas;
- `OAI-SearchBot` permitido;
- sitemap correto declarado;
- ausência de regras antigas de bloqueio do ambiente de construção;
- decisão sobre `GPTBot` registrada antes de adicionar regra específica.

## 8. Arquitetura e links internos

As rotas aprovadas já formam a base:

- `/landing-pages/`;
- `/sites/`;
- `/google-ads/`;
- `/meta-ads/`;
- `/portfolio/` e páginas de projeto;
- `/sobre/`;
- `/blog/` e artigos;
- `/landing-pages/montador-de-moveis/`;
- `/criacao-de-sites-novo-hamburgo/`;
- `/politica-de-privacidade/`.

Regras:

- toda página importante deve ser alcançável por links HTML normais;
- artigos devem apontar para a página de serviço adequada quando houver relação real;
- páginas de serviço devem apontar para casos e conteúdos que ajudem a decidir;
- breadcrumb pode ser usado em artigos, profissão e estudos de caso quando a hierarquia existir de fato;
- não criar rotas por cidade ou profissão apenas para repetir o mesmo texto.

## 9. Conteúdo útil e uso de IA

O Google recomenda conteúdo valioso, não comoditizado, com ponto de vista e experiência. Também classifica como abuso de conteúdo em escala a criação de muitas páginas principalmente para manipular rankings, independentemente de terem sido produzidas por pessoas, automação ou IA.

Aplicação para a Anúncio e Site:

- iniciar com 15 a 20 artigos muito bons;
- criar um briefing exclusivo para cada artigo;
- responder a pergunta principal no primeiro parágrafo;
- usar IA como apoio, não como fonte factual automática;
- revisar fatos e acrescentar experiência de Willian;
- assinar os artigos como Willian Souza;
- usar a data real de publicação;
- alterar `dateModified` somente quando houver atualização relevante;
- evitar moldes rígidos repetidos;
- não publicar 20 ou 30 rascunhos por semana somente para ganhar volume;
- não criar versões quase iguais para dezenas de cidades ou profissões.

## 10. Autoria e identidade

O conteúdo deve deixar claro quem o criou. A página `/sobre/` e os artigos deverão conectar a marca e o autor sem inventar credenciais.

Informações aprovadas:

- marca: Anúncio e Site;
- responsável e autor: Willian Souza;
- descrição profissional: criador de sites e gestor de tráfego pago há quatro anos;
- base: Novo Hamburgo, RS;
- atendimento: remoto para todo o Brasil;
- experiência pública permitida: dezenas de sites e landing pages;
- e-mail: `contrato@grupows.com`;
- foto real na seção de atendimento pessoal.

Não inventar endereço público, telefone, CNPJ, certificação, prêmio, número de clientes, depoimento ou resultado. Se o WhatsApp ainda não estiver definido, manter o valor em configuração e não publicar número provisório.

## 11. Dados estruturados

### 11.1 Marcação adequada

| Tipo | Onde usar | Condição |
|---|---|---|
| `Organization` | site institucional | somente dados públicos e reais da marca |
| `Person` | página Sobre e relação com autoria | nome, URL, foto e função coerentes com o conteúdo visível |
| `Article` ou `BlogPosting` | artigos | título, datas, imagem e autor precisam corresponder à página |
| `BreadcrumbList` | artigos, casos e páginas com hierarquia | somente quando o caminho de navegação for real |

O Google recomenda que autores visíveis também apareçam na marcação e que o autor tenha uma URL com mais informações. Em `author.name`, usar somente o nome; a função profissional pertence a um campo próprio quando incluída.

### 11.2 Não usar sem base real

- `HomeAndConstructionBusiness`: descreve negócios ligados à construção ou serviços para casas e edifícios; não representa uma empresa de sites e anúncios;
- `LocalBusiness` com endereço inventado;
- várias entidades locais para cidades apenas atendidas remotamente;
- avaliações ou notas agregadas que não correspondam a dados reais e visíveis;
- `FAQPage` apenas na expectativa de ganhar destaque, especialmente quando a página não atende às políticas do recurso;
- propriedades preenchidas só porque aparecem em um gerador de schema.

Dados estruturados devem passar no Rich Results Test quando aplicável, mas validação técnica não garante exibição enriquecida.

## 12. SEO local

A página `/criacao-de-sites-novo-hamburgo/` deve ser uma página regional real, não uma cópia da página nacional.

Ela pode conter:

- base de Willian em Novo Hamburgo;
- atendimento remoto e possibilidade de reunião presencial quando houver disponibilidade;
- contexto verdadeiro do Vale dos Sinos, Porto Alegre e Grande Porto Alegre;
- projetos ou experiências regionais reais quando houver autorização;
- processo de atendimento local e remoto;
- perguntas específicas de quem contrata na região.

Não deve conter:

- endereço fictício ou escritório inexistente;
- texto que afirme presença física permanente em todas as cidades;
- blocos repetidos com o nome da cidade trocado;
- lista excessiva de municípios apenas para captar variações de busca;
- clientes ou resultados inventados.

O Perfil da Empresa no Google deve ser avaliado separadamente conforme as regras de elegibilidade e a forma real de atendimento. Não criar ou configurar um perfil com dados artificiais apenas para obter presença local.

## 13. Elementos on-page

Cada página indexável deve ter:

- um título específico e natural;
- uma descrição coerente, sem promessa falsa;
- um único tema principal identificável;
- hierarquia de títulos lógica;
- conteúdo principal disponível em HTML textual;
- URL canônica;
- imagem de compartilhamento quando pertinente;
- texto alternativo útil para imagens informativas;
- links internos contextuais;
- CTA compatível com a página;
- ausência de preço desatualizado ou condição contraditória.

Não é necessário repetir a palavra-chave exata em todos os títulos. Clareza semântica e satisfação do leitor importam mais que variações mecânicas.

## 14. Desempenho e experiência

O objetivo comercial aprovado é buscar pontuação acima de 90 no PageSpeed Insights, especialmente no celular, com ressalva de que mídia, scripts, vídeos e integrações afetam o resultado.

Boas práticas para o projeto:

- gerar HTML estático sempre que possível;
- enviar JavaScript somente para componentes que precisam de interação;
- dimensionar imagens e usar formatos modernos;
- reservar espaço para mídia a fim de evitar mudanças de layout;
- carregar fontes com estratégia controlada;
- reduzir scripts de terceiros;
- respeitar `prefers-reduced-motion`;
- manter CTA e navegação utilizáveis por teclado;
- testar LCP, CLS e INP em dados de laboratório e, depois, de campo.

Pontuação alta não prova qualidade do texto, conversão ou posição no Google.

## 15. Provas e confirmação externa

Para aumentar confiança humana e consistência digital:

- publicar estudos de caso verdadeiros;
- obter autorização para identificar clientes quando possível;
- usar depoimentos reais e manter a origem;
- manter nome, serviço, domínio e contatos coerentes nos perfis públicos;
- buscar menções editoriais ou profissionais legítimas;
- corrigir cadastros desatualizados;
- não comprar avaliações, links ou menções artificiais.

É uma inferência razoável que evidências externas coerentes ajudem sistemas e pessoas a confirmar a existência da marca. Não existe garantia de que isso produzirá recomendação por IA.

## 16. Medição

### 16.1 Search Console

Acompanhar:

- indexação;
- consultas;
- impressões;
- cliques;
- CTR;
- páginas de entrada;
- dispositivos e regiões;
- problemas de sitemap e rastreamento;
- relatório de recursos generativos, quando disponível na propriedade.

### 16.2 Analytics e GTM

Depois da versão inicial do site:

- instalar GTM e GA4 conforme decisão do projeto;
- medir cliques no WhatsApp por página e posição do CTA;
- preservar parâmetros UTM nas mensagens ou links quando necessário;
- distinguir clique de conversa iniciada, contato qualificado e venda;
- não chamar todo clique de lead.

### 16.3 Testes manuais de IA

Registrar:

- pergunta exata;
- data;
- ferramenta e modelo exibido;
- localização ou contexto;
- se a resposta usou busca na web;
- fontes citadas;
- forma da menção.

Uma resposta isolada não comprova posicionamento permanente.

## 17. Checklist de lançamento

### Conteúdo e identidade

- [ ] Nome da marca e de Willian estão consistentes.
- [ ] Nenhum dado pessoal ou empresarial foi inventado.
- [ ] Serviços, preços e condições conferem com `docs/OFERTA.md`.
- [ ] Existem pelo menos três estudos de caso reais.
- [ ] Artigos publicados têm autoria e datas reais.
- [ ] Não existem páginas em massa ou textos quase duplicados.

### Rastreamento

- [ ] Bloqueio de construção foi removido.
- [ ] Páginas públicas respondem corretamente.
- [ ] Host canônico e redirecionamentos funcionam.
- [ ] `canonical` está correto.
- [ ] `robots.txt` permite `OAI-SearchBot`.
- [ ] A política de `GPTBot` foi decidida e registrada.
- [ ] `sitemap-index.xml` abre e contém apenas URLs válidas.
- [ ] Sitemap foi enviado ao Search Console.

### Qualidade técnica

- [ ] Títulos e descrições são específicos.
- [ ] Conteúdo importante aparece em HTML.
- [ ] Dados estruturados refletem o conteúdo visível.
- [ ] Links internos alcançam todas as páginas essenciais.
- [ ] Layout foi testado no celular.
- [ ] Imagens têm dimensões e texto alternativo adequado.
- [ ] Animações respeitam movimento reduzido.
- [ ] Eventos de WhatsApp foram testados.

## 18. Fontes oficiais

- [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google — Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google — Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google — Spam policies: scaled content abuse](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)
- [Google — Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google — Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google — Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google — Sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google — Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [OpenAI — Overview of crawlers](https://developers.openai.com/api/docs/bots)
- [Astro — `@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Schema.org — HomeAndConstructionBusiness](https://schema.org/HomeAndConstructionBusiness)

## 19. Regra final

Qualquer recomendação futura sobre SEO, GEO ou visibilidade em IA deve responder a quatro perguntas:

1. Qual fonte oficial sustenta a afirmação?
2. O que essa fonte realmente garante — e o que não garante?
3. A recomendação corresponde ao negócio real e ao conteúdo visível?
4. O ganho esperado justifica o custo de implementar e manter?

Se não houver resposta clara, tratar a ideia como hipótese, não como requisito.

