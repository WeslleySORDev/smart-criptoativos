import { Button } from '../components/button'

export const SeeThePlans = () => {
  return (
    <section className="bg-transparent">
      <div className="z-50 flex flex-col gap-[10px_20px] px-[25px] md:px-0 lg:mx-auto lg:max-w-[1260px]">
        <div className="mb-[90px] mt-[25px] flex flex-col gap-[10px_20px] rounded-[10px] p-[10px] md:flex-row md:p-[35px]">
          <div className="mx-auto flex flex-col gap-[10px_20px] md:flex-row md:items-center lg:justify-between">
            <div className="md:max-w-[50%]">
              <h2 className="mx-auto mb-[10px] text-center text-[25px]/[1.1em] font-semibold text-[#f8f8f8] md:w-full md:text-[3vw] lg:text-[2.5vw]">
                VEJA TUDO ISSO QUE ESTÁ INCLUSO NO CURSO SMART CRIPTOTRADER
              </h2>
              <ul className="divide-y divide-[#7ed956] text-[16px]/[1.2em] font-medium capitalize text-[#f8f8f8] md:text-[2.5vw] lg:text-[1.5vw] [&>li]:pb-[16px] [&>li]:pt-[16px] [&>li_ul]:mt-[8px]">
                <li className="capitalize">
                  MAIS DE 12 MÓDULOS DE ANÁLISE TÉCNICA PARA O MERCADO CRIPTO
                </li>
                <li className="capitalize">
                  EXERCÍCIOS E MATERIAIS COMPLEMENTARES EM “PDF” – CADA MÓDULO
                </li>
                <li className="capitalize">
                  ATUALIZAÇÕES SEMANAIS DO MERCADO CRIPTO
                </li>
                <li className="capitalize">
                  GRUPO EXCLUSIVO PARA DÚVIDAS – DISCORD E/OU HOTMART
                </li>
                <li className="capitalize">
                  FERRAMENTAS EXCLUSIVAS DE ANÁLISE TÉCNICA
                  <ul className="pt-0 font-sora text-[14.592px] text-[#7a7a7a] lg:text-[16px]">
                    <li className="capitalize">
                      COINGLASS, BGEOMETRICS, DEXSCREENER, DEXTOOLS, CRYPTO
                      BUBBLES, CRYPTORANK entre outras.
                    </li>
                  </ul>
                </li>
                <li className="capitalize">
                  2 MÓDULOS EXCLUSIVOS DE INFORMÁTICA APLICADA
                  <ul className="pt-0 font-sora text-[14.592px] text-[#7a7a7a] lg:text-[16px]">
                    <li className="capitalize">
                      Otimizando meu PC para operar no Mercado Cripto
                    </li>
                    <li className="capitalize">
                      Cuidados e Proteção contra Malwares e Phishing
                    </li>
                  </ul>
                </li>
                <li className="capitalize">
                  2 E-BOOKS EXCLUSIVOS PARA OS ALUNOS
                  <ul className="pt-0 font-sora text-[14.592px] text-[#7a7a7a] lg:text-[16px]">
                    <li className="capitalize">Guia do Metaverso</li>
                    <li className="capitalize">
                      Manual da Blockchain - Tecnologia do Futuro
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="flex w-full justify-center">
                <h3 className="cut-through mb-[10px] text-center text-[50px]/[1em] font-semibold uppercase text-[#ff3900]">
                  R$ 3950,00
                </h3>
              </div>
            </div>

            <div className="md:h-full md:max-w-[50%]">
              <h3 className="mb-[10px] flex flex-col gap-[10px_20px] text-center text-[25px]/[1em] font-semibold uppercase md:text-[3.5vw] lg:text-[2.5vw]">
                Garanta tudo isso por apenas 12x de{' '}
                <b className="mx-auto flex items-center gap-[5px_10px] text-[#7ed956]">
                  R$ <span className="text-[50px]/[1em]">108,52</span>
                </b>
                à vista por R$ 1.049,30
              </h3>

              <p className="mb-4 flex flex-col gap-[10px_20px] text-center text-2xl font-bold uppercase text-[#7ed956] md:text-[3.5vw] lg:text-[2.5vw]">
                CUPOM DESCONTO 30%:{' '}
                <span className="text-4xl lg:text-[4vw]">SMART30</span>
              </p>

              <Button
                asChild
                className="items-baseline text-[17px]/[1] uppercase"
              >
                <a
                  href="https://pay.hotmart.com/N96069257H"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adquira Já
                </a>
              </Button>

              <p className="mt-[6px] text-center text-[14.592px] lg:text-[16px]">
                Pagamento feito pela Plataforma Hotmart
              </p>

              <div className="flex items-center justify-center gap-2 text-lg underline underline-offset-4 lg:text-xl">
                <img
                  className="size-10 lg:size-14"
                  src="/icons/youtube.svg"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/@smartcriptoativos"
                  target="__blank"
                >
                  SMART CRIPTOATIVOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
