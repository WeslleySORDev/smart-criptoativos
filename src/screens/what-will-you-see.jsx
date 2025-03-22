import { Carousel, CarouselContent, CarouselItem } from '../components/carousel'

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

const modules = [
  {
    title: 'Introdução ao Mercado de Criptoativos',
    content: [
      'Introdução aos Criptoativos: O que são e como funcionam.',
      'História do Bitcoin: A origem e evolução do Bitcoin.',
      'Adoção de Bitcoin e Altcoins: Difusão do uso de criptoativos no mundo.',
      'Funcionamento do Blockchain: A tecnologia por trás das criptomoedas.',
    ],
  },
  {
    title:
      ' Principais Criptomoedas: Uma visão geral das criptomoedas mais relevantes.',
    content: [
      'Exchanges e Plataformas de Negociação: Onde comprar e vender criptoativos.',
      'Carteiras Digitais (Wallets): Tipos de carteiras e como armazenar criptomoedas.',
      'Riscos e Oportunidades no Mercado: Análise dos desafios e potencial de ganhos no mercado de criptoativos.',
      'Trader Iniciante: Lidando com a alta volatilidade do Mercado de Criptoativos.',
    ],
  },
  {
    title: 'Fundamentos da Análise Técnica',
    content: [
      'Fundamentos da Análise Técnica: Introdução aos conceitos e princípios básicos.',
      'Princípios Essenciais: Explicação dos pilares fundamentais da análise técnica.',
      'Leitura e Interpretação de Gráficos: Como interpretar diferentes tipos de gráficos.',
      'Indicadores Técnicos Clássicos: Introdução a indicadores como médias móveis e RSI.',
    ],
  },
  {
    title:
      'Psicologia do Trader e do Mercado: Comportamento e emoções no mercado.',
    content: [
      'Análise de Volume e Volatilidade: Interpretação do volume de negociação e volatilidade.',
      'Análise de tempos gráficos: Escolha e utilização de diferentes períodos de tempo no gráfico.',
      'Gerenciamento de Risco e Limitações: Identificação dos riscos e limites da análise técnica.',
      'Tipos de Trade: Identifique o seu perfil de Trader (Scalping, Daytrade, Swingtrade, position trade, trade por arbitragem entre outros)',
    ],
  },
  {
    title: 'Explorando a Ferramenta TradingView',
    content: [
      'Interface do TradingView: Navegação e principais seções.',
      'Configuração de Gráficos: Personalização de tipos e estilos.',
      'Ferramentas de Desenho: Linhas, Fibonacci e formas.',
      'Alertas: Configuração de alertas de preço e condições.',
      'Lista de Interesse: Criação e organização de listas de ativos.',
    ],
  },
  {
    title:
      'Tempos Gráficos Personalizados: Ajuste de intervalos de tempo no TradingView',
    content: [
      'Ferramenta de Medição: Medir distâncias de preço e tempo no gráfico.',
      'Multi-Gráficos: Visualização de vários gráficos simultaneamente.',
      'Exportação de Dados: Como exportar dados do gráfico para planilhas.',
      'Feed de Notícias: Integração de notícias de mercado em tempo real.',
    ],
  },
  {
    title: 'Dominando a Análise Técnica',
    content: [
      'Teoria de Dow: Princípios básicos e importância na análise técnica.',
      'Candlesticks: Básicos e Avançados: Padrões simples e complexos de candles.',
      'Price Action com Candlesticks: Interpretação da ação do preço através de candles.',
      'Suportes, Resistências e Pontos Pivot: Identificação de zonas chave no gráfico.',
      'Ondas de Elliott e Tempos Gráficos: Estrutura de mercado e análise de ciclos.',
    ],
  },
  {
    title:
      'Introdução ao Fibonacci: Conceitos iniciais sobre o uso de Fibonacci.',
    content: [
      'Extensão e Retração de Fibonacci: Como aplicar essas ferramentas para projeções.',
      'Uso Correto do MACD: Interpretação e aplicação do indicador MACD.',
      'Índice de Força Relativa (RSI): Como medir a força de uma tendência.',
      'Médias Móveis (MA e EMA): Compreensão e uso das médias móveis simples e exponenciais.',
      'Padrões Gráficos: Identificação de padrões para previsão de movimentos futuros.',
    ],
  },
  {
    title: 'Introdução a Mercado Futuros ',
    content: [
      'Riscos Elevados: Operar futuros é arriscado, podendo resultar em perdas totais, especialmente com alavancagem.',
      'Futuros no Mercado Cripto: Contratos que permitem apostar na valorização (long) ou desvalorização (short) de um criptoativo.',
      'Alavancagem: Amplia os ganhos e as perdas, permitindo operar com mais do que se tem na conta.',
      'Margem Isolada: Limita as perdas a uma única posição específica.',
      'Margem Cross: Usa o saldo total da conta, aumentando o risco de perda completa.',
    ],
  },
  {
    title: 'Liquidação em Futuros: Protegendo a Margem Disponível.',
    content: [
      'Stop-Loss e Take-Profit: Ferramentas para sair automaticamente da operação, limitando perdas ou garantindo lucros.',
      'Estratégias Básicas: Long para ganhos em alta e Short para ganhos em queda.',
      'Disciplina no Trading: Importante manter controle emocional e definir limites para evitar grandes perdas.',
    ],
  },
  {
    title: 'DEFI e Montagem de Pool na Uniswap',
    content: [
      'Introdução ao DeFi (Finanças Descentralizadas) - Explicação básica sobre o conceito de DeFi e seu papel no mercado de criptoativos.',
      'O que é a Uniswap? - Visão geral da Uniswap como uma exchange descentralizada e sua importância no ecossistema DeFi.',
      'Entendendo Liquidez e Pools de Liquidez - Explicação de como funcionam as pools de liquidez e a importância de provedores de liquidez (LPs).',
    ],
  },
  {
    title: 'Como Montar uma Pool de Liquidez na Uniswap',
    content: [
      'Riscos e Recompensas de Fornecer Liquidez - Análise dos riscos de “impermanent loss” e das recompensas ao prover liquidez.',
      'Tokens de Liquidez (LP Tokens) - O que são LP Tokens e como eles funcionam dentro de pools de liquidez.',
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
  return (
    <section className="mx-auto flex flex-col items-center gap-[10px] bg-[#131313] py-[90px]">
      <div className="w-full px-2">
        <div className="mx-auto max-w-[1140px] last:mb-0 last:pb-0 [&_ul]:mb-[1.75em] [&_ul]:pb-4">
          {modules.map(({ title, content }, index) => (
            <div className="md:flex md:gap-4" key={`${index}-${title}`}>
              <div className="flex">
                <span className="mb-[25px] block h-fit w-full min-w-36 rounded-lg bg-zinc-800 px-4 py-8 text-center text-xl font-semibold uppercase text-[#7ed956] ring-1 ring-[#7ed956]">
                  Módulo {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-[25px]/[1.2em] font-medium text-[#f8f8f8] md:text-[2.5vw] lg:text-[1.5vw]">
                  {title}
                </h3>
                <ul className="list-inside list-decimal pt-0 font-sora text-[16px] text-[#7a7a7a] md:text-[14.592px] lg:text-[16px]">
                  {content.map((item, contentIndex) => (
                    <li key={`${contentIndex}-${item}`}>{item}</li>
                  ))}
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
                  <span className='text-lg md:text-xl'>{item.content}</span>
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
