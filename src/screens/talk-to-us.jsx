import { Button } from '../components/button'

const data = '5511953219466'

export const TalkToUs = () => {
  return (
    <section className="flex flex-col bg-[#161616] py-4">
      {/* <span className="mx-auto flex max-w-[1140px] border-t border-[#363636] pb-[50px]" /> */}
      <div className="mx-auto flex max-w-[833px] flex-col items-center justify-center gap-[10px_20px] px-[25px] pb-[70px] pt-[20px] md:flex-row md:justify-between">
        <div className="text-center md:text-start">
          <h2 className="mb-[10px] text-[30px]/[1em] font-semibold md:mb-0 md:text-[2.7vw]">
            Alguma dúvida?
          </h2>

          <p className="text-[23px] text-[#f8f8f8]">
            Fale com nossa equipe de suporte.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-[#f8f8f8]">
              Aponte a camêra do seu celular para o QR Code
            </p>
            <img
              src="/assets/qr_code.jpg"
              className="mx-auto h-48 w-48"
              alt=""
            />
          </div>
          <p className="text-center text-[#f8f8f8]">
            Ou clique no botão abaixo
          </p>
          <Button
            asChild
            className="mt-0 gap-[20px] from-[#3fff5a] to-[#00ad19] text-[#00440a]"
          >
            <a
              href={`https://wa.me/${data}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandar um whatsapp
              <img
                src="/icons/whatsapp.svg"
                alt=""
                className="not-sr-only size-[16.92px]"
              />
            </a>
          </Button>
        </div>
      </div>
      <span className="mx-auto px-6 text-[10px] leading-[12px] lg:px-0">
        <strong className="font-semibold">Aviso Importante:</strong> O curso
        Smart CriptoTrader é exclusivamente educacional e tem como objetivo
        fornecer informações sobre análise técnica e o mercado de criptoativos.{' '}
        <p>
          Nenhuma das aulas e informações apresentadas deve ser interpretada
          como aconselhamento financeiro, recomendação de compra ou venda de
          qualquer criptoativo.
        </p>{' '}
        <p>
          Todos os exemplos e estratégias ensinados e compartilhados são para
          fins didáticos e podem não refletir as condições reais do mercado.
        </p>
        <p>
          Investir em criptoativos envolve riscos, e os participantes devem
          realizar suas próprias pesquisas e análises antes de tomar qualquer
          decisão de investimento.
        </p>
      </span>
    </section>
  )
}
