import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multible Choice zum lernen',
  description: 'Lerne anhand von Frage und Antworten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
      <Link href={'/'}><h2>Multiple Choice zum lernen</h2></Link>
        {children}
        </body>
    </html>
  )
}
