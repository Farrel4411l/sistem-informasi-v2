"use client"

import { useEffect, useRef, useState } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function JoinSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="join"
      className="relative py-32 px-6 md:px-8 overflow-hidden bg-[var(--on-surface)]"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img
          alt="Join Background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQkWfEWZABUwD-d319hUv5vzy1BAUwuT7VLq6Mxn-vfHvUy1O5Uhi64ZUtSv2Zesl88pd6MrNIGbw_aMelN1ftLwJZEdk9qXjysephl-PyU_J_zqTYcn0fWrBxBFLiWo_-81f5Ayyd3xDfCUk6RSDT9VRzL4GIBc0mQ0GcNgcpAuK4PCAtvFdwFuEJh0GqaSsSVPi9WhnUu8HTSKOhg-3fU-U_1USTMvLykqBncYKN0rh24ocq_NZCIJny6INIMaPuuLH-4NwCmKeW"
        />
      </div>

      {/* Interactive glow effect */}
      <div
        className="absolute w-96 h-96 rounded-full blur-[150px] opacity-30 pointer-events-none transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, var(--tertiary), var(--secondary))",
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 text-balance">
            Ready to Architect the Future?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Admission is now open for the 2024 academic cycle. Join a community of innovators and start your journey today.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              data-magnetic
              className="magnetic-btn bg-[var(--tertiary)] text-[var(--on-tertiary)] px-10 py-5 rounded-md font-bold text-lg hover:bg-[var(--tertiary-dim)] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[var(--tertiary)]/20"
            >
              Apply for 2024 Admission
            </button>
            <button
              data-magnetic
              className="magnetic-btn bg-transparent text-white border-2 border-white/20 px-10 py-5 rounded-md font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Download Prospectus
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Decorative circle */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--tertiary)] rounded-full blur-[120px] opacity-20 pointer-events-none" />
    </section>
  )
}
