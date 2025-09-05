import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}