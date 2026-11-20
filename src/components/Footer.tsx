import { FaArrowUp } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {currentYear} · Hecho por {profile.displayName}
        </p>

        <p className="flex items-center gap-4">
          <span className="text-muted/60">{profile.location}</span>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
          >
            <FaArrowUp aria-hidden="true" className="text-[9px]" />
            Volver arriba
          </a>
        </p>
      </div>
    </footer>
  )
}
