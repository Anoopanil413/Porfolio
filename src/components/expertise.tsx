import { expertise } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'

export function Expertise() {
  return (
    <Section
      id="skills"
      index="02 / Expertise"
      title="Engineering Expertise"
      lead="Grouped by the part of the system it applies to, rather than by logo. Depth varies across these — what is consistent is that I have shipped in each of them."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((domain, index) => (
          <Reveal
            key={domain.id}
            delay={index * 60}
            className="group flex flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:p-7"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] text-subtle">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[15.5px] font-semibold tracking-tight">{domain.title}</h3>
            </div>
            <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-muted">{domain.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5 pt-1">
              {domain.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
        <Reveal
          delay={expertise.length * 60}
          className="hidden flex-col justify-end bg-bg p-6 sm:flex sm:p-7"
        >
          <p className="text-pretty font-mono text-[12px] leading-relaxed text-subtle">
            The useful part is not any single row above — it is being able to move between them
            without handing the problem to someone else.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
