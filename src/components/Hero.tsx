import { FaArrowRight, FaDownload } from 'react-icons/fa6'
import { profile } from '../data/portfolio'
import { PortraitCard } from './PortraitCard'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative scroll-mt-20 pb-20 pt-14 sm:pb-28 sm:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted sm:text-[11px]">
            <span
              aria-hidden="true"
              className="pulse-dot-ring h-1.5 w-1.5 rounded-full bg-accent"
            />
            {profile.availability}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-balance text-[clamp(2.9rem,9vw,5.75rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink"
          >
            {profile.displayName}
          </h1>

          <p className="mt-6 text-[clamp(1.1rem,2.6vw,1.5rem)] font-medium tracking-[-0.015em] text-ink">
            {profile.rolePrefix}{' '}
            <span className="text-accent">{profile.roleAccent}</span>
          </p>

          <p className="mt-3 text-[clamp(1.3rem,3.1vw,1.85rem)] font-semibold leading-snug tracking-[-0.03em] text-ink">
            {profile.tagline}
          </p>

          <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-canvas transition-[filter,transform] duration-200 hover:brightness-110 focus-visible:outline-accent active:translate-y-px"
            >
              Ver proyectos
              <FaArrowRight aria-hidden="true" className="text-[10px]" />
            </a>

            <a
              href={profile.cvHref}
              download={profile.cvFileName}
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <FaDownload aria-hidden="true" className="text-[10px]" />
              Descargar CV
            </a>
          </div>

          <ul className="mt-10 flex max-w-lg flex-col items-start gap-y-1.5 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
            {profile.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="hidden text-muted/40 sm:inline">
                    ·
                  </span>
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="lg:pl-4">
          <PortraitCard />
        </Reveal>
      </div>
    </section>
  )
}
