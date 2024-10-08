export const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-8 lg:flex-row lg:justify-between lg:px-64">
      <span className="text-xs lg:text-sm">
        © 2024. Todos os direitos reservados.
      </span>
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
    </footer>
  )
}
