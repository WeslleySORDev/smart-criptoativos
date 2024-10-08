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

export const WhatWillYouSee = () => {
  return (
    <section className="mx-auto flex flex-col items-center gap-[10px] bg-[#131313] py-[90px]">
      <div className="px-[25px]">
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
      </div>
    </section>
  )
}
