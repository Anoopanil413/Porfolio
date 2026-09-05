import { hero, person } from '@/content/site'
import { ArrowDownIcon, ArrowRightIcon, LocationIcon } from '@/components/icons'
import { Reveal } from '@/components/ui/reveal'

/** Static, low-contrast node/link figure. No animation loop, no layout cost. */
function ArchitectureField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-field" />
      <svg
        className="absolute left-1/2 top-0 h-[560px] w-[1200px] -translate-x-1/2 text-fg/[0.09]"
        viewBox="0 0 1200 560"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <g stroke="currentColor" strokeWidth="1">
          <path d="M120 430 L300 300 L520 340 L720 210 L940 280 L1080 170" />
          <path d="M300 300 L340 140" />
          <path d="M520 340 L560 500" />
          <path d="M720 210 L700 60" />
          <path d="M940 280 L880 460" />
          <path d="M120 430 L180 240" />
        </g>
        <g fill="currentColor">
          {[
            [120, 430],
            [300, 300],
            [520, 340],
            [720, 210],
            [940, 280],
            [1080, 170],
            [340, 140],
            [560, 500],
            [700, 60],
            [880, 460],
            [180, 240],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
          ))}
        </g>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <ArchitectureField />

      <div className="container-page relative pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for engineering conversations
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-subtle">
              <LocationIcon width={13} height={13} />
              {person.locationShort}
            </span>
          </div>

          <h1
            className="mt-8 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.25rem] animate-fade-up"
            style={{ animationDelay: '60ms' }}
          >
            {hero.headline}
          </h1>

          <p
            className="mt-7 max-w-2xl text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px] animate-fade-up"
            style={{ animationDelay: '140ms' }}
          >
            {hero.subheading}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-fg px-5 text-[14px] font-medium text-bg transition-opacity duration-200 hover:opacity-85"
            >
              {hero.primaryCta.label}
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex h-11 items-center rounded-lg border border-line bg-surface px-5 text-[14px] font-medium text-fg transition-colors duration-200 hover:border-accent/40"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <Reveal delay={280}>
          <dl className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20">
            {hero.indicators.map((item) => (
              <div key={item.label} className="bg-bg px-5 py-5 sm:px-6 sm:py-6">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 hidden items-center gap-2 font-mono text-[11px] text-subtle sm:flex">
          <ArrowDownIcon width={13} height={13} />
          Scroll
        </div>
      </div>
    </section>
  )
}
