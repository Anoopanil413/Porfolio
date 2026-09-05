import { exploring, exploringNote } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'

export function Exploring() {
  return (
    <Section id="exploring" index="06 / Learning" title="Currently Exploring" lead={exploringNote}>
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {exploring.map((item, index) => (
          <Reveal
            key={item}
            as="li"
            delay={index * 45}
            className="flex items-center gap-3 bg-bg px-6 py-5 transition-colors duration-300 hover:bg-surface"
          >
            <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span className="text-[14.5px] font-medium tracking-tight">{item}</span>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
