import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 md:p-16">
        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s build something meaningful.
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Open to technology-focused opportunities, AI projects, business development
          and future-oriented collaborations.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:guneyykaraman@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-500/30"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/guneykaraman/"
            target="_blank"
            className="border border-white/15 bg-white/5 px-7 py-4 rounded-2xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/onlyguney"
            target="_blank"
            className="border border-white/15 bg-white/5 px-7 py-4 rounded-2xl hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}