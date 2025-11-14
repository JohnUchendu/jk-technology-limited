import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBanner from '@/components/AnnoucementBanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JKTL Labs - Trusted Web & Software Development Company',
  description: 'RC-87373745 registered company. Transform your business with enterprise-grade web and software solutions. Boost credibility, efficiency, and growth.',
  keywords: 'web development, software company, Nigeria, CAC registered, RC-87373745',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}