# README.md — Documentação da Anúncio e Site

**Versão:** 1.1  
**Data:** 11 de setembro de 2026  
**Estado:** auditoria cruzada concluída; pacote documental pronto para importação, com pendências operacionais registradas  
**Responsável pelas decisões:** Willian Souza

## 1. Função deste arquivo

Este `README.md` é a porta de entrada da documentação do projeto **Anúncio e Site**.

Ele serve para:

- explicar como os arquivos estão organizados;
- indicar qual documento consultar em cada situação;
- orientar o uso da documentação no Antigravity e no NotebookLM;
- evitar que decisões antigas, sugestões de IA ou informações de outros projetos sejam usadas por engano;
- registrar o ponto de partida antes da construção do site.

Este arquivo não substitui os documentos especializados. Ele apresenta o mapa; os detalhes permanecem em `PRODUCT.md` e na pasta `docs/`.

## 2. Onde este README fica

Existe **um único `README.md`**, localizado na raiz do projeto. Não haverá outro `README.md` dentro da pasta `docs` nesta estrutura.

```text
raiz-do-projeto/
├── README.md
├── PRODUCT.md
└── docs/
    ├── ARQUITETURA.md
    ├── CONTEUDO-SEO.md
    ├── DECISOES.md
    ├── DESIGN.md
    ├── FONTES.md
    ├── IMPLEMENTACAO.md
    ├── NOTEBOOKLM.md
    ├── OFERTA.md
    ├── ROADMAP.md
    ├── pesquisa/
    │   ├── esqueletos_artigos_nichos.json
    │   └── tabela_prioridade_nichos.json
    └── referencias/
        └── autocomplete-landing-pages-profissoes.png
```

Portanto, a orientação de “colocar o conteúdo na raiz do projeto” significa preservar exatamente essa hierarquia:

- `README.md` e `PRODUCT.md` ficam na raiz;
- a pasta `docs` também fica na raiz;
- os nove documentos especializados continuam dentro de `docs`;
- os materiais auxiliares permanecem em `docs/pesquisa` e `docs/referencias`;
- os arquivos de `docs` não devem ser movidos individualmente para a raiz.

O `README.md` da raiz também é o arquivo normalmente exibido como apresentação inicial quando o repositório é aberto no GitHub.

## 3. O que esta documentação representa

Este conjunto é a fonte interna de verdade para a concepção, construção e evolução do site da **Anúncio e Site**.

Ele reúne:

- posicionamento do negócio;
- público e diferenciais;
- ofertas, preços e limites de escopo;
- páginas e jornadas de conversão;
- direção visual;
- estratégia de conteúdo, SEO e visibilidade em mecanismos de IA;
- stack técnica, publicação e medição;
- decisões confirmadas, substituídas e pendentes;
- fontes externas utilizadas;
- roteiro de execução;
- instruções para manter uma base de conhecimento no NotebookLM.

Os arquivos são documentos internos. Eles não são páginas públicas do site e não devem ser colocados em `src/pages`, `public` ou em outra pasta que os exponha ao visitante.

## 4. Ordem recomendada de leitura

Para compreender o projeto inteiro, seguir esta ordem:

1. `README.md` — entender a estrutura e as regras de uso;
2. [`docs/DECISOES.md`](docs/DECISOES.md) — verificar o que está confirmado, pendente ou substituído;
3. [`PRODUCT.md`](PRODUCT.md) — compreender o negócio, o público, o posicionamento e os objetivos;
4. documento especializado relacionado à tarefa atual;
5. [`docs/ROADMAP.md`](docs/ROADMAP.md) — confirmar a sequência de execução e as dependências;
6. [`docs/FONTES.md`](docs/FONTES.md) — consultar evidências e limitações quando a tarefa depender de afirmação externa.

Não é necessário reler todos os arquivos a cada pequena tarefa. É obrigatório, porém, ler `DECISOES.md` e o documento especializado do assunto antes de alterar oferta, conteúdo, design, arquitetura ou implementação.

## 5. Mapa dos documentos

| Caminho | Versão atual | Função principal | Consultar quando |
|---|---:|---|---|
| [`README.md`](README.md) | 1.1 | Porta de entrada, estrutura e regras de uso | Ao iniciar o projeto ou orientar uma nova IA |
| [`PRODUCT.md`](PRODUCT.md) | 0.3 | Visão do produto, posicionamento, público, serviços e objetivos | Ao decidir o que o negócio e o site precisam comunicar |
| [`docs/DECISOES.md`](docs/DECISOES.md) | 1.1 | Registro consolidado do que está ativo, pendente e substituído | Antes de qualquer decisão, conteúdo ou implementação |
| [`docs/OFERTA.md`](docs/OFERTA.md) | 0.2 | Preços, entregas, limites, pagamentos e condições comerciais | Ao criar páginas comerciais, propostas ou respostas de venda |
| [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md) | 0.3 | Mapa do site, rotas, menus, seções e jornadas | Ao criar páginas, navegação e links internos |
| [`docs/DESIGN.md`](docs/DESIGN.md) | 0.2 | Direção visual, tipografia, cores, movimento e componentes | Ao desenhar ou revisar a interface |
| [`docs/CONTEUDO-SEO.md`](docs/CONTEUDO-SEO.md) | 0.4 | Conteúdo, SEO, GEO, blog, autoria e qualidade editorial | Ao pesquisar palavras-chave ou produzir páginas e artigos |
| [`docs/IMPLEMENTACAO.md`](docs/IMPLEMENTACAO.md) | 0.3 | Stack, CMS, GitHub, Vercel, domínio, medição e verificações | Ao programar, publicar ou operar o site |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | 0.3 | Fases, dependências, entregas e critérios de conclusão | Ao escolher o próximo trabalho a executar |
| [`docs/FONTES.md`](docs/FONTES.md) | 1.1 | Evidências, referências oficiais, datas e limites de uso | Ao validar afirmações técnicas, comerciais ou editoriais |
| [`docs/NOTEBOOKLM.md`](docs/NOTEBOOKLM.md) | 1.1 | Montagem, consulta e manutenção da base no NotebookLM | Ao configurar ou atualizar o notebook do projeto |

Materiais auxiliares:

| Caminho | Função | Regra de uso |
|---|---|---|
| [`docs/pesquisa/tabela_prioridade_nichos.json`](docs/pesquisa/tabela_prioridade_nichos.json) | Banco bruto de 121 nichos | Não é priorização oficial nem comprovação de demanda |
| [`docs/pesquisa/esqueletos_artigos_nichos.json`](docs/pesquisa/esqueletos_artigos_nichos.json) | Esqueletos recebidos para os mesmos nichos | Não usar como molde de publicação em massa |
| [`docs/referencias/autocomplete-landing-pages-profissoes.png`](docs/referencias/autocomplete-landing-pages-profissoes.png) | Registro visual de sugestões do autocomplete | Inspira pesquisa; não comprova volume de busca |

As versões acima descrevem o pacote em 11 de setembro de 2026. Quando um documento mudar, atualizar a versão nele e revisar este mapa durante a próxima auditoria geral.

## 6. Regra de autoridade entre os arquivos

Quando duas orientações parecerem diferentes, aplicar esta ordem:

1. a decisão explícita mais recente de Willian prevalece;
2. `docs/DECISOES.md` informa se a decisão está ativa, pendente ou substituída;
3. o documento especializado define os detalhes do assunto;
4. `PRODUCT.md` apresenta a visão geral do produto;
5. `FONTES.md` sustenta informações externas, mas não decide sozinho o que o negócio fará;
6. este `README.md` orienta a navegação e não deve sobrescrever uma regra detalhada.

Se ainda houver contradição:

- não escolher uma versão por suposição;
- interromper somente a parte afetada;
- registrar a divergência;
- pedir a decisão de Willian;
- atualizar `DECISOES.md` e o documento especializado antes de prosseguir.

## 7. Estados utilizados

| Estado | Significado |
|---|---|
| **CONFIRMADO** | Aprovado por Willian e válido para o projeto. |
| **PENDENTE** | Depende de dado, escolha, validação ou material real. Não inventar. |
| **SUBSTITUÍDO** | Já foi considerado, mas não está mais ativo. Serve apenas como histórico. |
| **PROPOSTA** | Pode ser testado ou apresentado, mas ainda não foi aprovado. |

Uma sugestão de IA, da IDE, de uma referência ou de um concorrente não se torna **CONFIRMADA** automaticamente.

## 8. Resumo atual do projeto

### 8.1 Marca e posicionamento

- nome público: **Anúncio e Site**;
- responsável: **Willian Souza**;
- base: **Novo Hamburgo, Rio Grande do Sul**;
- atendimento remoto para todo o Brasil;
- possibilidade de reunião presencial no Vale dos Sinos ou na Grande Porto Alegre, conforme necessidade e disponibilidade;
- foco em prestadores de serviços e pequenos negócios;
- primeiro recorte profissional: montadores de móveis;
- atendimento, planejamento, execução e suporte feitos diretamente por Willian, sem central de atendimento e sem terceirização;
- prova de experiência autorizada: **“dezenas de sites e landing pages”**;
- canal principal de conversão no lançamento: WhatsApp.

### 8.2 Serviços

- criação de landing pages;
- criação de sites institucionais;
- sites com blog ou painel editorial sob orçamento;
- gestão de Google Ads;
- gestão de Meta Ads sob análise do projeto.

### 8.3 Oferta pública inicial

| Serviço | Condição pública atual |
|---|---|
| Landing page básica | A partir de **R$ 399**, com até 5 seções, mais **R$ 19,90 por período mensal** a partir de 30 dias após a publicação |
| Pagamento da criação | 50% para iniciar e 50% após a aprovação da apresentação, antes da publicação definitiva |
| Site institucional | Sob orçamento |
| Site com blog ou painel | Sob orçamento |
| Google Ads para prestadores de serviços | Gestão a partir de **R$ 390 por mês**, com investimento em mídia pago diretamente pelo cliente à plataforma |
| Google Ads para outros setores | Sob análise |
| Meta Ads | Sob análise e proposta personalizada |

Este é apenas um resumo operacional. Antes de publicar preços, redigir uma proposta ou prometer uma entrega, consultar `docs/OFERTA.md` e `docs/DECISOES.md`.

Não estão ativos como oferta pública:

- landing page grátis;
- landing page incluída sem custo na gestão de anúncios;
- site sem entrada mediante contrato público de 12 meses;
- hospedagem a R$ 150 por ano;
- sincronização automática de avaliações do Google;
- promessa garantida de posição, contatos, vendas ou retorno financeiro.

### 8.4 Direção visual

- visual predominantemente escuro, alternado com seções claras para criar ritmo;
- laranja forte como destaque;
- Archivo nos títulos e Inter nos textos e elementos de interface;
- logotipo tipográfico inicial com o nome **Anúncio e Site**;
- cantos retos ou discretamente arredondados;
- animações sutis e compatíveis com acessibilidade;
- aparência autoral, evitando padrões genéricos associados a templates e sites com “cara de IA”;
- foto real de Willian na seção de atendimento pessoal.

### 8.5 Direção técnica

- Astro;
- TypeScript;
- CSS personalizado;
- páginas estáticas e JavaScript mínimo sempre que possível;
- Keystatic Cloud integrado ao GitHub para artigos e estudos de caso;
- Markdoc para o conteúdo editorial;
- repositório privado no GitHub;
- publicação pela Vercel;
- domínio canônico `https://www.anuncioesite.com.br`;
- domínio sem `www` redirecionado permanentemente para o canônico, preservando o caminho;
- `noindex, nofollow` durante a construção no domínio real;
- GTM e GA4 instalados depois que o site estiver pronto e antes da medição de produção;
- WhatsApp habilitado somente após existir um número definitivo e testado.

### 8.6 Conteúdo inicial

- blog com 15 a 20 artigos muito bons no lançamento;
- artigos assinados pessoalmente por Willian;
- resposta principal já no primeiro parágrafo;
- texto escrito do zero para uma pergunta e intenção próprias;
- revisão humana, conferência factual e aprovação antes da publicação;
- datas reais de publicação, sem retroagir datas para simular antiguidade;
- preços concentrados nas páginas comerciais;
- primeiro conteúdo específico por profissão voltado a montadores de móveis;
- pelo menos três estudos de caso reais no lançamento;
- foco local nas páginas regionais e alcance nacional no blog.

## 9. Pendências que não podem ser inventadas

As pendências completas estão em `docs/DECISOES.md`. As mais importantes neste momento são:

- provedor e meios definitivos de cobrança;
- regras de inadimplência, suspensão, reativação e cancelamento;
- rotina de cópias de segurança;
- número público do WhatsApp;
- hospedagem compatível com uso comercial depois da fase de construção;
- seleção de pelo menos três projetos reais para o portfólio;
- autorizações para nomes, depoimentos e métricas;
- validação dos dois hosts do domínio;
- dados finais de medição, consentimento e privacidade;
- nome definitivo do repositório;
- códigos finais da paleta e escala tipográfica.

Uma pendência não impede automaticamente todo o desenvolvimento. Consultar o roadmap para saber em qual fase ela se torna bloqueadora.

## 10. Como levar esta documentação para o Antigravity

### 10.1 Estrutura de destino

Copiar ou extrair o pacote **dentro da raiz do repositório do site**, preservando a árvore apresentada na seção 2.

Exemplo:

```text
repositorio-do-site/
├── README.md
├── PRODUCT.md
├── docs/
├── src/
├── public/
├── package.json
└── demais arquivos do projeto
```

Se o repositório já contiver um `README.md`, comparar os dois antes da substituição. O objetivo é manter estas instruções do projeto sem apagar informações técnicas úteis que já existam. Quando necessário, integrar a apresentação do repositório e este guia em um único `README.md` coerente.

Não criar um segundo `README.md` dentro de `docs` apenas para resolver esse conflito.

### 10.2 Leitura mínima antes de programar

Para qualquer tarefa de implementação, a IA usada no Antigravity deverá ler:

1. `README.md`;
2. `docs/DECISOES.md`;
3. `PRODUCT.md`;
4. `docs/IMPLEMENTACAO.md`;
5. o documento especializado relacionado à tarefa;
6. a fase correspondente em `docs/ROADMAP.md`.

### 10.3 Instrução inicial sugerida

```text
Você está trabalhando exclusivamente no projeto Anúncio e Site.

Antes de alterar arquivos, leia README.md, docs/DECISOES.md, PRODUCT.md,
docs/IMPLEMENTACAO.md e o documento especializado da tarefa.

Trate CONFIRMADO como regra ativa. Não implemente itens PENDENTES por suposição
e nunca recupere decisões marcadas como SUBSTITUÍDAS. Não misture referências,
arquivos, nomes, textos ou decisões de outros projetos.

Informe quais arquivos pretende alterar, preserve mudanças existentes que não
pertençam à tarefa e valide o resultado conforme os critérios da documentação.
```

## 11. Como usar no NotebookLM

O processo completo está em [`docs/NOTEBOOKLM.md`](docs/NOTEBOOKLM.md).

Uso resumido:

1. concluir a auditoria final dos documentos;
2. criar um notebook principal exclusivo da Anúncio e Site;
3. importar os arquivos aprovados como fontes separadas;
4. usar `DECISOES.md` para conferir o estado atual;
5. manter os nomes originais dos arquivos;
6. substituir a fonte correspondente sempre que um documento for atualizado;
7. testar se o notebook diferencia decisões confirmadas, pendentes e substituídas.

O NotebookLM funciona como camada de consulta. Ele não aprova decisões e não substitui os arquivos versionados no repositório.

O `README.md` faz parte do manifesto definitivo e deverá entrar como uma das onze fontes Markdown do notebook principal. Os JSONs e a captura de autocomplete permanecem fora desse notebook; poderão ser consultados separadamente como pesquisa bruta.

## 12. Fluxo para alterar uma decisão

Quando Willian aprovar uma mudança:

1. identificar o assunto e o documento especializado responsável;
2. atualizar o detalhe nesse documento;
3. atualizar o estado ou criar o registro correspondente em `docs/DECISOES.md`;
4. marcar a regra anterior como **SUBSTITUÍDA** quando houver risco de ela voltar a ser usada;
5. verificar reflexos em `PRODUCT.md`, `ROADMAP.md`, `FONTES.md` e neste mapa;
6. incrementar a versão e atualizar a data dos arquivos modificados;
7. revisar links e contradições;
8. registrar a alteração no Git;
9. substituir as fontes correspondentes no NotebookLM.

Não corrigir uma divergência apenas no código. Se a implementação exigir mudar uma regra do negócio, a documentação deve ser decidida e atualizada primeiro.

## 13. Regras para IAs e colaboradores

Qualquer IA ou pessoa que trabalhe neste projeto deverá:

- usar somente informações pertencentes à Anúncio e Site;
- não misturar este projeto com o Projeto Topo ou qualquer outro projeto;
- não inventar telefone, cliente, depoimento, resultado, métrica, preço, prazo ou autorização;
- não tratar proposta como decisão aprovada;
- não reativar ideias marcadas como substituídas;
- não alterar regra comercial apenas para facilitar o código;
- não publicar conteúdo em massa a partir dos arquivos de pesquisa de nichos;
- não criar páginas de cidade ou profissão trocando apenas o nome do local ou do serviço;
- não prometer recomendação por IA, posição no Google, número de leads ou vendas;
- não inserir segredos, tokens, senhas ou dados pessoais de clientes nos arquivos versionados;
- preservar autoria, fontes e limitações das afirmações;
- parar e pedir decisão quando uma pendência bloquear a tarefa.

## 14. Segurança e privacidade

Nunca registrar nesta documentação ou no repositório:

- senhas;
- chaves privadas;
- tokens de acesso;
- dados completos de cartão;
- documentos pessoais de clientes;
- listas de leads;
- informações confidenciais de campanhas;
- arquivos ou imagens sem autorização de uso.

Variáveis sensíveis deverão permanecer na configuração segura do ambiente de publicação. Materiais de clientes usados em estudos de caso precisam de autorização ou anonimização.

## 15. Quando a documentação estará pronta para implementação

A base estará pronta para ser entregue ao Antigravity quando:

- os onze documentos Markdown e os três materiais auxiliares estiverem presentes na estrutura correta;
- os links internos funcionarem;
- versões e estados estiverem coerentes;
- decisões substituídas não aparecerem como ofertas ativas;
- pendências estiverem identificadas sem respostas inventadas;
- o mapa deste `README.md` corresponder aos arquivos reais;
- a auditoria cruzada não encontrar mistura com outro projeto;
- o próximo passo do roadmap estiver claro.

Estar pronta para implementação não significa que todas as pendências comerciais já foram resolvidas. Algumas podem ser concluídas durante o protótipo; as que bloqueiam publicação ou contratação devem ser fechadas antes dessas etapas.

## 16. Próximo passo

A auditoria cruzada desta base foi concluída em 11 de setembro de 2026. O próximo passo é colocar o pacote documental na raiz do repositório da Anúncio e Site, preservando a estrutura de pastas.

Depois da importação:

1. revisar e aprovar a ordem do `docs/ROADMAP.md`;
2. montar o notebook principal com as onze fontes Markdown de `docs/NOTEBOOKLM.md`;
3. iniciar em paralelo as pendências operacionais da Fase 1 e a coleta de ativos da Fase 2;
4. começar a fundação técnica da Fase 3 sem retirar o `noindex`;
5. manter preços, contatos, provas e pendências subordinados a `docs/DECISOES.md`.
