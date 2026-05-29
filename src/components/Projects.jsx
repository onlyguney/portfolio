import { motion } from "framer-motion"

export default function Projects() {
  const focusAreas = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React, Tailwind CSS and Framer Motion to showcase my journey at the intersection of business, AI and technology.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },

    {
      title: "Artificial Intelligence",
      description:
        "Currently exploring AI technologies, automation systems and their potential applications in business, productivity and digital transformation.",
      tech: ["AI", "Automation", "Innovation"],
    },

    {
      title: "Business & Technology",
      description:
        "Developing a strong perspective on how technology can support business growth, customer value and scalable digital products.",
      tech: ["Business", "Strategy", "Technology"],
    },
  ]

  return (
    <motion.section
      id="projects"
      className="bg-black text-white py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
            Current Focus
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Building my foundation in AI, business and technology.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/40 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-8">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}