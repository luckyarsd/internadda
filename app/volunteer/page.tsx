import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { VOLUNTEER_ROLES } from '@/data/volunteer'
import { HeartHandshake, MapPin, Clock, Filter } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer Work Opportunities | InternAdda',
  description: 'Contribute your skills to non-profits, open source initiatives, community outreach, and peer mentorship. Verified volunteer roles with certificates.',
  alternates: { canonical: 'https://internadda.com/volunteer' },
}

export default function VolunteerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Header Banner */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <HeartHandshake size={13} /> Non-Profit & Social Impact
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Volunteer Work Opportunities
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Make a tangible impact while building your skills and networking with community leaders. Earn verified Volunteer Certificates.
              </p>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <p className="text-sm font-semibold text-slate-600">
                Showing <strong className="text-slate-900">{VOLUNTEER_ROLES.length}</strong> volunteer positions
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Filter size={13} /> Filtered by: All Causes
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VOLUNTEER_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                        {role.cause}
                      </span>
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200">
                        {role.commitment}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                      {role.title}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{role.organization}</p>

                    <p className="text-slate-600 text-xs line-clamp-3 mb-4 leading-relaxed">
                      {role.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400" /> {role.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={13} className="text-slate-400" /> {role.duration}
                      </div>
                    </div>

                    <Link
                      href={`/volunteer/${role.slug}`}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                    >
                      Learn & Apply
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
