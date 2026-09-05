import { about, experience, expertise, person, siteUrl } from '@/content/site'

export function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: person.name,
        jobTitle: person.title,
        description: person.intro,
        email: `mailto:${person.email}`,
        url: siteUrl,
        image: `${siteUrl}${person.profileImage}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kollam',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        sameAs: [person.github, person.linkedin, person.leetcode, person.dailydev],
        knowsAbout: expertise.flatMap((domain) => domain.tags),
        worksFor: {
          '@type': 'Organization',
          name: experience[0].company,
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Software Engineer',
          occupationalCategory: '15-1252.00',
          skills: about.facts.map((fact) => `${fact.label}: ${fact.value}`).join('; '),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: `${person.name} — Software Engineer`,
        inLanguage: 'en',
        publisher: { '@id': `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
