"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, Sparkles, Briefcase, HeartHandshake } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Internships', href: '/internships' },
  { name: 'Volunteer Work', href: '/volunteer' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md py-2.5'
            : 'bg-slate-900 border-b border-slate-800/80 py-3.5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              IA
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-extrabold tracking-tight text-white leading-none">
                Intern<span className="text-blue-400">Adda</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                Internships & Volunteer Roles
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-[13.5px] font-medium transition-all rounded-lg ${
                    active
                      ? 'text-white bg-blue-600/20 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/internships"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-lg shadow-sm transition-all hover:shadow-blue-600/20 active:scale-[0.98]"
            >
              Explore Roles <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Header height spacer */}
      <div className="h-16" />

      {/* Mobile navigation drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-[99] md:hidden bg-slate-900 border-b border-slate-800 shadow-2xl p-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                    active
                      ? 'text-white bg-blue-600/20 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </Link>
              )
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/internships"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[13.5px] rounded-lg transition-colors"
            >
              <Briefcase size={15} /> Browse Internships
            </Link>
            <Link
              href="/volunteer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-[13.5px] rounded-lg transition-colors border border-slate-700"
            >
              <HeartHandshake size={15} /> Volunteer Roles
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
