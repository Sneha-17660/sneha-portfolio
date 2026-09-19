"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScanLine, Check, X } from "lucide-react";

const CHECKS = ["AI Systems", "Data", "Product", "Automation", "Software"];
const STEP_DELAY = 260;

export default function SystemScan() {
  const [status, setStatus] = useState<"idle" | "scanning" | "done">("idle");
  const [checked, setChecked] = useState<number>(0);

  const runScan = () => {
    if (status === "scanning") return;
    setStatus("scanning");
    setChecked(0);

    CHECKS.forEach((_, i) => {
      setTimeout(() => {
        setChecked(i + 1);
        if (i === CHECKS.length - 1) {
          setTimeout(() => setStatus("done"), STEP_DELAY);
        }
      }, STEP_DELAY * (i + 1));
    });
  };

  const reset = () => {
    setStatus("idle");
    setChecked(0);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7">
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.button
            key="trigger"
            type="button"
            onClick={runScan}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-base-900/90 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-100 shadow-lg shadow-black/40 backdrop-blur transition-colors hover:border-signal-500/50"
          >
            <ScanLine className="h-3.5 w-3.5 text-signal-500" aria-hidden="true" />
            Run System Scan
          </motion.button>
        )}

        {(status === "scanning" || status === "done") && (
          <motion.div
            key="panel"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="w-64 rounded-2xl border border-white/10 bg-base-900/95 p-4 shadow-xl shadow-black/50 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                {status === "scanning" ? "Scanning…" : "Scan complete"}
              </p>
              <button
                type="button"
                onClick={reset}
                aria-label="Close system scan"
                className="text-ink-500 hover:text-ink-100"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-3 space-y-1.5">
              {CHECKS.map((label, i) => (
                <li
                  key={label}
                  className="flex items-center justify-between font-mono text-[11px] text-ink-300"
                >
                  <span>{label.toUpperCase()}</span>
                  {i < checked ? (
                    <Check className="h-3.5 w-3.5 text-signal-500" aria-hidden="true" />
                  ) : (
                    <span className="h-3.5 w-3.5" />
                  )}
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {status === "done" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 border-t border-white/8 pt-3"
                >
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-500">
                    System intersection detected
                  </p>
                  <p className="mt-1.5 font-mono text-[11.5px] text-signal-500">
                    AI × Data × Product × Automation
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
