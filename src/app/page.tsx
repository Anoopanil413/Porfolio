import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Expertise } from '@/components/expertise'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Process } from '@/components/process'
import { Exploring } from '@/components/exploring'
import { Stack } from '@/components/stack'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { StructuredData } from '@/components/structured-data'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Process />
        <Exploring />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
