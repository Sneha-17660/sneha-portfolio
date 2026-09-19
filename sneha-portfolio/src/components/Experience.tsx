"use client";

import { motion } from "framer-motion";
import { experience } from "@/config/site";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.012] p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-ink-50">{entry.company}</h3>
                  <p className="mt-1 text-sm text-ink-300">{entry.role}</p>
                </div>
                <span className="shrink-0 rounded-full border border-signal-500/25 bg-signal-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-signal-500">
                  {entry.company} → {entry.tag}
                </span>
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-ink-300">{entry.description}</p>

              <ul className="mt-5 space-y-2.5 border-t border-white/6 pt-5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500"
        >
          <span>IBM → Product</span>
          <span>Proso AI → AI</span>
          <span>Projects → Building</span>
        </motion.div>
      </div>
    </section>
  );
}
