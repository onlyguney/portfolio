import { motion } from "framer-motion"

export default function WhyMe() {
  const strengths = [
    {
      title: "Business & Technology",
      text: "I combine business thinking with technology, allowing me to understand both products and markets.",
    },
    {
      title: "AI-Focused Mindset",
      text: "I closely follow the evolution of artificial intelligence and its impact on industries and businesses.",
    },
    {
      title: "Entrepreneurial Perspective",
      text: "I enjoy creating, building and exploring opportunities that can generate long-term value.",
    },
  ]

  return (
    <motion.section
      className="bg-zinc-950 text-white py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Why Me
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          More than just technical skills.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}