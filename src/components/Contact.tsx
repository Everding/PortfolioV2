import type { IconType } from 'react-icons'
import { FaArrowUpRightFromSquare, FaCheck, FaCopy, FaDownload, FaEnvelope, FaGithub, FaLinkedinIn, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { contacts, emailContact, profile, sections } from '../data/portfolio'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { MonoLabel } from './MonoLabel'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import type { ContactIconId } from '../types'

const contactIcons: Record<ContactIconId, IconType> = {
  mail: FaEnvelope,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  phone: FaPhone,
}

export function Contact() {
  const { copied, copy } = useCopyToClipboard()
  const EmailIcon = contactIcons[emailContact.icon]

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="scroll-mt-20 border-t border-line/70 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeader
          id="contacto-title"
          index={sections.contact.index}
          eyebrow={sections.contact.eyebrow}
          title={sections.contact.title}
          lead={sections.contact.lead}
        />

        <Reveal className="mt-12 lg:mt-16">
          <div className="border border-line bg-surface p-5 sm:p-8">
            <MonoLabel as="p">Escribime</MonoLabel>

            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <a
                href={emailContact.href}
                className="inline-flex min-w-0 items-center gap-3 text-[clamp(0.8rem,3vw,1.55rem)] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-accent"
              >
                <EmailIcon
                  aria-hidden="true"
                  className="hidden shrink-0 text-base text-accent sm:inline-block"
                />
                <span className="break-all font-mono">{emailContact.value}</span>
              </a>

              <button
                type="button"
                onClick={() => void copy(emailContact.value)}
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent lg:self-auto"
              >
                {copied ? (
                  <FaCheck aria-hidden="true" className="text-[10px] text-accent" />
                ) : (
                  <FaCopy aria-hidden="true" className="text-[10px]" />
                )}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>

            <p aria-live="polite" className="sr-only">
              {copied ? 'Email copiado al portapapeles' : ''}
            </p>

            <ul className="mt-8 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {contacts.map((contact) => {
                const Icon = contactIcons[contact.icon]

                return (
                  <li key={contact.id}>
                    <a
                      href={contact.href}
                      {...(contact.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-center justify-between gap-4 border border-line bg-canvas px-4 py-3.5 transition-colors hover:border-accent/60"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <Icon
                          aria-hidden="true"
                          className="shrink-0 text-sm text-muted transition-colors group-hover:text-accent"
                        />
                        <span className="min-w-0">
                          <span className="block text-[13px] text-ink">
                            {contact.label}
                          </span>
                          <span className="mt-0.5 block truncate font-mono text-[10px] tracking-[0.06em] text-muted">
                            {contact.value}
                          </span>
                        </span>
                      </span>

                      <FaArrowUpRightFromSquare
                        aria-hidden="true"
                        className={
                          contact.external
                            ? 'shrink-0 text-[10px] text-muted/60 transition-all group-hover:-translate-y-0.5 group-hover:text-accent'
                            : 'hidden'
                        }
                      />
                      {contact.external ? (
                        <span className="sr-only">(se abre en una pestaña nueva)</span>
                      ) : null}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <a
              href={profile.cvHref}
              download={profile.cvFileName}
              className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
            >
              <FaDownload aria-hidden="true" className="text-[10px]" />
              Descargar CV
            </a>
            <span aria-hidden="true" className="mx-3 text-muted/40">
              /
            </span>
            PDF · {profile.cvFileName}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
