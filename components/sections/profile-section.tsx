"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function ProfileSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-[var(--surface)]">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <RevealOnScroll direction="left">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--tertiary-container)] -z-10" />
            <img
              alt="Head of Department"
              className="w-full h-auto object-contain shadow-2xl rounded-lg transition-transform duration-500 hover:scale-[1.02]"
              src="/joko.jpeg"
            />
            <div className="absolute -bottom-8 -right-8 bg-[var(--surface-container-lowest)] p-6 shadow-xl max-w-xs border border-[var(--outline-variant)]/10">
              <p className="text-[var(--tertiary)] font-bold italic">
                {'"'}We don&apos;t just teach technology; we teach how technology transforms human potential.{'"'}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={200}>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-balance">
              Foreword
            </h2>
            <p className="text-lg text-[var(--on-surface-variant)] mb-6 leading-relaxed">
              The Information Systems Study Program features a &quot;unique&quot; curriculum built upon three main fields: Information Technology, Management, and Business. Generally, the focus of IS is on techniques to integrate information technology solutions with business processes to fulfill organizational information needs.
            </p>
            <p className="text-lg text-[var(--on-surface-variant)] mb-8 leading-relaxed">
              The Information Systems curriculum emphasizes how to ensure that information technology and systems align with the company&apos;s business strategy, in order to create a competitive advantage.
            </p>
            <div className="mb-10">
              <p className="font-bold text-xl text-[var(--on-surface)]">
                Joko Susilo, S.Kom., M.M., M.Kom.
              </p>
              <p className="text-[var(--tertiary)] font-medium">
                Head of Information Systems Study Program
              </p>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[var(--tertiary)] font-bold hover:underline underline-offset-8 transition-all duration-300"
            >
              View Departmental Vision
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
