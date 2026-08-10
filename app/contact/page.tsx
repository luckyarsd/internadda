"use client"

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Mail, MapPin, MessageCircle, Send, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
        
        {/* Header */}
        <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Contact InternAdda Support
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Have questions about an internship application, volunteer role, or organization listing? We are here to help.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Channels */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Email Support</h3>
                      <a href="mailto:support@internadda.com" className="text-xs text-blue-600 font-semibold hover:underline">
                        support@internadda.com
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We respond to emails within 24 working hours.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">WhatsApp Helpdesk</h3>
                      <a
                        href="https://wa.me/919217713161?text=Hi%20InternAdda%20Support!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 font-semibold hover:underline"
                      >
                        +91 92177 13161
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Mon – Sat · 10 AM – 7 PM IST
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">Headquarters</h3>
                      <p className="text-xs text-slate-600">New Delhi, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Registered Entity</span>
                  </div>
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
                      <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                      <p className="text-slate-600 text-sm max-w-sm mx-auto">
                        Thank you for reaching out. Our support team will respond to <strong>{formData.email}</strong> within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h2 className="text-lg font-bold text-slate-900 mb-2">Send Us a Message</h2>

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
                          placeholder="Application query / Listing partnership"
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

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
                      >
                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                        Send Message
                      </button>
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
