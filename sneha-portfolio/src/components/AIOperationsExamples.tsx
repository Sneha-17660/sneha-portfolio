"use client";

import { motion } from "framer-motion";

const EXAMPLES = [
  ["Email", "AI Understands Request", "Task Created"],
  ["Document", "AI Extraction", "Structured Data"],
  ["Raw Data", "AI Analysis", "Business Insight"],
  ["Issue", "AI Analysis", "Recommended Action"],
];

export default function AIOperationsExamples() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {EXAMPLES.map((steps, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -3, borderColor: "rgba(127,184,164,0.35)" }}
          className="rounded-xl border border-white/8 bg-white/[0.015] p-4"
        >
          <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.04em] text-ink-300">
            {steps.map((step, j) => (
              <span key={step} className="flex items-center gap-2">
                <span className={j === 1 ? "text-signal-500" : ""}>{step}</span>
                {j < steps.length - 1 && <span className="text-ink-700">→</span>}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
