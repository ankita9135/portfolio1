"use client"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-pink-50 overflow-hidden"
    >
      {/* Subtle mouse follow effect */}
      <div
        className="absolute bg-pink-100/30 rounded-full blur-3xl w-64 h-64 pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in text-gray-800">
          [Your Name]
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8 animate-fade-in animation-delay-200">
          [Your Tagline]
        </p>
        <Button
          size="lg"
          className="animate-fade-in animation-delay-300 bg-pink-500 hover:bg-pink-600 text-white hover:scale-105 transition-transform duration-200"
        >
          <ArrowDownToLine className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </section>
  )
}
