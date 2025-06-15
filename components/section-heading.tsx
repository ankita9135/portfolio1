"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  children: ReactNode
  emoji?: string
}

export default function SectionHeading({ children, emoji }: SectionHeadingProps) {
  const [isVisible, setIsVisible] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      },
    )

    if (headingRef.current) {
      observer.observe(headingRef.current)
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current)
      }
    }
  }, [])

  return (
    <h2
      ref={headingRef}
      className={`text-3xl font-bold tracking-tight mb-6 pb-2 border-b text-pink-600 flex items-center gap-2 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {emoji && <span className="text-2xl">{emoji}</span>}
      {children}
    </h2>
  )
}
