import { stack } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'

export function Stack() {
  return (
    <Section
      id="stack"
      index="07 / Stack"
      title="Technology Stack"
      lead="The tools I reach for most often, grouped by where they sit in a system."
      className="bg-surface/60"
    >
      <dl className="divide-y divide-line border-y border-line">
        {stack.map((group, index) => (
          <Reveal
            key={group.group}
            delay={index * 50}
            className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8"
          >
            <dt className="eyebrow">{group.group}</dt>
            <dd className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[16px] tracking-tight sm:text-[17px]">
              {group.items.map((item, itemIndex) => (
                <span key={item} className="inline-flex items-baseline gap-3">
                  <span className="text-fg transition-colors duration-200">{item}</span>
                  {itemIndex < group.items.length - 1 ? (
                    <span aria-hidden className="text-subtle/60">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
