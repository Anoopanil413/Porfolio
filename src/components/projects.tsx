import { projects, type Project } from '@/content/site'
import { Section } from '@/components/ui/section'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'
import { ArrowUpRightIcon } from '@/components/icons'

function Facet({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h4 className="eyebrow">{label}</h4>
      <p className="mt-3 text-pretty text-[14px] leading-relaxed text-muted">{body}</p>
    </div>
  )
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="group overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent/30"
    >
      <div className="border-b border-line p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[11px] text-subtle">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="eyebrow">{project.category}</span>
          <span className="whitespace-nowrap font-mono text-[11px] text-subtle">
            <span aria-hidden>· </span>
            {project.year}
          </span>
          {project.status ? (
            <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[10.5px] text-accent">
              {project.status}
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-[26px] font-semibold leading-tight tracking-tightest sm:text-[32px]">
            {project.name}
          </h3>
          {project.links.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-line px-3 text-[12.5px] text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                >
                  {link.label}
                  <ArrowUpRightIcon width={13} height={13} />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <p className="mt-4 max-w-3xl text-pretty text-[15px] leading-relaxed text-fg/85">
          {project.tagline}
        </p>
      </div>

      <div className="grid gap-8 border-b border-line p-6 sm:p-8 lg:grid-cols-3 lg:gap-10">
        <Facet label="Problem" body={project.problem} />
        <Facet label="Engineering Solution" body={project.solution} />
        <Facet label="Impact" body={project.impact} />
      </div>

      {project.detail && project.detail.length > 0 ? (
        <div className="border-b border-line p-6 sm:p-8">
          <div className="space-y-4 text-pretty text-[14px] leading-relaxed text-muted">
            {project.detail.map((paragraph, detailIndex) => (
              <p key={detailIndex}>{paragraph}</p>
            ))}
          </div>
        </div>
      ) : null}

      {project.principles && project.principles.length > 0 ? (
        <div className="border-b border-line p-6 sm:p-8">
          <h4 className="eyebrow">Engineering constraints, enforced not documented</h4>
          <div className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.principles.map((principle) => (
              <div key={principle.title} className="bg-surface p-5">
                <p className="font-mono text-[12.5px] text-fg">{principle.title}</p>
                <p className="mt-2 text-pretty text-[13px] leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.stack.map((group) => (
            <div key={group.group}>
              <h4 className="eyebrow">{group.group}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag className="bg-bg">{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-7 border-t border-line pt-5 font-mono text-[11.5px] text-subtle">
          Contribution — {project.contribution}
        </p>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04 / Work"
      title="Selected Work"
      lead="A few systems described the way I would describe them to another engineer: what the problem actually was, what was built, and what changed as a result."
    >
      <div className="space-y-8 sm:space-y-10">
        {projects.map((project, index) => (
          <ProjectPanel key={project.id} project={project} index={index} />
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 rounded-xl border border-dashed border-line px-6 py-5 text-pretty text-[13.5px] leading-relaxed text-subtle">
          Further client work — internal tools, integrations and backend services — is not listed
          publicly. Happy to walk through any of it in conversation.
        </p>
      </Reveal>
    </Section>
  )
}
