"use client"

import { useRef } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const alumni = [
  {
    id: 1,
    name: "Kevin Wilmer Vitorio",
    position: "Front End Developer at Simpang Raya",
    photo: "kevin.png",
    linkedIn: "https://www.linkedin.com/in/kevinwilmerv?originalSubdomain=id",
  },

]

export function AlumniSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="alumni" className="py-24 px-6 md:px-24 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest block mb-3">
                Success Stories
              </span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)]">
                Our Alumni
              </h3>
              <p className="text-[var(--on-surface-variant)] mt-3 max-w-xl">
                Discover the achievements of our graduates who are making an impact across industries worldwide.
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 border border-[var(--border)] hover:bg-[var(--surface-container-high)] hover:border-[var(--accent)] transition-all duration-300 rounded-lg group"
              >
                <svg
                  className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 border border-[var(--border)] hover:bg-[var(--surface-container-high)] hover:border-[var(--accent)] transition-all duration-300 rounded-lg group"
              >
                <svg
                  className="w-5 h-5 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Scrollable Alumni Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x snap-mandatory"
        >
          {alumni.map((alumnus, index) => (
            <RevealOnScroll key={alumnus.id} delay={index * 100} direction="up">
              <a
                href={alumnus.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-w-[280px] bg-[var(--card)] rounded-xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-2xl transition-all duration-500 snap-start flex flex-col block cursor-pointer text-decoration-none hover:no-underline"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-[var(--surface-container)]">
                  <img
                    src={alumnus.photo}
                    alt={alumnus.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 transition-colors duration-500" />

                  {/* LinkedIn Button - appears on hover */}
                  <a
                    href={alumnus.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 bg-[var(--accent)] text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--primary)] hover:scale-110"
                    title="Visit LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>

                {/* Content Container */}
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="font-bold text-lg text-[var(--foreground)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {alumnus.name}
                  </h4>
                  <p className="text-sm text-[var(--on-surface-variant)] flex-1 mb-4 leading-relaxed">
                    {alumnus.position}
                  </p>

                  {/* Card Footer with animated border */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      Success Story
                    </span>
                    <svg
                      className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Animated bottom accent bar */}
                <div className="h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Scroll indicator for mobile */}
        <div className="flex items-center justify-center gap-2 mt-8 text-[var(--on-surface-variant)] text-sm sm:hidden">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Scroll to see more</span>
        </div>
      </div>
    </section>
  )
}
