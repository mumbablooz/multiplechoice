import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.3rem'
        }}>
        <Link href={'/'}><h2 style={{
          margin: '0 1rem'
        }}>Multiple Choice zum lernen</h2></Link>
      <Image 
          src={'https://cdn.pixabay.com/photo/2014/09/12/18/23/selection-443127_1280.png'} 
          width={414} 
          height={608} 
          style={{width: '3rem', height: 'auto'}}
          alt='Bundesland Bild' />
        </div>
      
        {children}
        </body>
    </html>
  )
}
