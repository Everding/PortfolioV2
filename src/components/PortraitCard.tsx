import { profile } from '../data/portfolio'

const cornerBase =
  'pointer-events-none absolute z-10 h-6 w-6 border-accent'

export function PortraitCard() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-3 hidden border border-accent/15 sm:block"
      />

      <span aria-hidden="true" className={`${cornerBase} -left-2 -top-2 border-l border-t`} />
      <span aria-hidden="true" className={`${cornerBase} -right-2 -top-2 border-r border-t`} />
      <span aria-hidden="true" className={`${cornerBase} -bottom-2 -left-2 border-b border-l`} />
      <span aria-hidden="true" className={`${cornerBase} -bottom-2 -right-2 border-b border-r`} />

      <figure className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
        <img
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          width={640}
          height={800}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[52%_28%] grayscale contrast-125 brightness-90"
        />

        {/* Lime duotone wash keeps the webcam selfie reading as an editorial portrait. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent/30 mix-blend-color"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent"
        />

        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/80">
            {profile.location}
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
            Perfil
          </span>
        </figcaption>
      </figure>

      <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        <span>{profile.role}</span>
        <span aria-hidden="true" className="text-muted/40">/</span>
        <span>Portfolio 2026</span>
      </div>
    </div>
  )
}
