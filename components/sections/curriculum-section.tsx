"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

const curriculum = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Information System Developer",
    description: "Designers, creators, testers, and evaluators who establish business rules and prepare IS support resources. Roles include IS/IT Project Manager, System Analyst, and System Designer.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Database Specialist",
    description: "Experts in designing, building, maintaining, and analyzing databases. Career paths include Database Designer, DBA, Data Analyst, and Data Warehouse Analyst.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Application Programmer",
    description: "Software developers capable of working independently, joining software development agencies, or driving innovation at startup companies.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Information System Auditor",
    description: "Professionals who understand IT implementation for business processes, tasked with evaluating the strengths and weaknesses of organizational systems.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Business Data Analyst",
    description: "Analytical minds who observe and evaluate complex data to uncover hidden patterns that indicate the current health and condition of a company.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Chief Information Officer",
    description: "Executive leaders who guarantee the availability, accuracy, precision, and security of information needed to achieve core organizational goals.",
  },
]

export function CurriculumSection() {
  return (
    <section className="py-24 bg-[var(--secondary-container)]">
      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <RevealOnScroll direction="left" className="order-2 md:order-1 flex-1">
            <span className="text-[var(--secondary)] font-bold text-sm tracking-widest block mb-4 uppercase">
              The Academic Blueprint
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--on-secondary-container)] mb-8 text-balance">
              Adaptive Curriculum
            </h2>
            <div className="relative">
              {/* Scroll fade indicators */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[var(--secondary-container)] to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-300" id="scroll-fade-top" />
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[var(--secondary-container)] to-transparent z-10 pointer-events-none" id="scroll-fade-bottom" />

              {/* Scrollable container */}
              <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-4 space-y-5">
                {curriculum.map((item, index) => (
                  <RevealOnScroll key={item.title} delay={Math.min(index * 100, 300)}>
                    <div className="flex gap-4 group p-3 rounded-xl transition-all duration-300 hover:bg-[var(--surface)]/50">
                      <div className="bg-[var(--surface)] p-3 rounded-xl shadow-sm h-fit text-[var(--secondary)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 text-[var(--on-secondary-container)] group-hover:text-[var(--secondary)] transition-colors duration-300">{item.title}</h4>
                        <p className="text-[var(--on-secondary-container)]/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Scroll hint */}
              <div className="flex items-center justify-center gap-2 mt-4 text-[var(--on-secondary-container)]/50 text-xs">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span>Scroll for more</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" className="order-1 md:order-2 flex-1 relative">
            <img
              alt="Curriculum Focus"
              className="w-full aspect-video object-cover rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              src="/akreditasikampus.jpg"
            />
            <div className="absolute inset-0 bg-[var(--secondary)]/10 mix-blend-overlay rounded-xl pointer-events-none" />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
