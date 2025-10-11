import { motion } from "framer-motion";

const skills = ["React", "Node.js", "Python", "Tailwind", "AI/ML"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer text-gray-900 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
