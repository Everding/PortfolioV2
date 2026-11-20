import type { ElementType, ReactNode } from 'react'
import { cn } from '../lib/cn'

interface MonoLabelProps {
  children: ReactNode
  as?: ElementType
  tone?: 'muted' | 'accent'
  size?: 'xs' | 'sm'
  className?: string
}

const toneClasses = {
  muted: 'text-muted',
  accent: 'text-accent',
} as const

const sizeClasses = {
  xs: 'text-[10px] tracking-[0.2em]',
  sm: 'text-[11px] tracking-[0.22em]',
} as const

export function MonoLabel({
  children,
  as: Component = 'span',
  tone = 'muted',
  size = 'xs',
  className,
}: MonoLabelProps) {
  return (
    <Component
      className={cn(
        'font-mono uppercase',
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </Component>
  )
}
