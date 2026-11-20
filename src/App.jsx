import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Campaigns from './components/Campaigns'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-coral focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Campaigns />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
