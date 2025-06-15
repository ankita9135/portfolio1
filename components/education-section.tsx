"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const educationItems = [
  {
    degree: "M.S. in Computer Science",
    university: "University of Texas at Arlington",
    years: "2022–2024",
  },
  {
    degree: "B.S. in Computer Engineering",
    university: "Georgia Institute of Technology",
    years: "2018–2022",
  },
  {
    degree: "Associate's in Information Technology",
    university: "Austin Community College",
    years: "2016–2018",
  },
]

export default function EducationSection() {
  return (
    <div className="mt-8 space-y-6">
      {educationItems.map((item, index) => (
        <AnimatedCard key={index} index={index}>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <CardTitle className="text-xl text-pink-600">{item.degree}</CardTitle>
              <p className="text-gray-600">
                {item.university} ({item.years})
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Relevant coursework and achievements can be added here to provide more context about your educational
              background.
            </p>
          </CardContent>
        </AnimatedCard>
      ))}
    </div>
  )
}

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <Card
      ref={cardRef}
      className={`border border-pink-100 bg-pink-50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionDuration: "500ms" }}
    >
      {children}
    </Card>
  )
}
