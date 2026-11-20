import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the user's reduced-motion preference so imperative scroll behaviour
 * can stay in sync with the CSS-level override.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY)

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}
