import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutTimeline from '../components/AboutTimeline'
import ConferenceThemes from '../components/ConferenceThemes'
import Speakers from '../components/Speakers'
import AboutMech from '../components/AboutMech'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutTimeline />
      <ConferenceThemes />
      <Speakers />
      <AboutMech />
    </>
  )
}

export default Home