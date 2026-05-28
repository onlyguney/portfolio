import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "Artificial Intelligence",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "Frontend Development",
    "Business Development",
    "Technology Strategy",
    "Entrepreneurship",
    "AI Tools",
    "Digital Products",
    "Startup Mindset",
  ]

  return (
    <motion.section
      id="skills"
      className="relative bg-zinc-950 text-white py-32 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="absolute right-10 top-20 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Skills
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Technical ability with business perspective.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:border-blue-500/40 hover:-translate-y-1 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}