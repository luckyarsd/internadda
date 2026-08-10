import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { INTERNSHIPS } from '@/data/internships'
import { VOLUNTEER_ROLES } from '@/data/volunteer'
import { CATEGORIES } from '@/data/categories'
import { TESTIMONIALS } from '@/data/testimonials'
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
  Award,
  Linkedin,
  FileCheck,
  Star,
  Building,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InternAdda — Genuine Internships & Volunteer Opportunities (100% Free)',
  description:
    'Discover curated internships and verified volunteer roles across India & remote teams. All opportunities feature zero application fees and transparent skill evaluations.',
  openGraph: {
    title: 'InternAdda — Internships & Volunteer Roles (100% Free)',
    description: 'Connect with genuine software, data, design, marketing internships, and non-profit volunteer roles with zero application fees.',
    url: 'https://internadda.com',
    images: [{ url: '/logo.jpg', width: 800, height: 800, alt: 'InternAdda Logo' }],
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

// Company partner logos (using lightweight CSS grayscale placeholders)
const PARTNERS = [
  { name: 'Apex Labs', label: 'Apex Labs' },
  { name: 'QuantEdge Analytics', label: 'QuantEdge' },
  { name: 'Krypton Studio', label: 'Krypton Studio' },
  { name: 'ScaleX Digital', label: 'ScaleX' },
  { name: 'Vanguard Operations', label: 'Vanguard' },
]

export default function HomePage() {
  // Use all 5 curated internships
  const featuredInternships = INTERNSHIPS
  const featuredVolunteer = VOLUNTEER_ROLES.slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'InternAdda',
    url: 'https://internadda.com',
    logo: 'https://internadda.com/logo.jpg',
    description: 'Connecting students and early-career jobseekers with verified internships and volunteer opportunities across India.',
    sameAs: [
      'https://www.linkedin.com/company/internadda-india',
      'https://www.instagram.com/internadda',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
        <section className="relative bg-slate-900 text-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
          {/* Subtle Grid background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-[#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} className="text-blue-400" /> Official Platform for Internships & Volunteer Roles
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
                Explore curated entry-level internships and impactful volunteer positions with leading teams & non-profits. <strong>100% free candidate application.</strong>
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

              {/* Trust Guarantee Strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-xs text-slate-300 border-t border-slate-800/80 max-w-xl mx-auto">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>Verified Employer Listings</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <CheckCircle2 size={16} />
                  <span>Zero Application Fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={16} className="text-indigo-400" />
                  <span>Practical Skill Evaluation</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Stat Counters & Partner Strip ─────────────────────────── */}
        <section className="bg-slate-950 border-b border-slate-800 py-8">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-slate-800/60">
              <AnimatedCounter target={500} suffix="+" label="Students Placed" sublabel="Across internships & volunteer roles" />
              <AnimatedCounter target={50} suffix="+" label="Partner Organizations" sublabel="Startups & non-profits" />
              <AnimatedCounter target={100} suffix="%" label="Free Applications" sublabel="Never any fees charged to candidates" />
              <AnimatedCounter target={4} suffix=".8★" label="Candidate Satisfaction" sublabel="Based on verified participant feedback" />
            </div>

            {/* Partner logos */}
            <div className="mt-8 pt-6 border-t border-slate-900 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 block mb-4">
                Trusted by hiring teams & non-profits at
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
                {PARTNERS.map((partner) => (
                  <span
                    key={partner.name}
                    className="text-slate-300 font-extrabold text-sm sm:text-base tracking-tight hover:text-white transition-colors"
                  >
                    {partner.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Two Pillars Showcase ──────────────────────────────────────── */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Pillar 1: Internships */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex flex-col justify-between hover:shadow-md transition-all duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Paid Internship Opportunities
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Curated entry-level internships with ₹2,000–₹5,000/month stipends. No prior professional experience required — we evaluate you via a real task, not just a resume.
                  </p>
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Data Analytics, Power BI, MS Office, Design & Marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Remote flexibility with verified stipends</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>Direct application review with zero fees</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/internships"
                    className="inline-flex items-center gap-2 font-bold text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Browse All 5 Internships <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Volunteer Work */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 flex flex-col justify-between hover:shadow-md transition-all duration-200">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md">
                    <HeartHandshake size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Flagship Volunteer Work
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Contribute your skills to non-profits and educational causes. Earn verified certificates, direct founder connections, and letters of recommendation.
                  </p>
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Verified Certificates & LinkedIn founder intros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Official Letters of Recommendation for strong performers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                      <span>Build real social impact portfolio work (2-6 hrs/week)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center gap-2 font-bold text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Explore Flagship Volunteer Roles <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 4. Featured Internships Section ─────────────────────────────── */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Curated Openings</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  Latest Internship Openings
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Stipends ranging from ₹2,000 to ₹5,000/month. Evaluated via a practical skill test.
                </p>
              </div>
              <Link
                href="/internships"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
              >
                View all 5 internships <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInternships.map((role) => (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 mb-2">
                          {role.category}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {role.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">{role.company}</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 flex-shrink-0">
                        {role.stipend}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
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

        {/* ── 5. Flagship Volunteer Benefits Section (Task 6) ───────────── */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Flagship Offering</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Why Volunteer With InternAdda?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Gain real-world leadership exposure and official credentials while contributing to meaningful social causes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Award size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Verified Certificate</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Receive a shareable digital certificate verifying your completed hours & achievements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Founder Connection</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct Intro to non-profit founders & leads over LinkedIn for guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <FileCheck size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Letter of Rec (LOR)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High performers receive signed recommendations for future academic/job applications.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                  <Code size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Real Project Work</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Work on live tech, media, and outreach projects — not repetitive busywork.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                  <Star size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">Priority Placement</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get priority consideration for future paid internships at partner organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Honest 4-Step Selection Process (Task 5) ────────────────── */}
        <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Transparent & Fair</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                How Selection Works at InternAdda
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xl mx-auto">
                We believe in evaluating real skills, not just resume keywords. Here is how our simple 4-step hiring flow proceeds:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto text-sm shadow-md">
                  1
                </div>
                <h3 className="font-bold text-base text-white">1. Apply</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fill a short application form (takes 2 minutes). No long essays required.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto text-sm shadow-md">
                  2
                </div>
                <h3 className="font-bold text-base text-white">2. Skill Test (1–3 Days)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete a short, real-project-based task relevant to the role — this is how we evaluate your potential.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto text-sm shadow-md">
                  3
                </div>
                <h3 className="font-bold text-base text-white">3. Intro Interview</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A short, friendly conversation (15–20 min) with the host team to confirm fit and expectations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center mx-auto text-sm shadow-md">
                  4
                </div>
                <h3 className="font-bold text-base text-white">4. Get Started</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Selected candidates onboard directly with the host organization with mentor support.
                </p>
              </div>
            </div>

            {/* Prominent No Fees Policy Guarantee Banner */}
            <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-1 shadow-lg">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-extrabold text-sm sm:text-base">
                <ShieldCheck size={20} /> Zero Fees Policy Guarantee
              </div>
              <p className="text-emerald-200 text-xs sm:text-sm leading-relaxed">
                <strong>InternAdda never asks candidates for money at any stage — application, skill test, or interview.</strong> All opportunities are 100% free to apply for.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. Testimonials & Student Reviews (Task 3 & 6) ───────────── */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Candidate Experiences</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                What Past Candidates Say
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Real feedback from students placed in internships and volunteer initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                      <p className="text-[11px] text-slate-500">{t.role} · {t.organization}</p>
                    </div>
                    {t.linkedInUrl && (
                      <a
                        href={t.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
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

      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}
