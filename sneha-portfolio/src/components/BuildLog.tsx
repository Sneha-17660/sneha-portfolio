"use client";

import { motion } from "framer-motion";
import { buildLog } from "@/config/site";

export default function BuildLog() {
  return (
    <section className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /changelog
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          Build log
        </motion.h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/8">
          {buildLog.map((entry, i) => (
            <motion.div
              key={`${entry.year}-${entry.title}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={`flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 ${
                i !== buildLog.length - 1 ? "border-b border-white/6" : ""
              }`}
            >
              <span className="font-mono text-[12px] text-ink-500 sm:w-16">{entry.year}</span>
              <span className="font-display text-lg text-ink-50 sm:w-72">{entry.title}</span>
              <span className="text-[13.5px] text-ink-300">{entry.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
