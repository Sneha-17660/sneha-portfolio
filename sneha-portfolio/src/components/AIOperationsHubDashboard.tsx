"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Workflow,
  ListChecks,
  FileText,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "AI Workflows", icon: Workflow },
  { label: "Tasks", icon: ListChecks },
  { label: "Documents", icon: FileText },
  { label: "AI Assistant", icon: Bot },
  { label: "Insights", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const OVERVIEW_CARDS = [
  { label: "ACTIVE WORKFLOWS", value: "12" },
  { label: "PENDING TASKS", value: "7" },
  { label: "AI PROCESSES", value: "4" },
  { label: "EXCEPTIONS", value: "1" },
];

const PIPELINE_STAGES = ["INPUT", "UNDERSTAND", "AI PROCESSING", "DECISION", "AUTOMATION", "OUTPUT"];

export default function AIOperationsHubDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="grid overflow-hidden rounded-xl border border-white/8 bg-base-900/80 thin-scroll"
      style={{ gridTemplateColumns: compact ? "56px 1fr" : "180px 1fr" }}
    >
      {/* sidebar */}
      <div className="border-r border-white/6 bg-white/[0.015] py-4">
        <div className="flex flex-col gap-1 px-2">
          {SIDEBAR_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.06em] ${
                item.active
                  ? "bg-signal-500/10 text-signal-500"
                  : "text-ink-500"
              }`}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {!compact && <span className="truncate">{item.label}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* main */}
      <div className="min-w-0 p-4 sm:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
          Operations Overview
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {OVERVIEW_CARDS.map((card) => (
            <div key={card.label} className="rounded-lg border border-white/6 bg-white/[0.02] p-3">
              <p className="text-xl font-semibold text-ink-50">{card.value}</p>
              <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.06em] text-ink-500">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* pipeline */}
        <div className="mt-5 rounded-lg border border-white/6 bg-white/[0.015] p-3.5">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-500">
            Workflow Pipeline
          </p>
          <div className="relative mt-3 flex items-center justify-between overflow-x-auto">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/8" />
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage} className="relative z-10 flex flex-col items-center gap-1.5 px-1">
                <motion.span
                  className="h-2 w-2 rounded-full bg-signal-500"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.35,
                    ease: "easeInOut",
                  }}
                />
                <span className="whitespace-nowrap font-mono text-[7.5px] uppercase tracking-[0.05em] text-ink-500">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
