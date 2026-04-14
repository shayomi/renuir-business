# Renuir Business

The public-facing web platform for **Renuir** — a modern lost-and-found system that connects people who have lost items with verified venues, smart matching, and secure returns.

## What is Renuir?

Renuir replaces the chaos of traditional lost-and-found with an intelligent, auditable recovery platform. We serve three audiences:

- **Individuals** — People who lost something and need help finding it
- **Businesses** — Hotels, airports, restaurants, and institutions managing found items
- **Developers** — Teams building integrations via the Renuir API

## Tech Stack

| Category        | Technology                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org) (App Router)                                   |
| Language        | TypeScript 5 (strict mode)                                                      |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Animations      | [Framer Motion](https://www.framer.com/motion/)                                 |
| Forms           | react-hook-form + Zod                                                           |
| Icons           | [Lucide React](https://lucide.dev)                                              |
| Package Manager | pnpm                                                                            |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/renuir-product-web.git
cd renuir-product-web/renuir-business

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

| Command      | Description                              |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Start development server with hot reload |
| `pnpm build` | Create optimized production build        |
| `pnpm start` | Run production server                    |
| `pnpm lint`  | Run ESLint                               |

## Project Structure

```
renuir-business/
├── app/                      # Next.js App Router
│   ├── (others)/             # Route group for non-home pages
│   │   ├── about-us/
│   │   ├── developer/
│   │   ├── individual/
│   │   └── solutions/
│   ├── globals.css           # Tailwind theme config
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── about/                # About page components
│   ├── data/                 # Static content (typed .ts files)
│   ├── developer/            # Developer page components
│   ├── home/                 # Home page sections
│   ├── indiviuals/           # Individual page components
│   ├── shared/               # Shared components (nav, footer)
│   ├── solutions/            # Solutions page components
│   └── ui/                   # shadcn/ui primitives
├── lib/
│   ├── animations.ts         # Framer Motion variants
│   └── utils.ts              # Utility functions (cn helper)
├── public/images/            # Static assets
└── types/                    # TypeScript declarations
```

## Key Features

- **Responsive Design** — Mobile-first approach with adaptive layouts
- **Smooth Animations** — Scroll-triggered animations using Framer Motion
- **Accessible** — Semantic HTML and keyboard navigation support
- **Type-Safe** — Full TypeScript coverage with strict mode
- **Component Library** — Built on shadcn/ui for consistent UI patterns

## Pages

| Route         | Description                                               |
| ------------- | --------------------------------------------------------- |
| `/`           | Home — Platform overview and value proposition            |
| `/about-us`   | About — Team, mission, and contact form                   |
| `/solutions`  | Business Solutions — Enterprise features and testimonials |
| `/individual` | For Individuals — Consumer app features                   |
| `/developer`  | Developer Hub — API documentation preview                 |

## Development Guidelines

### Component Conventions

- Place components in `components/<section>/`
- Use **server components** by default
- Add `"use client"` only when needed (state, effects, browser APIs)
- Name files with **PascalCase** (e.g., `HomeHero.tsx`)

### Styling

- Use Tailwind utility classes
- Theme tokens defined in `app/globals.css`
- Use `cn()` helper for conditional classes:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />;
```

### Imports

- Use `@/` alias for cross-directory imports
- Use relative imports within the same directory

```tsx
// Cross-directory
import { Button } from "@/components/ui/button";

// Same directory
import { TeamCard } from "./TeamCard";
```

## Animation System

Animations are centralized in `lib/animations.ts`. Use the `AnimateIn` wrapper for scroll-triggered effects:

```tsx
import AnimateIn from "@/components/ui/AnimateIn";

<AnimateIn delay={0.1}>
  <YourComponent />
</AnimateIn>;
```

## Legion — AI Agent System

This project uses **Legion**, an AI agent system built on Claude, to assist with development. Legion brings a full team of specialised agents — architecture, security, QA, product, and more — into every session.

### Setup

Install Legion once on your machine:

```bash
git clone https://github.com/your-org/legion.git
cd legion
npm install
chmod +x bin/legion
npm link
```

### Using Legion in this project

Legion slash commands are committed to this repo in `.claude/commands/`. They are available automatically when you open this project in Claude Code — just type `/legion` to see them.

| Command                        | What it does                                          |
| ------------------------------ | ----------------------------------------------------- |
| `/legion-scan`                 | Scans the codebase and briefs all agents              |
| `/legion-brief`                | Loads Legion context at the start of a session        |
| `/legion-standup`              | Morning briefing — what to work on today              |
| `/legion-brainstorm <feature>` | Generates PRD, tech spec, architecture doc, test plan |
| `/legion-spec <feature>`       | Quick spec, filled in and ready to build              |
| `/legion-review`               | Code review by LENS (quality) + CIPHER (security)     |
| `/legion-log <message>`        | Log activity to Legion memory                         |
| `/legion-daily`                | End-of-session wrap up and Obsidian sync              |

### Recommended session flow

```bash
# Start of session
/legion-brief       # load project context
/legion-standup     # see what to work on

# Building a feature
/legion-brainstorm Add dark mode toggle
/legion-review      # before marking anything done

# End of session
/legion-log "Built the dark mode toggle"
/legion-daily       # daily report + memory sync
```

### From the terminal

```bash
legion scan                              # scan from any project directory
legion brainstorm "your feature here"    # full spec pipeline
legion memory log "Fixed nav bug"        # log to memory
legion memory sync                       # sync to Obsidian
```

## Contributing

1. Read `.legion/context/goals.md` and `priorities.md` before starting
2. Check `.legion/specs/` for existing feature specs
3. Follow the conventions in `AGENTS.md`
4. Update `technical-debt.md` if taking shortcuts

## License

Proprietary — All rights reserved by Renuir UG.

---

Built with care in Berlin.
