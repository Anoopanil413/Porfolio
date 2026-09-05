'use client'

import { useEffect, useState } from 'react'
import { navItems, person } from '@/content/site'
import { cn } from '@/lib/utils'
import {
  CloseIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from '@/components/icons'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

export function SiteHeader() {
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState<string>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setCompact(window.scrollY > 24)
        frame = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.15, 0.5] },
    )

    for (const id of sectionIds) {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        compact
          ? 'border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70'
          : 'border-transparent bg-transparent',
      )}
    >
      <div
        className={cn(
          'container-page flex items-center justify-between transition-[height] duration-300 ease-out',
          compact ? 'h-14' : 'h-[4.5rem]',
        )}
      >
        <a
          href="#home"
          className="group flex items-baseline gap-2 text-sm font-semibold tracking-tight"
          aria-label={`${person.name} — home`}
        >
          <span>{person.name}</span>
          <span className="hidden font-mono text-[11px] font-normal text-subtle sm:inline">
            / {person.title}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative rounded-md px-3 py-2 text-[13px] transition-colors duration-200',
                  isActive ? 'text-fg' : 'text-muted hover:text-fg',
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    'absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ease-out',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={person.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg sm:inline-flex"
          >
            <GitHubIcon width={15} height={15} />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg sm:inline-flex"
          >
            <LinkedInIcon width={15} height={15} />
          </a>
          <ThemeToggle />
          <a
            href={person.resumeUrl}
            download
            className="hidden h-9 items-center gap-1.5 rounded-lg bg-fg px-3.5 text-[13px] font-medium text-bg transition-opacity duration-200 hover:opacity-85 sm:inline-flex"
          >
            <DownloadIcon width={14} height={14} />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:text-fg lg:hidden"
          >
            {menuOpen ? <CloseIcon width={16} height={16} /> : <MenuIcon width={16} height={16} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line/70 py-3.5 text-[15px] text-muted transition-colors last:border-0 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <a
              href={person.resumeUrl}
              download
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-fg text-[14px] font-medium text-bg"
            >
              <DownloadIcon width={14} height={14} />
              Resume
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted"
            >
              <GitHubIcon width={16} height={16} />
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted"
            >
              <LinkedInIcon width={16} height={16} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
