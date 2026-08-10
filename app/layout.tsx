import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'InternAdda — Student Internship & Volunteer Platform',
    template: '%s | InternAdda',
  },
  description:
    'Discover verified internship and volunteer work opportunities across technology, data, design, and marketing. 100% free candidate application process.',
  keywords: [
    'student internships India',
    'volunteer work opportunities',
    'software engineering internship',
    'data analytics internship',
    'remote internships',
    'tech for good volunteer',
    'zero application fee',
  ],
  authors: [{ name: 'InternAdda', url: 'https://internadda.com' }],
  creator: 'InternAdda',
  publisher: 'InternAdda',
  metadataBase: new URL('https://internadda.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://internadda.com',
    siteName: 'InternAdda',
    title: 'InternAdda — Internships & Volunteer Opportunities',
    description:
      'Explore genuine, verified internships and volunteer roles with zero application fees.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F172A',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InternAdda',
  url: 'https://internadda.com',
  description: 'Internship and volunteer work discovery platform for students and early-career jobseekers.',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable)}
    >
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-blue-100 selection:text-blue-900',
          inter.className
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
