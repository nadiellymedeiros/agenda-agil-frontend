import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Link href="/pacientes">
        <Button>Tela de Pacientes</Button>
      </Link>
    </main>
  )
}
