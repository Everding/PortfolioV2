import type { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa6'
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import type { SkillIconId } from '../types'

/**
 * Icon per skill. `.NET` intentionally has no icon and falls back to a text badge.
 */
export const skillIcons: Record<SkillIconId, IconType | null> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  node: SiNodedotjs,
  csharp: SiSharp,
  dotnet: null,
  python: SiPython,
  mysql: SiMysql,
  git: SiGit,
  github: FaGithub,
}
