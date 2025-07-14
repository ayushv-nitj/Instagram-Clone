import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaVibe - Modern Social Media',
  description: 'A modern Instagram clone with beautiful UI and unique design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 