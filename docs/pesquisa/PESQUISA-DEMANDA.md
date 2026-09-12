# PESQUISA-DEMANDA.md — Demanda, intenção de busca e prioridades de validação

**Versão:** 0.1  
**Data:** 11 de setembro de 2026  
**Estado:** pesquisa provisória; falta validação quantitativa no Planejador de Palavras-chave  
**Responsável pela decisão final:** Willian Souza

## 1. Função deste documento

Este arquivo organiza o que precisa ser pesquisado para entender a demanda por landing pages, sites e gestão de tráfego pago para a **Anúncio e Site**.

Ele não redefine público, preços, rotas ou oferta. Essas decisões permanecem em `PRODUCT.md`, `docs/DECISOES.md`, `docs/OFERTA.md` e `docs/ARQUITETURA.md`.

Esta versão não contém volume de busca, CPC ou projeção de leads porque ainda não foram importados dados do Planejador de Palavras-chave. Termos e prioridades indicados aqui são hipóteses de pesquisa, não comprovação de procura.

## 2. Resposta executiva

A estrutura aprovada já permite iniciar o site sem esperar por uma pesquisa perfeita:

- a marca atende prestadores de serviços e pequenos negócios;
- as páginas principais apresentam landing pages, sites, Google Ads e Meta Ads;
- o primeiro recorte profissional é montadores de móveis;
- a página regional inicial é focada em Novo Hamburgo, com contexto verdadeiro para Vale dos Sinos e Grande Porto Alegre;
- o blog terá alcance nacional.

O que falta medir é **quais termos têm procura suficiente, intenção comercial adequada e aderência real à oferta**. Essa medição servirá para priorizar conteúdo e futuras páginas, não para alterar automaticamente a arquitetura já aprovada.

## 3. Tipos de evidência

| Classificação | O que significa | Pode decidir uma página sozinho? |
|---|---|---:|
| Decisão interna | Escolha confirmada por Willian nos documentos oficiais | Sim, quando a página já está aprovada |
| Dado verificado | Métrica exportada de uma ferramenta com período e localização registrados | Não; também exige utilidade e aderência à oferta |
| Sinal de linguagem | Autocomplete, perguntas relacionadas, conversas e termos usados por clientes | Não; serve para descobrir vocabulário e dúvidas |
| Experiência própria | Padrões observados por Willian em projetos e contatos reais | Não isoladamente; ajuda a avaliar relevância e produzir conteúdo original |
| Hipótese | Termo ou pauta ainda sem validação | Não |

## 4. Escopo comercial que a pesquisa deve respeitar

| Tema | Escopo aprovado |
|---|---|
| Landing page | A partir de R$ 399, até 5 seções principais, conforme `docs/OFERTA.md` |
| Hospedagem e suporte | R$ 19,90 por período de 30 dias depois dos primeiros 30 dias incluídos |
| Site institucional e blog | Orçamento conforme o projeto |
| Google Ads | A partir de R$ 390 por mês para prestadores de serviços |
| Meta Ads | Análise e proposta personalizada |
| Conversão no lançamento | WhatsApp |
| Atendimento | Remoto para todo o Brasil; possibilidade presencial para clientes locais |

Não pesquisar ou produzir conteúdo como se a empresa vendesse landing page grátis, template pronto, logotipo, tratamento profissional de imagens ou página incluída sem custo na gestão de anúncios.

## 5. Grupos de intenção a investigar

### 5.1 Landing pages

| Termo semente | Intenção provável | Destino aprovado ou provável |
|---|---|---|
| criação de landing page | Comercial | `/landing-pages/` |
| landing page profissional | Comercial | `/landing-pages/` |
| landing page preço | Comercial e comparativa | `/landing-pages/` |
| quanto custa uma landing page | Informacional com proximidade de compra | artigo, apontando para `/landing-pages/` |
| landing page para prestador de serviço | Comercial | inicialmente `/landing-pages/`; página própria somente após validação |
| landing page para anúncios | Comercial | `/landing-pages/` |
| landing page para Google Ads | Comercial | `/landing-pages/` e `/google-ads/` |
| landing page ou site | Comparativa | artigo |

### 5.2 Sites

| Termo semente | Intenção provável | Destino aprovado ou provável |
|---|---|---|
| criação de site profissional | Comercial | `/sites/` |
| site para prestador de serviço | Comercial | `/sites/` |
| criação de site para pequena empresa | Comercial | `/sites/` |
| quanto custa criar um site | Informacional com proximidade de compra | artigo, sem preço comercial solto |
| site institucional ou landing page | Comparativa | artigo |
| preciso de site para anunciar no Google | Informacional/comercial | artigo e páginas de serviço relacionadas |

### 5.3 Google Ads e Meta Ads

| Termo semente | Intenção provável | Destino aprovado ou provável |
|---|---|---|
| gestão de Google Ads | Comercial | `/google-ads/` |
| gestor de tráfego Google Ads | Comercial | `/google-ads/` |
| Google Ads para prestadores de serviços | Comercial | `/google-ads/` |
| quanto custa gestão de Google Ads | Informacional com proximidade de compra | artigo e `/google-ads/` |
| gestão de Meta Ads | Comercial | `/meta-ads/` |
| gestor de tráfego Meta Ads | Comercial | `/meta-ads/` |
| Google Ads ou Meta Ads para prestador de serviço | Comparativa | artigo |
| quanto investir em anúncios para serviços | Informacional | artigo, sem prometer retorno |

### 5.4 Novo Hamburgo e região

| Termo semente | Intenção provável | Destino aprovado ou provável |
|---|---|---|
| criação de sites Novo Hamburgo | Local e comercial | `/criacao-de-sites-novo-hamburgo/` |
| criação de landing page Novo Hamburgo | Local e comercial | inicialmente a página regional aprovada |
| gestor de tráfego Novo Hamburgo | Local e comercial | medir antes de criar rota própria |
| Google Ads Novo Hamburgo | Local e comercial | medir antes de criar rota própria |
| criação de sites Vale dos Sinos | Regional e comercial | contexto na página regional; rota própria só após validação |
| criação de sites São Leopoldo | Local e comercial | hipótese futura |
| criação de sites Porto Alegre | Local e comercial | contexto regional; rota própria só após validação |
| landing page Porto Alegre | Local e comercial | hipótese futura |
| gestor de tráfego Porto Alegre | Local e comercial | hipótese futura |

A presença de um termo nessa lista não aprova uma nova URL. Páginas de cidade só serão criadas quando houver demanda ou razão estratégica, conteúdo próprio e utilidade local real.

### 5.5 Montadores de móveis

| Termo semente | Intenção provável | Destino aprovado ou provável |
|---|---|---|
| landing page para montador de móveis | Comercial | `/landing-pages/montador-de-moveis/` |
| site para montador de móveis | Comercial | `/landing-pages/montador-de-moveis/` ou `/sites/`, conforme intenção observada |
| Google Ads para montador de móveis | Comercial/informacional | artigo e `/google-ads/` |
| como divulgar serviço de montagem de móveis | Informacional | artigo |
| como conseguir clientes para montagem de móveis | Informacional | artigo, desde que a abordagem permaneça ligada à presença digital e anúncios |
| anúncio para montador de móveis | Comercial/informacional | artigo e páginas de Ads |

O blog não deve virar um portal sobre técnicas de montagem, ferramentas, formalização de MEI ou manutenção de móveis. A pauta só pertence ao projeto quando ajuda o prestador a compreender site, landing page, captação, atendimento ou anúncios online.

## 6. Rodadas no Planejador de Palavras-chave

Willian deverá executar duas pesquisas separadas em **Descobrir novas palavras-chave**, mantendo idioma, rede e período registrados no arquivo exportado.

### 6.1 Rodada nacional

**Local:** Brasil  
**Idioma:** português  
**Rede:** Google  
**Período inicial:** últimos 12 meses

Inserir estes dez termos:

1. criação de landing page
2. landing page profissional
3. landing page preço
4. site para prestador de serviço
5. criação de site profissional
6. gestão de Google Ads
7. gestor de tráfego pago
8. Google Ads para prestadores de serviços
9. gestão de Meta Ads
10. site para montador de móveis

Exportar todas as ideias, não somente os dez termos fornecidos.

### 6.2 Rodada regional

**Locais:** Novo Hamburgo, São Leopoldo, Vale dos Sinos quando disponível como segmentação, Porto Alegre e municípios relevantes da Grande Porto Alegre  
**Idioma:** português  
**Rede:** Google  
**Período inicial:** últimos 12 meses

Inserir estes dez termos:

1. criação de site Novo Hamburgo
2. criação de landing page Novo Hamburgo
3. gestor de tráfego Novo Hamburgo
4. Google Ads Novo Hamburgo
5. criação de site São Leopoldo
6. criação de site Vale dos Sinos
7. criação de site Porto Alegre
8. landing page Porto Alegre
9. gestor de tráfego Porto Alegre
10. agência Google Ads Porto Alegre

Se a ferramenta não aceitar uma região ampla como Vale dos Sinos, registrar as cidades selecionadas individualmente. Não misturar a rodada nacional com a regional.

### 6.3 O que precisa acompanhar cada CSV

- data da exportação;
- período analisado;
- idioma;
- rede utilizada;
- lista exata de localidades;
- média de pesquisas mensais;
- variação em três meses, quando disponível;
- variação anual, quando disponível;
- concorrência anunciada;
- lance de topo de página nas faixas inferior e superior, quando disponível;
- captura ou anotação das configurações usadas.

O CPC e a concorrência do Google Ads indicam o ambiente de mídia paga. Não são, sozinhos, uma pontuação de dificuldade orgânica.

## 7. Como os dados serão avaliados

Depois da importação, cada grupo receberá notas relativas ao próprio conjunto pesquisado:

| Critério | Escala | Pergunta |
|---|---:|---|
| Aderência à oferta | 0–3 | O termo descreve algo que a Anúncio e Site realmente vende? |
| Intenção comercial | 0–3 | A pessoa parece próxima de contratar ou apenas quer informação distante? |
| Demanda relativa | 0–3 | O volume é relevante quando comparado aos demais termos do mesmo recorte? |
| Sinal econômico | 0–2 | Os lances sugerem valor comercial, sem serem confundidos com garantia de venda? |
| Capacidade de produzir algo próprio | 0–2 | Willian tem experiência, caso, processo ou orientação útil para acrescentar? |
| Adequação estratégica | 0–2 | O termo reforça o público e as páginas aprovadas? |

A pontuação organiza prioridades; não substitui análise humana da SERP, da oferta e da utilidade para o visitante.

## 8. Prioridades provisórias antes dos CSVs

### Prioridade de implementação já confirmada

Estas páginas não dependem de volume para existirem, porque cumprem o papel comercial e institucional aprovado:

- `/landing-pages/`;
- `/sites/`;
- `/google-ads/`;
- `/meta-ads/`;
- `/landing-pages/montador-de-moveis/`;
- `/criacao-de-sites-novo-hamburgo/`.

### Hipóteses de conteúdo a validar primeiro

1. Quanto custa uma landing page profissional?
2. Landing page ou site: qual escolher para um prestador de serviço?
3. O que uma landing page para anúncios precisa ter?
4. Como saber se uma landing page está pronta para Google Ads?
5. Quanto custa a gestão de Google Ads para prestadores de serviços?
6. Google Ads ou Meta Ads: qual faz mais sentido para serviços locais?
7. Quanto investir no Google Ads no início?
8. Site lento desperdiça verba de anúncio?
9. O que deve ter em um site para prestador de serviço?
10. Vale a pena ter site quando o negócio já usa Instagram?
11. Como um montador de móveis pode divulgar o serviço no Google?
12. O que colocar em uma landing page para montador de móveis?
13. Site para montador de móveis ajuda a receber pedidos de orçamento?
14. Como escolher as cidades atendidas em uma campanha de serviço local?
15. Botão de WhatsApp ou formulário: qual usar na landing page?
16. Domínio e hospedagem: qual é a diferença?
17. O que é uma seção de landing page?
18. Quanto tempo leva para criar uma landing page?
19. O que pedir ao profissional antes de contratar uma landing page?
20. Como avaliar se o preço de uma landing page inclui o que o negócio precisa?

Os títulos são pautas provisórias. Cada artigo publicado deverá ter briefing próprio, resposta direta no primeiro parágrafo, experiência real, pesquisa específica e revisão de Willian.

## 9. Sinais complementares

### 9.1 Google Trends

Usar para comparar direção e sazonalidade de grupos que tenham dados suficientes. O índice do Trends é relativo; não deve ser apresentado como volume absoluto.

### 9.2 Autocomplete e perguntas relacionadas

Servem para registrar o vocabulário usado nas buscas. A captura já preservada sobre “landing page para” é um ponto de partida, mas não comprova volume, dificuldade ou valor comercial.

### 9.3 Search Console

Depois do lançamento, será a fonte principal para descobrir consultas reais que geram impressões e cliques para o próprio domínio. Revisar por página, país, dispositivo e período.

### 9.4 Contatos e vendas

Registrar, sem dados pessoais desnecessários:

- serviço procurado;
- profissão e região;
- dúvida inicial;
- página de origem quando conhecida;
- se o contato era qualificado;
- se houve proposta e fechamento.

Uma palavra-chave com pouco volume pode continuar importante se gerar contatos muito aderentes. Um termo com muitas buscas pode ser descartado se trouxer público errado.

## 10. Regras para criar novas páginas

Uma nova página de profissão ou cidade só deve avançar quando atender aos quatro requisitos:

1. intenção distinta ou necessidade comercial real;
2. conteúdo específico que não seja apenas troca do nome da profissão ou cidade;
3. experiência, exemplos, processo ou orientação própria suficiente;
4. papel claro na navegação e nos links internos.

Não criar dezenas de rotas a partir dos arquivos JSON de nichos. Eles são banco de ideias, não evidência de demanda.

## 11. O que ainda não pode ser afirmado

Até a análise dos CSVs, não publicar como fato que:

- determinada palavra-chave tem alta demanda;
- Novo Hamburgo, Porto Alegre ou outra cidade é o melhor mercado;
- montadores de móveis são o nicho mais lucrativo;
- um termo tem CPC baixo ou alta conversão;
- existe uma quantidade prevista de leads;
- uma pauta será fácil de posicionar;
- 15, 20 ou 30 artigos produzirão tráfego em um prazo específico.

## 12. Entrega necessária de Willian

Para transformar este documento em versão 1.0, Willian precisa enviar apenas:

- `planejador-palavras-chave-brasil.csv`;
- `planejador-palavras-chave-regional.csv`;
- a anotação ou captura com período, idioma, rede e localidades de cada rodada.

Depois disso, a Anúncio e Site poderá receber uma matriz quantitativa, a priorização final das pautas e recomendações sobre quais hipóteses merecem página própria.

## 13. Fontes e limites

- [Google Ads — Usar o Planejador de Palavras-chave](https://support.google.com/google-ads/answer/7337243?hl=pt-BR): fonte da metodologia de descoberta e estimativas; não garante tráfego ou conversão.
- [Google Search Console — Relatório de desempenho](https://support.google.com/webmasters/answer/7576553?hl=pt-BR): fonte futura de consultas reais do domínio; só terá utilidade depois de o site acumular dados.
- `docs/DECISOES.md`, `docs/ARQUITETURA.md` e `docs/CONTEUDO-SEO.md`: fontes internas para público, rotas e limites editoriais.
- `docs/pesquisa/tabela_prioridade_nichos.json`, `docs/pesquisa/esqueletos_artigos_nichos.json` e a captura de autocomplete: insumos brutos; não comprovam demanda.

