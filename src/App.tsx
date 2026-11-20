import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { SkipLink } from './components/SkipLink'
import { Stack } from './components/Stack'

export default function App() {
  return (
    <>
      <SkipLink />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="editorial-grid absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="top-glow absolute inset-x-0 top-0 h-[70vh]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main id="contenido" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Stack />
          <Contact />
        </main>

        <Footer />
      </div>

      <BackToTop />
    </>
  )
}
