import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Briefcase, Star, Download, ExternalLink, ShieldCheck, CheckCircle2, Building2, Smartphone, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full-Time Careers & MyJobee App Partnership | InternAdda',
  description: 'Looking for full-time job roles? InternAdda has partnered with MyJobee (10L+ downloads, 4.4★ rating) to help you transition from internships to full-time career roles.',
  alternates: { canonical: 'https://internadda.com/career' },
}

export default function CareerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-[#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 size={14} className="text-blue-400" /> Exclusive Career Partnership
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Looking for Full-Time Roles?
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Transition seamlessly from internships to full-time employment. InternAdda has partnered with <strong>MyJobee</strong> to bring you thousands of verified full-time job openings across India.
            </p>
          </div>
        </section>

        {/* Partnership & App Download Card Section */}
        <section className="py-14">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
              
              {/* Partner Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 flex-shrink-0">
                    MJ
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Official Full-Time Partner</span>
                    <h2 className="text-2xl font-extrabold text-slate-900">MyJobee Job Platform</h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Connecting jobseekers with verified employers</p>
                  </div>
                </div>

                {/* Rating & Downloads Badge */}
                <div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200">
                  <div className="text-center pr-3 border-r border-slate-200">
                    <div className="flex items-center gap-1 text-amber-500 font-extrabold text-lg">
                      4.4 <Star size={16} className="fill-current" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">Play Store Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-extrabold text-slate-900">10 Lakh+</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">App Downloads</div>
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  While InternAdda specializes in curated entry-level internships and volunteer opportunities, we know many of our candidates are ready to take their next big leap into a permanent, full-time career role.
                </p>
                <p>
                  Through our strategic partnership with <strong>MyJobee</strong> — a premier job discovery app trusted by over 10 Lakh jobseekers — you get direct access to thousands of verified full-time job openings in Software Engineering, Data Analytics, Operations, Sales, Marketing, and Customer Support.
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-center space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-2">
                    <Smartphone size={18} />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">1-Click Mobile Apply</h3>
                  <p className="text-[11px] text-slate-600">Apply directly from your phone in under 30 seconds.</p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-center space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-2">
                    <Users size={18} />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">Verified Recruiters</h3>
                  <p className="text-[11px] text-slate-600">Connect with authentic HR leads and hiring managers.</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2">
                    <ShieldCheck size={18} />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">Zero Candidate Fees</h3>
                  <p className="text-[11px] text-slate-600">100% free download and application process.</p>
                </div>
              </div>

              {/* Call to Action Container */}
              <div className="pt-6 text-center space-y-4 border-t border-slate-100">
                <div>
                  <a
                    href="https://myjobeefb.web.app/refer/wcGzTU9fh5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> Download MyJobee App <ExternalLink size={16} />
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-current" /> 4.4★ Play Store Rating
                  </span>
                  <span>•</span>
                  <span>10 Lakh+ Active Downloads</span>
                  <span>•</span>
                  <span>Direct Referral Access</span>
                </div>
              </div>

            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-900 font-medium">
              <strong>Selection Policy:</strong> Like InternAdda, MyJobee opportunities never ask jobseekers for money at any stage. Application is 100% free.
            </div>

          </div>
        </section>

      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
