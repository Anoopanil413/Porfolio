'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@/components/icons'

type Theme = 'light' | 'dark'

function apply(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null
    const initial: Theme =
      stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    apply(initial)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    apply(next)
    try {
      window.localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable — the toggle still works for this page view */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
    >
      {theme === 'dark' ? <MoonIcon width={15} height={15} /> : <SunIcon width={15} height={15} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

/** Runs before paint so the correct theme is applied without a flash. */
export const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
if(t==='dark'){document.documentElement.classList.add('dark');}
document.documentElement.style.colorScheme=t;}catch(e){}})();
`
