# NOTEBOOKLM.md — Base de conhecimento do projeto

**Versão:** 1.2  
**Data:** 13 de setembro de 2026  
**Estado:** manifesto definitivo auditado; fundação Astro e deploy inicial concluídos; notebook ainda precisa ser montado por Willian  
**Responsável pela base e pelas decisões:** Willian Souza

## 1. Função deste documento

Este arquivo explica como montar e manter o NotebookLM da **Anúncio e Site** para que ele funcione como uma camada de consulta sobre a documentação do projeto.

O objetivo é permitir que Willian use o notebook para:

- localizar rapidamente decisões já tomadas;
- preparar briefings para páginas, artigos e tarefas técnicas;
- conferir preços, escopos, prazos e limitações;
- encontrar contradições antes de implementar;
- transformar os documentos em instruções organizadas para o Antigravity;
- estudar o projeto sem depender da memória de uma conversa;
- distinguir o que está confirmado do que ainda precisa de decisão;
- consultar fontes sem misturar a Anúncio e Site com outros projetos.

O NotebookLM será uma **interface de consulta**, não a fonte oficial das decisões.

## 2. Princípio central

> Os arquivos Markdown do projeto são a fonte oficial. O NotebookLM lê cópias ou versões sincronizadas desses arquivos, mas suas respostas, resumos, sugestões, áudios, mapas mentais e outros materiais gerados não criam decisões automaticamente.

Uma decisão só passa a valer quando:

1. Willian a aprova;
2. ela é registrada no documento especializado correspondente;
3. seu estado é atualizado em [`DECISOES.md`](DECISOES.md), quando necessário;
4. a versão atualizada volta para o NotebookLM.

## 3. O que o NotebookLM pode e não pode fazer

| Pode ajudar a | Não pode fazer sozinho |
|---|---|
| resumir documentos selecionados | decidir preço, escopo ou política comercial |
| encontrar trechos e citar fontes carregadas | confirmar uma informação que não existe nas fontes |
| comparar versões e regras descritas | saber automaticamente que um arquivo local mudou |
| preparar briefings e checklists | transformar uma proposta em decisão confirmada |
| apontar possíveis conflitos | escolher silenciosamente qual documento divergente está correto |
| organizar perguntas e pendências | inventar telefone, depoimento, cliente, resultado ou dado de mercado |
| apoiar pesquisa e planejamento | substituir revisão humana, teste técnico ou análise jurídica |
| gerar materiais derivados para estudo | alterar os arquivos do Antigravity ou o repositório por conta própria |

## 4. Estrutura recomendada de notebooks

### 4.1 Notebook principal — obrigatório

**Nome recomendado:** `Anúncio e Site — Base oficial do projeto`

Deve conter somente:

- documentação atual do projeto;
- decisões aprovadas;
- especificações de negócio, conteúdo, design e implementação;
- referências consolidadas em `FONTES.md`;
- instruções de uso desta base.

Esse notebook responde à pergunta: **“O que está definido para a Anúncio e Site e como devemos executar?”**

### 4.2 Notebook de pesquisa de mercado — opcional

**Nome recomendado:** `Anúncio e Site — Pesquisa de mercado`

Pode conter:

- páginas de concorrentes;
- comparações de ofertas;
- pesquisas de preço;
- resultados de busca;
- referências de layout;
- observações de sitemaps e mapas de site;
- hipóteses ainda não aprovadas.

Esse notebook responde à pergunta: **“O que existe no mercado e o que podemos aprender?”**

Nada desse notebook deve ser tratado como decisão interna até ser verificado, aprovado por Willian e registrado nos documentos oficiais.

### 4.3 Notebook de pesquisa editorial — opcional no futuro

**Nome recomendado:** `Anúncio e Site — Pesquisa de conteúdo`

Pode ser criado quando o volume de artigos e fontes externas crescer. Servirá para reunir:

- fontes oficiais de cada pauta;
- dúvidas encontradas nas pesquisas;
- dados do Planejador de Palavras-chave;
- informações de órgãos reguladores;
- estudos e documentação técnica;
- briefings em desenvolvimento.

O notebook principal não deve virar um depósito de centenas de referências externas. Ele precisa continuar pequeno, atual e confiável.

## 5. Fontes do notebook principal

### 5.1 Manifesto inicial

Adicionar cada arquivo como uma fonte separada, mantendo o nome original.

| Ordem | Arquivo | Versão inicial esperada | Papel na base |
|---:|---|---:|---|
| 1 | `README.md` | 1.1 | porta de entrada, mapa e regras de uso da documentação |
| 2 | `DECISOES.md` | 1.1 | índice do que está confirmado, pendente, proposto ou substituído |
| 3 | `PRODUCT.md` | 0.3 | visão, público, posicionamento e objetivos do produto |
| 4 | `OFERTA.md` | 0.2 | serviços, preços, pagamento, escopo e condições |
| 5 | `ARQUITETURA.md` | 0.3 | páginas, URLs, navegação e jornadas |
| 6 | `DESIGN.md` | 0.2 | direção visual, componentes e movimento |
| 7 | `CONTEUDO-SEO.md` | 0.4 | blog, páginas por profissão, autoria, SEO e GEO |
| 8 | `IMPLEMENTACAO.md` | 0.3 | stack, CMS, GitHub, Vercel, tags, segurança e QA |
| 9 | `ROADMAP.md` | 0.3 | fases, dependências, entregas e critérios de conclusão |
| 10 | `FONTES.md` | 1.1 | fontes externas, evidências, limitações e regras de verificação |
| 11 | `NOTEBOOKLM.md` | 1.1 | operação desta base de conhecimento |

Essas versões representam o estado de 11 de setembro de 2026. Se o cabeçalho de um arquivo local mostrar uma versão posterior, a versão posterior deverá substituir a fonte antiga no notebook.

### 5.2 Materiais que não entram no notebook principal

Os materiais abaixo permanecem guardados no projeto, mas não devem ser carregados como fontes oficiais do notebook principal:

- `docs/pesquisa/tabela_prioridade_nichos.json`;
- `docs/pesquisa/esqueletos_artigos_nichos.json`;
- `docs/referencias/autocomplete-landing-pages-profissoes.png`.

Eles são insumos brutos para investigação e podem ser utilizados em um notebook de pesquisa separado. Não devem competir com os documentos aprovados nem ser interpretados como priorização, volume de busca ou calendário editorial.

### 5.3 Por que carregar todos os documentos principais

Não carregar apenas `PRODUCT.md`. O projeto foi dividido de propósito:

- `PRODUCT.md` dá a visão geral;
- `DECISOES.md` identifica o estado das decisões;
- cada documento especializado contém o detalhamento necessário;
- `FONTES.md` impede que alegações e inferências sejam confundidas com fatos;
- `ROADMAP.md` transforma as especificações em sequência de execução.

Sem essa combinação, o NotebookLM poderá responder corretamente sobre a visão geral e ainda assim omitir uma condição comercial, uma pendência ou uma restrição técnica.

## 6. Configuração inicial passo a passo

### 6.1 Preparar os arquivos

1. Usar a pasta documental aprovada mais recente.
2. Não enviar o ZIP como uma única fonte.
3. Não juntar todos os arquivos em um texto enorme.
4. Conferir o nome, a versão e a data no cabeçalho de cada Markdown.
5. Confirmar que não existem cópias antigas com o mesmo nome na pasta escolhida.

### 6.2 Criar o notebook

1. Abrir o NotebookLM.
2. Criar um notebook chamado `Anúncio e Site — Base oficial do projeto`.
3. Adicionar os onze arquivos do manifesto como fontes individuais.
4. Conferir se cada fonte preservou o nome do arquivo.
5. Abrir algumas fontes e confirmar que título, versão, tabelas e seções foram extraídos.
6. Não adicionar arquivos de outros projetos.

### 6.3 Fazer o teste de integridade

Depois da importação, perguntar:

> Liste todas as fontes carregadas. Para cada arquivo, informe o título, a versão, a data e o assunto principal. Não complete dados ausentes por suposição.

Comparar a resposta com o manifesto da seção 5.1.

Em seguida, perguntar:

> Usando `DECISOES.md`, informe o posicionamento, o preço da landing page, a mensalidade, o preço inicial do Google Ads, o canal de conversão do lançamento e as principais pendências. Cite os IDs das decisões e os arquivos usados.

Se a resposta recuperar preço antigo, landing page grátis, contrato anual obrigatório, outro projeto ou informação não documentada, revisar as fontes antes de continuar.

## 7. Forma recomendada de importar e atualizar

### 7.1 Método recomendado agora — arquivos Markdown

Para a fase atual, o método mais seguro e simples é:

1. manter os arquivos oficiais no projeto;
2. enviar cada Markdown ao NotebookLM;
3. depois de uma alteração aprovada, substituir a fonte antiga pelo arquivo atualizado;
4. conferir versão e data após a substituição.

Vantagens:

- a documentação usada pelo Antigravity continua sendo a origem;
- não é necessário manter textos editáveis em dois lugares;
- os nomes dos arquivos permanecem iguais;
- a atualização pode ser conferida pelo cabeçalho.

Limitação:

- um arquivo enviado diretamente é uma cópia; ele não acompanha sozinho as alterações feitas no projeto.

### 7.2 Alternativa futura — espelho no Google Drive

Na documentação oficial consultada em 11 de setembro de 2026, fontes importadas do Google Drive podem ser atualizadas automaticamente quando o documento de origem muda.

Isso não cria sincronização entre GitHub ou Antigravity e Google Drive. Para usar esse caminho, seria necessário manter um espelho organizado dos Markdown em arquivos compatíveis no Drive.

Riscos:

- editar o Markdown e esquecer o documento do Drive;
- editar o Drive e esquecer o Markdown;
- criar duas versões concorrentes;
- o notebook receber uma versão que ainda não foi registrada no projeto.

Por isso, o espelho no Drive só deve ser adotado quando existir um processo claro ou uma automação confiável. Até lá, usar substituição manual dos arquivos Markdown.

### 7.3 Métodos que não serão usados como fonte principal

- link de repositório privado no GitHub;
- uma única página da web com toda a documentação;
- ZIP contendo os documentos;
- conversa do ChatGPT como única memória do projeto;
- resposta gerada pelo próprio NotebookLM convertida em decisão sem revisão;
- cópias com nomes como `final`, `final2`, `novo` ou `corrigido`.

## 8. Instrução-padrão para consultas

Usar o texto abaixo no início de uma sessão importante ou sempre que a resposta exigir rigor:

```text
Trabalhe somente com as fontes selecionadas do projeto Anúncio e Site.

Para decisões internas, consulte primeiro DECISOES.md e depois o documento especializado. Separe claramente CONFIRMADO, PENDENTE, PROPOSTA e SUBSTITUÍDO. Não reative ideias substituídas.

Cite o nome do arquivo e, quando existir, o ID da decisão usada. Não invente preços, escopos, prazos, telefone, clientes, depoimentos, resultados, volume de busca, dados técnicos ou regras de negócio.

Se duas fontes divergirem, não escolha silenciosamente: mostre os trechos incompatíveis, indique as versões e explique qual decisão precisa ser reconciliada.

Não misture informações de outros projetos. Quando fizer uma sugestão nova, identifique-a como SUGESTÃO NÃO APROVADA.
```

Essa orientação reduz ambiguidades, mas não substitui a seleção correta das fontes.

## 9. Matriz de fontes por tarefa

Selecionar somente as fontes relevantes melhora a precisão da resposta.

| Tarefa | Fontes principais | Fontes de apoio |
|---|---|---|
| verificar decisão atual | `DECISOES.md` | documento especializado relacionado |
| revisar posicionamento | `PRODUCT.md`, `DECISOES.md` | `ARQUITETURA.md`, `CONTEUDO-SEO.md` |
| preparar oferta ou proposta | `OFERTA.md`, `DECISOES.md` | `PRODUCT.md`, `FONTES.md` |
| escrever página inicial | `PRODUCT.md`, `ARQUITETURA.md`, `DESIGN.md`, `DECISOES.md` | `OFERTA.md`, `CONTEUDO-SEO.md` |
| escrever página de serviço | `OFERTA.md`, `ARQUITETURA.md`, `CONTEUDO-SEO.md`, `DECISOES.md` | `PRODUCT.md`, `FONTES.md` |
| página de montador de móveis | `ARQUITETURA.md`, `CONTEUDO-SEO.md`, `OFERTA.md`, `DECISOES.md` | `PRODUCT.md`, estudos de caso autorizados |
| página regional | `ARQUITETURA.md`, `CONTEUDO-SEO.md`, `DECISOES.md` | `PRODUCT.md`, evidências locais reais |
| artigo do blog | `CONTEUDO-SEO.md`, `FONTES.md`, `DECISOES.md` | `ARQUITETURA.md`, fontes externas específicas da pauta |
| estudo de caso | `ARQUITETURA.md`, `CONTEUDO-SEO.md`, `DECISOES.md` | evidências e autorização do projeto real |
| direção visual | `DESIGN.md`, `DECISOES.md` | `PRODUCT.md`, `ARQUITETURA.md` |
| tarefa técnica no Antigravity | `IMPLEMENTACAO.md`, `DECISOES.md`, `ROADMAP.md` | `DESIGN.md`, `ARQUITETURA.md`, `FONTES.md` |
| SEO, GEO e rastreamento | `CONTEUDO-SEO.md`, `IMPLEMENTACAO.md`, `FONTES.md`, `DECISOES.md` | `ARQUITETURA.md` |
| saber o próximo passo | `ROADMAP.md`, `DECISOES.md` | documento da fase atual |
| auditar o pacote documental | todos os documentos oficiais | nenhum material externo não consolidado |

## 10. Biblioteca de perguntas e prompts

### 10.1 Estado atual do projeto

> Crie um resumo executivo do estado atual da Anúncio e Site. Separe decisões confirmadas, pendências que bloqueiam contratação, pendências que bloqueiam lançamento e itens que podem esperar. Cite arquivos e IDs. Não apresente propostas como decisões.

### 10.2 Conferir uma decisão

> Qual é a decisão atual sobre [ASSUNTO]? Comece por `DECISOES.md`, consulte o documento especializado e informe: estado, ID, regra completa, limitações e pendências relacionadas.

### 10.3 Encontrar contradições

> Compare as fontes selecionadas e encontre apenas contradições reais, versões desatualizadas ou instruções ambíguas. Para cada caso, mostre os arquivos, os trechos em conflito, o impacto e a decisão necessária. Não tente corrigir por conta própria.

### 10.4 Preparar a página inicial

> Prepare um briefing completo para a página inicial da Anúncio e Site. Respeite posicionamento, ordem das seções, direção visual, oferta e CTA aprovados. Divida em objetivo, público, mensagem principal, seções, provas necessárias, CTAs, restrições e critérios de aceitação. Não escreva código e não invente materiais pendentes.

### 10.5 Preparar uma página comercial

> Prepare o briefing de conteúdo para a página [ROTA/SERVIÇO]. Use apenas preços e escopos aprovados. Mostre primeiro o valor do serviço e depois o preço. Inclua intenção de busca, promessa permitida, objeções, estrutura, CTAs, links internos, dados estruturados possíveis e itens que dependem de Willian.

### 10.6 Criar briefing de artigo

> Crie um briefing original para responder à pergunta “[PERGUNTA]”. A resposta principal deve aparecer no primeiro parágrafo. Inclua intenção, público, resposta curta, dúvidas secundárias, experiência própria que Willian precisa acrescentar, fontes primárias a consultar, links internos, CTA contextual e riscos de afirmações sem prova. Não redija o artigo ainda.

### 10.7 Revisar um artigo

> Audite este artigo contra `CONTEUDO-SEO.md` e `FONTES.md`. Verifique resposta inicial, utilidade, repetição, precisão, experiência própria, fontes, autoria, datas, links internos, promessa comercial, SEO e riscos de conteúdo em escala. Liste correções necessárias sem inventar evidências.

### 10.8 Preparar tarefa para o Antigravity

> Transforme a fase [NÚMERO/NOME] do roadmap em uma única tarefa pequena para o Antigravity. Entregue: objetivo, arquivos que a IDE deve ler, decisões confirmadas, restrições, arquivos que podem ser alterados, arquivos que não podem ser alterados, passos de implementação, verificações e critérios de aceitação. Não produza código nem amplie o escopo.

### 10.9 Revisar uma alteração técnica

> Com base em `IMPLEMENTACAO.md`, `DESIGN.md` e `DECISOES.md`, crie um checklist para revisar a alteração [DESCRIÇÃO]. Inclua funcionamento, responsividade, acessibilidade, desempenho, SEO, segurança, conteúdo e regressões possíveis.

### 10.10 Preparar estudo de caso

> Com os materiais reais selecionados, prepare a estrutura de um estudo de caso. Separe fatos comprovados, relato de Willian, alegações do cliente e dados ainda ausentes. Não crie métricas ou depoimentos. Indique quais autorizações são necessárias antes da publicação.

### 10.11 Validar uma afirmação comercial

> A afirmação “[FRASE]” pode ser publicada? Consulte `FONTES.md`, `OFERTA.md` e `DECISOES.md`. Classifique como permitida, permitida com condição, pendente ou proibida. Explique a evidência exigida e proponha uma redação segura quando necessário.

### 10.12 Preparar uma conversa de decisão

> Quero decidir [ASSUNTO]. Resuma apenas o que já está confirmado, as opções realmente abertas, os impactos em outros documentos e as perguntas que Willian precisa responder. Não escolha por ele.

## 11. Fluxo para registrar uma nova decisão

Quando uma conversa resultar em decisão:

1. registrar a decisão no documento especializado;
2. atualizar ou criar o ID correspondente em `DECISOES.md`;
3. marcar ideias anteriores como `SUBSTITUÍDO`, quando aplicável;
4. atualizar versão, data e estado dos arquivos afetados;
5. verificar se `PRODUCT.md`, `ROADMAP.md` ou outro documento geral precisa ser reconciliado;
6. validar links internos e coerência;
7. substituir no NotebookLM cada fonte alterada;
8. remover qualquer cópia antiga duplicada;
9. perguntar ao notebook qual versão ele está lendo;
10. somente depois usar a decisão para conteúdo ou implementação.

### 11.1 Pergunta de validação após atualizar

> Qual é a versão e a data de cada fonte selecionada? Em seguida, resuma somente as mudanças que essas versões tornam ativas. Se houver duas cópias do mesmo arquivo, avise e não consolide silenciosamente.

## 12. Fluxo NotebookLM → Antigravity

O fluxo recomendado é:

1. usar o NotebookLM para consultar a base e preparar um briefing;
2. Willian revisar o briefing e resolver pendências materiais;
3. atualizar os arquivos Markdown se houver nova decisão;
4. no Antigravity, pedir a leitura dos arquivos relevantes;
5. entregar apenas uma tarefa pequena e verificável;
6. revisar o diff e visualizar o resultado;
7. executar os testes da fase;
8. registrar mudanças documentais necessárias;
9. atualizar novamente as fontes do notebook.

O NotebookLM não deve enviar instruções diretamente para a IDE sem revisão, porque uma resposta gerada pode omitir uma condição ou interpretar incorretamente uma fonte.

## 13. Modelo de entrega para o Antigravity

Ao pedir um briefing ao notebook, solicitar este formato:

```md
# Tarefa

## Objetivo

## Resultado esperado

## Arquivos que devem ser lidos antes

## Decisões confirmadas aplicáveis

## Pendências que não podem ser inventadas

## Escopo desta tarefa

## Fora do escopo

## Arquivos permitidos para alteração

## Passos de implementação

## Verificações obrigatórias

## Critérios de aceitação

## Pontos que exigem aprovação de Willian
```

Esse formato ajuda a impedir pedidos vagos como “faça o site inteiro”, que aumentam o risco de mistura, regressão e decisões inventadas.

## 14. Como tratar divergências

Se o NotebookLM encontrar fontes incompatíveis, ele deve:

1. identificar os dois arquivos;
2. informar versão e data de cada um;
3. mostrar o conteúdo conflitante de forma breve;
4. procurar o estado em `DECISOES.md`;
5. indicar o impacto da divergência;
6. parar apenas a parte afetada;
7. pedir decisão de Willian quando o registro não resolver.

Ele não deve:

- escolher a frase mais recente sem conferir o estado;
- combinar dois preços;
- reativar alternativa descartada;
- preencher pendência com “melhor prática”;
- adaptar regra comercial para facilitar o código;
- concluir que um documento externo prevalece sobre decisão interna.

### 14.1 Prompt para reconciliação

> Há divergência sobre [ASSUNTO]. Localize todos os trechos relacionados, informe arquivo, versão, data, estado e ID. Depois proponha quais documentos precisariam ser atualizados para ficarem coerentes, sem decidir o conteúdo final.

## 15. Conteúdo externo e URLs

Um link escrito dentro de `FONTES.md` não significa que o NotebookLM importou e leu toda a página vinculada.

Quando uma tarefa depender do conteúdo atual de uma fonte externa:

1. abrir a fonte oficial fora do notebook e verificar se continua vigente;
2. importar a URL ou o arquivo como fonte separada no notebook de pesquisa adequado;
3. registrar data, afirmação sustentada e limitação;
4. não deixar a página externa permanentemente no notebook principal sem necessidade;
5. consolidar apenas a conclusão aprovada em `FONTES.md` ou no documento especializado.

Na documentação consultada, a importação de URL usa principalmente o texto HTML da página. Imagens, vídeos incorporados e páginas internas não devem ser presumidos como lidos.

## 16. Uso para produção de artigos

O NotebookLM deve apoiar a pesquisa e o briefing, não criar uma linha de montagem de artigos iguais.

### 16.1 Processo recomendado

1. escolher uma pergunta real;
2. conferir dados do Planejador de Palavras-chave quando relevantes;
3. selecionar `CONTEUDO-SEO.md`, `FONTES.md`, `DECISOES.md` e páginas relacionadas;
4. importar fontes externas específicas no notebook de pesquisa editorial;
5. pedir um briefing individual;
6. Willian fornecer experiência, opinião ou exemplo real;
7. redigir o conteúdo do zero;
8. conferir fatos e fontes;
9. revisar utilidade, clareza e links internos;
10. publicar com a data real;
11. medir e atualizar apenas quando houver motivo.

### 16.2 O que evitar

- pedir 100 artigos completos em um único comando;
- trocar apenas profissão ou cidade em um texto-base;
- publicar resposta sem verificação;
- usar uma fonte secundária quando existe fonte oficial acessível;
- inventar experiência em primeira pessoa;
- usar preço em artigo quando ele deve ficar na página comercial;
- inserir data retroativa;
- transformar autocomplete em prova de volume;
- garantir que Google ou uma IA recomendará a página.

## 17. Uso para estudos de caso e portfólio

Antes de adicionar materiais de um cliente ao NotebookLM:

1. definir se o caso será identificado ou anônimo;
2. verificar autorização para nome, marca, imagens e depoimento;
3. remover dados pessoais e acessos;
4. separar captura de tela pública de relatório interno;
5. registrar qual trabalho Willian realmente realizou;
6. não atribuir resultado sem medição confiável;
7. usar dados agregados quando possível.

Um estudo de caso pode demonstrar processo, problema, solução e entrega mesmo quando não existem métricas de vendas. Nesse caso, não transformar percepção em resultado quantitativo.

## 18. Privacidade e segurança

Não adicionar à base:

- senhas;
- tokens de API;
- códigos de recuperação;
- chaves privadas;
- cookies de sessão;
- credenciais do GitHub, Vercel, HostGator, Google, Meta ou Asaas;
- dados completos de cartão;
- listas de leads;
- telefone, e-mail ou CPF de clientes sem necessidade e base adequada;
- contratos assinados sem proteção;
- exportações de campanha que contenham dados pessoais;
- conversas privadas de clientes sem autorização;
- documentos de outro projeto.

Quando um dado sensível for necessário para a execução, ele deve permanecer na plataforma apropriada ou em armazenamento seguro, nunca dentro de um Markdown público ou de uma consulta comum do notebook.

## 19. Controle de qualidade da base

### 19.1 Verificação rápida após qualquer atualização

- [ ] Existe somente uma fonte com cada nome?
- [ ] A versão e a data correspondem ao arquivo local?
- [ ] `DECISOES.md` está atualizado?
- [ ] O documento especializado também foi atualizado?
- [ ] Alguma decisão antiga deveria estar marcada como substituída?
- [ ] O notebook recupera os preços atuais?
- [ ] O notebook diferencia confirmado, pendente e proposta?
- [ ] Nenhum arquivo de outro projeto apareceu?
- [ ] Nenhum dado sensível foi importado?
- [ ] As respostas citam fontes em vez de afirmar por memória?

### 19.2 Auditoria completa antes do Antigravity

Pedir:

> Audite todas as fontes da Anúncio e Site. Entregue: versões encontradas, possíveis duplicatas, conflitos entre documentos, pendências sem identificação, referências a ideias substituídas, dados ausentes que não podem ser inventados e riscos de mistura com outro projeto. Não proponha novas decisões até concluir a auditoria.

### 19.3 Sinais de que a base está desatualizada

- aparece landing page gratuita;
- aparece contrato de doze meses como oferta pública;
- aparece renovação anual de R$ 150 no lugar da mensalidade;
- aparece “mais de uma dezena” em vez de “dezenas”;
- Google Ads aparece com landing page inclusa;
- Meta Ads aparece com preço fixo não aprovado;
- o site é descrito como restrito a montadores de móveis;
- é prometido atendimento 24 horas;
- aparecem cores, funções ou nomes de outro projeto;
- uma pendência já resolvida continua sendo apresentada como aberta.

Se qualquer sinal aparecer, conferir duplicatas e versões antes de usar a resposta.

## 20. Rotina de manutenção

Não é necessário criar calendário fixo. Atualizar a base sempre que ocorrer um destes eventos:

- nova decisão aprovada;
- mudança de preço ou escopo;
- alteração de página ou rota;
- mudança da stack;
- nova regra de conteúdo;
- seleção de estudo de caso;
- mudança de hospedagem ou cobrança;
- atualização relevante de uma fonte externa;
- conclusão de uma fase do roadmap;
- descoberta de contradição.

### 20.1 Registro mínimo da mudança

Cada documento alterado deve indicar:

- nova versão;
- data;
- estado;
- conteúdo alterado;
- decisão substituída, quando houver;
- impacto nos demais arquivos.

Não criar várias fontes com sufixos. Substituir a fonte antiga e manter um único nome canônico.

## 21. Checklist de montagem do notebook

- [ ] Criar `Anúncio e Site — Base oficial do projeto`.
- [ ] Adicionar os onze arquivos do manifesto individualmente.
- [ ] Conferir os cabeçalhos das fontes.
- [ ] Executar o teste de integridade.
- [ ] Executar o teste das decisões comerciais.
- [ ] Salvar a instrução-padrão da seção 8 para reutilização.
- [ ] Confirmar que `README.md` versão 1.1 entrou uma única vez.
- [ ] Confirmar que não há conteúdo de outro projeto.
- [ ] Criar notebook de mercado apenas se houver pesquisa externa extensa.
- [ ] Definir quem fará a substituição de fontes depois das mudanças — inicialmente, Willian.

## 22. Referências oficiais sobre o NotebookLM

- [Adicionar e descobrir fontes no NotebookLM](https://support.google.com/gemininotebook/answer/16215270?co=GENIE.Platform%3DDesktop&hl=pt-BR)
- [Perguntas frequentes do NotebookLM](https://support.google.com/gemininotebook/answer/16269187?hl=pt-BR)
- [`FONTES.md`](FONTES.md), para o registro de evidências e limitações do projeto

As funções, limites e nomes da interface podem mudar. Conferir a ajuda oficial antes de automatizar ou depender de um comportamento específico.

## 23. Instrução curta para NotebookLM e outras IAs

> O NotebookLM é uma camada de consulta, não a autoridade do projeto. Use `DECISOES.md` para identificar o estado e o documento especializado para os detalhes. Cite arquivos e IDs, não invente lacunas, não reative decisões substituídas, não misture projetos e identifique qualquer sugestão nova como não aprovada. Quando os arquivos mudarem, substitua as fontes antigas antes de continuar.
