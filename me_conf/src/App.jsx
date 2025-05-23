import './App.css'
import HeroSection from './components/HeroSection'
import Speakers from './components/Speakers'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutTimeline from "./components/AboutTimeline"
import ConferenceThemes from "./components/ConferenceThemes"
function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutTimeline />
    <ConferenceThemes />
    <Speakers />
    <Footer />
    </>
  )
}

export default App
