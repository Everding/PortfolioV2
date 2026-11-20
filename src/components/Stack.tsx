import { sections, skillGroups } from '../data/portfolio'
import { MonoLabel } from './MonoLabel'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'
import { skillIcons } from './skillIcons'

export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="scroll-mt-20 border-t border-line/70 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          id="stack-title"
          index={sections.stack.index}
          eyebrow={sections.stack.eyebrow}
          title={sections.stack.title}
          lead={sections.stack.lead}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.05}>
              <div className="border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-2">
                  <MonoLabel as="h3" tone="accent">
                    {group.label}
                  </MonoLabel>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] tracking-[0.12em] text-muted/40"
                  >
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skillIcons[skill.icon]

                    return (
                      <li
                        key={skill.name}
                        tabIndex={0}
                        className="group flex cursor-default items-center gap-2.5 border border-line bg-canvas px-3 py-2.5 text-[12px] text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-ink focus-visible:-translate-y-0.5 focus-visible:border-accent focus-visible:text-ink"
                      >
                        {Icon ? (
                          <Icon
                            aria-hidden="true"
                            className="shrink-0 text-[15px] text-muted/80 transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="w-[15px] shrink-0 text-center font-mono text-[9px] font-medium leading-none text-muted/80 transition-colors duration-200 group-hover:text-accent group-focus-visible:text-accent"
                          >
                            {skill.name.replace('.', '')}
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
