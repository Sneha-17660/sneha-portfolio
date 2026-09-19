"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { stack, stackToProjects, projects } from "@/config/site";

export default function Stack() {
  const [hovered, setHovered] = useState<string | null>(null);
  const highlightedProjects = hovered ? stackToProjects[hovered] ?? [] : [];

  return (
    <section id="stack" className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          My stack
        </motion.h2>

        <div className="mt-6 flex min-h-[24px] items-center">
          <p className="font-mono text-[12px] text-signal-500" aria-live="polite">
            {hovered
              ? highlightedProjects.length > 0
                ? `Used in: ${highlightedProjects
                    .map((id) => projects.find((p) => p.id === id)?.title)
                    .join(", ")}`
                : "Not tied to a specific project"
              : "Hover a technology to see where it's used"}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/8 bg-white/[0.012] p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                {category.name}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const isDimmed = hovered !== null && hovered !== item;
                  const isActive = hovered === item;
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        onMouseEnter={() => setHovered(item)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(item)}
                        onBlur={() => setHovered(null)}
                        className={`rounded-full border px-3 py-1.5 font-mono text-[11.5px] transition-all duration-200 ${
                          isActive
                            ? "border-signal-500/60 bg-signal-500/10 text-signal-500"
                            : "border-white/10 text-ink-300"
                        } ${isDimmed ? "opacity-35" : "opacity-100"}`}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
