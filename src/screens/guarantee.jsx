import { Button } from '../components/button'

export const Guarantee = () => {
  return (
    <section className="bg-[#7ed956]">
      <div className="mx-auto px-[25px] py-[30px] md:max-w-[725px]">
        <div className="mb-[30px] md:mb-0 md:flex md:items-center md:gap-[56.67px]">
          <img
            src="/assets/guarantee/sete-dias.svg"
            alt=""
            className="mx-auto mb-[25px] w-1/2 blur-0 brightness-200 contrast-100 hue-rotate-0 saturate-0 md:mb-0 md:max-w-[185px]"
          />

          <div className="w-full text-center md:text-start">
            <h2 className="mb-[10px] text-[30px]/[1.3em] font-semibold">
              7 Dias de garantia de arrependimento pela Hotmart
            </h2>
          </div>
        </div>

        <Button
          asChild
          className="mx-auto w-fit from-[#ffffff] to-[#eeeeee] text-[#2a4121]"
        >
          <a
            href="https://pay.hotmart.com/N96069257H"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero alcançar a liberdade
          </a>
        </Button>
      </div>
    </section>
  )
}
