import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "AI Business Assistant",
      description:
        "AI powered assistant system designed for automation, productivity and business workflows.",
      tech: ["AI", "React", "Automation"],
    },

    {
      title: "Startup Portfolio Platform",
      description:
        "Modern personal branding and portfolio platform built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "UI/UX"],
    },

    {
      title: "Sales Analytics Dashboard",
      description:
        "Technology focused dashboard project for analytics, customer insights and business tracking.",
      tech: ["Dashboard", "Analytics", "Business"],
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
            Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Building modern digital experiences.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/40 hover:-translate-y-2 transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-8">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="mt-10 flex gap-4">

                  <a
                    href="#"
                    className="text-sm bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="text-sm border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </motion.section>
  )
}