"use client";

import { motion } from "framer-motion";

const METRICS = [
  { label: "DEFECTS", value: "38" },
  { label: "OPEN CAPAs", value: "9" },
  { label: "SUPPLIER RISKS", value: "3" },
  { label: "QUALITY INSIGHTS", value: "6" },
];

const WORKFLOW = [
  "Defect Data",
  "Validation",
  "AI Analysis",
  "5-Why",
  "Fishbone",
  "Root Cause",
  "Corrective Action",
  "Verification",
];

export default function CapaIQPreview() {
  return (
    <div className="rounded-xl border border-white/8 bg-base-900/80 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-500">
          Supplier Quality Overview
        </p>
        <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.06em] text-ink-500">
          UI Mockup
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="rounded-lg border border-white/6 bg-white/[0.02] p-3">
            <p className="text-lg font-semibold text-ink-50">{m.value}</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.05em] text-ink-500">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-lg border border-white/6 bg-white/[0.015] p-3.5">
        {WORKFLOW.map((step, i) => (
          <motion.span
            key={step}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-center gap-1.5"
          >
            <span className="whitespace-nowrap rounded-md bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-ink-300">
              {step}
            </span>
            {i < WORKFLOW.length - 1 && <span className="text-ink-700">→</span>}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
