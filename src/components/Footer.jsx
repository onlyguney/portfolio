export default function Footer() {
    return (
      <footer className="bg-black border-t border-white/10 py-10 px-6 text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
  
          <div>
            <h3 className="text-white text-xl font-semibold">
              © 2026 Güney Karaman
            </h3>
  
            <p className="mt-2 text-sm">
Building at the intersection of
AI, Business & Technology            </p>
          </div>
  
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
  
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
  
            <a href="#" className="hover:text-white transition">
              Email
            </a>
          </div>
  
        </div>
      </footer>
    )
  }