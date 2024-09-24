'use client '
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="bg-mainTheme text-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Italo Vieira
          </h1>
          <h2 className="text-xl font-medium text-gray-400">
            Engenheiro de Software
          </h2>

          <div className="flex gap-2 p-4">
            <Link
              className="flex justify-center py-2 px-4 w-32 bg-white text-black hover:bg-zinc-300 rounded-sm"
              href="/about"
            >
              Sobre mim
            </Link>
            <Link
              className="flex justify-center py-2 px-4 w-32 bg-white text-black hover:bg-zinc-300 rounded-sm"
              href="/projects"
            >
              Projetos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
