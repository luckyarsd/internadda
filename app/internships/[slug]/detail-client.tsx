"use client"

import { useState } from 'react'
import { ApplicationModal } from '@/components/ApplicationModal'
import { Send, ShieldCheck } from 'lucide-react'

interface DetailClientProps {
  roleId: string
  roleTitle: string
  organization: string
  roleType: 'internship' | 'volunteer'
}

export function DetailClient({
  roleId,
  roleTitle,
  organization,
  roleType,
}: DetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-bold text-slate-900 text-base">Ready to Apply?</h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          Submit your application directly to the {organization} hiring team. No hidden fees or payment required.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]"
        >
          Apply for this Position <Send size={15} />
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>100% Free Candidate Application</span>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        roleId={roleId}
        roleTitle={roleTitle}
        organization={organization}
        roleType={roleType}
      />
    </>
  )
}
