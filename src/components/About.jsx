import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-28 px-6 md:px-12 bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="src\download.jpg"
          alt="Profile"
          className="w-64 rounded-3xl shadow-2xl border-2 border-white hover:scale-105 transition-transform duration-500"
          whileHover={{ rotate: 2 }}
        />
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I'm a CS student passionate about creating AI-driven solutions and occasionally dabble into web development.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
