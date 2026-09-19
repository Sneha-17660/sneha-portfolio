"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBuildMode } from "./BuildModeContext";

export default function BuildModeOverlay() {
  const { buildMode } = useBuildMode();
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!buildMode) return;
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [buildMode]);

  return (
    <AnimatePresence>
      {buildMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-30"
        >
          <div className="absolute inset-0 bg-grid-fade opacity-70" />
          <div className="fixed bottom-5 left-5 hidden rounded-lg border border-signal-500/25 bg-base-950/90 px-3 py-2 backdrop-blur sm:block">
            <p className="build-mode-label">BUILD MODE — INSPECT</p>
            <p className="build-mode-label mt-1 text-ink-500">
              VIEWPORT {viewport.w}×{viewport.h}
            </p>
            <p className="build-mode-label text-ink-500">RENDER: NEXT.JS / APP ROUTER</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
