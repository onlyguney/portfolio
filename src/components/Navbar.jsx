export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
              G
            </div>
  
            <span className="text-xl font-semibold">
              Güney Karaman
            </span>
          </a>
  
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
  
          <a
            href="#contact"
            className="hidden md:block border border-white/15 px-5 py-2 rounded-xl text-sm hover:bg-white/10 transition"
          >
            Contact Me!
          </a>
        </div>
      </nav>
    )
  }