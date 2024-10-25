import { Button } from '../components/button'

export const Smart = () => {
  return (
    <section className='mx-auto mb-[25px] h-dvh max-w-[901px] bg-[url("/assets/smart/background.png")] bg-cover bg-center p-[10px] text-center lg:flex lg:h-full lg:min-h-[calc(1080px/2)] lg:items-center lg:bg-contain lg:bg-right-bottom lg:bg-no-repeat'>
      <div className="-m-[10px] -mb-[100px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.6)] lg:bg-none">
        <div className="mt-[80%] sm:mt-[40%] lg:mt-0 lg:w-[47%]">
          <h1 className="mx-[10px] mb-[10px] text-4xl font-bold">
            Curso <span className="text-[#7ed956]">Smart Criptotrader</span>
          </h1>

          <h2 className="mx-[10px] mb-[10px] text-[21px]/[0.9em] font-medium text-[#f8f8f8]">
            Aprenda a operar no mercado cripto com confiança!
          </h2>
          <p className="mx-[10px] mb-[20px] text-justify font-sora text-[16px] leading-[16px] text-[#e0e0e0]">
            Curso Smart CriptoTrader - Análise Técnica, você dominará as
            principais ferramentas e estratégias para interpretar gráficos,
            identificar oportunidades e fazer trades lucrativos no mercado de
            criptoativos. Com módulos didáticos e conteúdos exclusivos,
            oferecemos o conhecimento necessário para que você possa tomar
            decisões seguras e alcançar o sucesso nas suas operações.
            Inscreva-se agora e dê o primeiro passo para se tornar um trader
            cripto de sucesso!
          </p>

          <Button className="mx-[10px] mt-auto w-full">
            <a
              href="https://pay.hotmart.com/N96069257H"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero alcançar a liberdade
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
