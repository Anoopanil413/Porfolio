import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type SectionProps = {
  id: string
  index: string
  title: string
  lead?: string
  children: ReactNode
  className?: string
  bordered?: boolean
}

export function Section({ id, index, title, lead, children, className, bordered = true }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('scroll-mt-24 py-20 sm:py-24 lg:py-32', bordered && 'hairline', className)}
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-10">
            <span className="eyebrow shrink-0 whitespace-nowrap pt-1 sm:w-32">{index}</span>
            <div className="max-w-prose">
              <h2
                id={`${id}-heading`}
                className="text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tightest sm:text-4xl"
              >
                {title}
              </h2>
              {lead ? <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted">{lead}</p> : null}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
