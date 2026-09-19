"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBuildMode } from "./BuildModeContext";

export default function BuildModeFrame({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const { buildMode } = useBuildMode();

  return (
    <div className="relative">
      <AnimatePresence>
        {buildMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30"
          >
            <div className="absolute inset-2 rounded-lg border border-dashed border-signal-500/30 sm:inset-3" />
            <span className="build-mode-label absolute left-4 top-4 rounded-full border border-signal-500/30 bg-base-950/90 px-2 py-1 sm:left-5 sm:top-5">
              &lt;{label}/&gt;
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
