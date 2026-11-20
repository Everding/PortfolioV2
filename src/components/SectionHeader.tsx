import { MonoLabel } from './MonoLabel'
import { Reveal } from './Reveal'

interface SectionHeaderProps {
  id: string
  index: string
  eyebrow: string
  title: string
  lead?: string
}

export function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  lead,
}: SectionHeaderProps) {
  return (
    <Reveal className="max-w-3xl">
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <MonoLabel size="sm">{eyebrow}</MonoLabel>
      </p>

      <h2
        id={id}
        className="mt-5 text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink"
      >
        {title}
      </h2>

      {lead ? (
        <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted">
          {lead}
        </p>
      ) : null}
    </Reveal>
  )
}
