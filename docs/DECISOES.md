# DECISOES.md — Registro consolidado do projeto

**Versão:** 1.2  
**Data:** 13 de setembro de 2026  
**Estado:** decisões consolidadas; fundação Astro e deploy inicial concluídos; pendências ativas identificadas  
**Responsável pelas decisões:** Willian Souza

## 1. Função deste documento

Este arquivo registra o que está valendo no projeto **Anúncio e Site**, o que ainda depende de decisão e quais ideias anteriores foram substituídas.

Ele existe para impedir que Willian, uma IA, a IDE ou outra pessoa:

- recupere um preço antigo como se ainda estivesse ativo;
- transforme uma proposta em decisão sem aprovação;
- invente dados para preencher uma pendência;
- misture decisões de outro projeto com a Anúncio e Site;
- altere uma regra comercial para adaptar o código;
- trate uma ideia descartada como alternativa disponível ao público.

Este é um índice de decisões. Os detalhes de execução permanecem nos documentos especializados abaixo.

| Assunto | Fonte detalhada atual |
|---|---|
| Visão, público e posicionamento | [`../PRODUCT.md`](../PRODUCT.md) |
| Serviços, preços e condições | [`OFERTA.md`](OFERTA.md) |
| Páginas, URLs, navegação e jornadas | [`ARQUITETURA.md`](ARQUITETURA.md) |
| Direção visual | [`DESIGN.md`](DESIGN.md) |
| Conteúdo, SEO e visibilidade em IA | [`CONTEUDO-SEO.md`](CONTEUDO-SEO.md) |
| Stack, CMS, GitHub, publicação e medição | [`IMPLEMENTACAO.md`](IMPLEMENTACAO.md) |

### 1.1 Regra de prevalência

1. A decisão explícita mais recente de Willian prevalece.
2. Este registro define se uma decisão está ativa, pendente ou substituída.
3. O documento especializado define os detalhes do seu assunto.
4. Uma instrução marcada como **SUBSTITUÍDA** serve apenas como histórico e não pode orientar conteúdo, proposta ou código.
5. Uma informação marcada como **PENDENTE** não pode ser completada por suposição.
6. Se houver conflito entre arquivos, interromper apenas a parte afetada, registrar a divergência e reconciliar os documentos antes de implementar essa parte.

> **Atenção ao NotebookLM e às IAs:** a seção de pendências do `PRODUCT.md` versão 0.2 contém itens históricos ou parcialmente resolvidos. Para o estado atual, usar este arquivo e os documentos especializados nas versões listadas acima.

## 2. Estados utilizados

| Estado | Significado |
|---|---|
| **CONFIRMADO** | Aprovado por Willian e ativo no projeto. |
| **PENDENTE** | Precisa de dado, escolha, validação ou material real. Não inventar. |
| **SUBSTITUÍDO** | Foi considerado ou adotado antes, mas não está mais ativo. |
| **PROPOSTA** | Pode ser testado ou apresentado para aprovação, mas ainda não é decisão. |

## 3. Decisões ativas — negócio e posicionamento

| ID | Estado | Decisão ativa |
|---|---|---|
| NEG-001 | CONFIRMADO | O nome público da marca é **Anúncio e Site**. |
| NEG-002 | CONFIRMADO | O posicionamento é criação de sites, landing pages e gestão de anúncios online para **prestadores de serviços e pequenos negócios**. A marca não ficará restrita a uma única profissão. |
| NEG-003 | CONFIRMADO | A proposta de valor combina apresentação profissional, preço acessível, escopo claro e atendimento pessoal. O posicionamento não é de agência de luxo nem de serviço genérico feito sem cuidado. |
| NEG-004 | CONFIRMADO | Willian realiza diretamente atendimento, planejamento, desenvolvimento, publicação, gestão das campanhas e suporte. Não há terceirização, central de atendimento ou transferência entre departamentos. |
| NEG-005 | CONFIRMADO | A comunicação deve valorizar o contato direto com quem executa o trabalho. Não deve atacar agências de forma genérica, inventar problemas de concorrentes nem usar medo sem comprovação. |
| NEG-006 | CONFIRMADO | A base do negócio é **Novo Hamburgo, RS**. O atendimento é remoto para todo o Brasil. Para clientes locais, poderá haver reunião presencial no Vale dos Sinos ou na Grande Porto Alegre, quando fizer sentido e houver disponibilidade. |
| NEG-007 | CONFIRMADO | A prova de experiência poderá usar a expressão **“dezenas de sites e landing pages”**. Não publicar a contagem exata de 12 a 15 projetos nem usar “mais de uma dezena”. |
| NEG-008 | CONFIRMADO | A marca será o elemento principal, mas Willian aparecerá como fundador, autor e responsável pelo atendimento. Uma foto real dele será usada na seção de atendimento pessoal. |
| NEG-009 | CONFIRMADO | O canal principal de conversão no lançamento será o WhatsApp. O atendimento público será apresentado como realizado em horário comercial. Situações técnicas críticas poderão receber prioridade fora desse horário conforme disponibilidade, sem promessa de suporte 24 horas. |

## 4. Decisões ativas — oferta comercial

### 4.1 Landing page

| ID | Estado | Decisão ativa |
|---|---|---|
| OFE-001 | CONFIRMADO | A landing page básica será anunciada **a partir de R$ 399**. |
| OFE-002 | CONFIRMADO | O escopo básico contempla **até 5 seções principais de conteúdo**. Cabeçalho e rodapé não contam como seções; o formulário dentro da seção de contato não cria uma seção adicional. |
| OFE-003 | CONFIRMADO | O primeiro período de 30 dias de hospedagem está incluído no preço de criação. A primeira mensalidade de **R$ 19,90** vence 30 dias após a publicação, e as seguintes são cobradas a cada novo período de 30 dias. |
| OFE-004 | CONFIRMADO | A mensalidade mantém a página publicada e cobre hospedagem, HTTPS, acompanhamento técnico básico, correções da implementação original e pequenas alterações ocasionais. Ela não é um pacote ilimitado de mudanças. |
| OFE-005 | CONFIRMADO | O pagamento da criação será de **50% para iniciar** e **50% após a aprovação da apresentação e antes da publicação definitiva**. |
| OFE-006 | CONFIRMADO | O domínio não está incluído. Quando houver um novo domínio, a preferência é registrá-lo em nome e nos dados do próprio cliente; taxas de registro e renovação são do cliente. |
| OFE-007 | CONFIRMADO | O pacote inclui layout responsivo, botões de WhatsApp, formulário, ajuda na elaboração dos textos, inserção dos materiais entregues, publicação, HTTPS e duas rodadas de alterações. Não inclui criação de logotipo nem tratamento profissional de imagens. Códigos de GTM, Analytics ou pixel poderão ser inseridos quando o cliente ou o responsável pelas plataformas fornecer os identificadores e instruções necessários. |
| OFE-008 | CONFIRMADO | O formulário da landing page do cliente poderá enviar dados para e-mail, WhatsApp ou ambos, conforme definição do projeto. Isso não significa que o site da própria Anúncio e Site terá formulário no lançamento. |
| OFE-009 | CONFIRMADO | Avaliações públicas do Perfil da Empresa no Google poderão ser selecionadas e inseridas manualmente, inclusive em carrossel. Não haverá promessa de sincronização ou atualização automática. |
| OFE-010 | CONFIRMADO | A estrutura e o texto usarão princípios do Modelo LIFT como orientação de conversão. Isso não constitui garantia de contatos, vendas ou taxa de conversão. |
| OFE-011 | CONFIRMADO | A meta técnica é obter desempenho acima de 90 no Google PageSpeed Insights, especialmente no celular, mas o resultado depende de mídia, scripts, integrações e condições reais do projeto. Não prometer pontuação imutável. |
| OFE-012 | CONFIRMADO | Estão incluídas duas rodadas de alterações antes da aprovação final. Cada rodada deve reunir os pedidos do cliente. Rodadas ou mudanças adicionais poderão ser cobradas. |
| OFE-013 | CONFIRMADO | O prazo normal é de **7 a 10 dias** depois da entrada, do recebimento dos materiais e das definições necessárias. Atrasos do cliente suspendem a contagem. |
| OFE-014 | CONFIRMADO | Entrega prioritária poderá ser oferecida quando houver disponibilidade, com prazo e valor extra definidos antes da contratação. Não divulgar a justificativa de que Willian trabalhará fora do horário. |
| OFE-015 | CONFIRMADO | Novas seções, novas páginas, reformulação, mudanças extensas de textos ou imagens, alterações frequentes e novas integrações serão avaliadas e cobradas separadamente. |
| OFE-016 | CONFIRMADO | Sites institucionais, sites com blog, painel editorial e projetos maiores serão feitos sob orçamento, de acordo com o escopo. O preço de R$ 399 não se aplica automaticamente a eles. |

### 4.2 Google Ads e Meta Ads

| ID | Estado | Decisão ativa |
|---|---|---|
| OFE-017 | CONFIRMADO | A gestão básica de Google Ads para prestadores de serviços será anunciada **a partir de R$ 390 por mês**. Outros setores e estruturas mais complexas serão analisados. |
| OFE-018 | CONFIRMADO | O pacote básico poderá incluir organização ou criação da conta individual, uma campanha de Pesquisa, pesquisa de palavras-chave, anúncios, conversões, acompanhamento, otimizações, relatório mensal e atendimento direto pelo WhatsApp. |
| OFE-019 | CONFIRMADO | Não haverá taxa separada de implementação no pacote básico de Google Ads. |
| OFE-020 | CONFIRMADO | Cada cliente terá uma conta de Google Ads separada. Clientes diferentes nunca serão misturados na mesma conta. No pacote básico, a conta poderá permanecer dentro da estrutura de gerenciamento da Anúncio e Site. |
| OFE-021 | CONFIRMADO | O investimento em mídia será pago pelo cliente diretamente à plataforma. A taxa de gestão não inclui a verba destinada ao Google ou à Meta. Willian não receberá dinheiro para depois pagar a mídia em nome do cliente. |
| OFE-022 | CONFIRMADO | A gestão de Google Ads não inclui landing page ou site grátis. A página atual será avaliada e, se precisar ser criada ou refeita, receberá proposta separada. |
| OFE-023 | CONFIRMADO | A gestão básica de Google Ads não terá permanência mínima. O cancelamento deverá ser solicitado com 30 dias de antecedência. |
| OFE-024 | CONFIRMADO | No cancelamento do pacote básico, a conta ativa permanece na estrutura da Anúncio e Site e sua transferência não está incluída. Mediante solicitação, Willian poderá fornecer exportações CSV dos dados disponíveis; esses arquivos não equivalem à transferência da conta nem preservam necessariamente aprendizado e configurações. |
| OFE-025 | CONFIRMADO | Meta Ads será oferecido desde o lançamento, mas sempre após análise e com proposta personalizada. Poderá existir taxa de implementação, informada antes da contratação e separada da gestão e da mídia. |
| OFE-026 | CONFIRMADO | A comunicação não garantirá primeira posição, quantidade de leads, vendas, faturamento, retorno financeiro ou resultado específico de campanha. |

### 4.3 Cobrança

| ID | Estado | Decisão ativa |
|---|---|---|
| OFE-027 | CONFIRMADO | O preço público recorrente da landing page é R$ 19,90; as taxas da plataforma de cobrança serão custo operacional da Anúncio e Site e não serão acrescentadas separadamente ao preço anunciado. |
| OFE-028 | CONFIRMADO | Cartão, boleto e Pix poderão ser avaliados conforme o provedor escolhido. Dados de cartão nunca serão armazenados na infraestrutura própria; cartão deverá ser processado por instituição especializada. |
| OFE-029 | CONFIRMADO | A cobrança poderá começar manualmente e ser automatizada depois. O Asaas é uma possibilidade futura, não uma plataforma já aprovada. |

## 5. Decisões ativas — páginas e jornada

| ID | Estado | Decisão ativa |
|---|---|---|
| ARQ-001 | CONFIRMADO | A página deve primeiro mostrar o valor de uma boa presença digital e a possibilidade de gerar oportunidades; o preço aparece depois. A comunicação pode falar em conquistar clientes e receber contatos, mas não prometer resultado. |
| ARQ-002 | CONFIRMADO | O menu principal terá **Serviços**, **Portfólio**, **Blog**, **Sobre** e **Falar com Willian**. Em Serviços: Landing Pages, Sites, Google Ads e Meta Ads. |
| ARQ-003 | CONFIRMADO | O site da Anúncio e Site será lançado sem formulário próprio e sem página de contato obrigatória. Os CTAs comerciais levarão ao WhatsApp com mensagens adequadas à origem do clique. |
| ARQ-004 | CONFIRMADO | O lançamento deverá apresentar pelo menos **3 estudos de caso reais**. Projetos poderão ser anônimos até existir autorização para citar nomes. Não inventar cliente, depoimento, métrica ou resultado. |
| ARQ-005 | CONFIRMADO | O primeiro recorte profissional será **montadores de móveis**, sem limitar o restante da marca a esse nicho. O caminho aprovado é `/landing-pages/montador-de-moveis/`. |
| ARQ-006 | CONFIRMADO | Haverá uma página regional com foco em Novo Hamburgo e contexto para Vale dos Sinos, Porto Alegre e Grande Porto Alegre. Menções a cidades devem ser verdadeiras e úteis; páginas futuras não poderão ser cópias com o nome da cidade trocado. |

### 5.1 URLs previstas para o lançamento

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

## 6. Decisões ativas — conteúdo, SEO e visibilidade em IA

| ID | Estado | Decisão ativa |
|---|---|---|
| CON-001 | CONFIRMADO | O blog começará com **15 a 20 artigos muito bons**. Não haverá calendário público fixo nem meta obrigatória de publicações semanais. |
| CON-002 | CONFIRMADO | Willian pode produzir de 20 a 30 rascunhos por semana com ajuda de IA, mas volume de rascunho não obriga publicação. Cada conteúdo precisa passar pela revisão editorial. |
| CON-003 | CONFIRMADO | Cada artigo partirá de briefing próprio, responderá uma pergunta pertinente já no primeiro parágrafo e será escrito do zero, sem molde rígido repetido entre textos. |
| CON-004 | CONFIRMADO | A IA poderá ajudar na redação, mas Willian deverá revisar, conferir fatos, acrescentar experiência ou observações reais, aprovar e assumir responsabilidade pela versão publicada. |
| CON-005 | CONFIRMADO | Os artigos serão assinados por **Willian Souza — criador de sites e gestor de tráfego pago há quatro anos**. A autoria será pessoal, ainda que a marca permaneça em destaque. |
| CON-006 | CONFIRMADO | Artigos novos usarão a data real em que forem publicados. `dateModified` só mudará depois de atualização relevante. Não usar datas retroativas para simular antiguidade ou frescor. |
| CON-007 | CONFIRMADO | Valores comerciais ficarão nas páginas de serviços. Artigos explicarão o tema e apontarão para a página comercial oficial, evitando preços espalhados que possam ficar desatualizados. |
| CON-008 | CONFIRMADO | As páginas comerciais regionais terão foco local; o blog terá alcance nacional. Páginas de cidade e profissão somente serão criadas quando houver conteúdo realmente específico e útil. |
| CON-009 | CONFIRMADO | A estratégia de GEO será tratada como boa estrutura editorial, clareza, autoria, fontes, dados estruturados, rastreabilidade e confirmação externa — não como truque para manipular IAs. Nenhuma citação por IA será garantida. |
| CON-010 | CONFIRMADO | OAI-SearchBot não deverá ser bloqueado por engano. Permitir o rastreador aumenta elegibilidade para a busca do ChatGPT, mas não garante recomendação ou citação. |
| CON-011 | CONFIRMADO | Os arquivos JSON com 121 nichos e esqueletos são matéria-prima de pesquisa, não calendário editorial nem autorização para publicar páginas em massa. |
| CON-012 | CONFIRMADO | Busca interna, comentários e newsletter não farão parte do lançamento. |

## 7. Decisões ativas — direção visual

| ID | Estado | Decisão ativa |
|---|---|---|
| VIS-001 | CONFIRMADO | O site será predominantemente escuro, com seções claras para criar ritmo e contraste. O laranja forte será a cor de destaque. |
| VIS-002 | CONFIRMADO | **Archivo** será usada nos títulos; **Inter**, nos textos, menus, botões e informações da interface. |
| VIS-003 | CONFIRMADO | O logotipo inicial será tipográfico, com o nome **Anúncio e Site**. Não inventar símbolo definitivo antes de aprovação. |
| VIS-004 | CONFIRMADO | A hero usará texto forte, fundo trabalhado e CTA. A foto de Willian ficará na seção de atendimento pessoal, não como imagem principal da hero. |
| VIS-005 | CONFIRMADO | Cantos serão retos ou apenas levemente arredondados. Evitar excesso de cartões iguais, gradientes, brilhos, elementos flutuantes e padrões associados a templates genéricos ou sites com “cara de IA”. |
| VIS-006 | CONFIRMADO | Haverá movimento discreto, como projetos ou blocos surgindo ao entrar na tela. As animações não podem prejudicar leitura, desempenho ou acessibilidade e devem respeitar preferência por movimento reduzido. |
| VIS-007 | CONFIRMADO | No celular haverá um botão compacto e discreto de WhatsApp, além dos CTAs distribuídos pelas seções. |

## 8. Decisões ativas — implementação

| ID | Estado | Decisão ativa |
|---|---|---|
| TEC-001 | CONFIRMADO | A stack aprovada é **Astro + TypeScript + CSS personalizado**, sem WordPress ou Elementor como base do projeto. |
| TEC-002 | CONFIRMADO | As páginas serão pré-renderizadas e estáticas sempre que possível. JavaScript será mínimo; conteúdo essencial precisa existir no HTML. React ficará restrito ao painel ou a componentes isolados que realmente precisem dele. |
| TEC-003 | CONFIRMADO | Artigos e estudos de caso serão editáveis com **Keystatic Cloud integrado ao GitHub**, usando Markdoc nos corpos de conteúdo. |
| TEC-004 | CONFIRMADO | O repositório no GitHub será privado. Ele já está conectado como `wscariott1988/Anuncio-e-site-2026` (URL sem acento). Torná-lo público não oferece benefício necessário para SEO, deploy ou funcionamento do painel. |
| TEC-005 | CONFIRMADO | A publicação usa GitHub e Vercel, já conectados: deploy automático da branch principal (`master`) e previews para alterações maiores, como a branch `feat/home-v1`. |
| TEC-006 | CONFIRMADO | O domínio foi comprado na HostGator e o DNS aponta para a Vercel. O endereço canônico aprovado é `https://www.anuncioesite.com.br`; o domínio sem `www` deverá redirecionar permanentemente, preservando o caminho. |
| TEC-007 | CONFIRMADO | Durante a construção no domínio real, o site ficará com `noindex, nofollow`. Rascunhos não serão indexados. A proteção só será removida depois da aprovação de lançamento. |
| TEC-008 | CONFIRMADO | O plano Vercel Hobby poderá ser usado temporariamente durante a construção. Ele não está aprovado como hospedagem comercial definitiva; antes do lançamento será necessário escolher um plano compatível ou outra hospedagem. |
| TEC-009 | CONFIRMADO | GTM e GA4 serão instalados depois que o site estiver pronto. Tags de Google Ads e Meta só serão ativadas quando houver uso real e após revisão de consentimento e privacidade. |
| TEC-010 | CONFIRMADO | O lançamento não terá formulário próprio nem banco de leads. O número de WhatsApp não será inventado e nenhum botão quebrado será publicado. O e-mail disponível é `contrato@grupows.com`. |
| TEC-011 | CONFIRMADO | Willian fará a manutenção do site. O projeto deverá incluir documentação de operação, validações automáticas e processo de publicação seguro. |
| TEC-012 | CONFIRMADO | Os dois JSONs de nichos permanecerão em `docs/pesquisa/` e a captura de autocomplete em `docs/referencias/`. São materiais auxiliares, não fonte de verdade, calendário editorial nem autorização para publicação em massa. |
| TEC-013 | CONFIRMADO | A fundação Astro e o deploy inicial foram concluídos e integrados à branch principal: o site público é o Astro (a rebuild `rebuild/astro` foi incorporada à `master`), a Vercel publica automaticamente e o domínio real está conectado. Durante toda a construção o projeto permanece em modo `construction` com `noindex, nofollow`, sem alteração de `SITE_STATE`. |
| TEC-014 | CONFIRMADO | A primeira versão visual da página inicial é trabalhada na branch `feat/home-v1`, mantendo o projeto em modo `construction`. Nenhuma página ou recurso desta etapa será promovido a produção. |

## 9. Decisões substituídas — não usar

| ID | Estado | Ideia anterior | Decisão que a substituiu |
|---|---|---|---|
| SUB-001 | SUBSTITUÍDO | R$ 150 por ano para renovação da hospedagem. | R$ 19,90 por período mensal, com primeira cobrança 30 dias após a publicação. |
| SUB-002 | SUBSTITUÍDO | Site sem custo inicial mediante contrato de 12 meses a R$ 89 ou R$ 99 por mês. | Landing page a partir de R$ 399, paga em 50% + 50%, sem essa modalidade pública. |
| SUB-003 | SUBSTITUÍDO | Landing page grátis ou incluída na gestão de tráfego. | Landing page e gestão são serviços separados; uma nova página recebe orçamento próprio. |
| SUB-004 | SUBSTITUÍDO | Ocultar todos os valores de gestão de tráfego. | Google Ads aparece a partir de R$ 390/mês para prestadores; Meta Ads permanece sob análise e proposta. |
| SUB-005 | SUBSTITUÍDO | Avaliações do Google sincronizadas automaticamente. | Avaliações podem ser selecionadas e inseridas manualmente; não prometer sincronização. |
| SUB-006 | SUBSTITUÍDO | Posicionar toda a marca apenas para montadores de móveis. | Marca ampla para prestadores e pequenos negócios; montadores são o primeiro recorte específico. |
| SUB-007 | SUBSTITUÍDO | Usar “mais de uma dezena” ou divulgar a contagem exata de 12 a 15 projetos. | Usar apenas “dezenas de sites e landing pages”. |
| SUB-008 | SUBSTITUÍDO | Publicar artigos novos com datas retroativas. | Usar sempre a data real da primeira publicação. |
| SUB-009 | SUBSTITUÍDO | Formulário como conversão inicial do site da Anúncio e Site. | Lançamento com WhatsApp; formulário pode ser acrescentado depois. |
| SUB-010 | SUBSTITUÍDO | Repositório público como escolha inicial. | Repositório privado. |
| SUB-011 | SUBSTITUÍDO | Domínio canônico ainda sem escolha entre raiz e `www`. | `https://www.anuncioesite.com.br` é canônico; raiz redireciona para `www`. |
| SUB-012 | SUBSTITUÍDO | WordPress/Elementor como base provável para blog e edição. | Astro com Keystatic Cloud e conteúdo versionado no GitHub. |

## 10. Pendências ativas

### 10.1 Bloqueiam a contratação pública do modelo recorrente

| ID | Estado | Pendência | Próxima decisão necessária |
|---|---|---|---|
| PEN-COM-001 | PENDENTE | Plataforma de cobrança e meios realmente oferecidos. | Comparar provedores e escolher entre cartão, boleto e Pix. |
| PEN-COM-002 | PENDENTE | Inadimplência da landing page. | Definir lembretes, tentativas, tolerância, suspensão e eventual reativação. |
| PEN-COM-003 | PENDENTE | Cancelamento da hospedagem mensal. | Definir aviso, data de retirada, eventual entrega dos arquivos e condições para migração. |
| PEN-COM-004 | PENDENTE | Cópias de segurança. | Definir frequência, retenção e o que ocorre após cancelamento. |
| PEN-COM-005 | PENDENTE | Inadimplência na gestão de anúncios. | Definir vencimento, tolerância, pausa das campanhas e retomada. |

### 10.2 Bloqueiam o lançamento comercial do site

| ID | Estado | Pendência | Próxima decisão necessária |
|---|---|---|---|
| PEN-LAN-001 | PENDENTE | Número público do WhatsApp. | Informar e testar o número antes de habilitar CTAs e retirar `noindex`. |
| PEN-LAN-002 | PENDENTE | Hospedagem compatível com uso comercial. | Migrar para plano apropriado da Vercel ou escolher alternativa antes da operação comercial. |
| PEN-LAN-003 | PENDENTE | Portfólio inicial. | Selecionar pelo menos três projetos reais, separar imagens e confirmar o que pode ser identificado. |
| PEN-LAN-004 | PENDENTE | Depoimentos e resultados. | Reunir autorizações e evidências; até lá, não publicar nomes, falas ou métricas sem comprovação. |
| PEN-LAN-005 | PENDENTE | Funcionamento dos dois hosts do domínio. | Confirmar na Vercel e testar `www` e domínio raiz; alterar DNS na HostGator apenas se a Vercel indicar configuração inválida. |
| PEN-LAN-006 | PENDENTE | Dados finais de medição e privacidade. | Criar/confirmar GTM e GA4, revisar consentimento e completar a política antes de ativar tags aplicáveis. |

### 10.3 Não impedem o primeiro protótipo

| ID | Estado | Pendência | Tratamento atual |
|---|---|---|---|
| PEN-VIS-001 | PENDENTE | Códigos exatos da paleta. | Testar a proposta do `DESIGN.md` na tela real antes de aprovar. |
| PEN-VIS-002 | PENDENTE | Pesos, tamanhos, alturas de linha e espaçamentos tipográficos. | Definir no primeiro protótipo responsivo. |
| PEN-VIS-003 | PENDENTE | Tratamento exato da hero, marca tipográfica, cartões de projeto e animações. | Criar uma direção visual e aprovar pela aparência, desempenho e ausência de “cara de template”. |
| PEN-VIS-004 | PENDENTE | Foto de Willian e capturas dos projetos. | Selecionar arquivos reais e produzir novas capturas quando necessário. |
| PEN-CON-001 | PENDENTE | Validação das pautas e palavras-chave. | Entregar a Willian uma lista de sementes; ele consulta o Planejador de Palavras-chave e devolve os dados. |
| PEN-CON-002 | PENDENTE | Nota pública sobre auxílio de IA nos artigos. | Decidir se haverá divulgação padronizada após avaliar transparência e experiência do leitor. |
| PEN-CON-003 | PENDENTE | Política para GPTBot. | Decidir separadamente se o rastreador de treinamento será permitido; isso não altera a decisão sobre OAI-SearchBot. |
| PEN-NEG-001 | PENDENTE | Horário comercial exato. | Definir dias e faixas de atendimento antes de publicar horários específicos. |

> **Resolvido em 13/09/2026:** o nome definitivo do repositório deixou de ser pendência. O repositório oficial existe e está conectado como `wscariott1988/Anuncio-e-site-2026`. Uma renomeação futura só ocorrerá por decisão registrada (ver `TEC-004` e `TEC-013`).

## 11. Decisões que não precisam ser tomadas agora

- O nome do repositório não precisa ser definido durante a documentação.
- O número do WhatsApp não precisa existir no protótipo, desde que nenhum contato falso ou link quebrado seja publicado.
- O preço fixo de Meta Ads não precisa ser criado; orçamento personalizado é uma decisão comercial válida.
- Novas profissões e cidades não precisam ser escolhidas antes de validar a página de montadores e a página regional inicial.
- Um sistema próprio de cobrança não deve ser construído antes de comparar custo, segurança, inadimplência e esforço de manutenção com provedores especializados.
- `llms.txt` não é prioridade de lançamento.

## 12. Protocolo para registrar mudanças futuras

Cada nova mudança deverá informar:

1. data;
2. ID afetado ou novo ID;
3. decisão aprovada;
4. motivo, quando relevante;
5. documento especializado afetado;
6. decisão anterior substituída, se houver;
7. consequência para páginas, contrato, código ou conteúdo.

Ao atualizar uma decisão:

- manter somente a regra atual nas seções de decisões ativas;
- mover a regra antiga para **Decisões substituídas**;
- retirar da lista de pendências o que foi resolvido;
- atualizar a versão e a data dos documentos especializados afetados;
- verificar se o site, as propostas e o NotebookLM continuam coerentes;
- nunca apagar o histórico necessário para entender por que um preço ou regra mudou.

## 13. Instrução curta para a IDE e para IAs

> Trabalhe somente com decisões marcadas como CONFIRMADO. Não reative itens SUBSTITUÍDOS, não invente itens PENDENTES e não misture arquivos de outros projetos. Para detalhes, consulte o documento especializado correspondente. Se encontrar divergência, informe-a antes de implementar a parte afetada.
