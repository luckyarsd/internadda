import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | InternAdda',
  description: 'Selection and candidate safety disclaimer for InternAdda users.',
  alternates: { canonical: 'https://internadda.com/disclaimer' },
}

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Platform Disclaimer
            </h1>
            <p className="text-slate-300 text-sm">Last Updated: August 2026</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
              <h2 className="text-base font-bold text-slate-900">1. No Selection Guarantee</h2>
              <p>
                InternAdda hosts listings and facilitates free candidate application submissions directly to employer and non-profit coordinator teams. Submitting an application, resume, or task evaluation does not guarantee interview selection or an internship/volunteer offer.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">2. Candidate Protection Notice</h2>
              <p>
                InternAdda is completely free for candidates. InternAdda will never ask candidates for money for job placement, registration, or interview scheduling.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">3. Third-Party Relationships</h2>
              <p>
                Internships and volunteer roles are hosted by independent organizations. InternAdda is not responsible for agreements, terms, or disputes arising between candidates and host organizations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
