import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { INTERNSHIPS } from '@/data/internships'
import { DetailClient } from './detail-client'
import { MapPin, Clock, Briefcase, Calendar, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INTERNSHIPS.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Metadata {
  const { slug } = await params
  const role = INTERNSHIPS.find((i) => i.slug === slug)

  if (!role) {
    return { title: 'Internship Not Found | InternAdda' }
  }

  return {
    title: `${role.title} at ${role.company} | InternAdda`,
    description: role.description,
    openGraph: {
      title: `${role.title} at ${role.company}`,
      description: role.description,
      url: `https://internadda.com/internships/${role.slug}`,
    },
    alternates: { canonical: `https://internadda.com/internships/${role.slug}` },
  }
}

export default async function InternshipDetailPage({ params }: Props) {
  const { slug } = await params
  const role = INTERNSHIPS.find((i) => i.slug === slug)

  if (!role) {
    notFound()
  }

  // JSON-LD JobPosting & BreadcrumbList schema
  const jobLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: role.description,
    identifier: {
      '@type': 'PropertyValue',
      name: role.company,
      value: role.id,
    },
    datePosted: role.postedDate,
    validThrough: role.deadline,
    employmentType: role.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: role.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: role.location,
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        unitText: 'MONTH',
        description: role.stipend,
      },
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://internadda.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Internships',
        item: 'https://internadda.com/internships',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: role.title,
        item: `https://internadda.com/internships/${role.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Top Header */}
        <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/internships"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to all internships
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 uppercase tracking-wider mb-3">
                  {role.category}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
                  {role.title}
                </h1>
                <p className="text-base font-semibold text-slate-300">{role.company}</p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                <span className="text-sm font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-xl">
                  {role.stipend}
                </span>
                <span className="text-xs text-slate-400">
                  Application Deadline: {role.deadline}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Application */}
        <section className="py-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Meta details bar */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium block mb-1">Location</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <MapPin size={13} className="text-blue-600" /> {role.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block mb-1">Duration</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <Clock size={13} className="text-blue-600" /> {role.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block mb-1">Engagement</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <Briefcase size={13} className="text-blue-600" /> {role.type}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block mb-1">Openings</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <Calendar size={13} className="text-blue-600" /> {role.openings} positions
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3">About the Role</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{role.description}</p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3">Key Responsibilities</h2>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3">Requirements & Skills</h2>
                    <ul className="space-y-2.5 text-sm text-slate-600 mb-4">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3">Perks & Benefits</h2>
                    <ul className="space-y-2.5 text-sm text-slate-600">
                      {role.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Right Column: Apply Action Card */}
              <div className="space-y-6">
                <DetailClient
                  roleId={role.id}
                  roleTitle={role.title}
                  organization={role.company}
                  roleType="internship"
                />

                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    <span>Honest Application Promise</span>
                  </div>
                  <p className="leading-relaxed">
                    Applying to internships on InternAdda is 100% free. Completing an application or assessment does not guarantee selection. Hosting teams contact shortlisted candidates directly.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
