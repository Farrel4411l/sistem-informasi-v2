"use client"

import { useState } from "react"
import { TypeWriter } from "@/components/type-writer"
import { FloatingElements } from "@/components/floating-elements"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false)

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[var(--surface-container-low)]">
        <img
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
          src="/lobby.jpg"
        />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <RevealOnScroll delay={0}>
          <span className="text-[var(--tertiary)] font-semibold tracking-widest text-sm mb-4 block uppercase">
            The Future of Digital Enterprise
          </span>
        </RevealOnScroll>

        <h1 className="text-[clamp(3rem,12vw,8rem)] font-black leading-none tracking-tighter text-[var(--on-surface)] mb-6">
          <TypeWriter
            text="SISTEM"
            speed={150}
            delay={500}
            onComplete={() => setShowSubtitle(true)}
          />
          <br />
          <span className="text-[var(--tertiary)]">
            {showSubtitle && (
              <TypeWriter text="INFORMASI" speed={150} delay={200} />
            )}
          </span>
        </h1>

        <RevealOnScroll delay={1500}>
          <div className="max-w-2xl mx-auto text-lg text-[var(--on-surface-variant)] leading-relaxed font-light">
            Curating the next generation of digital architects, data strategists, and enterprise innovators.
          </div>
        </RevealOnScroll>

        {/* Scroll indicator */}
        <RevealOnScroll delay={2000}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-[var(--tertiary)] to-transparent animate-pulse" />
          </div>
        </RevealOnScroll>
      </div>

      {/* Asymmetric Accent */}
      <div className="absolute bottom-10 right-0 w-1/3 h-64 bg-[var(--secondary-container)] -z-10 translate-x-20 rotate-12 blur-3xl opacity-50" />
    </section>
  )
}
