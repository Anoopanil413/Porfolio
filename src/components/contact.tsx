import { contact, person } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { ContactForm } from '@/components/contact-form'
import {
  ArrowUpRightIcon,
  CodeIcon,
  FeedIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/icons'

const channels = [
  { label: 'Email', value: person.email, href: `mailto:${person.email}`, Icon: MailIcon },
  { label: 'LinkedIn', value: person.linkedinHandle, href: person.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', value: person.githubHandle, href: person.github, Icon: GitHubIcon },
  { label: 'LeetCode', value: person.leetcodeHandle, href: person.leetcode, Icon: CodeIcon },
  { label: 'daily.dev', value: person.dailydevHandle, href: person.dailydev, Icon: FeedIcon },
]

export function Contact() {
  return (
    <Section id="contact" index="08 / Contact" title={contact.title} lead={contact.body}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="space-y-8">
          <Reveal>
            <ul className="divide-y divide-line border-y border-line">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                    className="group flex items-center gap-4 py-4 transition-colors duration-200"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon width={15} height={15} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="eyebrow block">{label}</span>
                      <span className="mt-1 block truncate text-[14.5px] text-fg">{value}</span>
                    </span>
                    <ArrowUpRightIcon
                      width={15}
                      height={15}
                      className="shrink-0 text-subtle transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {contact.availability}
            </p>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
