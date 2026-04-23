"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

const partners = [
  { name: "BCA", image: "/logobca.png" },
  { name: "SPIL", image: "/logospil.jpg" },
  { name: "Adaro", image: "/logoadaro.png" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-[var(--surface)]">
      <RevealOnScroll>
        <div className="px-8 mb-12">
          <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-[0.3em] text-center">
            Global Industry Partners
          </h3>
        </div>
      </RevealOnScroll>

      <div className="w-full overflow-hidden flex bg-[var(--surface-container)] py-20 marquee-wrapper">
        <div className="flex animate-marquee shrink-0 items-center gap-24 pr-24">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`a-${i}-${partner.name}`}
              className="flex items-center gap-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={partner.image} alt={partner.name} className="h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-black text-[var(--foreground)]">{partner.name}</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex animate-marquee shrink-0 items-center gap-24 pr-24">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={`b-${i}-${partner.name}`}
              className="flex items-center gap-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={partner.image} alt={partner.name} className="h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-normal hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-black text-[var(--foreground)]">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
