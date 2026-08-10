import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { INTERNSHIPS } from '@/data/internships'
import { VOLUNTEER_ROLES } from '@/data/volunteer'
import { CATEGORIES } from '@/data/categories'
import {
  Briefcase,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Code,
  BarChart3,
  Palette,
  TrendingUp,
  Compass,
  Users,
  Laptop,
  GraduationCap,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InternAdda — Find Curated Internships & Volunteer Opportunities',
  description:
    'Discover verified internships and meaningful volunteer roles across India and remote teams. 100% free to apply with transparent selection criteria.',
  openGraph: {
    title: 'InternAdda — Internships & Volunteer Opportunities',
    description: 'Connect with genuine software, data, design, marketing internships, and non-profit volunteer roles.',
    url: 'https://internadda.com',
  },
  alternates: { canonical: 'https://internadda.com' },
}

const ICON_MAP: Record<string, any> = {
  Code,
  BarChart3,
  Palette,
  TrendingUp,
  Compass,
  Users,
  HeartHandshake,
  Laptop,
  Sparkles,
  GraduationCap,
}

export default function HomePage() {
  const featuredInternships = INTERNSHIPS.slice(0, 4)
  const featuredVolunteer = VOLUNTEER_ROLES.slice(0, 4)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* ── Hero Section ──────────────────────────────────────────────── */}
        <section className="relative bg-slate-900 text-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
          {/* Subtle Grid background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-[#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} /> Official Platform for Internships & Volunteer Roles
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Launch Your Career with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                  Real Opportunities
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Explore curated internships and impactful volunteer positions with leading startups, non-profits, and tech teams. Always 100% free to apply.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/internships"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                >
                  <Briefcase size={18} /> Explore Internships
                </Link>
                <Link
                  href="/volunteer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm rounded-xl transition-all active:scale-[0.98]"
                >
                  <HeartHandshake size={18} /> Volunteer Roles
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Verified Employer Listings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  <span>Zero Application Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={16} className="text-indigo-400" />
                  <span>Transparent Evaluation</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Two Pillars Showcase ──────────────────────────────────────── */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pillar 1: Internships */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Internship Opportunities
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Gain hands-on industry experience with stipends in Software Engineering, Data Analytics, UI/UX Design, Digital Marketing, and Product Management.
                  </p>
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Remote, Hybrid & On-site placements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Competitive stipends & Pre-Placement Offers (PPOs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Direct application review by hiring managers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/internships"
                    className="inline-flex items-center gap-2 font-bold text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Browse All Internships <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Volunteer Work */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md">
                    <HeartHandshake size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Volunteer Work Opportunities
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Contribute your skills to meaningful non-profit initiatives, open source tech, youth mentorship, and environmental campaigns.
                  </p>
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Flexible weekly time commitments (2-6 hrs/week)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Verified Volunteer Certificates & Recommendation Letters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Build a social impact portfolio while helping others</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-2 font-bold text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Browse Volunteer Roles <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Featured Internships Section ─────────────────────────────── */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Featured Openings</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Latest Internship Openings
                </h2>
              </div>
              <Link
                href="/internships"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View all internships <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredInternships.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 mb-2">
                          {role.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500">{role.company}</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 flex-shrink-0">
                        {role.stipend}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
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

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-slate-400" /> {role.duration}
                      </span>
                    </div>
                    <Link
                      href={`/internships/${role.slug}`}
                      className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Volunteer Roles Section ─────────────────────────── */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Social Impact</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Featured Volunteer Roles
                </h2>
              </div>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                View all volunteer roles <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredVolunteer.map((role) => (
                <div
                  key={role.id}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 mb-2">
                          {role.cause}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500">{role.organization}</p>
                      </div>
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-200 flex-shrink-0">
                        {role.commitment}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                      {role.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-medium px-2 py-0.5 bg-white text-slate-700 border border-slate-200 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-slate-400" /> {role.duration}
                      </span>
                    </div>
                    <Link
                      href={`/volunteer/${role.slug}`}
                      className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Learn & Apply →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Category Taxonomy Grid ──────────────────────────────────── */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Browse by Domain</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Explore Categories
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Find opportunities tailored to your domain of study and interest.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat) => {
                const IconComponent = ICON_MAP[cat.iconName] || Briefcase
                const linkHref = cat.type === 'volunteer'
                  ? `/volunteer/category/${cat.slug}`
                  : `/internships/category/${cat.slug}`

                return (
                  <Link
                    key={cat.slug}
                    href={linkHref}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Honest Selection Process Overview ────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Honest & Transparent</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                How Selection Works at InternAdda
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe candidates deserve clarity. Applying to opportunities is completely free, and here is how evaluation proceeds:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center mx-auto mb-4 text-sm">
                  1
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Direct Application</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit your details, college background, and portfolio link directly via our free application form.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center mx-auto mb-4 text-sm">
                  2
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Host Organization Review</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The hosting company or NGO reviews your profile, portfolio, and motivation statement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center mx-auto mb-4 text-sm">
                  3
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Direct Contact</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shortlisted candidates are contacted directly for an interview or task. Note: Completing an assessment or application does not guarantee selection.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
