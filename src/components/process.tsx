import { lifecycle, lifecycleNote } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'

export function Process() {
  return (
    <Section
      id="process"
      index="05 / Process"
      title="How I Build Software"
      lead={lifecycleNote}
      className="bg-surface/60"
    >
      <ol className="relative mx-auto max-w-3xl border-l border-line pl-7 sm:pl-10">
        {lifecycle.map((stage, index) => (
          <Reveal
            key={stage.step}
            as="li"
            delay={index * 55}
            className="relative pb-9 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[calc(1.75rem+6px)] top-[3px] flex h-[13px] w-[13px] items-center justify-center rounded-[3px] border border-line bg-bg sm:-left-[calc(2.5rem+6px)]"
            >
              <span className="h-[5px] w-[5px] rounded-[1px] bg-accent/75" />
            </span>

            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-subtle">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[14.5px] font-semibold uppercase tracking-[0.08em]">
                {stage.step}
              </h3>
            </div>
            <p className="mt-2 max-w-xl text-pretty text-[14px] leading-relaxed text-muted">
              {stage.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
