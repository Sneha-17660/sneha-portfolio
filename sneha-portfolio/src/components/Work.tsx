"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github } from "lucide-react";
import { projects, Project } from "@/config/site";
import AIOperationsHubDashboard from "./AIOperationsHubDashboard";
import AIOperationsModules from "./AIOperationsModules";
import AIOperationsExamples from "./AIOperationsExamples";
import AIOperationsArchitecture from "./AIOperationsArchitecture";
import CapaIQPreview from "./CapaIQPreview";
import RagBIPreview from "./RagBIPreview";
import CaseStudyOverlay from "./CaseStudyOverlay";

function TechRow({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/8 px-3 py-1 font-mono text-[11px] text-ink-300"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function AiOpsHub({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-9 lg:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
            {project.badge}
          </p>
          <h3 className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-ink-300 sm:text-lg">{project.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-medium text-base-950 transition-transform hover:-translate-y-0.5"
        >
          Explore AI Operations Hub
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-9">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
            Product preview
          </p>
          <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.06em] text-ink-500">
            UI Concept
          </span>
        </div>
        <AIOperationsHubDashboard />
      </div>

      <div className="mt-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
          Modules
        </p>
        <AIOperationsModules />
      </div>

      <div className="mt-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
          How it&apos;s used
        </p>
        <AIOperationsExamples />
      </div>

      <div className="mt-10">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
          Architecture
        </p>
        <AIOperationsArchitecture />
      </div>

      <TechRow tech={project.tech} />
    </div>
  );
}

function CapaIq({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
        {project.badge}
      </p>
      <h3 className="mt-3 font-display text-2xl text-ink-50 sm:text-3xl">{project.title}</h3>
      <p className="mt-2 text-[15px] text-ink-300">{project.subtitle}</p>
      <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-7">
        <CapaIQPreview />
      </div>

      <TechRow tech={project.tech} />

      <div className="mt-6 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-100 hover:text-signal-500"
        >
          View Case Study
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-500 hover:text-ink-100"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            Repository
          </a>
        )}
      </div>
    </div>
  );
}

function RagBi({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
        {project.badge}
      </p>
      <h3 className="mt-3 font-display text-xl text-ink-50 sm:text-2xl">{project.title}</h3>
      <p className="mt-2 text-[14px] text-ink-300">{project.subtitle}</p>
      <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-6">
        <RagBIPreview />
      </div>

      <TechRow tech={project.tech} />

      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-100 hover:text-signal-500"
      >
        View Case Study
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const [aiOps, capa, rag] = projects;

  return (
    <section id="work" className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
        >
          What I&apos;ve built
        </motion.h2>
        <p className="mt-3 max-w-md text-[15px] text-ink-300">
          Turning real-world problems into intelligent systems.
        </p>

        <div className="mt-14 flex flex-col gap-8">
          <AiOpsHub project={aiOps} onOpen={() => setActive(aiOps)} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <CapaIq project={capa} onOpen={() => setActive(capa)} />
            </div>
            <div className="lg:col-span-2">
              <RagBi project={rag} onOpen={() => setActive(rag)} />
            </div>
          </div>
        </div>
      </div>

      <CaseStudyOverlay project={active} onClose={() => setActive(null)} />
    </section>
  );
}
