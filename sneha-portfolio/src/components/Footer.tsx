import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/site";

export default function Footer() {
  const links = [
    site.links.github && { label: "GitHub", href: site.links.github, icon: Github },
    site.links.linkedin && { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
    site.links.email && { label: "Email", href: `mailto:${site.links.email}`, icon: Mail },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Github }[];

  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold tracking-wide text-ink-50">SNEHA</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
            AI · Data · Product · Automation
          </p>
          <p className="mt-2 text-[12px] text-ink-700">Built with curiosity.</p>
        </div>

        {links.length > 0 && (
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500 hover:text-ink-100"
              >
                <link.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
