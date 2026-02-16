import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aman Ali - Data Analyst & Developer',
  description: 'Professional portfolio of Aman Ali, a Data Analyst specializing in data visualization, statistical analysis, and business intelligence solutions. Showcasing projects in Python, SQL, Power BI, and deep learning.',
  keywords: ['Data Analyst', 'Python', 'SQL', 'Power BI', 'Data Visualization', 'Portfolio'],
  authors: [{ name: 'Aman Ali' }],
  openGraph: {
    title: 'Aman Ali - Data Analyst & Developer',
    description: 'Professional portfolio showcasing data analysis and development projects',
    url: 'https://portfolio.example.com',
    siteName: 'Aman Ali Portfolio',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
