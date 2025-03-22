export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col items-center py-8 lg:flex-row lg:justify-between lg:px-64">
        <span className="text-xs lg:text-sm">
          © 2024. Todos os direitos reservados.
        </span>

        <a href="mailto:suporte@smartcriptoativos.com">
          suporte@smartcriptoativos.com
        </a>

        <div className="flex items-center gap-2 text-xs underline underline-offset-4 lg:text-sm">
          <img
            className="h-6 w-6 lg:h-10 lg:w-10"
            src="/icons/youtube.svg"
            alt=""
          />
          <a href="https://www.youtube.com/@smartcriptoativos" target="__blank">
            SMART CRIPTOATIVOS
          </a>
        </div>
      </div>
      <span className="text-center text-xs">
        <a
          className="mx-auto py-2 hover:underline"
          target="__blank"
          href="https://www.linkedin.com/in/weslleysordev/"
        >
          Desenvolvido por: Weslley Ruas
        </a>
      </span>
    </footer>
  )
}
