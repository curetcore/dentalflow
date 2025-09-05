import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
})

export const metadata: Metadata = {
  title: 'María AI - Tu Asistente Dental Inteligente | DentalFlow AI',
  description: 'Reduce ausencias 73% y llena tu agenda automáticamente. María AI confirma citas 24/7 por WhatsApp para clínicas dentales.',
  keywords: 'asistente dental, IA dental, confirmación citas, clínicas dentales, reducir ausencias, dental AI, appointment confirmation',
  openGraph: {
    title: 'María AI - Tu Asistente Dental Inteligente',
    description: 'Reduce ausencias 73% y llena tu agenda automáticamente',
    url: 'https://dentalflow.do',
    siteName: 'DentalFlow AI',
    locale: 'es_DO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}