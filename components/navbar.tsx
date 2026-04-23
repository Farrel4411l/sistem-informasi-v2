"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#skills", label: "Skills" },
  { href: "#partners", label: "Partners" },
  { href: "#join", label: "Join Us" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-full">
        <div className="text-xl font-black text-[var(--on-surface)] tracking-tighter">
          SISTEM INFORMASI
        </div>

        {/* Desktop Nav - positioned to the right */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`font-medium tracking-tight text-sm uppercase transition-all duration-300 hover:opacity-80 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[var(--on-surface)] border-b-2 border-[var(--tertiary)] pb-1"
                  : "text-[var(--muted-foreground)] hover:text-[var(--on-surface)]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--on-surface)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-2 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left py-2 font-medium tracking-tight text-sm uppercase transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[var(--tertiary)]"
                  : "text-[var(--muted-foreground)]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--outline-variant)]/20 to-transparent" />
    </nav>
  )
}
