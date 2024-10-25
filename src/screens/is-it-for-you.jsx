import { CircleCheckIcon } from 'lucide-react'
import { CircleXIcon } from 'lucide-react'

import { Button } from '../components/button'

export const IsItForYou = () => {
  return (
    <section className='relative -z-0 bg-[url("/assets/is-it-for-you/background.jpg")] bg-cover bg-no-repeat before:-z-10 md:before:absolute md:before:left-0 md:before:top-0 md:before:h-full md:before:w-full md:before:bg-[url("/assets/is-it-for-you/background-before.png")] md:before:bg-[100%_auto] md:before:bg-[top_center] md:before:bg-no-repeat md:before:opacity-50 lg:bg-fixed'>
      <div className="z-50 flex flex-col gap-[10px_20px] px-[25px] md:px-0 lg:mx-auto lg:max-w-[901px]">
        <div className="mt-[45px] flex flex-col items-center justify-center gap-[10px_20px] md:mt-0 md:flex-row md:pt-[120px]">
          <div className="w-full animate-fade-in-left md:w-[35%]">
            <img src="/assets/is-it-for-you/for-those-who-are-not.svg" alt="" />
          </div>

          <ul className="mt-[25px] md:mt-0 md:max-w-[65%]">
            <li className="flex items-center gap-[11.25px] pb-[6px]">
              <CircleXIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#ff3900]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem está 100% satisfeito com a vida que tem.
              </span>
            </li>

            <li className="mt-[6px] flex items-center gap-[11.25px] pb-[6px]">
              <CircleXIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#ff3900]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem já lucra constantemente com o mercado financeiro.
              </span>
            </li>

            <li className="mt-[6px] flex items-center gap-[11.25px]">
              <CircleXIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#ff3900]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem já tem liberdade financeira e geográfica.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-[45px] flex flex-col items-center gap-[10px_20px] md:mt-[33px] md:flex-row">
          <div className="w-full animate-fade-in-right md:order-2 md:w-[35%]">
            <img src="/assets/is-it-for-you/who-is-it-for.svg" alt="" />
          </div>

          <ul className="mt-[25px] md:mt-0 md:max-w-[65%]">
            <li className="flex items-center gap-[11.25px] pb-[6px]">
              <CircleCheckIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#4ed565]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem deseja dar do bom e do melhor para sua família.
              </span>
            </li>

            <li className="mt-[6px] flex items-center gap-[11.25px] pb-[6px]">
              <CircleCheckIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#4ed565]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem deseja conquistar independência financeira.
              </span>
            </li>

            <li className="mt-[6px] flex items-center gap-[11.25px] pb-[6px]">
              <CircleCheckIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#4ed565]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem está insatisfeito com a vida que tem e deseja muda-lá.
              </span>
            </li>

            <li className="mt-[6px] flex items-center gap-[11.25px]">
              <CircleCheckIcon className="size-[25px] w-[-webkit-fill-available] max-w-[25px] text-[#4ed565]" />

              <span className="text-[18px]/[1em] text-[silver]">
                Quem deseja viver do mercado financeiro e trabalhar de qualquer
                lugar do mundo.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-[90px] mt-[25px] flex flex-col gap-[10px_20px] rounded-[10px] border border-[#252525] p-[10px] md:flex-row md:p-[35px]">
          <div className="mb-[30px] flex w-full flex-col gap-[10px_20px] p-[10px] md:mb-0 md:w-[45%] md:flex-col">
            <h2 className="mb-[10px] text-center text-[21px]/[0.9em] font-medium text-[#f8f8f8] md:text-[1.9em]">
              Assista agora
            </h2>

            <video
              controls
              poster="/assets/is-it-for-you/video-thumbnail.png"
              className="md:sticky md:top-0"
              loop
            >
              <source
                src="/assets/is-it-for-you/unblock-access.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="flex flex-col gap-[10px_20px] p-[10px] md:w-[55%]">
            <div className="flex flex-col gap-[22.4px] text-justify text-[18px]/[1.65em] text-[#e4e4e4]">
              Está pronto para dominar o Mercado de Criptoativoss?
              <br /> <br />
              O Curso Smart CriptoTrader - Análise Técnica é o curso que vai
              transformar a forma como você investe. Nele, você aprenderá as
              principais estratégias para interpretar gráficos, identificar
              tendências e tomar decisões seguras, seja em momentos de alta ou
              de baixa. O mercado cripto oferece oportunidades gigantescas para
              quem sabe o que está fazendo, e eu vou te ensinar a utilizar
              ferramentas avançadas de análise para encontrar essas
              oportunidades.
              <br /> <br />
              Não se trata apenas de teoria — você vai adquirir o conhecimento
              prático necessário para tomar decisões e fazer trades mais
              inteligentes e maximizar seus lucros. Está preparado para fazer
              parte de um grupo seleto de traders que realmente lucram no
              mercado cripto? Inscreva-se agora e comece sua jornada rumo ao
              sucesso financeiro!
            </div>

            <Button asChild className="items-baseline gap-[5px]">
              <a
                href="https://pay.hotmart.com/N96069257H"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/lock-open.svg"
                  alt=""
                  className="size-[18px]"
                />
                Desbloquear Acesso
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
