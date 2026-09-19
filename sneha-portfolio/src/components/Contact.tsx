"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

export default function Contact() {
  const buttons = [
    site.links.email && {
      label: "Email Me",
      href: `mailto:${site.links.email}`,
      icon: Mail,
    },
    site.links.linkedin && {
      label: "LinkedIn",
      href: site.links.linkedin,
      icon: Linkedin,
    },
    site.links.github && {
      label: "GitHub",
      href: site.links.github,
      icon: Github,
    },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Mail }[];

  return (
    <section id="contact" className="border-b border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
        >
          /contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 max-w-3xl text-balance font-display text-3xl leading-[1.05] text-ink-50 sm:text-5xl"
        >
          Have something interesting to build?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-md text-[16px] text-ink-300"
        >
          Let&apos;s talk about AI, products, data, automation, or interesting problems.
        </motion.p>

        {buttons.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            {buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-signal-500/50 hover:text-signal-500"
              >
                <btn.icon className="h-4 w-4" aria-hidden="true" />
                {btn.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        ) : (
          <p className="mt-9 font-mono text-[12px] text-ink-500">
            Add your email, LinkedIn and GitHub in src/config/site.ts to activate these buttons.
          </p>
        )}
      </div>
    </section>
  );
}
