"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /about
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 max-w-2xl font-display text-3xl text-ink-50 sm:text-4xl"
        >
          Beyond the resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-300 sm:text-lg"
        >
          I enjoy working at the intersection of technology and real-world problems. My work
          spans generative AI, data analytics, automation and product development, with an
          engineering mindset that helps me break complex problems into systems that can
          actually be built.
        </motion.p>
      </div>
    </section>
  );
}
