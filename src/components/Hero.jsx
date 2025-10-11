import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 via-white to-gray-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Hi, I'm <span className="text-blue-500">Adwaith</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
        I build web applications and explore AI/ML projects that push the boundaries of technology.
      </p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-10 inline-block bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        See My Work
      </motion.a>
    </motion.section>
  );
}
