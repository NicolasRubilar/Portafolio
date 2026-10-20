import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Skills from './components/Skills'
import Methods from './components/Methods'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      {/* Marco redondeado que envuelve toda la página: el navbar cuelga de su borde superior */}
      <div className="bg-apple-card p-2.5">
        <div className="overflow-hidden rounded-[28px] bg-black">
          <main>
            <Hero />
            <Projects />
            <Clients />
            <Skills />
            <Methods />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
