import { motion } from "framer-motion"
import profile from "../assets/profile.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a22_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a22_1px,transparent_1px)] bg-[size:90px_90px]" />
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-blue-700/20 blur-3xl rounded-full" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[80vh]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="inline-flex items-center gap-2 text-blue-400 border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded-full text-sm mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            AI & Technology Entrepreneur
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Connecting Business Vision <br />
            with <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">AI & Technology</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
I'm an English Business Administration student driven by a passion for artificial intelligence, technology, and innovation. I believe the most impactful ideas emerge where business strategy and technology intersect, and my goal is to build the skills, knowledge, and perspective needed to thrive in both worlds.

With a growing focus on AI, digital products, and technology-driven growth, I'm continuously expanding my technical and business expertise while exploring opportunities to create meaningful solutions, contribute to ambitious projects, and build ventures that make a lasting impact.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-500/30"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="border border-white/15 bg-white/5 px-7 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

      <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl">
  <div>
    <p className="text-3xl font-bold">Business</p>
    <p className="text-gray-500 text-sm">Administration</p>
  </div>

  <div>
    <p className="text-3xl font-bold">AI</p>
    <p className="text-gray-500 text-sm">Engineering Goal</p>
  </div>

  <div>
    <p className="text-3xl font-bold">Tech</p>
    <p className="text-gray-500 text-sm">Entrepreneurship</p>
  </div>
</div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-[2rem]" />

            <div className="relative p-2 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src={profile}
                alt="Güney"
                className="w-[340px] md:w-[440px] h-[460px] md:h-[560px] object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}