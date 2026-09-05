'use client'

import { useCallback, useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article' | 'span'
}

/**
 * Lightweight scroll reveal. One IntersectionObserver per element, disconnected
 * once it has fired, and a no-op when the visitor prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Tag: ElementType = as
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  // Callback ref so a single implementation works for any element tag.
  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node
  }, [])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={setRef}
      style={shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
