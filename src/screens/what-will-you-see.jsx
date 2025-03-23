import { Carousel, CarouselContent, CarouselItem } from '../components/carousel'
import useWindowDimensions from '../hooks/useWindowDimensions'

const data = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
]

// const old_modules = [
//   {
//     title: 'Introdução ao Mercado de Criptoativos',
//     content: [
//       'Introdução aos Criptoativos: O que são e como funcionam.',
//       'História do Bitcoin: A origem e evolução do Bitcoin.',
//       'Adoção de Bitcoin e Altcoins: Difusão do uso de criptoativos no mundo.',
//       'Funcionamento do Blockchain: A tecnologia por trás das criptomoedas.',
//     ],
//   },
//   {
//     title:
//       ' Principais Criptomoedas: Uma visão geral das criptomoedas mais relevantes.',
//     content: [
//       'Exchanges e Plataformas de Negociação: Onde comprar e vender criptoativos.',
//       'Carteiras Digitais (Wallets): Tipos de carteiras e como armazenar criptomoedas.',
//       'Riscos e Oportunidades no Mercado: Análise dos desafios e potencial de ganhos no mercado de criptoativos.',
//       'Trader Iniciante: Lidando com a alta volatilidade do Mercado de Criptoativos.',
//     ],
//   },
//   {
//     title: 'Fundamentos da Análise Técnica',
//     content: [
//       'Fundamentos da Análise Técnica: Introdução aos conceitos e princípios básicos.',
//       'Princípios Essenciais: Explicação dos pilares fundamentais da análise técnica.',
//       'Leitura e Interpretação de Gráficos: Como interpretar diferentes tipos de gráficos.',
//       'Indicadores Técnicos Clássicos: Introdução a indicadores como médias móveis e RSI.',
//     ],
//   },
//   {
//     title:
//       'Psicologia do Trader e do Mercado: Comportamento e emoções no mercado.',
//     content: [
//       'Análise de Volume e Volatilidade: Interpretação do volume de negociação e volatilidade.',
//       'Análise de tempos gráficos: Escolha e utilização de diferentes períodos de tempo no gráfico.',
//       'Gerenciamento de Risco e Limitações: Identificação dos riscos e limites da análise técnica.',
//       'Tipos de Trade: Identifique o seu perfil de Trader (Scalping, Daytrade, Swingtrade, position trade, trade por arbitragem entre outros)',
//     ],
//   },
//   {
//     title: 'Explorando a Ferramenta TradingView',
//     content: [
//       'Interface do TradingView: Navegação e principais seções.',
//       'Configuração de Gráficos: Personalização de tipos e estilos.',
//       'Ferramentas de Desenho: Linhas, Fibonacci e formas.',
//       'Alertas: Configuração de alertas de preço e condições.',
//       'Lista de Interesse: Criação e organização de listas de ativos.',
//     ],
//   },
//   {
//     title:
//       'Tempos Gráficos Personalizados: Ajuste de intervalos de tempo no TradingView',
//     content: [
//       'Ferramenta de Medição: Medir distâncias de preço e tempo no gráfico.',
//       'Multi-Gráficos: Visualização de vários gráficos simultaneamente.',
//       'Exportação de Dados: Como exportar dados do gráfico para planilhas.',
//       'Feed de Notícias: Integração de notícias de mercado em tempo real.',
//     ],
//   },
//   {
//     title: 'Dominando a Análise Técnica',
//     content: [
//       'Teoria de Dow: Princípios básicos e importância na análise técnica.',
//       'Candlesticks: Básicos e Avançados: Padrões simples e complexos de candles.',
//       'Price Action com Candlesticks: Interpretação da ação do preço através de candles.',
//       'Suportes, Resistências e Pontos Pivot: Identificação de zonas chave no gráfico.',
//       'Ondas de Elliott e Tempos Gráficos: Estrutura de mercado e análise de ciclos.',
//     ],
//   },
//   {
//     title:
//       'Introdução ao Fibonacci: Conceitos iniciais sobre o uso de Fibonacci.',
//     content: [
//       'Extensão e Retração de Fibonacci: Como aplicar essas ferramentas para projeções.',
//       'Uso Correto do MACD: Interpretação e aplicação do indicador MACD.',
//       'Índice de Força Relativa (RSI): Como medir a força de uma tendência.',
//       'Médias Móveis (MA e EMA): Compreensão e uso das médias móveis simples e exponenciais.',
//       'Padrões Gráficos: Identificação de padrões para previsão de movimentos futuros.',
//     ],
//   },
//   {
//     title: 'Introdução a Mercado Futuros ',
//     content: [
//       'Riscos Elevados: Operar futuros é arriscado, podendo resultar em perdas totais, especialmente com alavancagem.',
//       'Futuros no Mercado Cripto: Contratos que permitem apostar na valorização (long) ou desvalorização (short) de um criptoativo.',
//       'Alavancagem: Amplia os ganhos e as perdas, permitindo operar com mais do que se tem na conta.',
//       'Margem Isolada: Limita as perdas a uma única posição específica.',
//       'Margem Cross: Usa o saldo total da conta, aumentando o risco de perda completa.',
//     ],
//   },
//   {
//     title: 'Liquidação em Futuros: Protegendo a Margem Disponível.',
//     content: [
//       'Stop-Loss e Take-Profit: Ferramentas para sair automaticamente da operação, limitando perdas ou garantindo lucros.',
//       'Estratégias Básicas: Long para ganhos em alta e Short para ganhos em queda.',
//       'Disciplina no Trading: Importante manter controle emocional e definir limites para evitar grandes perdas.',
//     ],
//   },
//   {
//     title: 'DEFI e Montagem de Pool na Uniswap',
//     content: [
//       'Introdução ao DeFi (Finanças Descentralizadas) - Explicação básica sobre o conceito de DeFi e seu papel no mercado de criptoativos.',
//       'O que é a Uniswap? - Visão geral da Uniswap como uma exchange descentralizada e sua importância no ecossistema DeFi.',
//       'Entendendo Liquidez e Pools de Liquidez - Explicação de como funcionam as pools de liquidez e a importância de provedores de liquidez (LPs).',
//     ],
//   },
//   {
//     title: 'Como Montar uma Pool de Liquidez na Uniswap',
//     content: [
//       'Riscos e Recompensas de Fornecer Liquidez - Análise dos riscos de “impermanent loss” e das recompensas ao prover liquidez.',
//       'Tokens de Liquidez (LP Tokens) - O que são LP Tokens e como eles funcionam dentro de pools de liquidez.',
//     ],
//   },
// ]

const modules = [
  {
    title: 'Apresentação e avisos importantes',
    content: [
      '0.1 - APRESENTAÇÃO E BOAS VINDAS AOS ALUNOS - ATENÇÃO: TERMO DE RESPONSABILIDADE DOS ALUNOS',
      '0.2 - CRONOGRAMA E DURAÇÃO MÉDIA DO CURSO SMART CRIPTOTRADER',
      '0.3 - GLOSSÁRIO DO TRADER DO MERCADO CRIPTO - ATENÇÃO: AS AULAS SÃO TEÓRICAS E PRÁTICAS EM CADA MÓDULO',
    ],
  },
  {
    title: 'Módulo 01 - Introdução ao mercado de criptoativos',
    content: [
      'TOUR: PRINCIPAIS FERRAMENTAS UTILIZADAS NO MERCADO CRIPTO',
      '1.1 - INTRODUÇÃO AO MERCADO DE CRIPTOATIVOS',
      '1.2 - HISTÓRIA DO BITCOIN: A ORIGEM E EVOLUÇÃO',
      '1.3 - ADOÇÃO DO BITCOIN E ALTCOINS: DIFUSÃO DO USO DE CRIPTOATIVOS PELO MUNDO',
      '1.4 - FUNCIONAMENTO DA BLOCKCHAIN: A TECNOLOGIA POR TRÁS DAS CRIPTOMOEDAS',
      '(BÔNUS) AULA PRÁTICA 01 - INTRODUÇÃO À FERRAMENTA COINMARKETCAP',
      '(BÔNUS) AULA PRÁTICA 02 - INTRODUÇÃO A FERRAMENTA COINGECKO',
      '(BÔNUS) AULA PRÁTICA 03 - INTRODUÇÃO A FERRAMENTA DEXSCREENER',
      '(BÔNUS) AULA PRÁTICA 04 - INTRODUÇÃO A FERRAMENTA DEXTOOLS',
      '(BÔNUS) AULA PRÁTICA 05 - INTRODUÇÃO A FERRAMENTA DEFILlAMA',
      '(BÔNUS) AULA PRÁTICA 06 - EXPLORANDO A FERRAMENTA CRYPTOBUBBLES',
      '1.5 - RESUMO DO MÓDULO E CONSIDERAÇÕES FINAIS',
      '1.6 - MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 02 - Principais criptomoedas: Uma visão geral',
    content: [
      '2.1 - EXCHANGES E PLATAFORMAS DE NEGOCIAÇÃO: ONDE COMPRAR A VENDER CRIPTOATIVOS',
      '2.2 - CARTEIRAS DIGITAIS(WALLETS): TIPOS DE CARTEIRAS E COMO ARMAZENAR CRIPTOMOEDAS',
      '2.3 - RISCOS E OPORTUNIDADES NO MERCADO: ANÁLISE DOS DESAFIOS E POTENCIAL DE GANHOS DO MERCADO DE CRIPTOATIVOS',
      '2.4 - TRADER INICIANTE: LIDANDO COM A ALTA VOLATILIDADE DO MERCADO CRIPTO',
      '(BÔNUS) AULA PRÁTICA 01 - EXPLODANDO EXCHANGES(CEX) - TIPOS E CONFIGURAÇÕES',
      '(BÔNUS) AULA PRÁTICA 02 - EXPLODANDO EXCHANGES DESCENTRALIZADAS(DEX), WALLETS DIGITAIS E SWAPS NAS REDES',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Modulo 03 - Fundamentos da análise técnica',
    content: [
      '3.1 - FUNDAMENTOS DA ANÁLISE TÉCNICA: INTRODUÇÃO AOS CONCEITOS E PRINCÍPIOS BÁSICOS',
      '3.2 - PRINCÍPIOS ESSENCIAIS: EXPLICAÇÃO DOS PILARES FUNDAMENTAIS DA ANÁLISE TÉCNICA',
      '3.3 - LEITURA E INTERPRETAÇÃO DE GRÁFICOS: COMO INTERPRETAR DIFERENTES TIPOS DE GRÁFICOS',
      '3.4 - INDICADORES TÉCNICOS CLÁSSICOS: INTRODUÇÃO A INDICADORES COMO MÉDIAS MÓVEIS E RSI',
      '(BÔNUS) AULA PRÁTICA 01 - INTRODUÇÃO A FERRAMENTA TRADINGVIEW - VERSÃO GRATUITA',
      '(BÔNUS) AULA PRÁTICA 02 - INTRODUÇÃO AO INDICADOR RSI (IFR - ÍNDICE DE FORÇA RELATIVA)',
      '(BÔNUS) AULA PRÁTICA 03 - INTRODUÇÃO AS MÉDIAS MÓVEIS (EMA) - 09, 20, 50, 100 E 200 PERÍODOS',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title:
      'Módulo 04 - Psicologia do trader e do mercado: Comportamento e emoções',
    content: [
      '4.1 - ANÁLISE DE VOLUME E VOLATILIDADE: INTERPRETAÇÃO DO VOLUME DE NEGOCIAÇÃO E VOLATILIDADE',
      '4.2 - ANÁLISE DE TEMPOS GRÁFICOS: ESCOLHA E UTILIZAÇÃO DE DIFERENTES PERÍODOS DE TEMPO GRÁFICO',
      '4.3 - GERENCIAMENTO DE RISCO E LIMITAÇÕES: IDENTIFICAÇÃO DOS RISCOS E LIMITES DA ANÁLISE TÉCNICA',
      '4.4 - TIPOS DE TRADE: IDENTIFIQUE O SEU PERFIL DE TRADER(SCALPING, DAYTRADE, SWINGTRADE, POSITION TRADE, TRADE POR ARBITRAGEM ENTRE OUTROS)',
      "(BÔNUS) AULA PRÁTICA 01 - INDICADOR DE VOLUME TRADICIONAL E INDICADOR TÉCNICO 'VOLUME PRO'",
      '(BÔNUS) AULA PRÁTICA 02 - INDICADOR DE VOLUME PROFILE - IDENTIFICAÇÃO DO PONTO DE CONTROLE - POC',
      '(BÔNUS) AULA PRÁTICA 03 -INDICADOR PERFIL SCALPING E DAYTRADE - VWAP BAND E RSI',
      '4.5 - MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 05 - Explorando a ferramenta tradingview',
    content: [
      '5.1 - INTERFACE DO TRADINGVIEW: NAVEGAÇÃO E PRINCIPAIS SEÇÕES',
      '5.2 - CONFIGURAÇÃO DOS GRÁFICOS: PERSONALIZAÇÃODE TIPOS E ESTILOS',
      '5.3 - FERRAMENTAS DE DESENHO: LINHAS, FIBONACCI E FORMAS',
      '5.4 - ALERTAS: CONFIGURAÇÃO DE ALERTAS DE PREÇO E CONDIÇÕES TRADINGVIEW',
      '5.5 - LISTA DE INTERESSE: CRIAÇÃO E ORGANIZAÇÃO DE LISTAS DE ATIVOS',
      '(BÔNUS) AULA PRÁTICA 01 - PRATICANDO NO TRADINGVIEW - RECURSOS INICIAIS',
      '(BÔNUS) AULA PRÁTICA 02 - COMPARANDO O TRADINGVIEW - GRATUITO X VERSÃO PAGA',
      '(BÔNUS) AULA PRÁTICA 03 - TRADINGVIEW - FERRAMENTAS DE DESENHO E FIBONACCI NA PRÁTICA',
      '(BÔNUS) AULA PRÁTICA 04 - TRADINGVIEW - CONFIGURANDO ALERTA E LISTA DE INTERESSE',
      '5.7 - MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title:
      'Módulo 06 - Tempos gráficos personalizados: Ajuste de intervalos de tempo do tradingview',
    content: [
      '6.1 - FERRAMENTA DE MEDIÇÃO: MEDIR DISTÂNCIAS DE PREÇO E TEMPO NO GRÁFICO',
      '6.2 - MULTI-GRÁFICOS: VISUALIZAÇÃO DE VÁRIOS GRÁFICOS SIMULTANEAMENTE',
      '6.3 - EXPORTAÇÃO DE DADOS: COMO EXPORTAR DADOS DO GRÁFICO PARA PLANILHAS',
      '6.4 - FEED DE NOTÍCIAS: INTEGRAÇÃO DE NOTÍCIAS DE MERCADO EM TEMPO REAL',
      '(BÔNUS) AULA PRÁTICA 01 - TRADINGVIEW - MULTI-GRÁFICOS NA PRÁTICA',
      '(BÔNUS) AULA PRÁTICA 02 - TRADINGVIEW - FEED DE NOTÍCIAS NA PRÁTICA',
      '(BÔNUS) AULA PRÁTICA 03 - TRADINGVIEW - INDICADOR LOG TREND CHANNEL - ESCALA LOGARÍTMICA',
      '6.5 - MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 07 - Dominando a análise técnica',
    content: [
      '7.1 - TEORIA DE DOW: PRINCÍPIOS BÁSICOS E A NUVEM DE ICHIMOKU NA ANÁLISE TÉCNICA',
      '7.2 - PRICE ACTION COM CANDLESTICKS: INTERPRETAÇÃO DA AÇÃO DO PREÇO ATRAVÉS DE CANDLES',
      '7.3 - CANDLESTICKS: BÁSICOS E AVANÇADOS E INDICADOR TÉCNICO CANAL GAUSSIANO',
      '7.4 - SUPORTES, RESISTÊNCIAS E PONTOS DE PIVOT E O INDICADOR TÉCNICO BANDAS DE BOLINGER',
      '7.5 - ONDAS DE ELIOT E TEMPOS GRÁFICOS: ESTRUTURA DE MERCADO E INDICADOR CANAL DE KELTNER',
      '(BÔNUS) AULA PRÁTICA 01 - TRADINGVIEW - INDICADOR NUVEM DE ICHIMOKU - CONFIGURAÇÃO E FUNCIONALIDADES',
      '(BÔNUS) AULA PRÁTICA 02 - TRADINGVIEW - INDICADOR TÉCNICO CANAL GAUSSIANO',
      '(BÔNUS) AULA PRÁTICA 03 - TRADINGVIEW - INDICADOR TÉCNICO BANDAS DE BOLLINGER E ANCORAGEM FIBONACCI E MACD',
      '(BÔNUS) AULA PRÁTICA 04 - TRADINGVIEW -  ONDAS DE ELLIOTT E INDICADOR TÉCNICO CANAL DE KELTNER',
      '(BÔNUS) AULA PRÁTICA 05 - TRADINGVIEW - CONFIGURAÇÃO E UTILIZAÇÃO DO INDICADOR TÉCNICO VMC',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title:
      'Módulo 08 - Introdução ao fibonacci: Conceitos iniciais sobre o uso de fibonacci',
    content: [
      '8.1 - EXTENSÃO E RETRAÇÃO DE FIBONACCI: COMO APLICAR ESSAS FERRAMENTAS PARA PROJEÇÕES',
      '8.2 - USO CORRETO DO MACD: INTERPRETAÇÃO E APLICAÇÃO DO INDICADOR MACD',
      '8.3 - ÍNDICE DE FORÇA RELATIVA(RSI) e MÉDIAS MÓVEIS(MA E EMA): COMPREENSÃO E APLICABILIDADE NA ANÁLISE GRÁFICA',
      '8.4 - PADRÕES GRÁFICOS: INDENTIFICAÇÃO DE PADRÕES PARA PREVISÃO DE MOVIMENTOS FUTUROS',
      '(BÔNUS) AULA PRÁTICA 01 - TRADINGVIEW - UTILIZAÇÃO DA RETRAÇÃO E EXTENSÃO DE FIBONACCI NO MERCADO CRIPTO',
      '(BÔNUS) AULA PRÁTICA 02 - TRADINGVIEW - UTILIZAÇÃO DO INDICADOR MACD - MÉDIA MÓVEL CONVERGENTE E DIVERGENTE',
      '(BÔNUS) AULA PRÁTICA 03 - TRADINGVIEW -  ÍNDICE DE FORÇA RELATIVA(RSI) e MÉDIA MÓVEL EXPONENCIAL(EMA): SETUP NA ANÁLISE GRÁFICA',
      '(BÔNUS) AULA PRÁTICA 04 - TRADINGVIEW -  UTLIZAÇÃO DE PADRÕES GRÁFICOS NA ANÁLISE TÉCNICA',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 09 - Introdução a mercado futuros',
    content: [
      '9.1 - INTRODUÇÃO E RISCOS ELEVADOS: OPERAR FUTUROS É ARRISCADO - PODENDO RESULTAR EM PERDAS TOTAIS, ESPECIALMENTE COM ALAVANCAGEM',
      '9.2 - FUTUROS NO MERCADO CRIPTO: CONTRATOS QUE PERMITEM APOSTAR NA VALORIZAÇÃO(LONG) OU DESVALORIZAÇÃO(SHORT) DE UM CRIPTOATIVO',
      '9.3 - ALAVANCAGEM: MARGEM ISOLADA E MARGEM CRUZADA(CROSS) - INTRODUÇÃO E CONFIGURAÇÃO NO MERCADO FUTUROS',
      '(BÔNUS) AULA PRÁTICA 01 - TRADINGVIEW E BINANCE FUTURES - SETUP - BITCOIN CURTO PRAZO',
      '(BÔNUS) AULA PRÁTICA 02 - TRADINGVIEW - INDICADOR TARGET PRO EMA 09 E 21 - FUTUROS',
      '(BÔNUS) AULA PRÁTICA 03 - TRADINGVIEW - INDICADOR RSI LEVELs (IFR 14) - MERCADO FUTUROS BITCOIN',
      '(BÔNUS) AULA PRÁTICA 05 - TRADINGVIEW E BYBIT FUTURES - INTRADAY - MANGEM CRUZADA BITCOIN',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 10 - Liquidação em futuros: Protegendo a margem disponível',
    content: [
      '10.1 - STOP-LOSS E TAKE-PROFT: FERRAMENTAS PARA SAIR AUTOMATICAMENTE DA OPERAÇÃO, LIMITANDO PERDAS OU GARANTINDO LUCROS',
      '10.2 -DISCIPLINA NO TRADING: IMPORTANTE MANTER CONTROLE EMOCIONAL E ESTRATÉGIAS DE LONG PARA GANHOS EM ALTA E SHORT PARA GANHOS EM QUEDA',
      '(BÔNUS) AULA PRÁTICA 01 - TRADINGVIEW - INDICADOR SQUEEZER MOMENTUM - HISTOGRAMA',
      '(BÔNUS) AULA PRÁTICA 02 - TRADINGVIEW - INDICADOR DE CICLO BITCOIN - TENDÊNCIA PRIMÁRIA DE DOW EM FUTUROS',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 11 - Introdução a defi e montagem de pool de liquidez',
    content: [
      '11.1 - INTRODUÇÃO AO DEFI (FINANÇAS DESCENTRALIZADAS) - CONCEITO DE DEFI E SEU PAPEL NO MERCADO DE CRIPTOATIVOS',
      '11.2 - O QUE É A UNISWAP? - ENTENDENDO LIQUIDEZ E POOLS DE LIQUIDEZ - FUNCIONAMENTO E POOLS DE LIQUIDEZ DE OUTRAS REDES E A IMPORTÂNCIA DE PROVEDORES DE LIQUIDEZ(LPs)',
      '(BÔNUS) AULA PRÁTICA 01 - TUOR - PLATAFORMAS DE POOL DE LIQUIDEZ - UNISWAP - ORCA - RAYDIUM - TRADEJOE - PANCAKESWAP',
      '(BÔNUS) AULA PRÁTICA 02 - ENTENDENDO E EXPLORANDO A IMPORTÂNCIA DE LIQUIDEZ DE UM TOKEN',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo 12 - Como montar uma pool de liquidez',
    content: [
      "12.1 - RISCOS E RECOMPENSAS DE FORNECER LIQUIDEZ - ANÁLISE DOS RISCOS DE 'IMPERMANENT' LOSS E DAS RECOMPENSAS DO PROVER LIQUIDEZ",
      '12.2 - TOKENS DE LIQUIDEZ(LP TOKENS) - O QUE SÃO TOKENS E COMO ELES FUNCIONAM DENTRO DE POOLS DE LIQUIDEZ',
      '(BÔNUS) AULA PRÁTICA 01 - BUSCANDO POOL DE LIQUIDEZ UNISWAP - CALCULADORA DE RENDIMENTOS',
      '(BÔNUS) AULA PRÁTICA 02 - CONFIGURANDO E MONTANDO POOL DE LIQUIDEZ NA REDE SOLANA -  ORCA.SO E RAYDIUM.IO',
      'MATERIAL COMPLEMENTAR E EXERCÍCIOS DE FIXAÇÃO',
    ],
  },
  {
    title: 'Módulo Bônus - Informática aplicada ao mercado cripto',
    content: [
      '(BÔNUS) AULA INFORMÁTICA - OTIMIZANDO MEU PC PARA O MERCADO DE CRIPTOATIVOS',
      '(BÔNUS) AULA INFORMÁTICA - CUIDADOS E PROTEÇÃO CONTRA MALWARES E PHISHING NO MERCADO CRIPTO',
    ],
  },
]

const testimonials = [
  {
    author: 'Edivelton',
    sex: 'male',
    comment_date: '1730246400', // Timestamp epoch
    content: [
      'Professor conseguiu explicar um assunto meio complexo com simplicidade e qualidade top demais',
    ],
  },
  {
    author: 'Carlos Heinrich Sarmento Schleu',
    sex: 'male',
    comment_date: '1731369600', // Timestamp epoch
    content: [
      'Bacana, tô começando a entender de onde os YouTubers tiram os tokens que segundo eles, são os que tem mais potencial de valorizar.',
    ],
  },
  {
    author: 'José Klinger Alves da Costa',
    sex: 'male',
    comment_date: '1731628800', // Timestamp epoch
    content: [
      'Excelente aula bônus. Preciso ter mais segurança para transferir os tokens para as wallets. provável teremos uma aula prática sobre esse tópico.Muito grato.',
    ],
  },
  {
    author: 'Heloisa Helena Gregorio',
    sex: 'female',
    comment_date: '1731715200', // Timestamp epoch
    content: [
      'Assisti os vídeos e de ótima compreensão, bem didática. Parabéns',
    ],
  },
  // {
  //   author: 'Bianca Branco',
  //   sex: 'female',
  //   comment_date: '1731974400', // Timestamp epoch
  //   content: ['Ótima aula'],
  // },
  {
    author: 'Charles lima porto',
    sex: 'male',
    comment_date: '1732320000', // Timestamp epoch
    content: [
      'Que aula viu. Sempre tive dúvidas a respeito desse fluxo entre as DEX e CEX. O pulo do gato da conta secundária dentro da carteira para airdrops.... tirei o chapeu..kkkkk.parabéns professor. Gostando demais do curso.',
    ],
  },
  {
    author: 'Vicente alves Neto',
    sex: 'male',
    comment_date: '1732579200', // Timestamp epoch
    content: ['muito proveitoso'],
  },
  // {
  //   author: 'Fred Bacelar',
  //   sex: 'male',
  //   comment_date: '1732665600', // Timestamp epoch
  //   content: ['Excelente'],
  // },
  {
    author: 'Edivelton',
    sex: 'male',
    comment_date: '1732838400', // Timestamp epoch
    content: [
      'Conhecimento liberta cada aula, minha mente fortalece, minha percepção sem conhecimento de antes desse por terra e fico imaginando o quanto deixei de aproveitar as oportunidades de aumentar meu capital por crenças limitantes de longo prazo.',
    ],
  },
  {
    author: 'Charles lima porto',
    sex: 'male',
    comment_date: '1732924800', // Timestamp epoch
    content: ['Agora aprendi a diferença.'],
  },
  // {
  //   author: 'Zenildo cordeiro',
  //   sex: 'male',
  //   comment_date: '1733011200', // Timestamp epoch
  //   content: ['Top'],
  // },
  {
    author: 'Sandra',
    sex: 'female',
    comment_date: '1733270400', // Timestamp epoch
    content: ['Excelente conteúdo informativo!'],
  },
  {
    author: 'ALEX DA SILVA GOMES',
    sex: 'male',
    comment_date: '1733270400', // Timestamp epoch
    content: [
      'Após essa aula que trouxe informações preciosas, algumas das que eu mais esperava, tenho certeza que as entradas do intraday serão mais assertivas',
    ],
  },
  {
    author: 'Edivelton',
    sex: 'male',
    comment_date: '1731024000', // Timestamp epoch
    content: [
      'Quem dera eu tivesse essa explicação quando entrei a 2 anos atrás, turma pode parecer meio complicado pra alguns que é novos no mercado cripto mas aos poucos fara mais sentido ao decorrer do curso.',
    ],
  },
  {
    author: 'Sandra',
    sex: 'female',
    comment_date: '1733702400', // Timestamp epoch
    content: ['Obgdo Mario pelo excelente material didatico apresentado!'],
  },
  {
    author: 'RENATO SALAO PINTO',
    sex: 'male',
    comment_date: '1734307200', // Timestamp epoch
    content: ['Realmente sensacional. Bem didático'],
  },
  {
    author: 'Bianca Branco',
    sex: 'female',
    comment_date: '1734307200', // Timestamp epoch
    content: [
      'Professor estes ensinamentos estão realmente mudando a minha cabeça !!! A cada lição é uma peça que vai se encaixando !!! Parabéns pela sua postura de ensinar tudo o que sabe.',
    ],
  },
  {
    author: 'JOSE HENRIQUE BORGES DA COSTA FILHO',
    sex: 'male',
    comment_date: '1734393600', // Timestamp epoch
    content: ['Sensacional o Fibonacci!'],
  },
  {
    author: 'Ary',
    sex: 'male',
    comment_date: '1734480000', // Timestamp epoch
    content: ['Boa aula. Parabéns peça didática.'],
  },
  {
    author: 'Janilson de Pinho Silva',
    sex: 'male',
    comment_date: '1734480000', // Timestamp epoch
    content: [
      'Essa aula foi show!!! Já conhecia algumas dessas ferramentas, mas agora com as explicações do professor ficou muito mais claro pra mim.',
    ],
  },
  {
    author: 'Sandra',
    sex: 'female',
    comment_date: '1734825600', // Timestamp epoch
    content: [
      'Me arrependo por tanto tempo perdido, indecisa em comprar ou nao o curso.Sim, este foi meu maior prejuizo, agia como sardinha. Esta aula, assim como todas as outras anteriores é espetacular!',
    ],
  },
  {
    author: 'RENATO SALAO PINTO',
    sex: 'male',
    comment_date: '1735084800', // Timestamp epoch
    content: ['Uma das mais importantes do curso todo!!!!'],
  },
  {
    author: 'RENATO SALAO PINTO',
    sex: 'male',
    comment_date: '1735084800', // Timestamp epoch
    content: [
      'Excelente aula. Toda aula sempre tem "rapaz.... então é assim... Caramba que massa"',
    ],
  },
  {
    author: 'JOSE HENRIQUE BORGES DA COSTA FILHO',
    sex: 'male',
    comment_date: '1735948800', // Timestamp epoch
    content: [
      'esse indicador do Bollinger com MACD estava guardado à sete chaves hein! hehe',
    ],
  },
  {
    author: 'Fabiana Calura Roncolatto',
    sex: 'female',
    comment_date: '1736121600', // Timestamp epoch
    content: [
      'Sinceramente não esperava que teria toda essa quantidade de conteúdo no curso! Agora sim tenho certeza que vou realmente aprender tudo o que sempre quis saber sobre o mundo cripto!',
    ],
  },
  {
    author: 'Edivelton',
    sex: 'male',
    comment_date: '1731542400', // Timestamp epoch
    content: [
      'Top demais, tá cada vez melhor as aulas. Tema espetacular, nos preparando mentalmente que maravilha. Que conteúdo é esse meu professor? sempre fico na espectativa pra próxima aula',
    ],
  },
  {
    author: 'Pedro Faria',
    sex: 'male',
    comment_date: '1736208000', // Timestamp epoch
    content: [
      'Excelente aula professor! Grato e satisfeito com os ensinamentos compartilhados até aqui. Quem usa o TradingView gratuito consegue salvar também os ajustes nas configurações feitas nos indicadores, após as alterações é só ir ao fim da janela de configurações e onde tem...',
    ],
  },
  {
    author: 'MARCIO LUIZ DA COSTA',
    sex: 'male',
    comment_date: '1736208000', // Timestamp epoch
    content: [
      'Parabéns professos indicador muito profissional, não precisa nem preocupar com a tendência, ele já coloca na cara do gol na hora certa. Indicador top, conteúdo top, curso top',
    ],
  },
  {
    author: 'Ricardo Augusto Simoes',
    sex: 'male',
    comment_date: '1736467200', // Timestamp epoch
    content: ['Realmente explanação clara e descomplicada.'],
  },
  {
    author: 'Juciley Costa',
    sex: 'male',
    comment_date: '1736640000', // Timestamp epoch
    content: [
      'Que aula sensacional. A base de tudo muito bem explicada. Obrigado pelos ensinamentos!',
    ],
  },
  {
    author: 'Sandra',
    sex: 'female',
    comment_date: '1736640000', // Timestamp epoch
    content: ['O módulo 07 foi empolgante, preciso rever!'],
  },
  {
    author: 'JOSE HENRIQUE BORGES DA COSTA FILHO',
    sex: 'male',
    comment_date: '1736985600', // Timestamp epoch
    content: ['excelente aula!'],
  },
  {
    author: 'ROSEMEIRE VIANNA',
    sex: 'female',
    comment_date: '1737158400', // Timestamp epoch
    content: ['Que aula Professor! Gratidão'],
  },
  {
    author: 'Kelton alves da costa',
    sex: 'male',
    comment_date: '1737331200', // Timestamp epoch
    content: [
      'Muito interessante professor obrigado pela aula.. Eu sinceramente prefiro entrar em margem isolada e se o loss começar a ficar alto eu altero para margem Cross',
    ],
  },
  {
    author: 'Edivelton',
    sex: 'male',
    comment_date: '1737158400', // Timestamp epoch
    content: [
      'Quanto eu falo que conhecimento não tem preço, ta ai a prova, ainda mais quando o curso trás um benefício enorme o valor do custo acaba sendo um valor simbólico, claro para quem leva a sério pelo possivel ganho financeiro através do conhecimentos adiguirido nos seus ensinamentos.',
    ],
  },
  {
    author: 'Luciano Vilela Teodoro',
    sex: 'male',
    comment_date: '1737158400', // Timestamp epoch
    content: ['Controle emocional é fundamental mesmo!'],
  },
  {
    author: 'Hipólito Ferreira Paulino Neto',
    sex: 'male',
    comment_date: '1738627200', // Timestamp epoch
    content: [
      'Estou aprendendo muito e realmente seria praticamente impossível eu aprender isso sem este curso! Estou gostando bastenta e não vejo a hora de aprender bem a operar em Futuros, mas sei que preciso aprender tudo o que antecede os trades em futuros. Nesta e em algumas aulas...',
    ],
  },
  {
    author: 'Fabiana Calura Roncolatto',
    sex: 'female',
    comment_date: '1741737600', // Timestamp epoch
    content: [
      'Parabéns pela aula professor! Achei excelente e imprescindivel para quem quer ter sucesso no mundo das criptomoedas!',
    ],
  },
]

function formatEpochToDate(epochString) {
  const timestamp = parseInt(epochString, 10) * 1000
  const date = new Date(timestamp)

  return date.toLocaleDateString('pt-BR')
}

export const WhatWillYouSee = () => {
  const { height, width } = useWindowDimensions()

  return (
    <section className="mx-auto flex flex-col items-center gap-[10px] bg-[#131313] py-[90px]">
      <div className="w-full px-2">
        <div className="mx-auto max-w-[1140px] last:mb-0 last:pb-0 [&_ul]:mb-[1.75em] [&_ul]:pb-4">
          {modules.map(({ title, content }, index) => (
            <div className="md:flex md:gap-4" key={`${index}-${title}`}>
              <div className="flex">
                {index === 0 ? (
                  <span className="mb-[25px] block h-fit w-full min-w-36 rounded-lg bg-zinc-800 px-4 py-8 text-center text-xl font-semibold uppercase text-[#7ed956] ring-1 ring-[#7ed956] md:w-[170px]">
                    Apresentação
                  </span>
                ) : (
                  <span className="mb-[25px] block h-fit w-full min-w-36 rounded-lg bg-zinc-800 px-4 py-8 text-center text-xl font-semibold uppercase text-[#7ed956] ring-1 ring-[#7ed956] md:w-[170px]">
                    Módulo {index}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-[25px]/[1.2em] md:text-[2.5vw] lg:text-[1.5vw] font-medium text-[#f8f8f8]">
                  {title}
                </h3>
                <ul className="list-inside list-none pt-0 font-sora text-[16px] text-[#7a7a7a] md:text-[14.592px] lg:text-[16px]">
                  {content.map((item, contentIndex) => {
                    if (
                      !item.startsWith('(BÔNUS) AULA PRÁTICA') ||
                      width > 640
                    ) {
                      return (
                        <li
                          className="text-justify"
                          key={`${contentIndex}-${item}`}
                        >
                          {item}
                        </li>
                      )
                    }
                    return null
                  })}
                  {index < modules.length - 1 ? (
                    <li className="text-justify font-extrabold sm:hidden">
                      AULAS PRÁTICAS
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[10px] text-center md:mx-auto md:mb-[14px] md:w-[65%] lg:w-[40%]">
          <h2 className="mb-[10px] text-[25px]/[1em] font-semibold uppercase text-[#7ed956] md:text-[3.5vw] lg:text-[2.5vw]">
            O que você verá
          </h2>

          <p className="text-[16px]/[1.2em] font-medium text-[#f8f8f8] md:text-[2.5vw] lg:text-[1.5vw]">
            <b className="text-[#7ed956]">São mais de 10 módulos </b>que lhe
            transformarão em um trader consistente, lucrativo e que opera sem
            medo.
          </p>
        </div>

        <Carousel>
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={`${index}-${item}`}>
                <img
                  loading="lazy"
                  alt=""
                  src={`/assets/what-will-you-see/${item}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mb-[10px] mt-10 text-center md:mx-auto md:mb-[14px] md:w-[65%] lg:w-[40%]">
          <h2 className="mb-[10px] text-[25px]/[1em] font-semibold uppercase text-[#7ed956] md:text-[3.5vw] lg:text-[2.5vw]">
            Depoimentos
          </h2>

          <p className="text-[16px]/[1.2em] font-medium text-[#f8f8f8] md:text-[2.5vw] lg:text-[1.5vw]">
            O quê os alunos dizem.
          </p>
        </div>
        <Carousel className="max-w-[100vw]">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={`${item.author} - ${item.content}`}
                className="mx-2 h-[448px]"
              >
                <div className="flex h-full flex-col items-center gap-4 rounded bg-zinc-900 px-10 py-4">
                  <img
                    className="h-16 w-16"
                    src={
                      item.sex === 'male'
                        ? 'https://cdn-icons-png.freepik.com/256/6997/6997484.png?semt=ais_hybrid'
                        : 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png'
                    }
                    alt={
                      item.sex === 'male'
                        ? 'Icone de com silhueta masculina'
                        : 'Icone de com silhueta feminina'
                    }
                  />
                  <span className="text-lg md:text-xl">{item.content}</span>
                  <div className="mt-auto flex flex-col items-center">
                    <span className="line-clamp-1 text-[#7ed956]">
                      {item.author}
                    </span>
                    <span>{formatEpochToDate(item.comment_date)}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
