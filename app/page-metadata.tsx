import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intern Adda — Student Internship Discovery Platform | Verified Opportunities',
  description: 'Find verified internships across software development, data analytics, marketing, and remote roles. Free applications with a transparent selection process.',
  keywords: ['internship in India', 'student internship platform', 'remote internship India', 'software development internship', 'data science internship', 'Intern Adda'],
  openGraph: {
    title: 'Intern Adda — Student Internship Discovery Platform',
    description: 'Verified student internships across India. Free to apply with a step-by-step selection process.',
    url: 'https://www.internadda.com',
    siteName: 'Intern Adda',
    images: [{ url: 'https://www.internadda.com/og-image.jpg', width: 1200, height: 630, alt: 'Intern Adda Platform' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intern Adda — Student Internship Discovery Platform',
    description: 'Verified student internships with zero application fees.',
    images: ['https://www.internadda.com/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.internadda.com' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export { default } from './_home'
