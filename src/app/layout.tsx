import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Wikimon',
  description: 'Wikimon - Desafio do Workshop de Front-end da Fábrica de Softwares da Unipê.',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}