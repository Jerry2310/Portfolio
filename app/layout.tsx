import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Jerry's Portfolio`,
  description: 'Describeing Detail of Mr. Ankur Pratap Singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <main className='relative overflow-hidden'>
        {children}
      </main>
      <Footer />
      <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    </html>
  )
}
