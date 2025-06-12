import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import Header from '@/components/layout/Header'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Les Ateliers Culinaires d\'Ange Hong Lan',
  description: 'Cours de cuisine vietnamienne et ateliers culinaires à Paris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
