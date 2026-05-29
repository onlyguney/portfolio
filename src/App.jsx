import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Journey from "./components/Journey"
import WhyMe from "./components/WhyMe"
import Focus from "./components/Focus"
import Vision from "./components/Vision"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Journey />
      <WhyMe />
      <Focus />
      <Vision />            
      <Footer />

    </div>
  )
}