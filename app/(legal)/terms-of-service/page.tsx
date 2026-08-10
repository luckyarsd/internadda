import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | InternAdda',
  description: 'The official terms of service governing the use of InternAdda.',
  alternates: { canonical: 'https://internadda.com/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Terms of Service
            </h1>
            <p className="text-slate-300 text-sm">Last Updated: August 2026</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
              <p>
                Welcome to <strong>InternAdda</strong>. By accessing or using our platform to view or apply for internship and volunteer opportunities, you agree to comply with these Terms of Service.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">1. Candidate Application Use</h2>
              <p>
                InternAdda provides a discovery and application submission platform. Candidates agree to submit truthful information regarding their education, identity, skills, and contact details.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">2. Selection & Employment Disclaimer</h2>
              <p>
                InternAdda connects candidates with external hosting organizations and non-profits. InternAdda does not guarantee job placement, selection, or specific outcome upon submitting an application or completing an evaluation.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">3. Prohibited Conduct</h2>
              <p>
                Users must not attempt to submit spam applications, upload malicious links, or misrepresent identity or affiliations.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">4. Questions & Support</h2>
              <p>
                If you have questions regarding these terms, please contact us at <strong>support@internadda.com</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
