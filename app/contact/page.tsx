"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mail, MapPin, MessageCircle, Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', botField: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot spam prevention
    if (formData.botField) {
      setSubmitted(true)
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    // Rate limiting check (30-second cooldown)
    const lastSubmit = localStorage.getItem('ia_last_contact_submit')
    const now = Date.now()
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 30000) {
      const waitSec = Math.ceil((30000 - (now - parseInt(lastSubmit, 10))) / 1000)
      setError(`Please wait ${waitSec} seconds before sending another message.`)
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
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        )
      } else {
        console.log('[EmailJS Demo Mode]: Contact Message:', formData)
        await new Promise((resolve) => setTimeout(resolve, 600))
      }

      localStorage.setItem('ia_last_contact_submit', Date.now().toString())
      setSubmitted(true)
    } catch (err: any) {
      console.error('Contact EmailJS Error:', err)
      setError(err?.text || err?.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Header */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Contact InternAdda
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Have questions about internship applications, volunteer roles, or business partnerships? Reach out to our team directly.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Channels */}
              <div className="space-y-5">
                {/* General Support */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">General Support</h3>
                      <a href="mailto:support@internadda.com" className="text-xs text-blue-600 font-semibold hover:underline">
                        support@internadda.com
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Student queries, application help & platform support. Responds within 24 hours.
                  </p>
                </div>

                {/* Business & Partnerships */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Business & Partnerships</h3>
                      <a href="mailto:contact@internadda.com" className="text-xs text-indigo-600 font-semibold hover:underline">
                        contact@internadda.com
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Employer listings, organization onboarding, and university collaborations.
                  </p>
                </div>

                {/* WhatsApp Helpdesk */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">WhatsApp Helpdesk</h3>
                      <a
                        href="https://wa.me/918287742390?text=Hi%20InternAdda%20Team!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 font-semibold hover:underline"
                      >
                        +91 82877 42390
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Mon – Sat · 10 AM – 7 PM IST (Chat support)
                  </p>
                </div>

                {/* Trust guarantee */}
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200/80 text-xs text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <ShieldCheck size={16} /> 100% Free Platform Guarantee
                  </div>
                  <p className="text-emerald-700 leading-relaxed">
                    InternAdda never asks candidates for money at any stage — application, skill test, or interview.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                      <p className="text-slate-600 text-sm max-w-sm mx-auto">
                        Thanks for reaching out! Our team will get back to <strong>{formData.email}</strong> within 24 working hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h2 className="text-lg font-bold text-slate-900 mb-2">Send Us a Message</h2>

                      {error && (
                        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
                          <AlertCircle size={16} className="flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Subject *</label>
                        <input
                          type="text"
                          required
                          placeholder="Application query / Partnering with InternAdda"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="How can we assist you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                        />
                      </div>

                      {/* Honeypot field */}
                      <input
                        type="text"
                        name="botField"
                        value={formData.botField}
                        onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                        className="hidden opacity-0 w-0 h-0 pointer-events-none"
                        tabIndex={-1}
                        aria-hidden="true"
                      />

                      <div className="pt-2 flex items-center justify-between">
                        <p className="text-[11px] text-slate-500">
                          Applications & contact are 100% free.
                        </p>
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm disabled:opacity-50"
                        >
                          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
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
