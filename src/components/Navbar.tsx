import { useEffect, useRef, useState } from 'react'
import { FaBars, FaDownload, FaXmark } from 'react-icons/fa6'
import { navItems, profile } from '../data/portfolio'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setIsMenuOpen(false)
      toggleRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-mono text-sm font-medium tracking-[0.16em] text-ink transition-colors hover:text-accent"
          aria-label={`${profile.displayName} — inicio`}
        >
          david<span className="text-accent">.</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvHref}
            download={profile.cvFileName}
            className="hidden items-center gap-2 rounded-md border border-line px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            <FaDownload aria-hidden="true" className="text-[10px]" />
            Descargar CV
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" className="text-base" />
            ) : (
              <FaBars aria-hidden="true" className="text-base" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!isMenuOpen}
        className="border-t border-line bg-canvas md:hidden"
      >
        <nav aria-label="Navegación móvil">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line/60 last:border-0">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href={profile.cvHref}
                download={profile.cvFileName}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-canvas"
              >
                <FaDownload aria-hidden="true" className="text-[10px]" />
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
