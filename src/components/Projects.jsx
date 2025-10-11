import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
