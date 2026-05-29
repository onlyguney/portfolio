import { motion } from "framer-motion"

export default function Journey() {
  const journey = [
    {
      year: "Today",
      title: "English Business Administration",
      desc: "Building a strong foundation in business, management and strategy.",
    },

    {
      year: "Next Step",
      title: "Management Information Systems",
      desc: "Expanding technical knowledge with information systems and technology.",
    },

    {
      year: "Future Goal",
      title: "AI Engineering & Technology Leadership",
      desc: "Combining AI, business strategy and entrepreneurship to build impactful products.",
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
      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          My Career Roadmap
        </h2>

        <div className="space-y-10">

          {journey.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-blue-500 pl-8 py-2"
            >
              <p className="text-blue-400 text-sm mb-2">
                {item.year}
              </p>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </motion.section>
  )
}