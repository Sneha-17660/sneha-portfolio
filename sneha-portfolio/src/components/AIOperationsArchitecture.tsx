"use client";

import { motion, useReducedMotion } from "framer-motion";

const LAYERS = [
  "User / Business Input",
  "Input Layer",
  "AI / LLM Layer",
  "Reasoning + Structured Output",
  "Workflow Engine",
  "Data / API Layer",
  "Automated Action",
  "User / Business Output",
];

export default function AIOperationsArchitecture() {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.015] p-5 sm:p-6">
      <ol className="space-y-0">
        {LAYERS.map((layer, i) => (
          <li key={layer} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-3.5 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal-500/30 bg-signal-500/10 font-mono text-[10px] text-signal-500">
                {i + 1}
              </span>
              <span className="text-sm text-ink-100">{layer}</span>
            </motion.div>
            {i < LAYERS.length - 1 && (
              <div className="ml-[13px] h-4 w-px bg-white/10 overflow-hidden">
                {!reduce && (
                  <motion.div
                    className="h-2 w-px bg-signal-500"
                    animate={{ y: [0, 16] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
