import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RK Team - Consultoria Esportiva',
  description: 'Transforme seu corpo e sua vida com a RK TEAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}