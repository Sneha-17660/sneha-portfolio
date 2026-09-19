# Sneha — AI · Data · Product · Automation

A production-ready personal portfolio built as a personal AI product studio: a dark, technical,
SaaS-grade site showcasing AI, data, product and automation work rather than a traditional resume
page.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

> **Note:** the display/body/mono fonts are loaded from Google Fonts at build time via
> `next/font/google`, so the machine running `npm run build` / `npm run dev` needs normal internet
> access the first time (fonts are then cached locally by Next.js).

## Editing your content

Almost everything you'll want to change lives in one file:

```
src/config/site.ts
```

That includes:

- Your name, institution, program, graduation year
- Contact links — `links.email`, `links.linkedin`, `links.github`. Leave any of them as an empty
  string `""` to hide that button in the Contact section and Footer.
- Your GitHub username (`githubUsername`) — the Open Source section fetches your public
  repositories live from the GitHub API at runtime, so it updates automatically as you publish
  new repos. No stats are hardcoded.
- The three project entries (`projects`), each with its badge, title, description, tech stack,
  optional GitHub link, and the full case-study content shown in the full-screen overlay.
- Experience entries (`experience`), the stack categories (`stack`) and the tech → project
  mapping used by the hover-highlight interaction on the Stack section (`stackToProjects`).
- The "How I Build" process steps (`buildProcess`) and the Build Log timeline (`buildLog`).

SEO title/description also live in `site.seo` inside the same file, and are wired into
`src/app/layout.tsx`'s metadata (Open Graph + Twitter card included).

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, skip link, BuildModeProvider
    page.tsx           # composes every section in order
    globals.css         # base styles, grid background, glass panels, reduced-motion handling
  components/
    Navbar.tsx                    # sticky, blurs on scroll, Build Mode toggle, status pill
    Hero.tsx                      # headline, CTAs, system status card, animated pipeline
    SystemProfile.tsx             # resume-as-system-panel
    Work.tsx                      # assembles the 3-project hierarchy + case study trigger
    AIOperationsHubDashboard.tsx  # flagship product preview (sidebar + overview + pipeline)
    AIOperationsModules.tsx       # flagship module cards
    AIOperationsExamples.tsx      # flagship "how it's used" example cards
    AIOperationsArchitecture.tsx  # flagship architecture diagram (reused in case study)
    CapaIQPreview.tsx             # second-flagship dashboard mockup
    RagBIPreview.tsx              # supporting-project chat-style preview
    CaseStudyOverlay.tsx          # full-screen case study modal for all 3 projects
    Experience.tsx                # IBM / Proso AI
    Stack.tsx                     # interactive tech ecosystem with hover highlighting
    HowIBuild.tsx                 # interactive 6-step process selector
    BuildLog.tsx                  # changelog-style timeline
    About.tsx
    GitHubSection.tsx             # live GitHub repo fetch with graceful fallback
    Contact.tsx
    Footer.tsx
    SystemScan.tsx                # floating "Run System Scan" easter egg
    BuildModeContext.tsx          # Build Mode on/off state
    BuildModeFrame.tsx            # per-section boundary/label overlay for Build Mode
    BuildModeOverlay.tsx          # global grid + metadata readout for Build Mode
  config/
    site.ts             # all editable content — see above
```

## Design notes

- Near-black background, off-white type, a single restrained sage accent, glass panels, a subtle
  background grid, and monospace metadata labels throughout — no stock photography, gradients,
  gears, or fabricated statistics.
- Dashboard/product previews are clearly labeled as UI concepts/mockups, never presented as real
  screenshots.
- Reduced-motion is respected globally (`prefers-reduced-motion`), focus states are visible for
  keyboard users, and the skip-to-content link is included in the layout.
- "Build Mode" (toggle in the navbar) overlays a grid, component boundaries and technical labels
  across the page — a playful nod to the "systems" framing without cluttering default mode.

## Deployment

This is a standard Next.js app and deploys anywhere Next.js is supported:

**Vercel (simplest):**
1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset "Next.js" is auto-detected — no config needed.

**Any Node host:**

```bash
npm run build
npm run start
```

**Static export:** if you prefer a fully static export, note that the GitHub section fetches data
client-side (so it still works from a static export) — no server-only APIs are used, so
`next export`-style static hosting works if you configure `output: "export"` in
`next.config.js`.

## Known audit notes

`npm install` may report vulnerabilities from `npm audit` originating in the Next.js/ESLint
toolchain's transitive dependencies (mostly relevant to self-hosted servers using middleware,
image optimization remote patterns, or Server Actions — none of which this static-content site
uses). Run `npm audit` and update `next` periodically; this project pins a patched `14.2.x`
release as of building.
