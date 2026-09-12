# ROADMAP.md — Construção, lançamento e evolução

**Versão:** 0.3  
**Data:** 11 de setembro de 2026  
**Estado:** base documental auditada; ordem operacional ainda aguarda aprovação final de Willian  
**Responsável pela execução e aprovação:** Willian Souza

## 1. Função deste documento

Este roteiro transforma as decisões do projeto **Anúncio e Site** em uma sequência executável para:

- concluir a documentação;
- preparar materiais e regras comerciais;
- reconstruir o site no Antigravity;
- publicar no domínio definitivo;
- validar medição e conversão;
- iniciar a captação;
- evoluir conteúdo, ofertas e automações sem perder qualidade.

O roadmap define **ordem, dependências, entregáveis e critérios de conclusão**. Ele não substitui:

- `../PRODUCT.md`, para visão e posicionamento;
- `OFERTA.md`, para regras comerciais;
- `ARQUITETURA.md`, para páginas e jornadas;
- `DESIGN.md`, para direção visual;
- `CONTEUDO-SEO.md`, para produção editorial;
- `IMPLEMENTACAO.md`, para especificação técnica;
- `DECISOES.md`, para saber o que está confirmado, pendente ou substituído.

## 2. Premissas utilizadas

### 2.1 Confirmadas

- o site será reconstruído do zero;
- nada do site atual precisa ser mantido por obrigação, mas as URLs existentes deverão ser verificadas antes da troca;
- o lançamento público previsto inclui as páginas comerciais, pelo menos 3 estudos de caso e de 15 a 20 artigos revisados;
- o desenvolvimento será feito por Willian com auxílio da IDE e de IA;
- o projeto utilizará Astro, TypeScript, CSS personalizado, Keystatic Cloud, GitHub e Vercel;
- o repositório será privado;
- o site será acompanhado no domínio real durante a construção, protegido por `noindex, nofollow`;
- o canal inicial de conversão será o WhatsApp;
- não haverá formulário próprio da Anúncio e Site no lançamento;
- a documentação e o site não podem misturar conteúdo de outros projetos.

### 2.2 Direções operacionais deste roteiro

- o cronograma será controlado por marcos e critérios de conclusão, não por datas arbitrárias;
- a campanha de Google Ads da própria Anúncio e Site só deverá ser ativada depois que página, WhatsApp, conversões e medição estiverem testados;
- atividades independentes, como seleção de portfólio e configuração técnica, poderão avançar em paralelo;
- nenhuma pendência será escondida com texto provisório publicado como se fosse informação real.

A ativação da campanha própria após a validação é uma **PROPOSTA OPERACIONAL**. Se Willian decidir lançá-la em outro momento, atualizar este arquivo e `DECISOES.md`.

## 3. Estados do roadmap

| Estado | Uso |
|---|---|
| **NÃO INICIADO** | A fase ainda não começou. |
| **EM ANDAMENTO** | Existem tarefas sendo executadas. |
| **BLOQUEADO** | Uma dependência obrigatória impede continuar. |
| **EM REVISÃO** | A entrega existe e aguarda verificação ou aprovação. |
| **CONCLUÍDO** | Todos os critérios de conclusão foram atendidos. |

Uma fase não deve ser marcada como concluída apenas porque seus arquivos foram criados. Os critérios de conclusão precisam ser verificados.

## 4. Visão geral

| Fase | Estado inicial | Entrega principal | Depende de |
|---|---|---|---|
| 0. Fechar a base documental | EM REVISÃO | Documentação auditada para IDE e NotebookLM | Aprovação da ordem e importação no repositório |
| 1. Resolver regras e bloqueios | NÃO INICIADO | Operação pronta para contratar e lançar | Respostas e escolhas de Willian |
| 2. Reunir provas, ativos e inventário | NÃO INICIADO | Materiais reais e mapa do site anterior | Acesso aos projetos e domínio |
| 3. Criar a fundação técnica | NÃO INICIADO | Projeto Astro publicando uma base protegida | Repositório e contas técnicas |
| 4. Aprovar o protótipo visual | NÃO INICIADO | Home responsiva com direção visual aprovada | Fundação técnica |
| 5. Construir componentes e modelos | NÃO INICIADO | Sistema reutilizável de páginas e conteúdo | Protótipo aprovado |
| 6. Implementar páginas comerciais | NÃO INICIADO | Todas as rotas comerciais funcionando | Componentes e copy aprovada |
| 7. Inserir portfólio e conteúdo inicial | NÃO INICIADO | 3 casos e 15–20 artigos revisados | Materiais e modelos de conteúdo |
| 8. Configurar SEO, GEO e medição | NÃO INICIADO | Site rastreável, mensurável e coerente | Páginas e conteúdo quase finais |
| 9. Executar QA e liberar lançamento | NÃO INICIADO | Aprovação técnica, visual e comercial | Fases anteriores concluídas |
| 10. Publicar e estabilizar | NÃO INICIADO | Site indexável e monitorado | Liberação de lançamento |
| 11. Captar, medir e expandir | NÃO INICIADO | Aprendizado comercial e evolução contínua | Site estável e conversões testadas |

## 5. Caminho crítico

O caminho que determina o lançamento é:

1. documentação coerente;
2. WhatsApp e hospedagem comercial definidos;
3. fundação técnica publicada com proteção de indexação;
4. direção visual aprovada;
5. páginas comerciais implementadas;
6. 3 estudos de caso e 15–20 artigos aprovados;
7. SEO, medição, privacidade e redirecionamentos configurados;
8. QA completo;
9. retirada do `noindex` e lançamento.

Podem avançar em paralelo:

- escolha dos projetos do portfólio;
- produção das capturas;
- seleção da foto de Willian;
- levantamento das URLs antigas;
- definição das regras de cobrança;
- elaboração dos briefings dos artigos;
- pesquisa de palavras-chave.

## 6. Fase 0 — Fechar a base documental

### Objetivo

Entregar uma base que permita ao Antigravity, ao NotebookLM e a qualquer IA entender o projeto sem recuperar preços antigos, inventar dados ou misturar decisões.

### Tarefas

- [x] consolidar visão e posicionamento em `../PRODUCT.md`;
- [x] definir oferta, preços e limites em `OFERTA.md`;
- [x] definir páginas, URLs e jornadas em `ARQUITETURA.md`;
- [x] definir direção visual em `DESIGN.md`;
- [x] definir estratégia editorial, SEO e GEO em `CONTEUDO-SEO.md`;
- [x] definir stack, publicação e requisitos técnicos em `IMPLEMENTACAO.md`;
- [x] consolidar decisões ativas, substituídas e pendentes em `DECISOES.md`;
- [ ] aprovar este `ROADMAP.md`;
- [x] atualizar `FONTES.md` com todas as referências técnicas e editoriais realmente utilizadas;
- [x] atualizar `NOTEBOOKLM.md` com a ordem definitiva das fontes e exemplos de consultas;
- [x] atualizar `../README.md` com versões, estado e sequência final;
- [x] executar uma auditoria cruzada procurando contradições, nomes de outros projetos, valores antigos e pendências resolvidas;
- [ ] copiar a documentação aprovada para a raiz do projeto que será aberto no Antigravity, comparando antes de substituir arquivos existentes.

### Critério de conclusão

- todos os documentos possuem versão, data, estado e responsabilidade claros;
- preços ativos aparecem da mesma forma em todos os arquivos;
- hipóteses continuam identificadas como proposta ou pendência;
- arquivos de outros projetos não aparecem no pacote;
- o NotebookLM recebe apenas as versões atuais.

## 7. Fase 1 — Resolver regras e bloqueios operacionais

### Objetivo

Fechar o que pode impedir a contratação pública, o funcionamento do atendimento ou a retirada do `noindex`.

### 7.1 Cobrança e contratos

- [ ] escolher a plataforma inicial de cobrança ou formalizar o processo manual;
- [ ] decidir quais meios serão oferecidos: Pix, boleto e/ou cartão;
- [ ] definir vencimento, lembretes e tentativas de cobrança;
- [ ] definir prazo de tolerância antes de suspender uma landing page;
- [ ] definir eventual processo e custo de reativação;
- [ ] definir cancelamento da mensalidade de R$ 19,90;
- [ ] decidir se os arquivos da landing page serão entregues após cancelamento e em quais condições;
- [ ] definir política de cópias de segurança e retenção;
- [ ] definir inadimplência, pausa e retomada na gestão de anúncios;
- [ ] transformar essas regras em cláusulas ou condições comerciais revisadas antes dos primeiros contratos.

### 7.2 Atendimento e operação

- [ ] informar o número público do WhatsApp;
- [ ] definir dias e horários comerciais exatos, caso sejam publicados;
- [ ] preparar mensagens iniciais diferentes para landing pages, sites, Google Ads e Meta Ads;
- [ ] definir o processo interno do primeiro contato até a proposta;
- [ ] preparar um modelo de briefing para cada serviço;
- [ ] preparar um modelo de proposta que separe criação, mensalidade, gestão e verba de mídia.

### 7.3 Hospedagem comercial

- [ ] decidir entre um plano Vercel compatível com uso comercial ou outra hospedagem;
- [ ] confirmar que a alternativa preserva Astro, GitHub, Keystatic e deploy automático;
- [ ] calcular o custo operacional por landing page hospedada;
- [ ] documentar o processo de migração caso a hospedagem mude.

### Critério de conclusão

- um lead pode receber proposta e condições sem resposta improvisada;
- atraso, cancelamento, suspensão e entrega de arquivos possuem regras escritas;
- WhatsApp e horário público estão definidos;
- existe uma solução de hospedagem aprovada para a operação comercial.

### Dependência

Esta fase não impede a criação do protótipo, mas precisa terminar antes da contratação pública do modelo recorrente e do lançamento comercial.

## 8. Fase 2 — Reunir provas, ativos e inventário

### Objetivo

Substituir placeholders por materiais verdadeiros e evitar a perda acidental de sinais úteis do domínio atual.

### 8.1 Site e URLs atuais

- [ ] listar todas as URLs atualmente acessíveis em `anuncioesite.com.br`;
- [ ] verificar `sitemap.xml`, `robots.txt`, Search Console e Analytics existentes, quando houver acesso;
- [ ] registrar páginas com visitas, links externos ou valor histórico;
- [ ] decidir quais caminhos serão mantidos, removidos ou redirecionados;
- [ ] preparar um mapa de redirecionamentos permanentes;
- [ ] guardar uma captura ou exportação do estado atual antes de zerar o site.

Nada precisa ser preservado por obrigação. O inventário existe para que a substituição seja consciente, não automática.

### 8.2 Portfólio

- [ ] selecionar pelo menos 3 projetos reais;
- [ ] registrar URL, segmento, problema, solução, papel de Willian e recursos entregues;
- [ ] separar capturas de computador e celular em boa resolução;
- [ ] confirmar se nome, marca e link podem ser exibidos;
- [ ] usar estudo anônimo quando não houver autorização para identificar o cliente;
- [ ] registrar resultados apenas quando houver evidência verificável;
- [ ] não transformar elogio informal em depoimento público sem autorização.

### 8.3 Identidade e imagens

- [ ] selecionar a foto real de Willian para a seção de atendimento pessoal;
- [ ] preparar versões adequadas para celular e computador;
- [ ] selecionar capturas e imagens reais que serão usadas na home e nas páginas de serviço;
- [ ] manter o logotipo inicial apenas tipográfico;
- [ ] definir textos alternativos com base no conteúdo real das imagens.

### 8.4 Pesquisa de conteúdo

- [ ] preparar a lista de palavras-semente para o Planejador de Palavras-chave;
- [ ] coletar volume, concorrência e variações relevantes;
- [ ] confrontar os dados com experiência comercial e intenção de contratação;
- [ ] escolher os 15–20 temas iniciais sem transformar o volume de busca no único critério.

### Critério de conclusão

- existem 3 casos publicáveis ou anonimizáveis;
- foto e capturas estão selecionadas;
- nenhuma prova depende de dados inventados;
- o destino das URLs antigas está documentado;
- as pautas iniciais possuem justificativa editorial e comercial.

## 9. Fase 3 — Criar a fundação técnica

### Objetivo

Construir um projeto pequeno, reproduzível e publicável antes de iniciar o design completo.

### Tarefas

- [ ] criar ou reorganizar o repositório privado no GitHub;
- [ ] usar `anuncioesite` como nome se estiver disponível ou registrar outro nome aprovado;
- [ ] definir `main` como branch principal;
- [ ] iniciar Astro com TypeScript;
- [ ] usar pnpm e registrar sua versão no projeto;
- [ ] fixar uma versão LTS do Node.js;
- [ ] criar a estrutura de pastas definida em `IMPLEMENTACAO.md`;
- [ ] instalar somente dependências justificadas;
- [ ] configurar CSS próprio, tokens iniciais e fontes;
- [ ] configurar Keystatic Cloud conectado ao GitHub;
- [ ] criar coleções iniciais para artigos e estudos de caso;
- [ ] configurar Vercel e deploy automático;
- [ ] permitir previews para branches de mudanças maiores;
- [ ] cadastrar domínio raiz e `www` na hospedagem;
- [ ] definir `www.anuncioesite.com.br` como canônico;
- [ ] configurar redirecionamento permanente do domínio raiz para `www`, preservando o caminho;
- [ ] aplicar `noindex, nofollow` durante toda a construção;
- [ ] configurar scripts de desenvolvimento, verificação, lint e build;
- [ ] manter segredos fora do repositório;
- [ ] confirmar que um build com erro não substitui a última versão estável.

### Critério de conclusão

- o projeto instala e executa em ambiente limpo;
- verificação de tipos, lint e build terminam sem erros;
- um commit na branch principal gera uma publicação protegida no domínio;
- previews funcionam sem alterar a produção;
- rascunhos não aparecem em listagens, sitemap ou páginas públicas;
- não existem credenciais no repositório.

## 10. Fase 4 — Aprovar o protótipo visual

### Objetivo

Definir a aparência real do projeto em tela antes de replicar componentes por todas as páginas.

### Escopo do protótipo

- cabeçalho e navegação responsiva;
- hero com texto forte, fundo trabalhado e CTA;
- seção clara e seção escura para avaliar ritmo;
- apresentação de serviços;
- amostra de projeto ou estudo de caso;
- seção de atendimento pessoal com espaço para foto real;
- amostra de preço apresentada depois da construção de valor;
- FAQ;
- rodapé;
- botão compacto de WhatsApp no celular;
- movimentos discretos de entrada e rolagem.

### Decisões a fechar em tela

- [ ] códigos definitivos do fundo, superfícies, textos e laranja;
- [ ] pesos e tamanhos de Archivo e Inter;
- [ ] largura de conteúdo e ritmo vertical;
- [ ] desenho tipográfico do nome Anúncio e Site;
- [ ] aparência dos botões e links;
- [ ] formato dos blocos de serviço, preço, projeto e artigo;
- [ ] tratamento do fundo da hero;
- [ ] intensidade e duração das animações;
- [ ] comportamento em `prefers-reduced-motion`;
- [ ] posicionamento da foto de Willian;
- [ ] aparência do CTA móvel sem obstruir o conteúdo.

### Critério de conclusão

- a home é reconhecida como trabalho profissional e não como template genérico;
- a hierarquia funciona em celular e computador;
- não há excesso de cartões arredondados, brilho, gradientes ou elementos decorativos;
- texto, preço e CTAs permanecem legíveis;
- animações são discretas e não prejudicam o desempenho;
- Willian aprova explicitamente a direção antes de ela ser replicada.

## 11. Fase 5 — Construir componentes e modelos

### Objetivo

Criar um sistema consistente que permita montar as páginas sem copiar estruturas inteiras nem produzir aparência repetitiva.

### Componentes globais

- [ ] cabeçalho e menu;
- [ ] rodapé;
- [ ] CTA de WhatsApp com mensagem por origem;
- [ ] breadcrumb;
- [ ] blocos de serviço, benefício, processo, preço e FAQ;
- [ ] cards de projeto e artigo;
- [ ] bloco de autoria;
- [ ] bloco de atendimento pessoal;
- [ ] estados de foco, hover, carregamento e erro aplicáveis;
- [ ] componentes de imagem responsiva;
- [ ] elementos de dados estruturados quando apropriados.

### Modelos de conteúdo

- [ ] artigo com título, slug, descrição, autor, datas, status, imagem, categoria e corpo;
- [ ] estudo de caso com cliente público ou anônimo, contexto, problema, solução, entregas, imagens, autorização e resultados comprováveis;
- [ ] validação de campos obrigatórios no build;
- [ ] campos opcionais de SEO sem obrigar Willian a preencher o que não souber;
- [ ] valores padrão seguros quando um campo opcional estiver vazio;
- [ ] status de rascunho que impeça publicação e indexação acidentais.

### Critério de conclusão

- uma nova publicação pode ser criada sem editar componentes do site;
- campos ausentes não quebram o layout;
- artigos e casos geram URLs estáticas válidas;
- conteúdo essencial aparece sem depender de JavaScript;
- as páginas compartilham identidade, mas não parecem cópias umas das outras.

## 12. Fase 6 — Implementar as páginas comerciais

### Ordem recomendada

1. página inicial;
2. landing pages;
3. Google Ads;
4. sites;
5. Meta Ads;
6. sobre Willian e a marca;
7. landing page para montadores de móveis;
8. criação de sites em Novo Hamburgo e contexto regional;
9. índice de portfólio e modelo de estudo de caso;
10. índice do blog e modelo de artigo;
11. política de privacidade;
12. página 404.

### Rotas obrigatórias

- `/`
- `/landing-pages/`
- `/sites/`
- `/google-ads/`
- `/meta-ads/`
- `/portfolio/`
- `/portfolio/{projeto}/`
- `/sobre/`
- `/blog/`
- `/blog/{artigo}/`
- `/landing-pages/montador-de-moveis/`
- `/criacao-de-sites-novo-hamburgo/`
- `/politica-de-privacidade/`

### Regras de copy e conversão

- [ ] gerar valor antes de apresentar preço;
- [ ] explicar para quem cada serviço serve e quando ele não serve;
- [ ] mostrar landing page a partir de R$ 399 e R$ 19,90 a partir do segundo mês;
- [ ] explicar que os primeiros 30 dias de hospedagem estão incluídos e que o domínio é pago pelo cliente;
- [ ] apresentar o escopo de até 5 seções, formulário, WhatsApp, ajuda nos textos e duas rodadas de alterações;
- [ ] explicar que avaliações do Google podem ser inseridas manualmente, sem sincronização automática;
- [ ] apresentar Modelo LIFT e PageSpeed acima de 90 como método e meta condicionada, não como garantia;
- [ ] separar pequenos ajustes ocasionais das mudanças cobradas à parte;
- [ ] informar prazo normal de 7 a 10 dias e tratar prioridade somente após análise;
- [ ] mostrar Google Ads a partir de R$ 390 por mês para prestadores de serviços;
- [ ] explicar a conta separada por cliente, a estrutura de gerenciamento e a verba paga diretamente ao Google;
- [ ] informar que o pacote básico não possui taxa de implementação nem permanência mínima e exige aviso de 30 dias para cancelamento;
- [ ] explicar que exportações CSV não equivalem à transferência da conta ativa;
- [ ] apresentar sites, blogs e Meta Ads sob análise e proposta;
- [ ] informar que Meta Ads poderá ter taxa de implementação definida na proposta;
- [ ] separar criação, hospedagem, gestão e investimento em mídia;
- [ ] dizer que a verba é paga pelo cliente diretamente à plataforma;
- [ ] não incluir landing page grátis na gestão;
- [ ] não prometer leads, vendas, posição ou retorno financeiro;
- [ ] explicar que o atendimento e a execução são feitos diretamente por Willian;
- [ ] usar WhatsApp como ação principal;
- [ ] não criar formulário próprio no lançamento;
- [ ] não usar telefone, cliente, depoimento, avaliação, endereço ou resultado fictício.

### Critério de conclusão

- todas as rotas obrigatórias existem e têm objetivo único;
- cada CTA abre a mensagem correta no WhatsApp;
- preços e condições coincidem com `OFERTA.md`;
- páginas de profissão e região contêm informação específica, não apenas troca de palavras;
- a navegação não cria páginas órfãs;
- nenhum texto depende de interpretação para entender o serviço e o próximo passo.

## 13. Fase 7 — Inserir portfólio e conteúdo inicial

### 13.1 Estudos de caso

- [ ] publicar pelo menos 3 casos reais;
- [ ] explicar o problema, a decisão de projeto e o que Willian entregou;
- [ ] mostrar imagens reais e legíveis;
- [ ] deixar claro quando o projeto é apresentado sem identificar o cliente;
- [ ] usar métricas somente com fonte e contexto;
- [ ] incluir CTA relacionado ao serviço demonstrado.

### 13.2 Artigos

- [ ] selecionar de 15 a 20 pautas prioritárias;
- [ ] criar um briefing próprio para cada pauta;
- [ ] responder a pergunta principal no primeiro parágrafo;
- [ ] escrever cada texto do zero, sem molde rígido repetido;
- [ ] revisar fatos, exemplos, cálculos, links e recomendações;
- [ ] acrescentar experiência ou observações reais de Willian;
- [ ] assinar como Willian Souza;
- [ ] usar data real de publicação;
- [ ] alterar `dateModified` somente depois de mudança relevante;
- [ ] ligar o artigo à página comercial apropriada;
- [ ] manter preços apenas nas páginas comerciais;
- [ ] decidir se haverá nota sobre auxílio de IA;
- [ ] publicar somente o que passar pelo checklist de `CONTEUDO-SEO.md`.

### 13.3 Ligações internas

- [ ] home aponta para serviços, portfólio e conteúdos principais;
- [ ] páginas de serviços apontam para casos e artigos relacionados;
- [ ] página de montadores aponta para landing pages e portfólio relevante;
- [ ] página regional aponta para os serviços disponíveis;
- [ ] artigos apontam para outros conteúdos apenas quando ajudam o leitor;
- [ ] breadcrumbs representam a hierarquia real.

### Critério de conclusão

- existem pelo menos 3 casos e de 15 a 20 artigos aprovados;
- nenhuma publicação utiliza data retroativa;
- nenhuma página contém prova ou autoria inventada;
- todos os conteúdos têm finalidade, origem e destino dentro da arquitetura;
- o conjunto demonstra experiência sem depender de volume artificial.

## 14. Fase 8 — Configurar SEO, GEO, medição e privacidade

### 14.1 SEO técnico

- [ ] título e descrição únicos em todas as páginas indexáveis;
- [ ] um H1 principal coerente por página;
- [ ] canonical absoluto usando `https://www.anuncioesite.com.br`;
- [ ] Open Graph e imagem social adequada;
- [ ] sitemap apenas com URLs públicas e canônicas;
- [ ] `robots.txt` coerente com o estágio do projeto;
- [ ] rascunhos e páginas técnicas fora do sitemap;
- [ ] redirecionamentos das URLs antigas testados;
- [ ] página 404 útil;
- [ ] imagens dimensionadas, comprimidas e com texto alternativo correto;
- [ ] links internos sem caminhos quebrados.

### 14.2 Dados estruturados e GEO

- [ ] identificar organização, pessoa responsável e serviços apenas com dados verdadeiros;
- [ ] marcar breadcrumbs, artigos e demais tipos suportados quando apropriado;
- [ ] manter autor, datas e informações visíveis coerentes com o schema;
- [ ] não criar nota, endereço, horário, preço ou avaliações inexistentes;
- [ ] permitir OAI-SearchBot no lançamento;
- [ ] decidir separadamente a política para GPTBot;
- [ ] não tratar `llms.txt` como prioridade;
- [ ] revisar afirmações factuais e manter fontes próximas do conteúdo relevante.

### 14.3 Medição

- [ ] criar ou confirmar contêiner do GTM;
- [ ] criar ou confirmar propriedade e fluxo do GA4;
- [ ] instalar os identificadores apenas quando o site estiver pronto;
- [ ] medir cliques de WhatsApp com origem da página e serviço;
- [ ] medir visualizações relevantes de páginas comerciais;
- [ ] diferenciar clique de contato e lead comercial confirmado;
- [ ] não duplicar eventos;
- [ ] testar eventos em modo de depuração;
- [ ] instalar tags de Google Ads ou Meta somente quando houver campanha real.

### 14.4 Privacidade

- [ ] explicar os dados coletados e a finalidade;
- [ ] identificar canais de contato aplicáveis;
- [ ] revisar cookies e tags efetivamente usados;
- [ ] implementar consentimento quando necessário;
- [ ] impedir carregamento indevido de tags condicionadas a consentimento;
- [ ] não copiar política genérica que descreva ferramentas inexistentes.

### Critério de conclusão

- metadados, canonicals, sitemap, robots e schemas refletem o conteúdo visível;
- Search Console pode verificar a propriedade e receber o sitemap após o lançamento;
- eventos principais são observados uma única vez nos testes;
- a política de privacidade descreve o comportamento real do site;
- rastreadores não são bloqueados ou liberados por acidente.

## 15. Fase 9 — Executar QA e liberar o lançamento

### 15.1 Verificações automáticas

- [ ] instalar dependências a partir do arquivo de lock;
- [ ] executar verificação de tipos e do Astro;
- [ ] executar lint;
- [ ] executar build de produção;
- [ ] verificar links internos;
- [ ] verificar presença de metadados obrigatórios;
- [ ] verificar que rascunhos não aparecem na saída pública.

### 15.2 Verificações manuais

- [ ] testar celular pequeno, celular grande, tablet e computador;
- [ ] testar menu, teclado, foco, contraste e leitor de tela em pontos principais;
- [ ] testar preferência por movimento reduzido;
- [ ] revisar todas as mensagens de WhatsApp;
- [ ] testar domínio com e sem `www` e preservação do caminho;
- [ ] testar 404 e redirecionamentos;
- [ ] revisar textos, preços, datas, autoria e materiais;
- [ ] confirmar autorizações do portfólio;
- [ ] conferir que não existem textos provisórios ou dados fictícios;
- [ ] revisar a aparência em busca de padrões genéricos ou “cara de site de IA”.

### 15.3 Desempenho

- [ ] medir páginas principais na versão publicada;
- [ ] buscar PageSpeed acima de 90 no celular;
- [ ] verificar LCP, INP e CLS;
- [ ] corrigir imagens, fontes, JavaScript e animações que causem perda relevante;
- [ ] repetir a medição depois das correções;
- [ ] registrar limitações causadas por mídia ou integrações externas.

### Critérios obrigatórios de liberação

- [ ] WhatsApp real informado e testado;
- [ ] hospedagem aprovada para uso comercial;
- [ ] domínio canônico e redirecionamento funcionando;
- [ ] todas as rotas do lançamento completas;
- [ ] 3 estudos de caso publicados;
- [ ] 15–20 artigos publicados no lançamento com datas reais;
- [ ] política de privacidade coerente;
- [ ] medição testada;
- [ ] build sem erros;
- [ ] aprovação visual de Willian;
- [ ] aprovação comercial de preços e condições;
- [ ] cópia de segurança ou marco de versão criado antes da troca final.

Se qualquer item obrigatório falhar, o site permanece protegido por `noindex` e a pendência recebe responsável e próximo passo.

## 16. Fase 10 — Publicar e estabilizar

### Lançamento

- [ ] criar uma versão ou tag identificável do lançamento;
- [ ] publicar o build aprovado na produção;
- [ ] confirmar que somente páginas aprovadas perderam o `noindex`;
- [ ] confirmar `robots.txt`, sitemap e canonical em produção;
- [ ] testar novamente WhatsApp, navegação e eventos;
- [ ] verificar a propriedade no Google Search Console;
- [ ] enviar o sitemap;
- [ ] solicitar indexação apenas das páginas prioritárias quando fizer sentido;
- [ ] verificar erros de servidor, build e rastreamento;
- [ ] registrar data, versão, alterações e responsáveis.

### Estabilização

- [ ] acompanhar disponibilidade e erros nas primeiras 72 horas;
- [ ] conferir se o GA4 recebe dados sem duplicação;
- [ ] confirmar eventos de WhatsApp em celular e computador;
- [ ] verificar cobertura e páginas descobertas no Search Console;
- [ ] corrigir rapidamente falhas técnicas sem iniciar reformulações desnecessárias;
- [ ] manter uma lista separada de melhorias que não bloqueiam a operação.

### Critério de conclusão

- o site permanece acessível e estável;
- Google consegue rastrear páginas públicas;
- páginas privadas ou rascunhos continuam protegidos;
- conversões técnicas são registradas de forma confiável;
- não existem erros críticos abertos.

## 17. Fase 11 — Captar, medir e expandir

### 17.1 Campanha própria de Google Ads — proposta de sequência

- [ ] confirmar a página de destino principal;
- [ ] validar WhatsApp e conversões mais uma vez;
- [ ] usar o Planejador de Palavras-chave para intenção, região e estimativas;
- [ ] definir orçamento de mídia separado da taxa de gestão do negócio;
- [ ] criar campanha de Pesquisa com grupos e anúncios coerentes;
- [ ] começar com termos de alta intenção e negativas iniciais;
- [ ] verificar termos de pesquisa e qualidade dos contatos;
- [ ] relacionar dados do Google Ads às conversas e propostas reais;
- [ ] evitar otimizar apenas para cliques ou conversões técnicas sem valor comercial.

A campanha própria não deverá ser ativada apenas porque o site foi publicado. A condição é existir uma página aprovada, contato funcional e medição validada.

### 17.2 Primeiros ciclos de análise

#### Primeira semana

- disponibilidade e erros;
- indexação inicial;
- eventos de WhatsApp;
- dúvidas recebidas pelos leads;
- problemas de clareza nas páginas.

#### Primeiro mês

- origem dos contatos;
- páginas visitadas antes do WhatsApp;
- qualidade dos contatos;
- propostas enviadas e contratos fechados;
- conteúdos com impressões e cliques;
- custo e qualidade da campanha própria, se estiver ativa;
- tempo gasto com suporte e pequenas alterações.

#### Após dados suficientes

- testar uma hipótese de conversão por vez;
- melhorar páginas com base em comportamento e perguntas reais;
- atualizar artigos que precisem de mais clareza ou evidência;
- pedir depoimentos e autorização de novos projetos;
- revisar preço e escopo conforme custo de entrega e suporte;
- automatizar cobrança quando o processo manual estiver validado;
- criar novas páginas por profissão ou região somente quando houver experiência, conteúdo específico e oportunidade real.

### 17.3 Expansão editorial

- publicar sem calendário rígido;
- priorizar qualidade e utilidade sobre volume;
- usar Search Console, Planejador, conversas e propostas como fontes de pauta;
- evitar várias páginas destinadas à mesma intenção;
- manter autoria, datas reais, revisão e links internos;
- atualizar o sitemap automaticamente a cada publicação aprovada;
- acompanhar menções, links e referências externas verdadeiras.

### Critério de conclusão contínua

Esta fase não possui encerramento definitivo. A cada ciclo, registrar:

- hipótese;
- mudança realizada;
- data;
- métrica observada;
- resultado;
- decisão de manter, ajustar ou reverter.

## 18. Backlog fora do lançamento inicial

- formulário próprio da Anúncio e Site;
- CRM ou banco interno de leads;
- sistema próprio de cobrança;
- sincronização automática de avaliações;
- newsletter;
- comentários no blog;
- busca interna;
- grande quantidade de páginas por cidade;
- grande quantidade de páginas por profissão;
- loja virtual;
- área do cliente;
- aplicativo ou sistema personalizado;
- automações complexas sem processo manual validado.

Um item do backlog só entra no roadmap ativo quando possuir objetivo, prioridade, escopo, responsável e critério de conclusão.

## 19. Riscos principais e resposta prevista

| Risco | Consequência | Resposta |
|---|---|---|
| Começar todas as páginas antes de aprovar o visual | Retrabalho em todo o site | Aprovar a home e os componentes principais primeiro |
| Publicar sem portfólio real | Baixa confiança | Tratar 3 estudos de caso como requisito de lançamento |
| Produzir artigos em massa sem revisão | Conteúdo genérico e risco editorial | Usar briefings únicos e checklist obrigatório |
| Rodar anúncios antes da medição | Decisões baseadas em dados incorretos | Ativar campanha somente após teste de conversões |
| Apagar o site atual sem inventário | Perda de URLs ou sinais úteis | Mapear e redirecionar antes da troca |
| Usar Vercel Hobby comercialmente | Incompatibilidade com as condições do plano | Resolver hospedagem antes do lançamento comercial |
| Publicar contato provisório | Leads perdidos | Bloquear lançamento sem WhatsApp real testado |
| Misturar decisões de outro projeto | Copy, preço ou código incorretos | Ler `DECISOES.md` e auditar nomes antes de cada fase |
| Aceitar escopo ilimitado por R$ 19,90 | Suporte inviável | Aplicar limites de `OFERTA.md` e cobrar mudanças maiores |
| Criar cobrança própria cedo demais | Custo, segurança e manutenção desnecessários | Validar o processo com solução manual ou provedora especializada |

## 20. Forma de trabalhar no Antigravity

Para cada fase:

1. pedir à IDE que leia apenas os documentos relevantes;
2. solicitar um resumo das restrições antes de alterar código;
3. dividir o trabalho em uma entrega pequena e verificável;
4. revisar o diff antes de aceitar;
5. executar verificações automáticas;
6. visualizar a versão publicada;
7. corrigir problemas da própria fase;
8. criar commit claro somente depois da validação;
9. atualizar este roadmap e `DECISOES.md` quando houver nova decisão.

Evitar um único pedido para “fazer o site inteiro”. Cada etapa deve ter resultado visível, teste e aprovação antes da seguinte.

## 21. Próxima tarefa concreta

1. revisar e aprovar a ordem deste roadmap;
2. extrair o pacote final na raiz do projeto que será usado no Antigravity;
3. montar o NotebookLM com as onze fontes Markdown atuais;
4. iniciar a Fase 1 e a Fase 2 em paralelo;
5. começar o código pela Fase 3, sem retirar o `noindex`.
