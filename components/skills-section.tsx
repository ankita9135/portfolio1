"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Vue.js", "Angular", "Express", "Django"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Azure", "Google Cloud", "Vercel", "Netlify"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CircleCI"],
  },
  {
    category: "ML Tools",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
  },
]

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {skillCategories.map((category, index) => (
        <AnimatedCard key={index} index={index}>
          <h3 className="text-xl font-semibold text-pink-600">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                className="bg-white text-pink-700 border-pink-200 hover:bg-pink-100 text-sm py-1 px-3 hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
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
    <div
      ref={cardRef}
      className={`space-y-3 p-4 bg-pink-50 rounded-xl shadow-sm border border-pink-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionDuration: "500ms" }}
    >
      {children}
    </div>
  )
}
