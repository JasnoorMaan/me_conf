import React from 'react'
import About from './About'
import Timeline from './Timeline'

const AboutTimeline = () => {
  return (
    <>
    <section className='py-16 px-4 flex flex-row flex-wrap md:flex-nowrap md:max-w-[80vw] mx-auto'>
    <About />
    <Timeline />
    </section>
    </>
  )
}

export default AboutTimeline