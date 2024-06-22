import { Navbar } from '@/app/partials/navbar'

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      {children}
    </div>
  )
}
