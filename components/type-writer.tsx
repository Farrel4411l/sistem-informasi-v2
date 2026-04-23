"use client"

import { useEffect, useState } from "react"

interface TypeWriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export function TypeWriter({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete 
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay, onComplete])

  // Blink cursor after complete
  useEffect(() => {
    if (isComplete) {
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(blinkInterval)
    }
  }, [isComplete])

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
        |
      </span>
    </span>
  )
}
