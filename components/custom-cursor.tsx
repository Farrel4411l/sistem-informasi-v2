"use client"

import { useEffect, useState, useRef } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Track hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-magnetic]") ||
        target.classList.contains("magnetic-btn")
      setIsHovering(!!isInteractive)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleElementHover)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleElementHover)
    }
  }, [])

  // Magnetic effect for buttons
  useEffect(() => {
    const magneticElements = document.querySelectorAll("[data-magnetic]")
    
    const handleMagneticMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }

    const handleMagneticLeave = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement
      el.style.transform = "translate(0, 0)"
    }

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", handleMagneticMove as EventListener)
      el.addEventListener("mouseleave", handleMagneticLeave as EventListener)
    })

    return () => {
      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", handleMagneticMove as EventListener)
        el.removeEventListener("mouseleave", handleMagneticLeave as EventListener)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? "w-12 h-12 opacity-50" : "w-4 h-4 opacity-100"
          }`}
        />
      </div>
      {/* Trailing cursor */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-500 ease-out hidden md:block ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border border-white/30 mix-blend-difference transition-all duration-300 ${
            isHovering ? "w-16 h-16" : "w-8 h-8"
          }`}
        />
      </div>
    </>
  )
}
