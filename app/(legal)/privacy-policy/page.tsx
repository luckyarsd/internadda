import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | InternAdda',
  description: 'Learn how InternAdda collects, uses, and protects your personal data.',
  alternates: { canonical: 'https://internadda.com/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm">Last Updated: August 2026</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
              <p>
                At <strong>InternAdda</strong>, we are committed to safeguarding candidate privacy. This Privacy Policy details how we collect, handle, and store your personal information when you browse our platform or submit applications for internship and volunteer positions.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h2>
              <p>
                When you submit an application, we collect contact details (full name, email address, phone/WhatsApp number), educational background (college name, graduation year), and portfolio/profile URLs.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
              <p>
                Your application details are used solely to facilitate candidate evaluation by the hosting company or non-profit organization for the specific role you applied for. We do not sell your personal data to advertisers.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">3. Zero Payment Policy</h2>
              <p>
                InternAdda is 100% free for candidate applications. We never collect payment card information, bank details, or charge fees for submitting applications.
              </p>

              <h2 className="text-base font-bold text-slate-900 pt-2">4. Data Security & Contact</h2>
              <p>
                We maintain appropriate administrative and technical safeguards to protect your personal information against unauthorized access. For questions regarding your data, contact us at <strong>support@internadda.com</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
