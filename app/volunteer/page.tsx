import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { VOLUNTEER_ROLES } from '@/data/volunteer'
import { TESTIMONIALS } from '@/data/testimonials'
import { HeartHandshake, MapPin, Clock, Filter, Award, Linkedin, FileCheck, Code, Star, ShieldCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer Work Opportunities & Non-Profit Roles | InternAdda',
  description: 'Contribute your skills to non-profits, open source initiatives, community outreach, and peer mentorship. Earn verified certificates and founder intros.',
  alternates: { canonical: 'https://internadda.com/volunteer' },
}

export default function VolunteerPage() {
  const volunteerTestimonials = TESTIMONIALS.filter((t) => t.type === 'volunteer')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Header Banner */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <HeartHandshake size={13} /> Flagship Non-Profit & Social Impact
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Volunteer Work Opportunities
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Make a tangible impact while building your skills and networking directly with non-profit founders. Earn verified certificates & letters of recommendation.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section (Task 6) */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-indigo-600" size={20} /> Volunteer Benefits at a Glance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-1">
                <div className="font-bold text-xs text-indigo-900">🎓 Verified Certificate</div>
                <p className="text-[11px] text-slate-600">Downloadable certificate for your resume & LinkedIn.</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-1">
                <div className="font-bold text-xs text-blue-900">🤝 Founder Connect</div>
                <p className="text-[11px] text-slate-600">Direct intro & mentorship from non-profit leads.</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                <div className="font-bold text-xs text-emerald-900">✍️ Letter of Rec (LOR)</div>
                <p className="text-[11px] text-slate-600">Signed LORs for high-performing volunteers.</p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-1">
                <div className="font-bold text-xs text-purple-900">🚀 Real Project Work</div>
                <p className="text-[11px] text-slate-600">Build live social impact portfolio experience.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100 space-y-1 col-span-2 sm:col-span-1">
                <div className="font-bold text-xs text-amber-900">⭐ Priority Placement</div>
                <p className="text-[11px] text-slate-600">Priority consideration for paid team roles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <p className="text-sm font-semibold text-slate-600">
                Showing <strong className="text-slate-900">{VOLUNTEER_ROLES.length}</strong> active volunteer positions
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Filter size={13} /> Filtered by: All Causes
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VOLUNTEER_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between group"
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

                    {/* Benefit Badges Visible at a glance (Task 6) */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md">
                        🎓 Certificate
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-md">
                        🤝 Founder Connect
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-800 border border-purple-200 rounded-md">
                        ✍️ LOR Available
                      </span>
                    </div>

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

        {/* Volunteer Success Stories Section (Task 6) */}
        {volunteerTestimonials.length > 0 && (
          <section className="py-12 bg-white border-t border-slate-200">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Impact Stories</span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Volunteer Success Stories
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {volunteerTestimonials.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-3"
                  >
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{t.quote}"
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs border-t border-indigo-100/80">
                      <div>
                        <span className="font-bold text-slate-900">{t.name}</span>
                        <span className="text-slate-500 block text-[11px]">{t.role} · {t.organization}</span>
                      </div>
                      {t.linkedInUrl && (
                        <a
                          href={t.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-indigo-600 transition-colors"
                          aria-label={`${t.name}'s LinkedIn`}
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Guaranteed No Fees Banner */}
        <section className="py-6 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-900 font-medium flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-emerald-700 flex-shrink-0" />
            <span><strong>Selection Policy:</strong> InternAdda never asks candidates for money at any stage — application, skill test, or interview. All volunteer positions are 100% free to apply.</span>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
