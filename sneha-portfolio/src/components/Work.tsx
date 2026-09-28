"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

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

/* =========================================================
   CLAIM ADJUDICATOR
   ========================================================= */

function ClaimAdjudicator({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const workflow = [
    {
      number: "01",
      title: "Document Upload",
      description: "Claims and supporting documents enter the workflow.",
    },
    {
      number: "02",
      title: "OCR + Extraction",
      description: "Relevant information is extracted from unstructured documents.",
    },
    {
      number: "03",
      title: "Evidence Validation",
      description: "Extracted information is checked against available evidence.",
    },
    {
      number: "04",
      title: "Policy Decision",
      description: "Coverage rules and claim conditions drive adjudication.",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-9 lg:p-10">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
            {project.badge}
          </p>

          <h3 className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-2 text-base text-ink-300 sm:text-lg">
            {project.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-medium text-base-950 transition-transform hover:-translate-y-0.5"
        >
          Explore Claim Adjudicator
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-300">
        {project.description}
      </p>

      {/* Workflow */}
      <div className="mt-9">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
            AI adjudication workflow
          </p>

          <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.06em] text-ink-500">
            System Flow
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/8 bg-black/20 p-5 transition-colors hover:border-white/15"
            >
              <p className="font-mono text-[10px] text-signal-500">
                {step.number}
              </p>

              <p className="mt-3 text-sm font-medium text-ink-100">
                {step.title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decision Flow */}
      <div className="mt-9 rounded-2xl border border-white/8 bg-black/20 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em]">
          <span className="rounded-full border border-white/10 px-3 py-1.5 text-ink-300">
            Claim
          </span>

          <ArrowRight
            className="h-3.5 w-3.5 text-ink-500"
            aria-hidden="true"
          />

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-ink-300">
            AI Extraction
          </span>

          <ArrowRight
            className="h-3.5 w-3.5 text-ink-500"
            aria-hidden="true"
          />

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-ink-300">
            Evidence
          </span>

          <ArrowRight
            className="h-3.5 w-3.5 text-ink-500"
            aria-hidden="true"
          />

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-ink-300">
            Policy Rules
          </span>

          <ArrowRight
            className="h-3.5 w-3.5 text-ink-500"
            aria-hidden="true"
          />

          <span className="rounded-full border border-signal-500/30 px-3 py-1.5 text-signal-500">
            Decision
          </span>
        </div>
      </div>

      {/* Technology */}
      <TechRow tech={project.tech} />

      {/* Actions */}
      <div className="mt-7 flex flex-wrap items-center gap-5">
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

/* =========================================================
   AI OPERATIONS HUB
   ========================================================= */

function AiOpsHub({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
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

          <p className="mt-2 text-base text-ink-300 sm:text-lg">
            {project.subtitle}
          </p>
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

/* =========================================================
   CAPA IQ
   ========================================================= */

function CapaIq({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
        {project.badge}
      </p>

      <h3 className="mt-3 font-display text-2xl text-ink-50 sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-2 text-[15px] text-ink-300">
        {project.subtitle}
      </p>

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

/* =========================================================
   RAG BI
   ========================================================= */

function RagBi({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.012] p-6 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-500">
        {project.badge}
      </p>

      <h3 className="mt-3 font-display text-xl text-ink-50 sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-2 text-[14px] text-ink-300">
        {project.subtitle}
      </p>

      <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-ink-300">
        {project.description}
      </p>

      <div className="mt-6">
        <RagBIPreview />
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

/* =========================================================
   WORK SECTION
   ========================================================= */

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  /*
   * IMPORTANT:
   * site.ts must have projects in this order:
   *
   * 1. Claim Adjudicator
   * 2. AI Operations Hub
   * 3. CAPA IQ
   * 4. RAG BI
   */
  const [claim, aiOps, capa, rag] = projects;

  return (
    <section
      id="work"
      className="border-b border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /work
        </motion.p>

        {/* Section heading */}
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

        {/* Projects */}
        <div className="mt-14 flex flex-col gap-8">
          {/* PROJECT 01 — CLAIM ADJUDICATOR */}
          <ClaimAdjudicator
            project={claim}
            onOpen={() => setActive(claim)}
          />

          {/* PROJECT 02 — AI OPERATIONS HUB */}
          <AiOpsHub
            project={aiOps}
            onOpen={() => setActive(aiOps)}
          />

          {/* PROJECT 03 + 04 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <CapaIq
                project={capa}
                onOpen={() => setActive(capa)}
              />
            </div>

            <div className="lg:col-span-2">
              <RagBi
                project={rag}
                onOpen={() => setActive(rag)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case study modal */}
      <CaseStudyOverlay
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}