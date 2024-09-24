import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className="flex justify-center items-center  h-14 w-full gap-1 sm:justify-end">
      <Link
        className="hover:bg-hoverFooterTheme hover:text-white p-2 rounded-md text-1xl font-medium"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:bg-hoverFooterTheme hover:text-white p-2 rounded-md text-1xl font-medium"
        href="/about"
      >
        Sobre
      </Link>
      <Link
        className="hover:bg-hoverFooterTheme hover:text-white p-2 rounded-md text-1xl font-medium  mr-2"
        href="/projects"
      >
        Projetos
      </Link>
    </header>
  )
}
