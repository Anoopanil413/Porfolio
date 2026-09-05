/**
 * Single source of truth for every piece of copy on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const person = {
  name: 'Anoop Anilkumar',
  firstName: 'Anoop',
  title: 'Software Engineer',
  titleLong:
    'Software Engineer · Full Stack & Backend Development · AI Agents & Automation',
  location: 'Kollam, Kerala, India',
  locationShort: 'Kollam, India',
  yearsExperience: 4,
  email: 'anoopa413@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anoop-anilkumar-b2185114b/',
  linkedinHandle: 'anoop-anilkumar',
  github: 'https://github.com/Anoopanil413',
  githubHandle: 'Anoopanil413',
  leetcode: 'https://leetcode.com/u/Anoop1234/',
  leetcodeHandle: 'Anoop1234',
  dailydev: 'https://daily.dev/anoopanil',
  dailydevHandle: 'anoopanil',
  /** Drop your real files at these paths in /public to replace the placeholders. */
  resumeUrl: '/resume.pdf',
  profileImage: '/profile.jpg',
  intro:
    'I am a Software Engineer with four years of experience building production software end to end — backend services and APIs, modern frontends, AI-driven automation, and the infrastructure that runs it all. I like problems where the hard part is the system, not the syntax.',
} as const

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://anoopanilkumar.com'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  /** Swap in any alternative headline — the layout adapts. */
  headline: 'Building scalable software and intelligent systems.',
  alternativeHeadlines: [
    'Engineering systems that hold up in production.',
    'From architecture sketch to deployed service.',
  ],
  subheading:
    'I’m a Software Engineer specialising in full-stack applications, backend services, AI-powered automation and containerised cloud deployments — from the first architecture decision through to what runs in production.',
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: { label: 'Get In Touch', href: '#contact' },
  indicators: [
    { value: '4+', label: 'Years Experience' },
    { value: '6+', label: 'Projects Shipped' },
    { value: '3', label: 'Engineering Teams' },
  ],
} as const

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  paragraphs: [
    'I started out as a MERN stack developer — React on the front, Node and MongoDB behind it — and spent that first year learning what actually breaks when software leaves localhost. The interesting problems were never in the framework. They were in the data model, the request lifecycle, and the parts of the system nobody had drawn out.',
    'That pulled me steadily toward broader engineering. Over four years I have worked across the Node.js and Python ecosystems: designing REST APIs and service boundaries, modelling relational and document data, adding caching where the read path warranted it, and building the React, Next.js and Vue interfaces that sit on top. Working on both sides of the API has made me a better engineer on each of them.',
    'More recently my focus has moved to AI agents and automation — integrating LLMs into production workflows with schema-enforced contracts, clear boundaries around what a model is allowed to decide, and deterministic code doing the work that has to be correct. Alongside that I containerise what I build and take it through to deployment, because a service that only runs on my machine is not finished.',
  ],
  highlight:
    'I enjoy building systems where software engineering, automation and modern AI technologies come together.',
  facts: [
    { label: 'Experience', value: '4 years' },
    { label: 'Primary Focus', value: 'Full Stack Engineering' },
    { label: 'Backend', value: 'Node.js & Python' },
    { label: 'Current Interest', value: 'AI Agents & Automation' },
    { label: 'Infrastructure', value: 'Docker, Kubernetes & Cloud' },
    { label: 'Based In', value: 'Kollam, Kerala' },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Engineering expertise                                               */
/* ------------------------------------------------------------------ */

export type ExpertiseDomain = {
  id: string
  title: string
  summary: string
  tags: readonly string[]
}

export const expertise: readonly ExpertiseDomain[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    summary:
      'Component architectures that stay maintainable as scope grows — typed API layers, accessible markup, and interfaces that stay fast on real devices.',
    tags: ['React', 'Next.js', 'Vue.js', 'JavaScript', 'TypeScript', 'Modern UI Architecture'],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    summary:
      'API design and service boundaries decided before the first endpoint is written, in both the Node.js and Python ecosystems.',
    tags: ['Node.js', 'Python', 'Flask', 'FastAPI', 'Express', 'REST APIs', 'Microservices', 'System Architecture'],
  },
  {
    id: 'data',
    title: 'Data & Performance',
    summary:
      'Schema design, query and index work, and caching applied where measurement says it belongs rather than everywhere by reflex.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Caching Strategy', 'Database Design', 'Query Optimisation'],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    summary:
      'LLMs put behind schema-enforced contracts, with deterministic code owning anything that has to be correct and agents owning interpretation.',
    tags: ['AI Agents', 'LLM Integrations', 'Agentic Workflows', 'Workflow Automation', 'Prompt & Schema Design', 'AI-powered Applications'],
  },
  {
    id: 'infra',
    title: 'Infrastructure & Deployment',
    summary:
      'Containerised services, reproducible environments and pipelines that take a commit through to a running production deployment.',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Cloud Platforms', 'Nginx', 'Production Deployments'],
  },
] as const

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Role = {
  company: string
  role: string
  start: string
  end: string
  location: string
  summary: string
  bullets: readonly string[]
  stack: readonly string[]
  current?: boolean
}

export const experience: readonly Role[] = [
  {
    company: 'Dignizant Technologies LLP',
    role: 'Full Stack Developer',
    start: 'Jan 2024',
    end: 'Present',
    location: 'Surat, Gujarat',
    summary:
      'Building and shipping production systems across the stack for client-facing products.',
    bullets: [
      'Design and ship backend services in Node.js and Python — REST API contracts, data modelling and background job processing for systems running in production.',
      'Build the React and Next.js frontends against those services with typed API layers, so a change to a response shape surfaces at compile time rather than in the browser.',
      'Integrate LLM-backed automation into production workflows, with schema-validated agent input and output and explicit limits on what the model is allowed to decide.',
      'Reduce latency on read-heavy endpoints by introducing Redis caching and reworking database access patterns and indexing.',
      'Containerise services with Docker and carry them through environment configuration, release and deployment onto cloud infrastructure.',
    ],
    stack: ['Node.js', 'Python', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'LLM APIs'],
    current: true,
  },
  {
    company: 'Richinnovations Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    start: '2023',
    end: '2024',
    location: 'Trivandrum, Kerala',
    summary:
      'Where system design became a habit rather than an afterthought.',
    bullets: [
      'Delivered several client applications end to end, moving between backend APIs and frontend interfaces as each project required.',
      'Established a design-before-code practice — data models, endpoint contracts and service boundaries agreed up front, which cut rework materially.',
      'Supported and extended live production systems: diagnosing issues under time pressure, adding features to existing codebases and improving reliability.',
      'Translated loose stakeholder requirements into scoped, buildable technical work with realistic delivery boundaries.',
    ],
    stack: ['Node.js', 'React', 'MongoDB', 'MySQL', 'REST APIs'],
  },
  {
    company: 'Brototype',
    role: 'MERN Stack Developer',
    start: 'Jun 2022',
    end: 'Apr 2023',
    location: 'Trivandrum, Kerala',
    summary: 'Internship and self-directed projects — the foundation.',
    bullets: [
      'Built full-stack MERN projects from scratch: authentication, REST APIs, MongoDB schema design and React frontends.',
      'Deployed personal projects to live infrastructure rather than leaving them on localhost, which is where environments, process management and reverse proxies stopped being abstract.',
      'Developed the working fundamentals — asynchronous JavaScript, the request/response lifecycle, and debugging as a discipline — that everything since has been built on.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
] as const

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string
  name: string
  category: string
  year: string
  status?: string
  tagline: string
  problem: string
  solution: string
  impact: string
  detail?: readonly string[]
  principles?: readonly { title: string; body: string }[]
  stack: readonly { group: string; items: readonly string[] }[]
  contribution: string
  links: readonly { label: string; href: string }[]
  featured: boolean
}

export const projects: readonly Project[] = [
  {
    id: 'disciple',
    name: 'Disciple',
    category: 'AI Application · Backend System',
    year: '2025 — present',
    status: 'Phase P1 · Personal Discipline Core',
    tagline:
      'A discipline-driven decision-support platform for the Indian markets, where deterministic engines produce the numbers and LLM agents produce the understanding.',
    problem:
      'Discretionary trading fails on process, not information. The decisions that lose capital are the unplanned ones: no predefined strategy, position sizes chosen by feel, and no honest record of why a trade was taken. Existing tools optimise for signals and screens, which is exactly the surface that encourages more trading rather than better trading.',
    solution:
      'A multi-asset decision-support system that deliberately does not predict price. Deterministic engines compute regime, risk, sizing and expectancy; a separate layer of LLM agents reads that output and explains it. The wall between them is one-way and schema-enforced — agents can never write prices, sizes, entries, stops, targets or plans. Every evaluation resolves to one of three first-class outputs: Trade, Wait or Avoid, and a no-trade day gets real content — market context, regime boards, journal analytics — rather than an empty screen.',
    impact:
      'Built as a strictly personal-use tool, which doubles as its regulatory strategy: SEBI RA/IA rules govern advice given to others, so the personal phase runs the full feature set uncompromised. Architected for NSE/BSE equities first, with the asset abstraction already in place to extend to MCX, futures and crypto.',
    detail: [
      'The stated purpose is to protect capital, follow a predefined strategy, control risk, size rationally and stay positive-expectancy over many trades — not to be right about the next candle.',
      'One Expo codebase compiles to iOS, Android and web, with design tokens and copy code-generated from source files and API types generated from the server’s OpenAPI schema. CI fails if any of them drift.',
    ],
    principles: [
      {
        title: 'Money is integer paise',
        body: 'Floating-point currency is banned at the type level. Rounding error is not an acceptable class of bug in a system about capital.',
      },
      {
        title: 'Market-data reads are as-of',
        body: 'Every read is anchored to a point in time; a look-ahead raises rather than silently returning tomorrow’s data into yesterday’s decision.',
      },
      {
        title: 'Costs injected everywhere',
        body: 'Brokerage, slippage and taxes are parameters of every evaluation, so backtested expectancy resembles the real thing. In-sample and out-of-sample never merge.',
      },
      {
        title: 'The agent wall is one-way',
        body: 'Agents A1–A4 read engine output through validated JSON schemas, under token budgets, with an eval suite gated in CI. No provider SDK is importable — ruff bans the imports outside a single adapter.',
      },
    ],
    stack: [
      {
        group: 'Backend',
        items: ['Python 3.11+', 'FastAPI', 'Uvicorn', 'Pydantic v2', 'SQLAlchemy 2.0', 'Alembic', 'psycopg 3', 'httpx'],
      },
      {
        group: 'Data',
        items: ['PostgreSQL 16', 'Redis 7', 'DuckDB + Parquet', 'PyArrow', 'Docker Compose'],
      },
      {
        group: 'Frontend',
        items: ['Expo SDK 54', 'Expo Router 6', 'React 19', 'React Native 0.81', 'react-native-web', 'TypeScript 5.9'],
      },
      {
        group: 'AI layer',
        items: ['Provider-adapter interface', 'Anthropic Claude', 'Groq', 'Agents A1–A4', 'JSON-schema I/O', 'Token budgeting'],
      },
      {
        group: 'Integrations & CI',
        items: ['Angel One SmartAPI', 'SmartWebSocket v2', 'JWT auth', 'GitHub Actions', 'ruff', 'mypy --strict', 'pytest', 'Jest'],
      },
    ],
    contribution: 'Concept, architecture and full implementation.',
    links: [{ label: 'GitHub', href: 'https://github.com/Anoopanil413/Disciple' }],
    featured: true,
  },
  {
    id: 'email-automation',
    name: 'Email Marketing Automation',
    category: 'Full Stack Application · Automation System',
    year: '2024',
    tagline:
      'A campaign platform that turns a marketing list and a template into scheduled, tracked, deliverable email — without anyone touching a send button.',
    problem:
      'Campaign work was manual and error-prone: lists maintained by hand, sends triggered individually, and no reliable read on what actually landed. Volume made the manual process both slow and risky, since a mistake reaches every recipient at once.',
    solution:
      'Designed and built the service and interface together. A Node.js backend owns audience segmentation, template rendering and a queued job pipeline that paces sends against provider rate limits and retries transient failures with backoff instead of dropping them. Webhook handlers ingest delivery, open and bounce events and reconcile them against campaign state. The React frontend gives non-technical users campaign composition, scheduling and a live results view over the same API.',
    impact:
      'Campaign setup moved from a manual, per-send process to a scheduled pipeline, with delivery outcomes visible per campaign rather than inferred. Failed sends became a retried, observable state rather than silent loss.',
    stack: [
      { group: 'Backend', items: ['Node.js', 'Express', 'Queue workers', 'Webhooks', 'Cron scheduling'] },
      { group: 'Frontend', items: ['React', 'TypeScript', 'Template editor'] },
      { group: 'Data & infra', items: ['MongoDB', 'Redis', 'Docker', 'Cloud deployment'] },
    ],
    contribution: 'Backend architecture, job pipeline and frontend application.',
    links: [],
    featured: true,
  },
  {
    id: 'doki-web3',
    name: 'Doki — Web3 Token Application',
    category: 'Web3 · Full Stack Application',
    year: '2024',
    tagline:
      'A web application over an on-chain token contract, built around the fact that a blockchain write is slow, public and irreversible.',
    problem:
      'Interfaces over smart contracts fail in ways ordinary web apps do not. A transaction can be pending for minutes, succeed on-chain but not yet be visible to the client, or revert after the user has already been told it worked. Naive request/response handling produces an interface that is confidently wrong.',
    solution:
      'Built the application around transaction lifecycle as a first-class state. Wallet connection, contract reads and writes are wrapped in a typed client layer; pending, confirmed, reverted and reorg-affected states are each rendered explicitly rather than collapsed into a spinner. A backend indexes contract events so views load from an indexed store instead of re-querying chain state on every render.',
    impact:
      'Users get an honest view of what has and has not settled on-chain, and read-heavy views stopped depending on live node calls for their load time.',
    stack: [
      { group: 'Chain', items: ['Smart contract integration', 'Wallet connection', 'Event indexing'] },
      { group: 'Application', items: ['React', 'TypeScript', 'Node.js', 'REST APIs'] },
      { group: 'Infra', items: ['Docker', 'Cloud deployment'] },
    ],
    contribution: 'Application architecture, contract integration layer and frontend.',
    links: [],
    featured: true,
  },
  /**
   * Add further projects here — the grid and detail rendering adapt automatically.
   * Set `featured: false` for anything you want listed but not expanded.
   */
] as const

/* ------------------------------------------------------------------ */
/* How I build software                                                */
/* ------------------------------------------------------------------ */

export const lifecycle = [
  {
    step: 'Idea',
    body: 'Understand the actual problem and what a good outcome looks like before any technology is chosen.',
  },
  {
    step: 'Architecture',
    body: 'Data model, service boundaries and contracts decided first — the decisions that are expensive to reverse later.',
  },
  {
    step: 'Backend Services',
    body: 'APIs, domain logic and persistence, built to be testable and honest about failure.',
  },
  {
    step: 'Frontend Experience',
    body: 'Interfaces typed against the API, accessible by default, and fast on the devices people actually use.',
  },
  {
    step: 'AI & Automation',
    body: 'LLMs and automated workflows added where they earn their place, behind schemas and explicit boundaries.',
  },
  {
    step: 'Infrastructure',
    body: 'Containerised services, reproducible environments and configuration that survives leaving my machine.',
  },
  {
    step: 'Deployment',
    body: 'Pipelines to production, with releases that can be repeated and rolled back.',
  },
] as const

export const lifecycleNote =
  'I enjoy working across the engineering lifecycle — from translating ideas into system architecture to building applications, integrating intelligent automation, and deploying production-ready services.'

/* ------------------------------------------------------------------ */
/* Currently exploring                                                 */
/* ------------------------------------------------------------------ */

export const exploring = [
  'AI Agents',
  'Agentic Workflows',
  'LLM Applications',
  'Distributed Systems',
  'Cloud Native Architecture',
  'System Design',
] as const

export const exploringNote =
  'I actively explore emerging technologies and engineering patterns that can improve how modern software systems are built.'

/* ------------------------------------------------------------------ */
/* Technology stack                                                    */
/* ------------------------------------------------------------------ */

export const stack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
  { group: 'Backend', items: ['Node.js', 'Python', 'Flask', 'FastAPI'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud'] },
  { group: 'AI', items: ['LLMs', 'AI Agents', 'Automation', 'Agentic Workflows'] },
] as const

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  title: 'Let’s build something interesting.',
  body: 'I’m always interested in discussing engineering challenges, software architecture, AI automation, and opportunities to build products that reach production.',
  availability: 'Open to interesting engineering conversations',
} as const
