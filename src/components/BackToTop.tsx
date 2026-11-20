import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const VISIBILITY_THRESHOLD_PX = 600

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > VISIBILITY_THRESHOLD_PX)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-md border border-line bg-surface/95 text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent sm:bottom-6 sm:right-6"
    >
      <FaArrowUp aria-hidden="true" className="text-xs" />
    </button>
  )
}
