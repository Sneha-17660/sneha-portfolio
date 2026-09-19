"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

const PIPELINE = ["PROBLEM", "DATA", "AI", "DECISION", "AUTOMATION", "PRODUCT"];

const STATUS = [
  { label: "AI SYSTEMS", value: "ACTIVE" },
  { label: "DATA", value: "ACTIVE" },
  { label: "AUTOMATION", value: "ACTIVE" },
  { label: "PRODUCT", value: "ACTIVE" },
];

function ArchitectureBackdrop() {
  const reduce = useReducedMotion();
  const nodeGap = 64;
  const height = nodeGap * (PIPELINE.length - 1) + 40;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-40px] top-1/2 hidden -translate-y-1/2 lg:block"
    >
      <svg width="220" height={height} viewBox={`0 0 220 ${height}`} fill="none">
        <line
          x1="110"
          y1="20"
          x2="110"
          y2={height - 20}
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
        {!reduce && (
          <line
            x1="110"
            y1="20"
            x2="110"
            y2={height - 20}
            stroke="#7fb8a4"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="6 10"
            className="animate-flow"
          />
        )}
        {PIPELINE.map((label, i) => (
          <g key={label} transform={`translate(110 ${20 + i * nodeGap})`}>
            <circle r="4" fill="#08090a" stroke="#7fb8a4" strokeWidth="1.4" />
            <text
              x="14"
              y="4"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.08em"
              fill="rgba(236,234,228,0.55)"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <ArchitectureBackdrop />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-500"
        >
          AI / PRODUCT / DATA / AUTOMATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 font-display text-balance text-[13vw] leading-[0.95] tracking-tight text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.2rem]"
        >
          Building
          <br />
          intelligent systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg"
        >
          Engineering undergraduate at {site.institution} building AI-powered
          products, intelligent workflows and data-driven applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-medium text-base-950 transition-transform hover:-translate-y-0.5"
          >
            Explore My Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-white/30"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
          className="mt-14 max-w-sm rounded-2xl glass-panel p-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            System Status
          </p>
          <ul className="mt-3 space-y-2">
            {STATUS.map((s) => (
              <li
                key={s.label}
                className="flex items-center justify-between font-mono text-[11px] tracking-[0.05em] text-ink-300"
              >
                <span>{s.label}</span>
                <span className="inline-flex items-center gap-1.5 text-signal-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-500" />
                  {s.value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
