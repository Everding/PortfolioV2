export interface NavItem {
  label: string
  href: string
}

export interface SectionMeta {
  index: string
  eyebrow: string
  title: string
  lead: string
}

export interface AboutFact {
  title: string
  body: string
}

export interface AboutContent {
  paragraphs: readonly string[]
  facts: readonly AboutFact[]
}

export interface Project {
  id: string
  title: string
  role: string
  period: string
  description: string
  outcomes: readonly string[]
  tech: readonly string[]
  videoId: string
  videoTitle: string
}

export type SkillIconId =
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'javascript'
  | 'tailwind'
  | 'html'
  | 'css'
  | 'node'
  | 'csharp'
  | 'dotnet'
  | 'python'
  | 'mysql'
  | 'git'
  | 'github'

export interface Skill {
  name: string
  icon: SkillIconId
}

export interface SkillGroup {
  label: string
  skills: readonly Skill[]
}

export type ContactIconId = 'mail' | 'whatsapp' | 'linkedin' | 'github' | 'phone'

export interface ContactLink {
  id: string
  label: string
  value: string
  href: string
  icon: ContactIconId
  external: boolean
}

export interface Portrait {
  src: string
  alt: string
}

export interface Profile {
  fullName: string
  displayName: string
  role: string
  rolePrefix: string
  roleAccent: string
  tagline: string
  summary: string
  location: string
  availability: string
  experience: string
  email: string
  phone: string
  cvFileName: string
  cvHref: string
  meta: readonly string[]
  portrait: Portrait
}
