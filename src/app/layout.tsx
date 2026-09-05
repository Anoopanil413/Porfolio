import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { person, siteUrl } from '@/content/site'
import { themeScript } from '@/components/ui/theme-toggle'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const title = `${person.name} | Software Engineer | Full Stack, Backend & AI Automation`
const description =
  'Software Engineer specialising in Full Stack and Backend Development, AI Agents, Automation, Node.js, Python, React, Next.js, Docker, Kubernetes and scalable cloud applications.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${person.name}`,
  },
  description,
  applicationName: `${person.name} — Portfolio`,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  keywords: [
    'Software Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'Node.js Developer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'AI Automation',
    'AI Agents',
    'LLM Integration',
    'Docker',
    'Kubernetes',
    'Cloud Applications',
    'Scalable Systems',
    'Anoop Anilkumar',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: `${person.name} — Software Engineer`,
    title,
    description,
    locale: 'en_IN',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${person.name} — ${person.titleLong}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
