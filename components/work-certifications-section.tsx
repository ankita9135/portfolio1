"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const workExperience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    years: "2021–Present",
    description: "Led development of cloud-based solutions and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    years: "2018–2021",
    description: "Developed and maintained web applications using React and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    years: "2016–2018",
    description: "Assisted in building MVPs for various client projects.",
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect",
    level: "Professional",
    year: "2023",
    issuer: "Amazon Web Services",
  },
  {
    name: "Google Cloud Engineer",
    level: "Associate",
    year: "2022",
    issuer: "Google",
  },
  {
    name: "Microsoft Azure Developer",
    level: "Expert",
    year: "2021",
    issuer: "Microsoft",
  },
  {
    name: "TensorFlow Developer",
    level: "Professional",
    year: "2020",
    issuer: "Google",
  },
]

export default function WorkCertificationsSection() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <AnimatedCard>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-pink-600" />
            <CardTitle className="text-pink-600">Work Experience</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="space-y-2 p-4 bg-white rounded-lg border border-pink-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-pink-600">{job.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {job.years}
                </div>
              </div>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.description}</p>
            </div>
          ))}
        </CardContent>
      </AnimatedCard>

      <AnimatedCard delay={200}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-pink-600" />
            <CardTitle className="text-pink-600">Certifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-pink-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <h3 className="font-semibold text-pink-600">{cert.name}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200 hover:scale-105 transition-transform duration-200">
                  {cert.level}
                </Badge>
                <span className="text-xs text-gray-500">{cert.year}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </AnimatedCard>
    </div>
  )
}

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      style={{ transitionDelay: `${delay}ms`, transitionDuration: "500ms" }}
    >
      {children}
    </Card>
  )
}
