"use client" 
import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  sublabel?: string
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 1500,
  label,
  sublabel,
}: AnimatedCounterProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out quad formula for smooth decelerating count animation
      const currentCount = Math.floor((1 - Math.pow(1 - progress, 2)) * target)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, target, duration])

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm font-bold text-blue-400 mt-1">{label}</div>
      {sublabel && <div className="text-xs text-slate-400 mt-0.5">{sublabel}</div>}
    </div>
  )
}
