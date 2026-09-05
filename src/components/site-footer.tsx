import { person } from '@/content/site'
import {
  CodeIcon,
  FeedIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons'

const links = [
  { label: 'LinkedIn', href: person.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', href: person.github, Icon: GitHubIcon },
  { label: 'LeetCode', href: person.leetcode, Icon: CodeIcon },
  { label: 'daily.dev', href: person.dailydev, Icon: FeedIcon },
  { label: 'Email', href: `mailto:${person.email}`, Icon: MailIcon },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="hairline">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[15px] font-semibold tracking-tight">{person.name}</p>
          <p className="mt-1 font-mono text-[11.5px] text-subtle">
            {person.title} · {person.locationShort}
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <ul className="flex flex-wrap items-center gap-2">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                  aria-label={label}
                  title={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                >
                  <Icon width={15} height={15} />
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] text-subtle">
            © {year} {person.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
