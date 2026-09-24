# ARQUITETURA.md — Páginas, navegação e jornadas

**Versão:** 0.4
**Data:** 24 de setembro de 2026
**Status:** arquitetura auditada e alinhada à implementação; `/contato`, `/politica-de-privacidade/` e página 404 já publicados; projetos dos estudos de caso ainda precisam ser selecionados
**Responsável:** Willian Souza

## 1. Função deste documento

Este documento define:

- quais páginas existirão;
- a função de cada página;
- os caminhos e padrões de URL;
- a navegação principal e o rodapé;
- a ordem das seções;
- as jornadas até o WhatsApp;
- as conexões entre serviços, profissões, regiões, portfólio e blog;
- o que entra no lançamento e o que será adicionado depois.

Ele não define a aparência final, as cores ou todos os textos. A identidade visual será detalhada em `DESIGN.md`, e a redação e estratégia editorial serão detalhadas em `CONTEUDO-SEO.md`.

As condições comerciais seguem `OFERTA.md`. Se houver diferença entre uma página e o documento de oferta, `OFERTA.md` deverá ser revisado antes da publicação.

## 2. Princípios da arquitetura

### 2.1 Valor antes do preço

As páginas comerciais deverão primeiro mostrar como uma presença digital bem construída pode ajudar o prestador de serviços a:

- apresentar melhor seu trabalho;
- transmitir confiança;
- explicar claramente o que oferece;
- ser encontrado por potenciais clientes;
- transformar visitas em oportunidades de conversa;
- aproveitar melhor campanhas de anúncios.

O preço aparecerá depois que o visitante compreender a utilidade do serviço. A comunicação poderá falar em ajudar a conquistar clientes e gerar oportunidades, sem garantir vendas, quantidade de contatos ou retorno financeiro.

### 2.2 Uma intenção principal por página

Cada página terá um objetivo principal. A página de landing pages vende landing pages; a página de Google Ads vende gestão de Google Ads; um artigo responde uma dúvida; um estudo de caso comprova experiência.

Uma página poderá mencionar serviços relacionados, mas não deverá tentar disputar todas as buscas e vender todas as ofertas com a mesma intensidade.

### 2.3 Páginas específicas precisam ser realmente específicas

Páginas por profissão ou região não serão criadas apenas trocando o nome da profissão ou da cidade. Cada uma deverá conter informações próprias, como:

- problemas comuns daquele público;
- estrutura recomendada;
- exemplos ou trabalhos relacionados;
- perguntas específicas;
- linguagem adequada ao segmento;
- contexto real de atendimento.

### 2.4 Confiança baseada em pessoas e trabalhos reais

A arquitetura deverá facilitar o acesso a:

- identificação de Willian como responsável;
- foto real;
- portfólio;
- estudos de caso;
- avaliações e depoimentos autorizados;
- preços e condições claras;
- localização e área de atendimento;
- canais reais de contato.

### 2.5 Conversão direta

O principal caminho de conversão será o WhatsApp. O botão “Falar com Willian” permanecerá disponível nas páginas comerciais e poderá abrir mensagens diferentes de acordo com a origem do visitante. Uma página `/contato` simples foi publicada para reunir canais de atendimento, mas sem formulário próprio; ela complementa o WhatsApp, que segue sendo o caminho principal.

## 3. Mapa do site para o lançamento

| Página | URL | Presença no menu | Objetivo principal |
|---|---|---|---|
| Página inicial | `/` | Logo | Apresentar a marca, gerar valor e direcionar para serviços ou WhatsApp |
| Landing pages | `/landing-pages/` | Serviços | Vender a landing page de até 5 seções |
| Sites | `/sites/` | Serviços | Receber pedidos de orçamento para sites personalizados |
| Google Ads | `/google-ads/` | Serviços | Vender a gestão para prestadores de serviços |
| Meta Ads | `/meta-ads/` | Serviços | Receber projetos para análise e proposta |
| Portfólio | `/portfolio/` | Principal | Demonstrar trabalhos reais |
| Estudo de caso | `/portfolio/{projeto}/` | Pelo portfólio | Explicar um projeto e a participação de Willian |
| Sobre | `/sobre/` | Principal | Apresentar Willian e o atendimento direto |
| Blog | `/blog/` | Principal | Organizar conteúdos e perguntas respondidas |
| Artigo | `/blog/{artigo}/` | Pelo blog e links | Responder uma dúvida específica |
| Landing page para montadores | `/landing-pages/montador-de-moveis/` | Links contextuais | Vender a solução específica para montadores de móveis |
| Página regional | `/criacao-de-sites-novo-hamburgo/` | Rodapé e links contextuais | Apresentar o atendimento em Novo Hamburgo e região |
| Política de privacidade | `/politica-de-privacidade/` | Rodapé | Explicar o tratamento de informações e ferramentas utilizadas |
| Contato | `/contato/` | Rodapé | Reunir canais de atendimento e reforçar o WhatsApp |

### 3.1 Páginas que não serão criadas no lançamento

- formulário próprio de contato;
- página genérica de preços;
- páginas copiadas para várias cidades;
- dezenas de páginas por profissão;
- páginas de categoria do blog indexáveis com pouco conteúdo;
- página de autor separada, enquanto Willian for o único autor;
- áreas de cliente, login ou orçamento automático.

Os preços principais aparecerão na página inicial e nas páginas dos respectivos serviços. O WhatsApp permanece o principal caminho de conversão; a página `/contato` publicada reúne os canais sem substituí-lo.

## 4. Navegação principal

### 4.1 Cabeçalho

O cabeçalho deverá conter:

1. logotipo “Anúncio e Site”, com link para a página inicial;
2. item “Serviços”, com acesso a:
   - Landing Pages;
   - Sites;
   - Google Ads;
   - Meta Ads;
3. Portfólio;
4. Blog;
5. Sobre;
6. botão de destaque “Falar com Willian”.

No celular, os itens serão organizados em menu compacto, mas o botão do WhatsApp deverá continuar fácil de encontrar.

### 4.2 Rodapé

O rodapé deverá reunir:

- resumo curto da Anúncio e Site;
- links para os quatro serviços;
- Portfólio;
- Sobre;
- Blog;
- página regional;
- Política de Privacidade;
- WhatsApp;
- e-mail comercial, quando definido;
- base em Novo Hamburgo, Rio Grande do Sul;
- informação de atendimento remoto para todo o Brasil;
- identificação empresarial aplicável, quando definida.

Não serão publicados dados cadastrais ou canais ainda não confirmados.

## 5. Página inicial

### 5.1 Objetivo

Fazer o visitante entender rapidamente:

- para quem a Anúncio e Site trabalha;
- como sites, landing pages e anúncios podem contribuir para conseguir clientes;
- por que o atendimento direto de Willian é diferente;
- quais serviços estão disponíveis;
- onde verificar a qualidade dos trabalhos;
- como iniciar uma conversa.

### 5.2 Ordem aprovada das seções

#### 1. Hero: resultado desejado e posicionamento

A primeira dobra deverá falar de oportunidade comercial, apresentação profissional e contato com potenciais clientes. O preço não será o elemento principal da hero.

Direção de mensagem:

> Sites, landing pages e anúncios para ajudar prestadores de serviços a apresentar melhor o seu trabalho e gerar novas oportunidades de contato.

A redação final poderá mudar, mas deverá preservar estas ideias:

- público: prestadores de serviços e pequenos negócios;
- benefício: ser encontrado, transmitir confiança e receber contatos;
- serviços: sites, landing pages e anúncios;
- atendimento: diretamente com Willian.

Ações:

- primária: **Falar diretamente com Willian**;
- secundária: **Ver projetos desenvolvidos**.

#### 2. Prova e portfólio

Apresentar uma seleção curta dos melhores projetos logo após a proposta principal. Cada item deverá mostrar, quando autorizado:

- imagem real da página;
- nome ou segmento do cliente;
- tipo de projeto;
- descrição curta do que foi desenvolvido;
- link para o estudo de caso ou projeto publicado.

A seção deverá reforçar a experiência com a expressão aprovada “dezenas de sites e landing pages”, sem inventar números, resultados ou depoimentos.

#### 3. Valor de uma boa página

Explicar de forma simples como uma página pode ajudar a:

- organizar a apresentação do negócio;
- mostrar serviços e diferenciais;
- reunir avaliações e trabalhos;
- facilitar o pedido de orçamento pelo WhatsApp;
- servir como destino para campanhas de anúncios;
- aumentar a confiança antes do primeiro contato.

Essa explicação prepara o visitante para compreender o preço. Não deverá prometer que somente possuir uma página produzirá clientes automaticamente.

#### 4. Serviços e preços iniciais

Apresentar cards ou blocos para:

- landing page a partir de R$ 399 + R$ 19,90 mensais a partir do segundo mês;
- sites institucionais e blogs sob orçamento;
- Google Ads a partir de R$ 390 por mês para prestadores de serviços;
- Meta Ads sob análise e proposta personalizada.

Cada bloco deverá levar para a página completa do serviço. As condições resumidas não poderão divergir de `OFERTA.md`.

#### 5. Atendimento direto com Willian

Mostrar foto real e explicar que:

- Willian realiza o atendimento;
- entende a necessidade;
- desenvolve o projeto;
- acompanha a entrega;
- presta o suporte;
- não transfere o cliente entre departamentos ou atendentes.

O contraste com grandes agências deverá ser feito pela demonstração do atendimento pessoal, sem acusações genéricas ou tentativa exagerada de assustar o visitante.

#### 6. Processo de trabalho

Apresentar um processo curto, por exemplo:

1. conversa e entendimento do negócio;
2. definição da estrutura e materiais;
3. desenvolvimento;
4. revisão e ajustes;
5. publicação e suporte.

Os detalhes poderão variar conforme o serviço.

#### 7. Atendimento regional e nacional

Informar que:

- a base é Novo Hamburgo;
- o atendimento é remoto para todo o Brasil;
- clientes do Vale dos Sinos, Porto Alegre e Grande Porto Alegre poderão ter reunião presencial conforme necessidade e disponibilidade;
- existe uma página regional com mais informações.

#### 8. Perguntas frequentes

Responder dúvidas comerciais essenciais sem transformar a página inicial em contrato completo. Exemplos:

- Quanto custa uma landing page?
- O que está incluído?
- Quando começa a mensalidade?
- O domínio está incluído?
- Qual é o prazo?
- Vocês também fazem sites com blog?
- A verba dos anúncios está incluída na gestão?
- O atendimento é realmente com quem faz o projeto?

#### 9. Conteúdos recentes ou recomendados

Exibir poucos artigos realmente úteis, com título, resumo, data e autoria. A seleção deverá priorizar dúvidas relacionadas aos serviços principais.

#### 10. Chamada final

Retomar o benefício, reforçar o atendimento direto e convidar para uma conversa no WhatsApp.

## 6. Página de landing pages

**URL:** `/landing-pages/`

### Objetivo

Explicar o valor da landing page, qualificar o visitante e apresentar a oferta de até 5 seções.

### Estrutura

1. hero orientada ao resultado;
2. problemas que uma landing page ajuda a resolver;
3. diferença entre presença improvisada e página profissional;
4. benefícios e exemplos de uso;
5. trabalhos relacionados;
6. o que está incluído;
7. explicação simples do Modelo LIFT;
8. processo e prazo;
9. preço, pagamento e mensalidade;
10. limites e itens não incluídos;
11. perguntas frequentes;
12. CTA para o WhatsApp.

### Direção da abertura

A abertura deverá falar sobre conquistar oportunidades e apresentar o serviço com clareza. O preço aparecerá após benefícios e provas.

### Ligações internas

- página para montadores de móveis;
- estudos de caso de landing pages;
- artigos relacionados;
- página de Google Ads;
- portfólio.

## 7. Página de sites

**URL:** `/sites/`

### Objetivo

Receber solicitações de empresas que precisam de estrutura superior à landing page básica.

### Estrutura

1. apresentação do problema e do resultado desejado;
2. quando um site é mais adequado que uma landing page;
3. possibilidades de páginas e recursos;
4. sites institucionais;
5. sites com blog e painel de publicação;
6. portfólio relacionado;
7. processo de diagnóstico e proposta;
8. fatores que influenciam o orçamento;
9. perguntas frequentes;
10. CTA para solicitar análise.

Não publicar um preço-base de R$ 399 nesta página. O valor e os custos recorrentes de sites e blogs serão definidos por projeto.

## 8. Página de Google Ads

**URL:** `/google-ads/`

### Objetivo

Atrair prestadores de serviços que desejam alcançar pessoas com intenção de contratar e explicar a gestão a partir de R$ 390 por mês.

### Estrutura

1. hero orientada à procura existente no Google;
2. para quem o serviço é indicado;
3. problemas comuns de campanhas mal configuradas;
4. avaliação da página de destino e da estrutura existente;
5. itens incluídos no pacote inicial;
6. forma de acompanhamento e relatório;
7. atendimento direto pelo WhatsApp;
8. preço da gestão;
9. separação entre gestão e investimento em mídia;
10. ausência de taxa de implementação no pacote básico;
11. permanência e cancelamento;
12. perguntas frequentes;
13. CTA para análise.

A página não deverá prometer primeira posição, número de leads, vendas ou retorno garantido.

## 9. Página de Meta Ads

**URL:** `/meta-ads/`

### Objetivo

Explicar a gestão de campanhas no Facebook e Instagram e gerar conversas para elaboração de proposta personalizada.

### Estrutura

1. hero e contexto de uso;
2. situações em que Meta Ads pode fazer sentido;
3. importância da oferta e dos materiais criativos;
4. estrutura de campanha e medição;
5. análise da página de destino;
6. processo de diagnóstico;
7. fatores que afetam o orçamento;
8. possibilidade de taxa de implementação;
9. investimento pago diretamente pelo cliente à plataforma;
10. perguntas frequentes;
11. CTA para análise.

Não divulgar preço mensal nesta primeira versão.

## 10. Página para montadores de móveis

**URL:** `/landing-pages/montador-de-moveis/`

### Objetivo

Demonstrar experiência real no segmento e vender landing pages para montadores de móveis.

### Conteúdo específico necessário

- como o montador normalmente recebe contatos;
- importância de mostrar cidades e regiões atendidas;
- serviços oferecidos, como montagem, desmontagem e ajustes;
- fotos de trabalhos;
- avaliações de clientes;
- botão de orçamento pelo WhatsApp;
- apresentação do profissional ou equipe;
- dúvidas frequentes dos clientes do montador;
- exemplos reais desenvolvidos por Willian;
- possibilidade de utilizar a página em campanhas do Google.

### Estrutura

1. hero específica para montadores;
2. problema e oportunidade do segmento;
3. elementos que uma boa página para montador precisa ter;
4. projetos já desenvolvidos;
5. estrutura e entrega;
6. preço da oferta básica, quando o escopo for compatível;
7. perguntas específicas;
8. CTA com mensagem própria no WhatsApp.

Essa será a primeira página por profissão. Novas profissões deverão seguir `/landing-pages/{profissao}/`, mas somente serão publicadas quando possuírem conteúdo próprio suficiente.

## 11. Página regional

**URL:** `/criacao-de-sites-novo-hamburgo/`

### Posicionamento geográfico

Novo Hamburgo será a localização principal porque é a base real da Anúncio e Site. A página também explicará o atendimento no Vale dos Sinos, em Porto Alegre e na Grande Porto Alegre.

O título e a abertura deverão priorizar Novo Hamburgo e região. As demais localidades aparecerão de forma contextual, sem repetição artificial de nomes.

### Localidades que poderão ser mencionadas

Lista inicial a revisar durante a redação:

- Novo Hamburgo;
- São Leopoldo;
- Campo Bom;
- Estância Velha;
- Ivoti;
- Dois Irmãos;
- Sapiranga;
- Portão;
- Canoas;
- Esteio;
- Sapucaia do Sul;
- Porto Alegre;
- Cachoeirinha;
- Gravataí.

As cidades não deverão ser apresentadas como endereços físicos da empresa. Elas representam regiões que poderão ser atendidas remotamente e, conforme o projeto e a disponibilidade, presencialmente.

### Estrutura

1. apresentação da Anúncio e Site em Novo Hamburgo;
2. benefícios de contratar atendimento próximo e direto;
3. sites, landing pages e gestão de anúncios;
4. atendimento remoto e possibilidade de reunião presencial;
5. áreas atendidas em contexto natural;
6. projetos ou clientes da região, quando autorizados;
7. apresentação de Willian;
8. perguntas sobre atendimento local;
9. CTA para o WhatsApp.

### Expansão futura

Não criar inicialmente uma página para cada cidade. Uma nova página local só deverá ser publicada quando houver conteúdo, experiência, exemplos ou perguntas realmente próprios daquela localidade.

## 12. Portfólio e estudos de caso

### 12.1 Página de portfólio

**URL:** `/portfolio/`

Cada projeto poderá mostrar:

- imagem da página;
- nome do cliente, quando autorizado;
- segmento;
- serviço realizado;
- resumo do objetivo;
- link para o projeto publicado;
- link para estudo de caso, quando existir.

O portfólio deverá permitir filtros visuais ou organização simples por tipo de serviço, mas todos os projetos relevantes continuarão acessíveis por links normais.

### 12.2 Estudos de caso

**Padrão:** `/portfolio/{projeto}/`

O lançamento deverá ter pelo menos três estudos de caso.

Estrutura recomendada:

1. apresentação do cliente ou segmento;
2. situação e necessidade inicial;
3. objetivo do projeto;
4. solução e estrutura criadas;
5. decisões de conteúdo ou conversão;
6. imagens reais;
7. entregas realizadas por Willian;
8. resultado observável, somente quando comprovável;
9. link para o projeto, se estiver ativo;
10. depoimento autorizado, quando existir;
11. CTA para projeto semelhante.

Os três projetos ainda precisam ser selecionados. Não publicar nomes, logos, depoimentos ou resultados sem autorização.

## 13. Página Sobre

**URL:** `/sobre/`

### Objetivo

Apresentar a pessoa responsável e transformar o atendimento direto em prova de confiança.

### Estrutura

1. foto real de Willian;
2. apresentação da Anúncio e Site;
3. forma de trabalho;
4. explicação de que atendimento, desenvolvimento e suporte são realizados diretamente por ele;
5. experiência expressa como “dezenas de sites e landing pages”;
6. tipos de clientes atendidos;
7. base em Novo Hamburgo e atendimento nacional;
8. seleção curta do portfólio;
9. CTA para conversar.

A página não deverá criar equipe fictícia, usar imagens de banco como se fossem funcionários ou destacar um tempo de atuação que não representa o melhor argumento comercial atual.

## 14. Blog

### 14.1 Página principal

**URL:** `/blog/`

Categorias iniciais aprovadas:

- Landing Pages;
- Sites;
- Google Ads;
- Meta Ads.

Enquanto houver poucos artigos, as categorias funcionarão como organização e filtro dentro do blog, sem necessidade de páginas próprias indexáveis.

A edição dos artigos e estudos de caso será feita pelo Keystatic Cloud integrado ao GitHub, conforme `IMPLEMENTACAO.md`. Essa decisão técnica já está definida e não permanece como pendência da arquitetura.

A página deverá permitir:

- visualizar artigos recentes;
- localizar conteúdos por tema;
- destacar guias importantes;
- acessar claramente cada artigo;
- identificar Willian como autor.

### 14.2 Modelo de artigo

**Padrão:** `/blog/{artigo}/`

Cada artigo deverá conter:

1. trilha de navegação;
2. título principal claro;
3. resposta ou conclusão curta no início;
4. desenvolvimento organizado por subtítulos;
5. exemplos práticos quando disponíveis;
6. perguntas relacionadas quando ajudarem o leitor;
7. data de publicação e atualização;
8. autoria de Willian Souza;
9. apresentação curta do autor;
10. links para conteúdos relacionados;
11. CTA pertinente, sem forçar uma venda em todo parágrafo.

Os artigos não deverão ser criados em massa apenas substituindo o nome de profissões. A utilidade da resposta vem antes da quantidade de páginas.

### 14.3 URLs dos artigos

- utilizar palavras minúsculas e hífens;
- evitar datas na URL;
- não inserir a categoria na URL inicialmente;
- manter caminhos curtos e descritivos;
- não alterar URLs publicadas sem necessidade e redirecionamento.

Exemplo:

`/blog/quanto-custa-uma-landing-page/`

## 15. Jornadas principais

### 15.1 Visitante interessado em landing page

1. encontra a página inicial, um artigo ou uma página profissional;
2. entende o benefício e vê trabalhos reais;
3. acessa `/landing-pages/`;
4. conhece escopo, preço e condições;
5. inicia uma conversa no WhatsApp.

### 15.2 Montador de móveis

1. encontra `/landing-pages/montador-de-moveis/`;
2. reconhece problemas e necessidades do próprio segmento;
3. vê exemplos de páginas para montadores;
4. confere a oferta compatível;
5. chama Willian pelo WhatsApp com mensagem específica.

### 15.3 Interessado em anúncios

1. encontra um artigo, a página inicial ou a página do serviço;
2. entende a diferença entre gestão e investimento em mídia;
3. verifica o escopo inicial;
4. entende que a página de destino será analisada;
5. solicita uma análise no WhatsApp.

### 15.4 Visitante regional

1. encontra a página de Novo Hamburgo;
2. confirma base, área atendida e possibilidade de reunião;
3. acessa o serviço adequado ou o portfólio;
4. inicia contato direto.

## 16. Ligações internas obrigatórias

- a página inicial aponta para todos os serviços, portfólio, sobre, blog e página regional;
- cada página de serviço aponta para trabalhos relacionados;
- `/landing-pages/` aponta para a página de montadores;
- a página de montadores aponta para landing pages, portfólio e artigos pertinentes;
- a página regional aponta para landing pages, sites, Google Ads e Meta Ads;
- cada estudo de caso aponta para o serviço correspondente;
- cada artigo aponta para outros conteúdos úteis e, quando fizer sentido, para um serviço;
- a página Sobre aponta para portfólio e WhatsApp;
- páginas internas importantes não dependerão apenas do sitemap para serem descobertas.

Trilhas de navegação serão usadas em artigos, estudos de caso e páginas por profissão. Elas poderão ser dispensadas nas páginas principais quando não acrescentarem clareza.

## 17. Mensagens do WhatsApp por origem

O botão poderá utilizar uma mensagem inicial diferente em cada contexto:

| Origem | Mensagem inicial sugerida |
|---|---|
| Página inicial | Olá, Willian. Conheci a Anúncio e Site e gostaria de conversar sobre meu projeto. |
| Landing pages | Olá, Willian. Gostaria de saber mais sobre a landing page de até 5 seções. |
| Sites | Olá, Willian. Preciso de um site e gostaria de solicitar uma análise. |
| Google Ads | Olá, Willian. Gostaria de conversar sobre a gestão de Google Ads. |
| Meta Ads | Olá, Willian. Gostaria de conversar sobre anúncios no Facebook e Instagram. |
| Montadores de móveis | Olá, Willian. Trabalho com montagem de móveis e gostaria de uma landing page. |
| Página regional | Olá, Willian. Sou de [cidade] e gostaria de conversar sobre meu projeto. |
| Estudo de caso | Olá, Willian. Vi o projeto [nome] e gostaria de algo para o meu negócio. |

O número definitivo do WhatsApp e a redação final serão inseridos antes da publicação.

## 18. Elementos constantes nas páginas comerciais

Sempre que pertinentes, as páginas deverão identificar claramente:

- nome da marca;
- serviço oferecido;
- público atendido;
- responsável pelo atendimento;
- base em Novo Hamburgo;
- atendimento remoto para o Brasil;
- preço quando houver preço público;
- o que está e não está incluído;
- ação principal;
- trabalhos reais relacionados;
- perguntas frequentes próprias daquela página.

Essas informações deverão aparecer em texto visível, e não apenas em imagens, metadados ou marcações técnicas.

## 19. Ordem de implementação

### Fase 1 — estrutura global

- cabeçalho;
- rodapé;
- componentes de CTA;
- página de privacidade;
- padrões de navegação.

### Fase 2 — páginas comerciais principais

- página inicial;
- Landing Pages;
- Sites;
- Google Ads;
- Meta Ads;
- Sobre.

### Fase 3 — prova

- Portfólio;
- seleção dos três projetos;
- pelo menos três estudos de caso.

### Fase 4 — especialização e localização

- página para montadores de móveis;
- página regional de Novo Hamburgo e região.

### Fase 5 — conteúdo

- página principal do blog;
- modelo de artigo;
- primeiros artigos prioritários;
- ligações entre artigos e páginas comerciais.

As fases representam dependências de produção, não necessariamente datas distintas de lançamento. A publicação inicial deverá ocorrer somente quando as páginas essenciais, os links e as informações comerciais estiverem coerentes.

## 20. Regras para URLs e alterações futuras

- utilizar letras minúsculas;
- remover acentos das URLs;
- separar palavras com hífens;
- evitar caminhos desnecessariamente longos;
- manter a URL estável depois da publicação;
- criar redirecionamento permanente quando uma URL útil precisar mudar;
- verificar páginas já indexadas antes de substituir um site existente;
- preservar links usados em campanhas ou materiais comerciais;
- não publicar a mesma página em caminhos diferentes.

Antes da implementação definitiva, deverá ser feito um levantamento das URLs que já existirem em `anuncioesite.com.br`, caso o domínio possua páginas publicadas.

## 21. Rotas técnicas a prever

Estas rotas não fazem parte do menu, mas deverão ser consideradas na implementação:

- `/sitemap-index.xml` como índice gerado pela integração oficial do Astro;
- `/sitemap-0.xml` como primeiro arquivo com as URLs públicas relevantes;
- `/robots.txt` para orientar rastreadores;
- página de erro 404 útil;
- feed do blog, se a tecnologia adotada permitir;
- arquivos e imagens com caminhos permanentes;
- redirecionamentos das URLs antigas, quando existirem.

Configuração técnica, marcações estruturadas, desempenho, consentimento e publicação serão detalhados em `IMPLEMENTACAO.md`.

## 22. Pendências

1. selecionar pelo menos três projetos reais para os estudos de caso;
2. confirmar quais clientes autorizam nome, logo, imagem, link e depoimento;
3. definir o número de WhatsApp definitivo;
4. confirmar se o e-mail já informado será publicado no rodapé e testá-lo;
5. revisar a lista de cidades atendidas antes da redação regional;
6. levantar URLs já existentes no domínio;
7. escolher os primeiros artigos do lançamento.
