import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | InternAdda',
  description: 'Find clear answers about applying for internships and volunteer opportunities on InternAdda.',
  alternates: { canonical: 'https://internadda.com/faq' },
}

const FAQS = [
  {
    q: 'What is InternAdda?',
    a: 'InternAdda is a career and volunteer discovery platform for students and early-career jobseekers across India. We connect candidates directly with hiring organizations and non-profits for verified internship and volunteer roles.',
  },
  {
    q: 'Is applying to internships and volunteer roles free?',
    a: 'Yes, 100% free. Candidates can browse all listings and submit applications directly through our platform without any charges.',
  },
  {
    q: 'What is the difference between Internships and Volunteer Roles?',
    a: 'Internships are structured career placements (remote, hybrid, or on-site) focused on professional skill building and usually include stipends. Volunteer Roles focus on social impact, community outreach, open source software, and peer mentorship, typically requiring flexible weekly time commitments.',
  },
  {
    q: 'How does the selection process work?',
    a: 'When you submit an application, your details and motivation statement are routed directly to the hosting organization. Shortlisted candidates are contacted directly for an interview or assignment. Please note that submitting an application or completing an evaluation does not guarantee selection.',
  },
  {
    q: 'Are the internship and volunteer roles remote or on-site?',
    a: 'We host both remote (work from anywhere in India) and on-site/hybrid opportunities. Each listing clearly specifies its location type and requirements.',
  },
  {
    q: 'Do I get a certificate upon completing a volunteer role or internship?',
    a: 'Certificates of completion, letters of recommendation, or badges are issued directly by the hosting company or non-profit organization upon satisfactory completion of your tenure.',
  },
  {
    q: 'How can organizations list their opportunities on InternAdda?',
    a: 'Organizations and non-profits can reach out via our contact page to list verified internship or volunteer positions.',
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Clear answers about internships, volunteer work, selection process, and platform policies.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2"
              >
                <h3 className="font-bold text-base text-slate-900">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
