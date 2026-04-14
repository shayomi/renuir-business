# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About the Project

Renuir is a lost-and-found platform connecting individuals who lost items with verified venues, smart matching, and secure returns. This repo is the public-facing marketing/product web app serving three audiences: individuals, businesses (hotels, airports, restaurants), and developers.

## Commands

All commands run from the project root (`/Users/sayoadegoroye/Desktop/renuir-product-web`):

```bash
pnpm dev        # start dev server at localhost:3000
pnpm build      # production build
pnpm lint       # run ESLint
npx tsc --noEmit  # type-check only (no test framework is configured)
```

Use `pnpm`, not `npm` or `yarn`. To add a new shadcn/ui component:

```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

**Next.js 16 App Router** with React 19 and TypeScript strict mode.

### Route structure

```
app/
├── page.tsx              # Home (/)
├── layout.tsx            # Root layout (Nav + Footer)
├── globals.css           # Tailwind v4 theme — ALL design tokens live here
└── (others)/             # Route group for non-home pages
    ├── about-us/
    ├── developer/
    ├── individual/
    └── solutions/
```

### Component organization

```
components/
├── home/         # Home page section components
├── about/        # About page components
├── solutions/    # Solutions page components
├── indiviuals/   # Individual page components  (note: intentional typo in dirname)
├── developer/    # Developer page components
├── shared/       # Nav, Footer, MobileNav — app-wide
├── data/         # Static typed content arrays (*.ts files)
└── ui/           # shadcn/ui primitives
```

Static page content lives exclusively in `components/data/*.ts` as exported typed constants — not inline in components.

### Page composition pattern

Every page uses a `SECTIONS` array mapped to `<section>` elements:

```tsx
const SECTIONS = [
  { Component: HomeHero, className: "" },
  { Component: HowItWorks, className: "mt-12" },
];

export default function Page() {
  return (
    <main>
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
```

## Key Conventions

### TypeScript

- Strict mode — never use `any`
- `interface` for reusable prop types; inline types for simple private sub-components
- `@/*` alias maps to project root — use for cross-directory imports, relative imports within same directory

### Components

- Server components by default — only add `"use client"` for state, effects, or browser APIs
- PascalCase filenames (`HomeHero.tsx`)
- Named exports for page-section components; default exports for shared/layout components

### Styling (Tailwind v4)

- **No `tailwind.config.js`** — all tokens defined in `app/globals.css` under `@theme inline { ... }` using `oklch()` values
- Use semantic tokens (`bg-primary`, `text-foreground`) not raw palette colors
- Use `.app-container` for page-width layout: `max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12`
- Use `cn()` from `@/lib/utils` for conditional classes

### Forms

`react-hook-form` + `@hookform/resolvers/zod` + Zod schema colocated in the form component file.

### Images

Use `next/image` (`<Image>`) with explicit `width`/`height` or `fill`. Assets live in `public/images/`.

### Code style (no Prettier)

Semicolons, single quotes in TS/JS, double quotes in JSX attributes, 2-space indent, trailing commas in multi-line objects/arrays.

---

## Legion — AI Agent System

This project is integrated with **Legion**, a multi-agent AI system built on Claude. Legion brings 17 specialised agents into every session — architecture, security, QA, product, data, compliance, and more. Each agent has 20 years of domain expertise.

### The agents

| Codename  | Role                | Owns                                                            |
| --------- | ------------------- | --------------------------------------------------------------- |
| TITAN     | CTO                 | Architecture decisions, tech strategy, final technical sign-off |
| PRISM     | Frontend Engineer   | UI/UX, components, performance, accessibility                   |
| FORGE     | Backend Engineer    | APIs, business logic, data models, integrations                 |
| STRATUS   | Cloud Engineer      | Infrastructure, scalability, cost                               |
| CONDUIT   | DevOps Engineer     | CI/CD, deployment, monitoring                                   |
| CIPHER    | Cyber Security      | Threat modelling, audits, compliance                            |
| AEGIS     | QA Engineer         | Test strategy, quality gates, coverage                          |
| PROBE     | Tester              | Exploratory testing, edge cases, UX validation                  |
| LENS      | Code Reviewer       | Standards, patterns, technical debt                             |
| NEXUS     | Data Engineer       | Pipelines, ETL, analytics                                       |
| COMPASS   | Product Manager     | Roadmap, PRDs, prioritisation                                   |
| BLUEPRINT | Solutions Architect | Client-facing design, proposals                                 |
| SHIELD    | Legal/Compliance    | Contracts, GDPR, regulatory                                     |
| ORBIT     | Project Manager     | Sprints, delivery, blockers                                     |
| ORACLE    | Intel Agent         | Market research, competitive analysis                           |
| SIGNAL    | Analyst             | Metrics, dashboards, KPIs                                       |
| MEMORY    | Knowledge Agent     | Second brain, Obsidian, daily logs                              |

### Legion folder structure in this project

```
.legion/                    # Generated by `legion scan` — do not edit manually
├── BRIEF.md                # Master project brief — read this for full context
├── scan.json               # Full scan data (stack, security findings, structure)
└── briefs/
    ├── cto.md              # TITAN — architecture and stack assessment
    ├── cyber.md            # CIPHER — security findings and recommendations
    ├── frontend.md         # PRISM — UI/component assessment
    ├── backend.md          # FORGE — API and data layer assessment
    ├── devops.md           # CONDUIT — infrastructure and CI/CD gaps
    ├── qa.md               # AEGIS — testing gaps and quality assessment
    └── knowledge.md        # MEMORY — documentation health
```

**Always read `.legion/BRIEF.md` at the start of a session** for a full picture of the codebase. The agent briefs in `.legion/briefs/` contain role-specific assessments — read the relevant one before working in that domain.

### Legion memory (lives in the Legion system folder, not this repo)

```
legion/
├── specs/
│   ├── prd/                # Product requirements documents
│   ├── tech/               # Technical specifications
│   ├── architecture/       # Architecture docs and ADRs
│   └── test-plans/         # Test plans
├── brainstorm/sessions/    # All brainstorm session documents
├── build/
│   ├── backlog/            # Feature task lists (JSON, dependency-mapped)
│   ├── active/             # In-progress builds
│   └── completed/          # Shipped features with retrospectives
├── memory/
│   ├── daily-logs/         # Per-session activity logs
│   ├── agent-reports/      # Daily agent reports
│   └── second-brain/       # Notes and synthesised knowledge
└── clients/.vault/         # Client context (private)
```

### Claude Code slash commands

Legion slash commands are committed to `.claude/commands/` in this repo. They appear automatically in Claude Code — type `/legion` to see them.

| Command                        | When to use                                     | What it does                                                           |
| ------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------- |
| `/legion-scan`                 | First time on project, or after major changes   | Scans codebase, updates `.legion/` briefs                              |
| `/legion-brief`                | Start of every session                          | Reads `.legion/` context, introduces the team, asks what to build      |
| `/legion-standup`              | Morning                                         | Reads last daily log + backlog, tells you exactly what to work on      |
| `/legion-brainstorm <feature>` | Planning a new feature                          | Generates PRD, tech spec, architecture doc, test plan, 20-task backlog |
| `/legion-spec <feature>`       | When you know what to build and just need specs | Quick spec, filled in immediately, ready to implement                  |
| `/legion-review`               | Before finishing any piece of work              | LENS (code quality) + CIPHER (security) dual review                    |
| `/legion-log <message>`        | Any time                                        | Logs to Legion memory + Obsidian daily note                            |
| `/legion-daily`                | End of every session                            | Compiles daily report, syncs to Obsidian, stands down                  |

### Recommended session flow

```
Start:   /legion-brief              load context, meet the team
         /legion-standup            what to work on today

Plan:    /legion-brainstorm "..."   full spec pipeline for new features
         /legion-spec "..."         quick spec for smaller tasks

Build:   write code...

Review:  /legion-review             LENS + CIPHER sign off before done

End:     /legion-log "what we did"  log the session
         /legion-daily              daily report + Obsidian sync
```

### Terminal commands (from any directory)

```bash
legion scan                          # scan current project, update .legion/
legion brainstorm "Add dark mode"    # full spec suite
legion memory log "Fixed nav bug"    # log to memory
legion memory recall "auth patterns" # search Legion memory
legion memory sync                   # push everything to Obsidian
legion memory daily                  # generate daily report
legion agents                        # list all 17 agents
legion status                        # system overview
```

### How Legion and Claude Code work together

1. `legion scan` reads the codebase → writes `.legion/briefs/` → Claude Code reads those briefs
2. `legion brainstorm` generates specs in `legion/specs/` → Claude Code reads and implements them
3. Claude Code builds the feature → `/legion-review` reviews it → `/legion-log` records it
4. `/legion-daily` compiles everything → syncs to Obsidian for persistent memory

Claude Code should always check `.legion/BRIEF.md` before making architectural decisions. If it doesn't exist, run `/legion-scan` first.
