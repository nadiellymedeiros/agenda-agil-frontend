import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Image
        src="/imagens/logo.png"
        alt="logo"
        width={150}
        height={150}
        className="mb-10"
      />

      {children}
    </div>
  )
}
