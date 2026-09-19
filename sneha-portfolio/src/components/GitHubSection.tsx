"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ArrowUpRight, Github } from "lucide-react";
import { site } from "@/config/site";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${site.githubUsername}/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled && Array.isArray(data)) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500"
            >
              /open-source
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 font-display text-3xl text-ink-50 sm:text-4xl"
            >
              Open source / code
            </motion.h2>
          </div>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-ink-100 transition-colors hover:border-white/30"
          >
            <Github className="h-4 w-4" aria-hidden="true" />@{site.githubUsername}
          </a>
        </div>

        {!failed && !repos && (
          <p className="mt-10 font-mono text-[12px] text-ink-500">Loading repositories…</p>
        )}

        {failed && (
          <p className="mt-10 max-w-md text-[14px] text-ink-300">
            Repositories couldn&apos;t be loaded right now. Visit the profile directly to see
            everything currently public.
          </p>
        )}

        {repos && repos.length === 0 && (
          <p className="mt-10 text-[14px] text-ink-300">No public repositories yet.</p>
        )}

        {repos && repos.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-white/8 bg-white/[0.012] p-5 transition-colors hover:border-signal-500/30"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-sm font-medium text-ink-50">{repo.name}</p>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 shrink-0 text-ink-500 transition-colors group-hover:text-signal-500"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-500">
                  {repo.description ?? "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-ink-500">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-3 w-3" aria-hidden="true" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
