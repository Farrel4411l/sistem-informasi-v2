"use client"

import { useEffect, useRef, useState } from "react"

export function AccreditationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-[var(--surface)]">
      <div className="relative w-full h-auto overflow-hidden group">
        <img
          alt="Accreditation Certificates"
          className={`w-full h-auto block transition-all duration-1000 ${isVisible ? "scale-100" : "scale-110"
            } group-hover:scale-105`}
          src="/logokurikulum.png"
        />
        <div className="absolute inset-0 bg-[var(--primary)]/40 flex items-center justify-center">
          <div className="text-center px-4 md:px-6">
            <h2
              className={`text-[var(--primary-foreground)] text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-2 md:mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              Accredited Good
            </h2>
            <p
              className={`text-[var(--primary-foreground)]/90 text-xs sm:text-sm md:text-lg lg:text-xl font-medium transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              Accreditation Good for Information Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
