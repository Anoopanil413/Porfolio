import Image from 'next/image'
import { about, person } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'

export function About() {
  return (
    <Section
      id="about"
      index="01 / About"
      title="About Me"
      lead={person.intro}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Reveal>
            <div className="space-y-6 text-pretty text-[15.5px] leading-[1.75] text-muted">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <blockquote className="mt-10 border-l-2 border-accent pl-5 sm:pl-6">
              <p className="text-balance text-[17px] font-medium leading-relaxed text-fg sm:text-lg">
                “{about.highlight}”
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={60}>
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border border-line bg-raised lg:max-w-none">
              <Image
                src={person.profileImage}
                alt={`Portrait of ${person.name}`}
                fill
                sizes="(max-width: 1024px) 280px, 340px"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-line border-y border-line">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="text-right text-[13.5px] font-medium text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
