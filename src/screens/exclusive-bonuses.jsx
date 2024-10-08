import { GiftIcon } from 'lucide-react'

const data = [
  'lucrando-na-b3.webp',
  'mindset-exponencial.webp',
  'operando-mercados-internacional.webp',
]

export const ExclusiveBonuses = () => {
  return (
    <section className="bg-[#7ed956]">
      <div className="flex flex-col gap-[10px_20px] px-[25px] py-[15px]">
        <h2 className="flex items-center justify-center gap-[10px]">
          <GiftIcon className="size-[52px]" />

          <span className="flex flex-col text-[1.6em]/[1em] lg:text-[2.3em]">
            <b>Bônus exclusivos</b> para essa turma
          </span>
        </h2>

        <div className="flex flex-col justify-center gap-[10px] p-[10px] md:flex-row">
          {data.map((item, index) => (
            <div className="" key={`${index}-${item}`}>
              <img
                src={`/assets/exclusive-bonuses/${item}`}
                alt=""
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
