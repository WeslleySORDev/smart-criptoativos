import { Button } from '../components/button'

const data = '5511933724537'

export const TalkToUs = () => {
  return (
    <section className="bg-[#161616]">
      <span className="mx-auto flex max-w-[1140px] border-t border-[#363636] pb-[50px]" />

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
    </section>
  )
}
