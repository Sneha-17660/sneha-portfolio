"use client";

import { motion } from "framer-motion";

const STAGES = ["Data Retrieved", "SQL Analysis", "AI Interpretation", "Business Insight"];

export default function RagBIPreview() {
  return (
    <div className="rounded-xl border border-white/8 bg-base-900/80 p-4 sm:p-5">
      <div className="space-y-3">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white/[0.06] px-3.5 py-2 text-[13px] text-ink-100">
            Which products are driving the decline in sales?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/8 bg-white/[0.02] px-3.5 py-2 text-[13px] text-ink-300">
            Retrieving relevant business data...
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STAGES.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="rounded-lg border border-white/6 bg-white/[0.015] px-2.5 py-2.5 text-center"
          >
            <p className="font-mono text-[8.5px] uppercase tracking-[0.05em] text-signal-500">
              {stage}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
