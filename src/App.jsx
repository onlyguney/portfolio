import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Journey from "./components/Journey"
import WhyMe from "./components/WhyMe"
import Focus from "./components/Focus"
import Vision from "./components/Vision"

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Footer />
      <Journey />
      <WhyMe />
      <Focus />
      <Vision />
    </div>
  )
}