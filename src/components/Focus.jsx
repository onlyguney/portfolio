import { motion } from "framer-motion"

export default function Focus() {
  const items = [
    {
      title: "AI & Digital Innovation",
      text: "Exploring how artificial intelligence can transform business processes, products and customer experiences.",
    },
    {
      title: "Technology-Driven Business",
      text: "Developing a strong understanding of how technology creates growth, efficiency and competitive advantage.",
    },
    {
      title: "Product & Venture Building",
      text: "Interested in building scalable digital products and future-oriented ventures with real market potential.",
    },
  ]

  return (
    <motion.section
      className="bg-black text-white py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Focus Areas
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          Where I’m building my edge.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:-translate-y-2 transition duration-500"
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