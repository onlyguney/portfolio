import { motion } from "framer-motion"

export default function Vision() {
  return (
    <motion.section
      className="bg-zinc-950 text-white py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-400 tracking-[0.3em] uppercase text-sm mb-5">
          Vision
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Building the future at the intersection of
          <span className="text-blue-500"> business, AI and technology.</span>
        </h2>

        <p className="text-gray-400 text-xl mt-10 leading-relaxed">
          My long-term goal is to combine business strategy, artificial intelligence
          and emerging technologies to create products, opportunities and solutions
          that generate meaningful impact. Whether through entrepreneurship or
          corporate leadership, I aim to contribute to the growth of technology-driven
          innovation.
        </p>

      </div>
    </motion.section>
  )
}