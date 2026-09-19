"use client";

import { motion } from "framer-motion";
import { Workflow, ListChecks, FileText, Bot, BarChart3, Activity } from "lucide-react";

const MODULES = [
  { icon: Workflow, title: "AI Workflows", detail: "Create and manage AI-powered workflows." },
  { icon: ListChecks, title: "Task Automation", detail: "Turn requests and repetitive work into structured tasks." },
  { icon: FileText, title: "Document Intelligence", detail: "Extract useful information from unstructured documents." },
  { icon: Bot, title: "AI Assistant", detail: "Interact with operational information using natural language." },
  { icon: BarChart3, title: "Data Insights", detail: "Convert operational data into actionable insights." },
  { icon: Activity, title: "Operations Monitor", detail: "Track workflow states, tasks and exceptions." },
];

export default function AIOperationsModules() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {MODULES.map((m, i) => (
        <motion.div
          key={m.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.04 }}
          whileHover={{ y: -3 }}
          className="rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-signal-500/30"
        >
          <m.icon className="h-4.5 w-4.5 text-signal-500" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium text-ink-50">{m.title}</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-ink-500">{m.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
