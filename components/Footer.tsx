import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Youtube, Mail, ShieldCheck, HeartHandshake, Briefcase, FileText } from 'lucide-react'

const FOOTER_LINKS = {
  Internships: [
    { label: 'All Internships', href: '/internships' },
    { label: 'Software Development', href: '/internships/category/software-development' },
    { label: 'Data Analytics', href: '/internships/category/data-analytics' },
    { label: 'UI/UX & Design', href: '/internships/category/design' },
    { label: 'Digital Marketing', href: '/internships/category/marketing' },
  ],
  Volunteer: [
    { label: 'All Volunteer Roles', href: '/volunteer' },
    { label: 'Community Outreach', href: '/volunteer/category/community-outreach' },
    { label: 'Tech for Good', href: '/volunteer/category/tech-for-good' },
    { label: 'Content & Media', href: '/volunteer/category/content-and-media' },
    { label: 'Peer Mentorship', href: '/volunteer/category/peer-mentorship' },
  ],
  Platform: [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Full-Time Careers', href: '/career' },
    { label: 'Contact Support', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck size={13} /> 100% Free Applications
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Start your career with real experience
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Explore curated internships and volunteer opportunities. Application is straightforward, direct, and completely free.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
            >
              <Briefcase size={15} /> Browse Internships
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all"
            >
              <HeartHandshake size={15} /> Volunteer Roles
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.jpg"
                alt="InternAdda Logo"
                width={32}
                height={32}
                unoptimized
                className="w-8 h-8 rounded-lg object-cover border border-slate-700"
              />
              <span className="font-extrabold text-xl text-white tracking-tight">
                Intern<span className="text-blue-400">Adda</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Connecting students and early-career professionals with genuine internship and volunteer opportunities across India & remote teams.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/internadda-india"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 flex items-center justify-center transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/internadda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 flex items-center justify-center transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:support@internadda.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selection Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-2xl text-slate-400">
            <strong className="text-slate-300">Selection Policy:</strong> InternAdda facilitates applications directly to hosting organizations. Application or evaluation completion does not guarantee selection. InternAdda never requests money from candidates.
          </p>
          <p>© {year} InternAdda. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
