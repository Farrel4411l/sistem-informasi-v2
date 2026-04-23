"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function Footer() {
  return (
    <footer className="bg-[var(--surface-container-low)] w-full py-12 px-6 md:px-8">
      <RevealOnScroll>
        <div className="flex flex-col items-center gap-8 border-t border-[var(--outline-variant)]/20 pt-12 max-w-7xl mx-auto">
          <div className="font-bold text-[var(--on-surface)] text-2xl tracking-tighter">
            SISTEM INFORMASI
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--on-surface)] underline underline-offset-4 transition-all duration-300 text-sm tracking-wide"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--on-surface)] underline underline-offset-4 transition-all duration-300 text-sm tracking-wide"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--on-surface)] underline underline-offset-4 transition-all duration-300 text-sm tracking-wide"
            >
              Contact Us
            </a>
          </div>
          <div className="text-sm tracking-wide text-[var(--muted-foreground)]">
            &copy; 2024 SISTEM INFORMASI. All rights reserved.
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {["globe", "network", "share"].map((icon) => (
            <button
              key={icon}
              className="text-[var(--muted-foreground)] hover:text-[var(--tertiary)] transition-colors p-2"
            >
              {icon === "globe" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              )}
              {icon === "network" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              )}
              {icon === "share" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </RevealOnScroll>
    </footer>
  )
}
