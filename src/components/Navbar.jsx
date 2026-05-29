import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
  GK
</div>

<div>
  <span className="block text-xl font-semibold">
    Güney Karaman
  </span>

  <span className="block text-xs text-gray-500">
    AI • Business • Technology
  </span>
</div>
          </a>
  
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
  
         <div className="hidden md:flex items-center gap-3">
  <a
    href="#contact"
    className="border border-white/15 px-5 py-2 rounded-xl text-sm hover:bg-white/10 transition"
  >
    Contact Me
  </a>

  <a
    href="/cv.pdf"
    download
    className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-xl text-sm font-semibold transition shadow-lg shadow-blue-500/20"
  >
    Download CV
  </a>
  <a
  href="https://github.com/onlyguney"
  target="_blank"
  rel="noreferrer"
  className="text-gray-400 hover:text-white transition"
>
  <FaGithub size={22} />
</a>

<a
  href="https://linkedin.com/in/guneykaraman"
  target="_blank"
  rel="noreferrer"
  className="text-gray-400 hover:text-blue-400 transition"
>
  <FaLinkedin size={22} />
</a>
</div>
        </div>
      </nav>
    )
  }