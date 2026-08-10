import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  Users,
  Target,
  Zap,
  Award,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | InternAdda',
  description:
    'Learn about InternAdda mission to empower students with verified internships and meaningful volunteer opportunities across India and remote teams.',
  alternates: { canonical: 'https://internadda.com/about' },
}

const TEAM_MEMBERS = [
  {
    name: 'Lucky Tiwari',
    role: 'Founder & Lead Director',
    image: '/lucky.jpg',
    bio: 'Dedicated to connecting students with high-impact internship and volunteer opportunities across technology, analytics, and business.',
  },
  {
    name: 'Vikash Yadav',
    role: 'Co-Founder & Partnerships',
    image: '/vikash.jpg',
    bio: 'Building relations with startups, corporate hiring teams, and non-profit organizations.',
  },
  {
    name: 'Sumit Pandey',
    role: 'Technical Operations',
    image: '/sumit.jpg',
    bio: 'Architecting fast, lightweight static web experiences for students and hiring partners.',
  },
  {
    name: 'Pranjal Singh',
    role: 'Community & Operations',
    image: '/pranjal.jpg',
    bio: 'Managing student community initiatives, peer support networks, and application reviews.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 sm:py-24 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} /> Our Mission & Vision
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Empowering Early-Career Talent Across India
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                InternAdda is built to connect students and early-career jobseekers with genuine, verified internships and volunteer opportunities. Always free, transparent, and direct.
              </p>

            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Internships First</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We verify hosting organizations to ensure students work on genuine projects with clear learning outcomes and competitive stipends.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4">
                  <HeartHandshake size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Social Impact Volunteering</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We connect passionate volunteers with open source technical initiatives, non-profit campaigns, and youth mentorship projects.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Leadership Team</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Meet the Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Core Principles</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Commitment to Candidates
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <ShieldCheck size={24} className="text-emerald-600 mx-auto" />
                <h3 className="font-bold text-base text-slate-900">Zero Fees</h3>
                <p className="text-xs text-slate-600">Candidates never pay a fee to browse or apply for roles.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <CheckCircle2 size={24} className="text-blue-600 mx-auto" />
                <h3 className="font-bold text-base text-slate-900">Verified Postings</h3>
                <p className="text-xs text-slate-600">Opportunities are vetted for authenticity before publishing.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <Target size={24} className="text-indigo-600 mx-auto" />
                <h3 className="font-bold text-base text-slate-900">Clear Evaluation</h3>
                <p className="text-xs text-slate-600">Honest copy on selection criteria without exaggerated promises.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
