# Anoop Anilkumar — Portfolio

Personal site for a Software Engineer working across full-stack applications, backend
services, AI agents and infrastructure. Built with Next.js 15 (App Router), TypeScript
and Tailwind CSS.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run typecheck            # tsc --noEmit
npm run lint
```

## Editing the content

**Everything on the page comes from one file: `src/content/site.ts`.**
Personal details, the hero copy, the About narrative, expertise domains, the experience
timeline, projects, the lifecycle steps, "currently exploring" and the technology stack
all live there as typed exports. Add a project to the `projects` array and the section
renders it — no component changes needed.

## Replacing the placeholder assets

| File | What it is | Replace with |
| --- | --- | --- |
| `public/profile.jpg` | Monogram placeholder, 4:5 | Your portrait, ideally 1000×1250 or larger |
| `public/resume.pdf` | A generated one-page resume | Your own PDF, same filename |
| `public/og.png` | Social preview card, 1200×630 | Optional — regenerate or keep |
| `src/app/icon.svg` | Favicon | Optional |

Paths are configured in `person.profileImage` and `person.resumeUrl` in the content file
if you would rather point somewhere else.

## Contact form

`POST /api/contact` validates the submission, drops honeypot spam, rate-limits per IP,
and sends through [Resend](https://resend.com) when `RESEND_API_KEY` is set. Without a key
the endpoint returns a clear message asking the visitor to email directly, rather than
silently pretending to send.

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=anoopa413@gmail.com
CONTACT_FROM_EMAIL=Portfolio <noreply@your-domain.com>
```

`NEXT_PUBLIC_SITE_URL` drives canonical URLs, the sitemap, Open Graph tags and the
JSON-LD `Person` graph, so set it before deploying.

## Structure

```
src/
  app/
    layout.tsx          metadata, fonts, theme bootstrap, skip link
    page.tsx            section composition
    globals.css         design tokens (light + dark) and base styles
    api/contact/route.ts
    sitemap.ts robots.ts not-found.tsx icon.svg
  components/
    site-header.tsx     sticky nav, compacts on scroll, active-section tracking
    hero.tsx about.tsx expertise.tsx experience.tsx projects.tsx
    process.tsx exploring.tsx stack.tsx contact.tsx contact-form.tsx
    site-footer.tsx structured-data.tsx icons.tsx
    ui/  section.tsx reveal.tsx tag.tsx theme-toggle.tsx
  content/site.ts       all copy and data
  lib/utils.ts
```

## Design notes

- Colours are CSS custom properties in `globals.css`, exposed to Tailwind as `bg`,
  `surface`, `fg`, `muted`, `line`, `accent`. Change them in one place and both themes
  follow.
- Dark mode is class-based with an inline pre-paint script, so there is no flash on load.
- Scroll reveals use a single `IntersectionObserver` per element that disconnects after
  firing, and are disabled entirely under `prefers-reduced-motion`. No animation library.
- No skill bars, no typing effects, no logo wall.

## Deploying

Deploys unchanged to Vercel — import the repo and set the environment variables above.
Any Node host works too: `npm run build` then `npm start`.
