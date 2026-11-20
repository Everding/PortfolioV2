import { projects, sections } from '../data/portfolio'
import { ProjectVideo } from './ProjectVideo'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="scroll-mt-20 border-t border-line/70 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          id="proyectos-title"
          index={sections.projects.index}
          eyebrow={sections.projects.eyebrow}
          title={sections.projects.title}
          lead={sections.projects.lead}
        />

        <div className="mt-12 space-y-10 lg:mt-16">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article
                aria-labelledby={`proyecto-${project.id}-title`}
                className="border border-line bg-surface"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3 sm:px-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Proyecto destacado
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {project.period}
                  </span>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    <div>
                      <h3
                        id={`proyecto-${project.id}-title`}
                        className="text-balance text-[clamp(1.55rem,3.6vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-ink"
                      >
                        {project.title}
                      </h3>

                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {project.role}
                      </p>

                      <p className="mt-6 text-pretty text-[14px] leading-[1.8] text-muted sm:text-[15px]">
                        {project.description}
                      </p>

                      <ul className="mt-7 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <li
                            key={tech}
                            className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:border-l lg:border-line lg:pl-10">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        Qué resolvió
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {project.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-3 text-[13px] leading-relaxed text-muted"
                          >
                            <span aria-hidden="true" className="mt-px text-accent">
                              →
                            </span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-9 border-t border-line pt-8 lg:mt-11">
                    <ProjectVideo
                      videoId={project.videoId}
                      title={project.videoTitle}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
