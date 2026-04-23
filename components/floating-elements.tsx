"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div 
        className="absolute top-20 left-10 w-16 h-16 border-2 border-[var(--tertiary)]/20 rotate-45 animate-float"
      />
      <div 
        className="absolute top-40 right-20 w-24 h-24 border border-[var(--secondary)]/30 rounded-full animate-float-delayed"
      />
      <div 
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-[var(--tertiary)]/10 animate-float-slow"
      />
      <div 
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-[var(--secondary)]/10 rounded-full animate-float"
      />
      <div 
        className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-[var(--outline-variant)]/20 rotate-12 animate-float-delayed"
      />
      
      {/* Dots pattern */}
      <div className="absolute top-1/4 left-1/3 grid grid-cols-3 gap-2 opacity-20 animate-float-slow">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[var(--tertiary)] rounded-full" />
        ))}
      </div>
      
      {/* Lines */}
      <div 
        className="absolute bottom-1/3 left-20 w-24 h-px bg-gradient-to-r from-transparent via-[var(--tertiary)]/30 to-transparent animate-float"
      />
      <div 
        className="absolute top-1/2 right-40 w-32 h-px bg-gradient-to-r from-transparent via-[var(--secondary)]/30 to-transparent animate-float-delayed"
      />
    </div>
  )
}
