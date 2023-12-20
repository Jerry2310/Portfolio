import React from 'react'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <main>
      <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      </>
    </main>
    
  )
}

export default page