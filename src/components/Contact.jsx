import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(import.meta.env.VITE_API_BASE + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network response not ok");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-28 bg-gradient-to-r from-blue-50 via-white to-blue-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Let’s Connect</h2>
        <p className="text-gray-600">Got a project, idea, or collaboration? Drop me a message below!</p>
      </div>
      <form
        onSubmit={submit}
        className="max-w-xl mx-auto space-y-6 bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-200"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Your name"
            className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 w-full shadow-sm transition"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="Your email"
            className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 w-full shadow-sm transition"
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          placeholder="Your message"
          className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 resize-none h-36 shadow-sm transition"
        />
        <button
          type="submit"
          className="w-full py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 shadow-lg transition-all duration-300"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
}
