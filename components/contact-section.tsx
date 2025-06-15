"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ContactSection() {
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
    <div className="mt-8">
      <Card
        ref={cardRef}
        className={`border border-pink-100 bg-pink-50 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <CardContent className="pt-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pink-600">Let's connect!</h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-700">[your@email.com]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-700">[Your Phone Number]</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-700">[Your Location]</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-semibold text-pink-600">Find me on</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-pink-200 text-pink-600 hover:bg-pink-100 hover:scale-105 transition-transform duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-pink-200 text-pink-600 hover:bg-pink-100 hover:scale-105 transition-transform duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
