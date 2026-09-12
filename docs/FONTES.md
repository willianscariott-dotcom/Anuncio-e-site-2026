# FONTES.md — Fontes, evidências e regras de verificação

**Versão:** 1.1  
**Data:** 11 de setembro de 2026  
**Estado:** registro auditado; fontes internas reconciliadas e fontes externas verificadas nesta data  
**Responsável pelas decisões e validações internas:** Willian Souza

## 1. Função deste documento

Este arquivo registra as fontes utilizadas para orientar o projeto **Anúncio e Site** e explica exatamente o que cada uma pode ou não sustentar.

Ele deve ser usado para:

- conferir afirmações antes de colocá-las no site;
- impedir que uma alegação de fornecedor ou concorrente seja tratada como fato independente;
- distinguir decisão interna, experiência própria, orientação oficial e interpretação do projeto;
- dar contexto confiável ao Antigravity e ao NotebookLM;
- identificar informações que mudam com frequência e precisam ser consultadas novamente;
- evitar promessas de posicionamento, desempenho ou resultado que nenhuma fonte garante;
- manter um histórico de pesquisa sem transformar referências externas em instruções automáticas.

Este arquivo **não substitui** os documentos que definem o produto. Ele sustenta ou contextualiza decisões, mas não cria preços, ofertas ou páginas por conta própria.

## 2. Ordem de autoridade

Quando houver divergência, utilizar esta ordem:

1. decisão explícita mais recente de Willian Souza;
2. [`DECISOES.md`](DECISOES.md), para saber o que está confirmado, pendente ou substituído;
3. documento especializado atual do projeto;
4. documentação oficial vigente da plataforma, lei, órgão regulador ou padrão técnico;
5. evidência primária do próprio negócio, como contratos, portfólio, relatórios e registros;
6. referência secundária confiável;
7. observação de concorrente ou resultado de busca, apenas como insumo de análise.

Uma fonte externa não pode alterar silenciosamente uma decisão comercial. Se uma mudança de plataforma, norma ou tecnologia tornar uma decisão inviável, registrar o conflito e pedir nova decisão antes de implementar a parte afetada.

## 3. Tipos de informação

| Tipo | Significado | Pode ser publicado como fato? |
|---|---|---|
| **Decisão interna** | Regra aprovada por Willian para o próprio negócio | Sim, enquanto estiver ativa em `DECISOES.md` |
| **Evidência própria** | Informação comprovável por registros, projetos, contas ou materiais da Anúncio e Site | Sim, dentro do que os registros realmente demonstram |
| **Fonte oficial externa** | Documentação do responsável pela plataforma, norma, lei ou padrão | Sim, com interpretação cuidadosa e data de consulta |
| **Alegação comercial externa** | O que um fornecedor ou concorrente afirma sobre si, seus preços ou resultados | Somente atribuindo a alegação ao responsável |
| **Inferência** | Conclusão obtida pela combinação de sinais, sem prova direta | Somente identificada como análise ou hipótese |
| **Proposta** | Caminho sugerido para o projeto, ainda sem aprovação | Não como decisão já tomada |
| **Não verificado** | Informação que ainda carece de acesso, confirmação ou evidência | Não |

## 4. Fontes internas do projeto

Estes são os documentos que devem ser carregados no NotebookLM e consultados pela IDE. O arquivo de decisões funciona como índice do estado atual.

| Fonte | Assunto principal | Regra de uso |
|---|---|---|
| [`../README.md`](../README.md) | mapa da documentação, ordem de leitura e regras de uso | porta de entrada; não substitui os documentos especializados |
| [`../PRODUCT.md`](../PRODUCT.md) | visão, posicionamento, público, objetivos e oferta em alto nível | usar a versão atual; detalhes ficam nos documentos especializados |
| [`DECISOES.md`](DECISOES.md) | decisões ativas, substituídas e pendentes | consultar antes de produzir texto ou código |
| [`OFERTA.md`](OFERTA.md) | preços, escopo, pagamento, hospedagem e serviços | fonte principal para proposta e páginas comerciais |
| [`ARQUITETURA.md`](ARQUITETURA.md) | páginas, URLs, navegação e jornadas | fonte principal para estrutura do site |
| [`DESIGN.md`](DESIGN.md) | cores, tipografia, ritmo, componentes e movimento | fonte principal para decisões visuais |
| [`CONTEUDO-SEO.md`](CONTEUDO-SEO.md) | pauta, autoria, SEO, GEO, produção e revisão editorial | fonte principal para páginas e artigos |
| [`IMPLEMENTACAO.md`](IMPLEMENTACAO.md) | stack, publicação, conteúdo, medição, segurança e QA | fonte principal para desenvolvimento |
| [`ROADMAP.md`](ROADMAP.md) | sequência, dependências e critérios de conclusão | orienta a execução, sem substituir especificações |
| [`FONTES.md`](FONTES.md) | evidências, referências, limites e frequência de verificação | sustenta fatos externos; não cria decisões comerciais |
| [`NOTEBOOKLM.md`](NOTEBOOKLM.md) | organização e uso da base de conhecimento | aplicar ao montar e atualizar o notebook |

### 4.1 Materiais auxiliares de pesquisa

Os arquivos abaixo são preservados para rastreabilidade, mas não fazem parte das onze fontes Markdown oficiais do notebook principal:

| Material | O que registra | Limite obrigatório |
|---|---|---|
| [`pesquisa/tabela_prioridade_nichos.json`](pesquisa/tabela_prioridade_nichos.json) | classificação recebida para 121 nichos | prioridades e estimativas não possuem método ou fonte documentados |
| [`pesquisa/esqueletos_artigos_nichos.json`](pesquisa/esqueletos_artigos_nichos.json) | sugestões de estrutura para 121 nichos | não usar como molde repetitivo nem plano de publicação |
| [`referencias/autocomplete-landing-pages-profissoes.png`](referencias/autocomplete-landing-pages-profissoes.png) | sugestões de autocomplete observadas para landing pages | não comprova volume, intenção comercial ou prioridade |

## 5. Pesquisa Google, SEO e recursos de IA

### 5.1 Fontes oficiais

| ID | Fonte | O que sustenta no projeto | Limite ou cuidado |
|---|---|---|---|
| SEO-01 | [Google — Guia de otimização para recursos de IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | SEO continua relevante para experiências generativas; conteúdo original, experiência real, rastreabilidade, HTML semântico e boa experiência continuam fundamentais | não garante citação, recomendação nem posição |
| SEO-02 | [Google — Recursos de IA e seu site](https://developers.google.com/search/docs/appearance/ai-features) | não existe requisito técnico especial além das práticas normais de SEO; a página precisa estar indexada e elegível para exibição com snippet | elegibilidade não significa aparição garantida |
| SEO-03 | [Google — Conteúdo gerado por IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) | IA pode ajudar na produção, desde que o resultado seja útil, preciso, relevante e voltado a pessoas | publicar conteúdo em escala para manipular ranking pode violar políticas |
| SEO-04 | [Google — Conteúdo útil, confiável e feito para pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | sustenta revisão humana, foco no leitor, experiência própria, autoria clara e propósito definido | checklist não substitui qualidade real nem conhecimento do assunto |
| SEO-05 | [Google — Políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies) | impede páginas em massa sem valor, abuso de conteúdo escalado, páginas enganosas e manipulação | deve ser revisada antes de ampliar muito o volume editorial |
| SEO-06 | [Google — Trabalhar com prestadores de SEO](https://developers.google.com/search/docs/fundamentals/third-party-seo) | orienta cautela com promessas, ferramentas e conselhos de terceiros | não valida empresas específicas nem o serviço da Anúncio e Site |
| SEO-07 | [Google — Relatório de performance da IA generativa](https://support.google.com/webmasters/answer/16984139?hl=pt-BR) | permite acompanhar impressões do site em Visões Gerais Criadas por IA e Modo IA, quando houver dados suficientes | mede recursos generativos da Pesquisa Google, não todas as IAs; não mostra necessariamente consultas individuais |
| SEO-08 | [Google Ads — Planejador de Palavras-chave](https://support.google.com/google-ads/answer/7337243?hl=pt-BR) | oferece ideias, estimativas de pesquisas mensais e custos para validar pautas e termos | estimativas não são garantia de tráfego; autocomplete não substitui essa pesquisa |
| SEO-09 | [Search Console — Relatório de desempenho](https://support.google.com/webmasters/answer/7576553?hl=pt-BR) | mede consultas, páginas, impressões e cliques na Pesquisa Google | dados podem ser agregados ou limitados e não abrangem outros mecanismos |

### 5.2 OpenAI e ChatGPT Search

| ID | Fonte | O que sustenta no projeto | Limite ou cuidado |
|---|---|---|---|
| AI-01 | [OpenAI — Visão geral dos crawlers](https://developers.openai.com/api/docs/bots) | diferencia agentes como `OAI-SearchBot` e `GPTBot` e permite definir acesso por `robots.txt` conforme o objetivo | nomes, funções e políticas podem mudar; verificar antes do lançamento |
| AI-02 | [OpenAI — ChatGPT Search e acesso ao site](https://help.openai.com/en/articles/9237897-chatgpt-search) | orienta a não bloquear o crawler de busca quando se deseja elegibilidade no ChatGPT Search | permitir rastreamento não garante que o site será citado ou recomendado |

### 5.3 Interpretação aprovada para o projeto

Com base nessas fontes:

- **GEO não será tratado como truque separado de SEO.** O projeto usará conteúdo claro, original, rastreável, bem ligado e sustentado por experiência real.
- Não será vendido ou publicado que existe uma marcação capaz de “fazer a IA indicar” uma empresa.
- Não existe necessidade confirmada de reescrever textos em fragmentos artificiais, instalar um schema “para IA” ou publicar `llms.txt` para aparecer nos recursos de IA do Google.
- `llms.txt` poderá ser reavaliado no futuro, mas não é requisito de lançamento nem substitui `robots.txt`, sitemap, links internos e indexação.
- Conteúdo escrito com auxílio de IA precisa de briefing individual, fonte adequada, experiência própria, revisão e aprovação de Willian.
- Volume de publicação não prevalece sobre utilidade, precisão e diferenciação.
- A expressão “otimizado para ser encontrado por mecanismos de busca e recursos de IA” pode descrever o trabalho técnico. “Será indicado pelas IAs” não pode ser usada como promessa.

## 6. Rastreamento, indexação e estrutura técnica de SEO

| ID | Fonte oficial | Aplicação no projeto | Limite ou cuidado |
|---|---|---|---|
| IDX-01 | [Google — Visão geral de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) | gerar sitemap com URLs públicas, canônicas e indexáveis; informar sua localização no `robots.txt` e no Search Console | sitemap ajuda descoberta; não garante indexação nem ranking |
| IDX-02 | [Google — Introdução ao robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) | controlar rastreamento durante a construção e liberar corretamente no lançamento | `robots.txt` não é mecanismo adequado para manter informação sensível em segredo |
| IDX-03 | [Google — Consolidar URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) | usar URL canônica absoluta, links internos coerentes e redirecionamentos permanentes quando necessário | sitemap é sinal mais fraco que redirecionamento e `rel="canonical"` |
| IDX-04 | [Google — Mudança de site com alteração de URLs](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | inventariar URLs existentes, mapear substituições e testar redirecionamentos antes da troca do site | zerar o conteúdo visual não autoriza apagar o histórico de URLs sem verificação |
| IDX-05 | [Google — Primeiros passos no Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start) | verificar propriedade, acompanhar cobertura, desempenho e problemas após a publicação | Search Console não substitui testes técnicos locais |
| IDX-06 | [Google — Dados estruturados de Article](https://developers.google.com/search/docs/appearance/structured-data/article) | marcar artigos, autoria, datas e imagens de forma coerente com o conteúdo visível | dados estruturados não garantem resultado enriquecido |
| IDX-07 | [Google — Dados estruturados de Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) | identificar a organização com dados públicos reais e consistentes | não inventar telefone, endereço, logo, perfis ou credenciais |
| IDX-08 | [Google — Dados estruturados de LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business) | poderá ser usado apenas se a representação local e os campos exigidos corresponderem à operação real | atendimento regional não autoriza endereços falsos nem várias páginas locais artificiais |
| IDX-09 | [Google — Dados estruturados de breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) | descrever hierarquia em artigos, profissão e estudos de caso | a marcação deve acompanhar navegação e relações reais |
| IDX-10 | [Google — Datas de publicação e atualização](https://developers.google.com/search/docs/appearance/publication-dates) | usar a primeira data pública real e atualizar a data somente após mudança relevante | proíbe, para este projeto, datas retroativas fictícias ou atualização sem alteração material |

### 6.1 O que um sitemap revela — e o que não revela

Consultar `sitemap.xml`, um índice de sitemaps ou um mapa HTML pode ajudar a identificar:

- URLs que o site escolheu declarar;
- agrupamentos de conteúdo;
- páginas por serviço, profissão ou localidade;
- datas de modificação, quando fornecidas;
- escala aproximada da arquitetura publicada.

Isso **não revela sozinho**:

- todas as páginas existentes;
- a estratégia completa de links internos;
- quais URLs estão indexadas;
- posições, tráfego, conversões ou autoridade;
- qualidade do conteúdo;
- backlinks;
- presença real em respostas de IA;
- motivo pelo qual uma página aparece ou não aparece.

O nome `/sitemaps.xml` não é obrigatório nem universal. Muitos sites usam `/sitemap.xml`, um índice em outro caminho ou apenas declaram o endereço no `robots.txt`. Uma auditoria não deve concluir que não há sitemap depois de testar apenas uma URL.

## 7. Desempenho, experiência e acessibilidade

| ID | Fonte oficial | Aplicação no projeto | Limite ou cuidado |
|---|---|---|---|
| PERF-01 | [Google PageSpeed Insights](https://pagespeed.web.dev/) | ferramenta escolhida para verificar laboratório e, quando disponível, dados reais de usuários | resultados variam com ambiente, mídia, scripts e dados disponíveis |
| PERF-02 | [Chrome — Como a pontuação do Lighthouse é calculada](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) | sustenta que 90 a 100 é classificado como bom e que a pontuação pode oscilar | a meta acima de 90 é objetivo técnico, não garantia permanente nem sinônimo de conversão |
| PERF-03 | [web.dev — Web Vitals](https://web.dev/articles/vitals) | referências atuais: LCP de até 2,5 s, INP de até 200 ms e CLS de até 0,1 no percentil 75 | dados de campo e laboratório não são equivalentes; valores podem mudar em versões futuras |
| PERF-04 | [Google Search — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) | orienta melhoria de experiência e monitoramento no Search Console | bom desempenho não garante posição e não substitui relevância |
| A11Y-01 | [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) | base para contraste, teclado, foco visível, texto alternativo, formulários e movimento reduzido | atender verificações automáticas não comprova conformidade integral; revisão humana continua necessária |

### 7.1 Regra da promessa de PageSpeed

O texto comercial poderá informar uma **meta de desempenho acima de 90**, acompanhada da condição de que fotos, vídeos, códigos externos, dispositivo, rede e integrações afetam o resultado. Não publicar:

- “nota 90 garantida para sempre”;
- “site rápido em qualquer condição”;
- “nota 100 obrigatória”;
- equivalência entre uma nota de laboratório e geração de vendas.

## 8. Analytics, tags, conversões e privacidade

| ID | Fonte oficial | Aplicação no projeto | Limite ou cuidado |
|---|---|---|---|
| MED-01 | [Google Analytics — Eventos do GA4](https://developers.google.com/analytics/devguides/collection/ga4/events) | planejar eventos como clique no WhatsApp, envio de formulário e contato | eventos devem ser testados; instalação não significa que dados estão corretos |
| MED-02 | [Google Tag Platform — Consent Mode](https://developers.google.com/tag-platform/security/guides/consent) | avaliar comportamento das tags conforme as escolhas de consentimento | implementação técnica não substitui análise jurídica da finalidade e base legal |
| ADS-01 | [Google Ads — Medição de conversões](https://support.google.com/google-ads/answer/1722022?hl=pt-BR) | definir contatos valiosos e acompanhar desempenho de campanhas | conversão configurada incorretamente prejudica relatórios e otimização |
| ADS-02 | [Google Ads — Conversões em várias contas](https://support.google.com/google-ads/answer/3030657?hl=pt-BR) | referência para administração por MCC sem misturar campanhas de clientes na mesma conta individual | a decisão da Anúncio e Site continua sendo uma conta de anúncios separada por cliente |
| META-01 | [Meta for Developers — Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/) | referência oficial a conferir quando Meta Pixel ou Conversions API entrar no escopo | o acesso de verificação retornou bloqueio temporário; revisar a documentação dentro da conta antes de implementar |
| PRIV-01 | [Planalto — Lei nº 13.709/2018, LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) | base legal brasileira para tratamento de dados pessoais em formulários, analytics, publicidade e atendimento | este documento não oferece parecer jurídico; dúvidas materiais exigem profissional qualificado |
| PRIV-02 | [ANPD — Guia de Cookies e Proteção de Dados Pessoais](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf) | orienta inventário, finalidade, transparência, política e escolhas relacionadas a cookies | guia deve ser lido junto à LGPD e à configuração real das ferramentas |

### 8.1 Limites da instalação de códigos nos projetos de clientes

A Anúncio e Site poderá inserir os identificadores ou códigos fornecidos pelo cliente ou por quem administra as plataformas. Isso não significa automaticamente:

- assumir a operação de todas as contas;
- criar uma estratégia de consentimento sem levantamento das ferramentas;
- garantir que um código fornecido por terceiro esteja correto;
- tratar a instalação como consultoria jurídica;
- incluir configurações fora do escopo contratado.

## 9. Google Ads e Meta Ads

As fontes abaixo apoiam a especificação operacional, mas **não comprovam resultados futuros**.

| Tema | Evidência e consequência |
|---|---|
| Pesquisa de palavras-chave | O [Planejador de Palavras-chave](https://support.google.com/google-ads/answer/7337243?hl=pt-BR) oferece estimativas e ideias. As listas iniciais do projeto devem ser validadas nele antes de definir prioridade por volume ou custo. |
| Conversões | A [documentação de medição](https://support.google.com/google-ads/answer/1722022?hl=pt-BR) sustenta a configuração de ações relevantes, como contato e envio de lead. Não otimizar apenas para cliques quando o objetivo é contato. |
| Estrutura por cliente | Cada cliente terá sua própria conta de anúncios. Uma conta administradora pode organizar o acesso, mas não muda a separação operacional definida por Willian. |
| Verba de mídia | O orçamento pago ao Google ou à Meta pertence ao cliente e não está incluído na gestão; esta é uma decisão comercial interna, não uma regra das plataformas. |
| Meta Ads | Preço, escopo, taxa de implementação e tecnologia de medição continuam sob análise de cada projeto, conforme `OFERTA.md`. |
| Resultado | Nenhuma documentação oficial autoriza prometer quantidade de leads, vendas, custo por contato ou retorno determinado antes dos dados reais. |

As políticas publicitárias e os requisitos das contas mudam com frequência. Antes de criar ou assumir uma campanha, revisar dentro da plataforma:

- políticas aplicáveis ao setor;
- identidade e verificação do anunciante;
- métodos de pagamento;
- acesso e propriedade dos ativos;
- regras de segmentação;
- eventos e consentimento;
- restrições específicas de serviços financeiros, saúde, habitação, emprego, política ou outros temas regulados.

## 10. Stack, CMS, GitHub, Vercel e domínio

### 10.1 Astro e conteúdo

| ID | Fonte oficial | Aplicação no projeto | Revisar quando |
|---|---|---|---|
| TEC-01 | [Astro — Por que Astro](https://docs.astro.build/en/concepts/why-astro/) | sustenta a escolha de uma arquitetura orientada a conteúdo, com HTML inicial e JavaScript apenas onde necessário | antes de iniciar ou fazer grande atualização |
| TEC-02 | [Astro — Content Collections](https://docs.astro.build/en/guides/content-collections/) | base para artigos e estudos de caso com schema e validação | ao definir schemas e atualizar Astro |
| TEC-03 | [Astro — Integração de sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | geração automatizada do sitemap das rotas públicas | ao mudar rotas, exclusões ou configuração canônica |
| TEC-04 | [Astro — Integração com Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) | referência caso o projeto precise do adaptador Vercel | ao escolher modo estático, SSR ou funções |
| TEC-05 | [Astro — Keystatic](https://docs.astro.build/en/guides/cms/keystatic/) | referência complementar para integração editorial | antes da implementação do painel |
| TEC-06 | [Keystatic — Instalação com Astro](https://keystatic.com/docs/installation-astro) | configuração inicial do CMS no projeto | antes da instalação e em upgrades |
| TEC-07 | [Keystatic — GitHub mode](https://keystatic.com/docs/github-mode) | conteúdo versionado no repositório e fluxo ligado ao GitHub | ao definir ambiente de produção |
| TEC-08 | [Keystatic Cloud](https://keystatic.com/docs/cloud) | serviço escolhido inicialmente para autenticação e edição | antes de contratar, publicar ou depender do serviço |
| TEC-09 | [Markdoc — Visão geral](https://markdoc.dev/docs/overview) | referência para conteúdo estruturado quando necessário | somente se Markdoc permanecer na solução final |
| TEC-10 | [pnpm — Campo packageManager](https://pnpm.io/package_json) | fixar gerenciador e versão do projeto | na criação do repositório |
| TEC-11 | [Node.js — Ciclo de versões](https://nodejs.org/en/about/previous-releases) | escolher uma versão LTS compatível e registrá-la | na fundação e em atualizações planejadas |

### 10.2 GitHub, Vercel e DNS

| ID | Fonte oficial | Aplicação no projeto | Limite ou cuidado |
|---|---|---|---|
| DEP-01 | [Vercel — Integração com GitHub](https://vercel.com/docs/git/vercel-for-github) | deploy por commit e previews ligados ao repositório | confirmar permissões e branch de produção |
| DEP-02 | [Vercel — Ambientes de deploy](https://vercel.com/docs/deployments/environments) | separar produção, preview e desenvolvimento | o domínio real em construção ainda deve permanecer protegido de indexação |
| DEP-03 | [Vercel — Configurar domínio personalizado](https://vercel.com/docs/domains/set-up-custom-domain) | orientar os registros DNS do domínio comprado na HostGator | valores exatos devem vir do projeto Vercel no momento da configuração |
| DEP-04 | [Vercel — Domínios e redirecionamentos](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting) | estabelecer um host canônico e redirecionar a variante | testar `www`, sem `www`, HTTPS e caminhos antigos |
| DEP-05 | [Vercel — Plano Hobby](https://vercel.com/docs/plans/hobby) | confirma que Hobby é apresentado para projetos pessoais e uso não comercial | **não assumir que atende ao site comercial da Anúncio e Site** |
| DEP-06 | [Vercel — Preços](https://vercel.com/pricing) | comparar opção comercial vigente | consultar novamente antes de decidir ou contratar |
| DEP-07 | [Vercel — Termos](https://vercel.com/legal/terms) | confirmar regras contratuais da hospedagem | termos podem mudar e prevalecem sobre resumos deste arquivo |
| DEP-08 | [GitHub — Sobre repositórios](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) | referência geral para repositório privado, histórico e colaboração | conferir limites e permissões do plano usado |

### 10.3 Conclusão obrigatória sobre a hospedagem

O fato de um site funcionar tecnicamente no plano Hobby não resolve sua adequação comercial. Antes do lançamento público com finalidade de venda, Willian deve:

1. manter a Vercel em um plano compatível com uso comercial; ou
2. escolher outra hospedagem compatível; e
3. atualizar `DECISOES.md`, `IMPLEMENTACAO.md`, `OFERTA.md` e este registro se a decisão alterar custos ou operação.

## 11. Cobrança recorrente e Asaas

O Asaas é uma **opção estudada**, não uma escolha irrevogável. A oferta comercial define a mensalidade, mas o meio de cobrança ainda precisa ser confirmado.

| ID | Fonte oficial | Evidência verificada em 11/09/2026 | Consequência |
|---|---|---|---|
| COB-01 | [Asaas — FAQ de assinaturas](https://docs.asaas.com/docs/faq-assinaturas) | assinaturas podem usar boleto, Pix ou cartão; novas cobranças são geradas conforme a recorrência | permite automatizar a mensalidade de hospedagem |
| COB-02 | [Asaas — Preços e taxas](https://www.asaas.com/precos-e-taxas) | a página informa cobrança de taxa quando o pagamento é recebido, e não apenas pela emissão não paga | atraso do cliente, por si só, não gera taxa de recebimento segundo a página consultada |
| COB-03 | [Asaas — Preços e taxas](https://www.asaas.com/precos-e-taxas) | a página exibe taxas padrão e condições promocionais, além de custos opcionais de notificação | não copiar números para contratos ou projeções sem consultar a conta e a página no dia da decisão |

### 11.1 O que ainda precisa ser calculado

Antes de escolher a ferramenta, comparar pelo menos:

- taxa líquida por boleto, Pix e cartão após a promoção;
- custo de notificações por e-mail, SMS ou WhatsApp;
- prazo de recebimento;
- custo de saque ou transferência, se aplicável;
- tratamento de estorno e chargeback;
- tentativas automáticas de cartão;
- cancelamento e pausa da assinatura;
- conciliação e exportação;
- emissão de nota fiscal, se usada;
- experiência do cliente;
- impacto da taxa sobre uma mensalidade de R$ 19,90.

Os valores publicados por uma intermediadora podem mudar. A proposta ao cliente não deve prometer um meio específico até a decisão estar registrada e testada.

## 12. NotebookLM

| ID | Fonte oficial | Aplicação no projeto | Limite ou cuidado |
|---|---|---|---|
| NB-01 | [Google — Adicionar ou descobrir fontes no NotebookLM](https://support.google.com/gemininotebook/answer/16215270?co=GENIE.Platform%3DDesktop&hl=pt-BR) | confirma suporte a Markdown, Docs, PDF, URLs e outros formatos; fontes do Drive podem ser sincronizadas | arquivos enviados diretamente e páginas importadas têm comportamentos e limitações diferentes |
| NB-02 | [Google — Perguntas frequentes do NotebookLM](https://support.google.com/gemininotebook/answer/16269187?hl=pt-BR) | referência para funcionamento e limites atuais do produto | limites, nome do produto e recursos podem mudar por plano e região |

### 12.1 Regra de uso nesta base

- Preferir fontes internas em Markdown com nomes estáveis.
- Sempre carregar `DECISOES.md` junto dos documentos especializados.
- Quando um arquivo mudar, sincronizar ou substituir a fonte correspondente antes de pedir respostas sobre o estado atual.
- Não esperar que comentários, notas de rodapé, imagens ou conteúdo incorporado a uma URL sejam extraídos integralmente.
- Ao consultar uma decisão, pedir que o NotebookLM identifique o arquivo e a seção usados.
- Não usar uma resposta do NotebookLM como nova decisão de negócio.
- Não importar materiais de outros projetos para o mesmo notebook da Anúncio e Site.

## 13. Método LIFT e otimização de conversão

| ID | Fonte | O que sustenta | Limite |
|---|---|---|---|
| CRO-01 | [Conversion — The LIFT Model](https://www.conversion.com/framework/the-lift-model/) | Chris Goward apresentou o modelo em 2009; ele avalia proposta de valor, relevância, clareza, urgência, ansiedade e distração para gerar hipóteses de teste | é um framework de análise, não certificação nem garantia de conversão |
| CRO-02 | [UX Magazine — artigo de Chris Goward](https://uxmag.com/articles/landing-page-optimization-for-more-profitable-experiences) | descreve o uso do LIFT para analisar experiências, formular hipóteses e testá-las | é uma publicação de 2012; exemplos de resultado pertencem ao caso relatado e não podem ser transferidos para clientes |

### 13.1 Forma correta de apresentar o método

Texto permitido:

> A página é planejada com princípios do Modelo LIFT, considerando proposta de valor, relevância, clareza, urgência, ansiedade e distrações.

Evitar:

- “método que garante conversão”;
- “o framework mais poderoso” como fato independente;
- percentuais de casos externos como promessa;
- dizer que apenas aplicar o modelo comprova uma melhora;
- usar “testado” quando não houve teste controlado com tráfego real.

O LIFT ajuda a estruturar hipóteses. A comprovação de que uma variação converte melhor exige medição e teste adequados.

## 14. Profissões reguladas

| ID | Fonte oficial | Aplicação | Limite ou cuidado |
|---|---|---|---|
| REG-01 | [OAB — Comitê Regulador do Marketing Jurídico](https://marketingjuridico.oab.org.br/) | ponto inicial para regras de publicidade da advocacia e Provimento nº 205/2021 | revisar o provimento e orientações atuais antes de produzir página ou anúncio para advogado |
| REG-02 | [CFM — Publicidade Médica](https://publicidademedica.cfm.org.br/) | acesso ao manual, à Resolução CFM nº 2.336/2023 e às aplicações práticas | revisar identificação, imagens, depoimentos, especialidade, preços e demais regras de cada peça |

Saúde e advocacia não devem receber páginas geradas apenas pela troca do nome da profissão. Esses setores exigem:

- pesquisa da regra profissional vigente;
- validação das informações e registros do cliente;
- texto específico;
- aprovação expressa do cliente;
- revisão das políticas da plataforma de anúncios;
- cautela redobrada com garantias, depoimentos, resultados, segmentação e dados pessoais.

## 15. Referências de mercado e concorrentes

Estas páginas servem para estudar arquitetura, oferta e linguagem. Elas não comprovam qualidade, ranking, reputação, resultado ou adequação das promessas.

### 15.1 BQHost / Radoox

**Página consultada:** [Criação de site para montador de móveis e marcenarias](https://bqhost.com.br/sitesradoox/montte-site-para-montador-de-moveis-marcenarias/)  
**Data da consulta:** 11 de setembro de 2026  
**Tipo:** página comercial do próprio fornecedor

Fatos observáveis na página:

- existe uma página específica para o segmento de montadores de móveis e marcenarias;
- há oferta, WhatsApp, descrição de benefícios, prova social, perguntas frequentes e links para outros modelos;
- a página declara preço inicial de R$ 970, renovação anual de R$ 444, entrega aproximada e números de experiência;
- a página afirma preparar sites para aparecer em IAs e no Google;
- o catálogo declara 119 modelos e mostra várias páginas por segmento.

Também foi consultado o [mapa HTML da BQHost](https://bqhost.com.br/mapa/), que expõe categorias de serviços, páginas por público, blog, portfólio, suporte e outras áreas.

Limitações:

- preços, prazos, quantidade de projetos e resultados são alegações da própria empresa;
- não foram auditados contratos, entrega, suporte, desempenho, indexação ou satisfação;
- não foi demonstrado que a arquitetura causa posicionamento ou recomendação por IA;
- a presença de muitas páginas não comprova que todas tenham conteúdo único ou desempenho orgânico;
- o mapa HTML não substitui uma auditoria de sitemap XML, indexação, links internos e backlinks.

### 15.2 ADS BH

**Página consultada:** [Sites e landing pages da ADS BH](https://adsbh.com.br/sites-landing-pages)  
**Data da consulta:** 11 de setembro de 2026  
**Tipo:** página comercial do próprio fornecedor

A extração automatizada da página retornou apenas um elemento incorporado e não forneceu conteúdo suficiente para confirmar oferta, estrutura ou preço atual. Tentativas de abrir caminhos presumidos de `robots.txt` e sitemap também não produziram evidência utilizável nesta consulta.

Consequências:

- não registrar o preço anteriormente visto como valor atual confirmado;
- não afirmar que a empresa bloqueia robôs ou não possui sitemap;
- uma auditoria futura deve usar acesso normal pelo navegador, código-fonte, ferramentas de indexação e caminhos declarados pelo próprio site;
- o visual escuro com detalhes laranja pode ser uma referência mencionada por Willian, mas a Anúncio e Site precisa de sistema visual próprio, sem cópia de identidade.

### 15.3 Regras para analisar concorrentes

Ao registrar uma nova referência, separar:

1. o que está visível na página;
2. o que a empresa afirma sobre si;
3. o que ferramentas externas medem;
4. o que foi inferido;
5. o que pode inspirar o projeto sem ser copiado;
6. o que ainda não foi verificado.

Não copiar texto, layout, imagens, marca, depoimentos, código ou combinação distintiva de elementos. Referência de mercado serve para encontrar lacunas e padrões, não para reproduzir um concorrente.

## 16. Registro de afirmações da Anúncio e Site

| Afirmação | Natureza | Evidência necessária | Estado de publicação |
|---|---|---|---|
| “Dezenas de sites e landing pages” | experiência própria | inventário privado de projetos entregues por Willian | **aprovada**, sem publicar a contagem exata |
| “Criador de sites e gestor de tráfego pago há quatro anos” | biografia própria | histórico profissional de Willian | **aprovada** |
| Base em Novo Hamburgo, RS | dado do negócio | confirmação de Willian e dados públicos coerentes | **aprovada** |
| Atendimento remoto em todo o Brasil | regra operacional | capacidade real de atender remotamente | **aprovada** |
| Possibilidade de reunião presencial na região | regra operacional condicionada | disponibilidade combinada caso a caso | **aprovada com condição** |
| Atendimento direto com Willian | estrutura operacional | Willian executa atendimento e serviço, sem terceirização | **aprovada** |
| Landing page a partir de R$ 399 | decisão comercial | `OFERTA.md` e `DECISOES.md` | **aprovada** |
| Mensalidade de R$ 19,90 após os primeiros 30 dias | decisão comercial | `OFERTA.md`, regras de cobrança e contrato | **aprovada**, meio de cobrança pendente |
| Google Ads a partir de R$ 390/mês para prestadores de serviços | decisão comercial | `OFERTA.md` e `DECISOES.md` | **aprovada** |
| Meta Ads sob análise | decisão comercial | orçamento e escopo de cada projeto | **aprovada** |
| Avaliações do Google na página | material público selecionado manualmente | perfil correto, texto fiel e permissão/uso adequado | **permitida**, sem prometer sincronização automática |
| PageSpeed acima de 90 | meta técnica | teste da página final e condições informadas | **somente como meta condicionada** |
| “Preparado para mecanismos de busca e recursos de IA” | descrição de implementação | requisitos técnicos e editoriais executados | **permitida com limites** |
| “A IA vai indicar o seu negócio” | promessa de resultado externo | não existe comprovação ou controle suficiente | **proibida** |
| “Vai gerar clientes” | promessa de resultado | depende de oferta, tráfego, mercado, atendimento e medição | **proibida como garantia** |
| Estudos de caso nomeados | prova própria | autorização, escopo real, imagens e resultados verificáveis | **pendente de seleção e autorização** |
| Depoimentos | prova própria ou pública | origem identificável, reprodução fiel e autorização quando necessária | **pendente de material válido** |

## 17. Afirmações que as fontes não comprovam

Até a data deste documento, não há evidência suficiente para afirmar que:

- a Anúncio e Site já ocupa posições relevantes para termos competitivos;
- o domínio já recebe tráfego orgânico significativo;
- algum mecanismo de IA já recomenda a marca;
- qualquer concorrente é “melhor” ou “pior” em SEO ou GEO;
- o simples uso de sitemap faz uma página aparecer;
- schema melhora ranking por si só;
- publicar dezenas de artigos por semana acelera resultados;
- conteúdo escrito por IA é automaticamente ruim ou automaticamente bom;
- uma pontuação alta no PageSpeed produz contatos;
- o Modelo LIFT garante aumento de conversão;
- uma campanha de anúncios terá custo por lead ou retorno previsível antes dos dados;
- preço baixo, sozinho, é vantagem suficiente para fechar vendas.

Se qualquer uma dessas afirmações for necessária no futuro, será preciso definir a métrica, coletar dados e registrar a evidência correspondente.

## 18. Regras editoriais para fontes e citações

### 18.1 Antes de escrever

1. Definir a pergunta que o conteúdo responderá.
2. Separar o que vem de experiência própria do que exige pesquisa.
3. Priorizar legislação, órgão regulador, documentação oficial, pesquisa original ou autor responsável pelo conceito.
4. Consultar a data, versão e contexto da fonte.
5. Procurar conflitos ou atualizações quando o tema puder ter mudado.

### 18.2 Durante a redação

- Responder a pergunta principal já no primeiro parágrafo.
- Usar palavras próprias e não remontar artigos de terceiros.
- Vincular a fonte perto da afirmação que ela sustenta.
- Atribuir opiniões, números e alegações ao responsável.
- Não criar citação, estudo, depoimento, cliente, estatística ou resultado.
- Não transformar uma correlação ou um exemplo em regra geral.
- Não usar autocomplete como prova de volume.
- Não usar uma página concorrente como fonte técnica sobre Google, OpenAI, legislação ou acessibilidade.
- Explicar limitações quando o leitor poderia interpretar a frase como garantia.

### 18.3 Antes de publicar

- Abrir todos os links citados.
- Confirmar que o trecho relevante ainda existe.
- Conferir nomes, datas, valores e versões.
- Remover fontes que não sustentam diretamente o texto.
- Verificar se a fonte é primária quando uma primária está disponível.
- Conferir regras profissionais e políticas de anúncios em temas regulados.
- Registrar data real de publicação.
- Guardar no briefing as fontes usadas e as observações de Willian.

## 19. Ficha para novas evidências

Usar este modelo no briefing de artigo, auditoria, estudo de caso ou decisão técnica:

```md
### [ID] Título da fonte

- URL:
- Responsável/publicador:
- Tipo: oficial | evidência própria | pesquisa | referência secundária | concorrente
- Data da publicação ou versão:
- Data da consulta:
- Pergunta investigada:
- Afirmação sustentada:
- Evidência observada:
- Limitações:
- Documento ou página afetada:
- Precisa de nova verificação em:
- Verificado por:
```

Para evidências próprias, substituir a URL pela localização segura do registro. Não colocar dados pessoais, contratos ou credenciais dentro do repositório público.

## 20. Frequência de revisão

| Grupo | Quando revisar |
|---|---|
| Preços, planos e taxas de Vercel, Asaas ou outro fornecedor | antes de contratar, alterar preço ou publicar condição comercial |
| Políticas do Google Ads e Meta Ads | antes de iniciar cada setor regulado e sempre que a plataforma sinalizar mudança |
| Crawlers e regras de acesso de Google e OpenAI | antes do lançamento e a cada revisão trimestral de SEO/GEO |
| Documentação de Astro, Keystatic, Node e integrações | antes da instalação e antes de atualização relevante |
| LGPD, orientações da ANPD, OAB e CFM | antes de publicar projeto afetado e quando houver atualização normativa |
| Concorrentes e preços de mercado | apenas quando houver decisão comercial ou análise estratégica; registrar nova data |
| Afirmações de experiência e portfólio | ao adicionar caso, depoimento ou número público |
| PageSpeed e Core Web Vitals | em QA, depois do lançamento e após mudanças relevantes de mídia ou scripts |
| Search Console e relatório de IA generativa | após indexação e nos ciclos de análise definidos no roadmap |
| Este arquivo | quando uma fonte mudar, uma decisão depender de nova evidência ou uma referência for adicionada |

## 21. Conclusões aplicáveis ao lançamento

1. A estratégia de visibilidade em IA deve começar por SEO técnico correto, conteúdo útil, experiência própria, autoridade verificável e rastreamento permitido.
2. Não existe fundamento para prometer recomendação por Google, ChatGPT, Gemini, Copilot ou outra IA.
3. Sitemap é necessário como apoio de descoberta, mas não é auditoria de estratégia nem garantia de indexação.
4. Páginas por profissão só devem existir quando houver conteúdo, exemplos, dúvidas e proposta realmente específicos.
5. Produção com IA é aceitável quando cada texto tem briefing próprio, pesquisa adequada, contribuição de Willian e revisão responsável.
6. Datas retroativas fictícias não serão usadas.
7. A meta de PageSpeed acima de 90 deve permanecer condicionada às características da página.
8. O relatório de IA generativa do Search Console deve entrar na medição quando a propriedade tiver dados suficientes.
9. O plano Hobby da Vercel não deve ser presumido como adequado ao lançamento comercial.
10. O Asaas continua sendo alternativa de cobrança; taxas e automações devem ser recalculadas antes da escolha.
11. O Modelo LIFT orienta análise e hipóteses, mas não garante conversão.
12. Referências de concorrentes ajudam a entender o mercado, mas não comprovam SEO, GEO, qualidade ou resultado.

## 22. Instrução curta para a IDE e para IAs

> Use fontes oficiais para fatos externos e os documentos atuais da Anúncio e Site para decisões internas. Diferencie fato, alegação, inferência e proposta. Não invente comprovação, não transforme elegibilidade em garantia, não copie concorrentes e não misture este projeto com qualquer outro. Quando uma informação temporal puder ter mudado, verifique a fonte novamente antes de implementar ou publicar.
