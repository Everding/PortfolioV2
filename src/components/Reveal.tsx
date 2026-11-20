import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Fade + 16px rise the first time the block enters the viewport.
 * Implemented with IntersectionObserver + CSS so the page ships no animation
 * runtime; the reduced-motion override lives in index.css.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const element = elementRef.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setIsVisible(true)
          observer.disconnect()
          return
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
