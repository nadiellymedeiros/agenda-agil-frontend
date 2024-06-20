import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="m-auto flex w-8/12 items-center justify-center pt-4 md:justify-between">
        <div>
          <Image
            src="/imagens/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-10"
          />
        </div>

        <div className="hidden md:flex md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            FP
          </div>

          <div className="ml-4">
            <p>
              {' '}
              Olá, <span className="font-bold">Fulana Pereira!</span>
            </p>
            <Link href="/login" className="text-green-500 hover:text-green-600">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
