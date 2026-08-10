"use client"

import { useEffect, useState, useRef, RefObject } from 'react'

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(element) // Animate once
      }
    }, options)

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isInView]
}
