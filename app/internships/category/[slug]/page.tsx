import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { INTERNSHIPS } from '@/data/internships'
import { CATEGORIES } from '@/data/categories'
import { MapPin, Clock, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const internshipCategories = CATEGORIES.filter((c) => c.type === 'internship' || c.type === 'both')
  return internshipCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Metadata {
  const { slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)

  if (!category) {
    return { title: 'Category Not Found | InternAdda' }
  }

  return {
    title: `${category.name} Internships | InternAdda`,
    description: category.description,
    alternates: { canonical: `https://internadda.com/internships/category/${category.slug}` },
  }
}

export default async function CategoryInternshipsPage({ params }: Props) {
  const { slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const categoryRoles = INTERNSHIPS.filter((i) => i.categorySlug === slug)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Category Banner */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/internships"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={14} /> Back to all internships
            </Link>

            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 uppercase tracking-wider mb-3">
                Category Landing Page
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                {category.name} Internships
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <p className="text-sm font-semibold text-slate-600 mb-6">
              Found <strong className="text-slate-900">{categoryRoles.length}</strong> openings in {category.name}
            </p>

            {categoryRoles.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <p className="text-slate-600 text-sm">No specific roles currently listed under this category.</p>
                <Link href="/internships" className="inline-block mt-4 text-blue-600 font-bold text-sm">
                  View all available internships →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryRoles.map((role) => (
                  <div
                    key={role.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                          {role.category}
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {role.stipend}
                        </span>
                      </div>

                      <h2 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {role.title}
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mb-3">{role.company}</p>

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
                        href={`/internships/${role.slug}`}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                      >
                        View & Apply
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
