import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agenda Ágil',
  description: 'Agenda online para gerenciamento de atendimentos odontológicos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'flex min-h-screen flex-1 flex-col',
          montserrat.className,
        )}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
