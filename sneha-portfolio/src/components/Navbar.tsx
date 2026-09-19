"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBuildMode } from "./BuildModeContext";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { buildMode, toggleBuildMode } = useBuildMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-panel-strong border-b" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-16"
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-wide text-ink-50"
        >
          SNEHA
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-ink-50 focus-visible:text-ink-50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleBuildMode}
            aria-pressed={buildMode}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300 transition-colors hover:border-signal-500/50 hover:text-ink-50"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${buildMode ? "bg-signal-500" : "bg-ink-700"}`}
            />
            Build Mode
          </button>

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300">
            <motion.span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-signal-500"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>Building</span>
          </div>
        </div>
      </nav>

      {/* mobile nav */}
      <div className="md:hidden border-t border-white/5 overflow-x-auto no-scrollbar">
        <ul className="flex items-center gap-6 px-5 h-11 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300 whitespace-nowrap">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-ink-50">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
