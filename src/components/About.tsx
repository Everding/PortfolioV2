import { about, sections } from '../data/portfolio'
import { MonoLabel } from './MonoLabel'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="scroll-mt-20 border-t border-line/70 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          id="sobre-mi-title"
          index={sections.about.index}
          eyebrow={sections.about.eyebrow}
          title={sections.about.title}
          lead={sections.about.lead}
        />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-pretty text-[15px] leading-[1.85] text-muted sm:text-base">
              {about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? 'text-ink' : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <ul className="space-y-3">
              {about.facts.map((fact) => (
                <li
                  key={fact.title}
                  className="border border-line bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent/50"
                >
                  <MonoLabel as="h3" tone="accent">
                    {fact.title}
                  </MonoLabel>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {fact.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
