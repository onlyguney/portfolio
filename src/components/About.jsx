import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative bg-zinc-950 text-white py-32 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Business vision meets <span className="text-blue-500">AI technology.</span>
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m an English Business Administration student focused on artificial intelligence,
            technology and entrepreneurship. My interests combine software systems,
            digital innovation and business strategy to build scalable products and
            impactful technology solutions.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            I’m continuously improving myself in both technical and business-oriented areas
            including software development, frontend technologies, AI systems, business
            development and technology strategy.
          </p>
        </div>
      </div>
    </motion.section>
  )
}