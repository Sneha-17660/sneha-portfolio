"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

const FIELDS = [
  { key: "NAME", value: site.name },
  { key: "INSTITUTION", value: site.institution },
  { key: "PROGRAM", value: site.program },
  { key: "GRADUATION", value: site.graduation },
  { key: "FOCUS", value: "AI · Data · Product · Automation" },
  { key: "CURRENT MODE", value: "Building" },
];

export default function SystemProfile() {
  return (
    <section className="border-b border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /profile
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          System Profile
        </motion.h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/8">
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.02] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 font-mono text-[11px] text-ink-500">profile.sys</span>
          </div>

          <dl className="divide-y divide-white/6">
            {FIELDS.map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="grid grid-cols-[minmax(120px,1fr)_2fr] gap-4 px-5 py-4 sm:grid-cols-[200px_1fr]"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500">
                  {field.key}
                </dt>
                <dd className="text-sm text-ink-100 sm:text-base">{field.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
