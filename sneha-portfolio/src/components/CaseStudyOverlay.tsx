"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Project } from "@/config/site";
import AIOperationsArchitecture from "./AIOperationsArchitecture";

export default function CaseStudyOverlay({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-[100] overflow-y-auto bg-base-950 thin-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-10 sm:py-16">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-300 hover:border-white/30 hover:text-ink-50"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Close
            </button>

            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
              {project.badge}
            </p>
            <h2
              id="case-study-title"
              className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-base text-ink-300">{project.subtitle}</p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-ink-500 hover:text-signal-500"
              >
                View repository
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            )}

            <div className="mt-10 space-y-10">
              {project.caseStudy.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-sm font-medium uppercase tracking-[0.06em] text-ink-50">
                    {section.heading}
                  </h3>
                  {section.body && (
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
                      {section.body}
                    </p>
                  )}
                  {section.list && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/8 px-3 py-1 font-mono text-[11px] text-ink-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.heading === "The system" && project.id === "ai-ops-hub" && (
                    <div className="mt-5">
                      <AIOperationsArchitecture />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
