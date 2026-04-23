"use client"

import { useRef, useState } from "react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const newsItems = [
  {
    image: "/FOTBAR.jpeg",
    category: "Student Life",
    title: "Group Photo in Ms. Vita's English Class",
    description: "A memorable group photo together with our lecturer in Ms. Vita's English class.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADxYMx6xMunhwGgpEIHlp-V7wH2ifwLz-1xA30j21qkDS2CIQTeKCP6e6ZYTp79aAXAFVWIyvEn59-Y5FxCP-vRqH3a_fsi-d4qoW94tELl5tArDkHPteU3tRWVOA1iDxkzgdS-WX7rpQ7z01uLwKq0vbTzB3UPgMwQFzRdKzbFMNcFp78o0u2Piq6ihlJuCdqEneXibugBtUdsx29CBmui9pvHSGylmiVmYPQq71PUZ7_rSpDqykkQidR82K1Qb0lgnUPhlAo6A-u",
    category: "Global Partners",
    title: "New Collaboration with Silicon Valley Hubs",
    description: "Expanding our internship pipeline to include five new Fortune 500 tech partners starting next fall.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdm26wxneiKuM_eAgNe3tJyvV-M1uPgTbJyRVBFeGkwgAxINPhPlbIlXZc2jIoma1rBQVxdb3yZO2IGWTmDNegmkJVTN2X8StAuBExs1-jgUpx1kHerZ7l_bFDAyiEKXeLkZWbcaAKGgcrV3AZR5r8W9XfINAhxME-nZQOymiQWKL2qCr--tBMG43m2HFQwf8YUGwwPQ5qK0f55dRDzkYBAmXbYs73_INL_8kUREGD5FUfGjp7L6V3IP6DmIumbXjRjtPbDwb2jGKw",
    category: "Research",
    title: "Ethics in AI Symposium Highlights",
    description: "Hosting the 3rd annual international symposium on responsible technology and governance.",
  },
]

const skills = [
  { title: "Enterprise Resource Planning (ERP)", tech: "SAP, Oracle, Microsoft Dynamics", color: "tertiary" },
  { title: "Business Intelligence & Analytics", tech: "PowerBI, Tableau, SQL Advanced", color: "secondary" },
  { title: "Full-Stack Development", tech: "React, Node.js, Cloud Architectures", color: "primary" },
  { title: "Information Security Management", tech: "ISO 27001, Risk Management, SOC2", color: "tertiary" },
  { title: "UX/UI Research & Design", tech: "Human-Computer Interaction, Figma", color: "secondary" },
]

export function NewsSkillsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

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
    <section id="news" className="py-24 px-6 md:px-24">
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* News Feed (60%) */}
        <div className="lg:w-[60%] flex flex-col">
          <RevealOnScroll>
            <div className="flex justify-between items-end mb-8">
              <h3 className="text-3xl font-black tracking-tight">Recent Benchmarks</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-2 border border-[var(--outline-variant)] hover:bg-[var(--surface-container-high)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-2 border border-[var(--outline-variant)] hover:bg-[var(--surface-container-high)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </RevealOnScroll>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto hide-scrollbar flex gap-6 pb-6 snap-x snap-mandatory"
          >
            {newsItems.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 100} direction="up">
                <div className="min-w-[320px] bg-[var(--surface-container-lowest)] shadow-sm p-6 flex flex-col border border-[var(--outline-variant)]/5 snap-start group">
                  <div className="overflow-hidden mb-6">
                    <img
                      alt={item.title}
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      src={item.image}
                    />
                  </div>
                  <span className="text-xs text-[var(--tertiary)] font-bold mb-2 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-bold mb-3 leading-tight">{item.title}</h4>
                  <p className="text-[var(--on-surface-variant)] text-sm flex-1">{item.description}</p>
                  <a
                    href="#"
                    className="mt-4 text-sm font-bold border-b border-[var(--on-surface)] w-fit hover:border-[var(--tertiary)] hover:text-[var(--tertiary)] transition-colors"
                  >
                    Read Entry
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Skills List (40%) */}
        <RevealOnScroll direction="right" className="lg:w-[40%]">
          <div id="skills" className="flex flex-col bg-[var(--surface-container-low)] p-8 rounded-xl h-full">
            <h3 className="text-3xl font-black tracking-tight mb-8">Technical Expertise</h3>
            <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`p-4 bg-[var(--surface-container-lowest)] border-l-4 flex justify-between items-center transition-all duration-300 cursor-pointer ${
                    skill.color === "tertiary"
                      ? "border-[var(--tertiary)]"
                      : skill.color === "secondary"
                        ? "border-[var(--secondary)]"
                        : "border-[var(--primary)]"
                  } ${hoveredSkill === index ? "translate-x-2 shadow-md" : ""}`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div>
                    <h5 className="font-bold">{skill.title}</h5>
                    <p className="text-xs text-[var(--on-surface-variant)]">{skill.tech}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredSkill === index
                        ? skill.color === "tertiary"
                          ? "text-[var(--tertiary)] opacity-100"
                          : skill.color === "secondary"
                            ? "text-[var(--secondary)] opacity-100"
                            : "text-[var(--primary)] opacity-100"
                        : "opacity-0"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
