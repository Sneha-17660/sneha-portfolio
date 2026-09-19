"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { buildProcess } from "@/config/site";

export default function HowIBuild() {
  const [selected, setSelected] = useState(0);
  const step = buildProcess[selected];

  return (
    <section className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          From problem to product
        </motion.h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-300">
          I like turning ambiguous problems into structured systems — combining data, AI and
          product thinking to build practical solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
            {buildProcess.map((p, i) => (
              <li key={p.index}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={selected === i}
                  className={`w-full rounded-xl border px-4 py-3.5 text-left transition-colors ${
                    selected === i
                      ? "border-signal-500/50 bg-signal-500/[0.07]"
                      : "border-white/8 bg-white/[0.012] hover:border-white/20"
                  }`}
                >
                  <span className="font-mono text-[10px] text-ink-500">{p.index}</span>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      selected === i ? "text-signal-500" : "text-ink-100"
                    }`}
                  >
                    {p.title}
                  </p>
                </button>
              </li>
            ))}
          </ol>

          <motion.div
            key={step.index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/8 bg-white/[0.012] p-7 sm:p-8"
          >
            <span className="font-mono text-xs text-signal-500">{step.index}</span>
            <h3 className="mt-2 font-display text-2xl text-ink-50">{step.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-300">{step.detail}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
