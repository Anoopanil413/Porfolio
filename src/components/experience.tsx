import { experience } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'

export function Experience() {
  return (
    <Section
      id="experience"
      index="03 / Experience"
      title="Professional Experience"
      lead="Four years across three teams, moving steadily from writing features to owning how systems are put together."
    >
      <ol className="relative">
        <div
          aria-hidden
          className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
        />
        {experience.map((role, index) => (
          <Reveal
            key={`${role.company}-${role.start}`}
            as="li"
            delay={index * 70}
            className="relative pb-12 last:pb-0 sm:pl-10"
          >
            <span
              aria-hidden
              className={
                role.current
                  ? 'absolute left-0 top-1.5 hidden h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg sm:block'
                  : 'absolute left-0 top-1.5 hidden h-[11px] w-[11px] rounded-full border-2 border-line bg-bg sm:block'
              }
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-[17px] font-semibold tracking-tight sm:text-[18px]">
                {role.role}
                <span className="text-muted"> · {role.company}</span>
              </h3>
              <p className="font-mono text-[11.5px] text-subtle">
                {role.start} — {role.end}
              </p>
            </div>

            <p className="mt-1.5 font-mono text-[11.5px] text-subtle">{role.location}</p>
            <p className="mt-4 text-pretty text-[14px] italic leading-relaxed text-muted">
              {role.summary}
            </p>

            <ul className="mt-5 space-y-2.5">
              {role.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="relative pl-5 text-pretty text-[14.5px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.62em] h-1 w-1 rounded-full bg-accent/70"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {role.stack.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
