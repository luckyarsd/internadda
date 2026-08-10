"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { X, CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from 'lucide-react'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  roleTitle: string
  organization: string
  roleId: string
  roleType: 'internship' | 'volunteer'
}

export function ApplicationModal({
  isOpen,
  onClose,
  roleTitle,
  organization,
  roleId,
  roleType,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    graduationYear: '2026',
    portfolioUrl: '',
    coverNote: '',
    botField: '', // Honeypot
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot spam prevention check
    if (formData.botField) {
      setSubmitted(true)
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid email address.')
      return
    }

    // Rate-limiting check (30-second cooldown)
    const lastSubmit = localStorage.getItem('ia_last_apply_submit')
    const now = Date.now()
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 30000) {
      const waitSec = Math.ceil((30000 - (now - parseInt(lastSubmit, 10))) / 1000)
      setError(`Please wait ${waitSec} seconds before submitting another application.`)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      if (serviceId !== 'YOUR_SERVICE_ID' && templateId !== 'YOUR_TEMPLATE_ID' && publicKey !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.fullName,
            from_email: formData.email,
            phone: formData.phone,
            college: formData.college,
            graduation_year: formData.graduationYear,
            portfolio_url: formData.portfolioUrl || 'N/A',
            role_title: roleTitle,
            organization: organization,
            role_type: roleType,
            message: formData.coverNote || 'N/A',
          },
          publicKey
        )
      } else {
        // Log fallback when env placeholders are in place
        console.log('[EmailJS Demo Mode]: Application data:', { roleTitle, organization, ...formData })
        await new Promise((resolve) => setTimeout(resolve, 600))
      }

      localStorage.setItem('ia_last_apply_submit', Date.now().toString())
      setSubmitted(true)
    } catch (err: any) {
      console.error('EmailJS Error:', err)
      setError(err?.text || err?.message || 'Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
              Free {roleType === 'internship' ? 'Internship' : 'Volunteer'} Application
            </span>
            <h3 className="text-base font-bold truncate max-w-[340px] text-white">
              {roleTitle}
            </h3>
            <p className="text-xs text-slate-400">{organization}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for applying to <strong>{roleTitle}</strong> at <strong>{organization}</strong>. The hiring/coordinator team will review your submission and contact you via email/WhatsApp.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false)
                    onClose()
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    College / Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi University"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Graduation Year
                  </label>
                  <select
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn / GitHub / Portfolio Link
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why are you interested in this position?
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly state your relevant skills or motivation..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              {/* Hidden honeypot field */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                className="hidden opacity-0 w-0 h-0 pointer-events-none"
                tabIndex={-1}
                aria-hidden="true"
              />

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <Send size={14} />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-lg p-2 text-center mt-2">
                <ShieldCheck size={14} className="flex-shrink-0" />
                <span>InternAdda never asks candidates for money — 100% free application.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
