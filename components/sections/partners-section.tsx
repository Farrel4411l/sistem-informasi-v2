"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

const partners = [
  { name: "BCA", image: "/logobca.png" },
  { name: "SPIL", image: "/logospil.jpg" },
  { name: "Adaro", image: "/logoadaro.png" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-[var(--surface)]">
      <RevealOnScroll>
        <div className="px-8 mb-10">
          <h3 className="text-sm font-bold text-[var(--outline)] uppercase tracking-[0.3em] text-center">
            Global Industry Partners
          </h3>
        </div>
      </RevealOnScroll>

      <div className="w-full overflow-hidden flex bg-[var(--surface-container)] py-12 marquee-wrapper">
        <div className="flex animate-marquee shrink-0 items-center gap-20 pr-20">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`a-${i}-${partner.name}`}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={partner.image} alt={partner.name} className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-normal" />
              <span className="text-xl font-black">{partner.name}</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex animate-marquee shrink-0 items-center gap-20 pr-20">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`b-${i}-${partner.name}`}
              className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={partner.image} alt={partner.name} className="h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-normal" />
              <span className="text-xl font-black">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
