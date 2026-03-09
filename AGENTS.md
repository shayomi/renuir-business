# AGENTS.md — Renuir Product Web

This file provides guidance for agentic coding agents operating in this repository.

## Repository Layout

The actual project root is `renuir-business/`. All commands below must be run from there.

```
renuir-product-web/
└── renuir-business/          ← project root
    ├── app/                  ← Next.js App Router pages & layouts
    │   └── (others)/         ← route group for non-home pages
    ├── components/
    │   ├── about/            ← about-us page components
    │   ├── data/             ← static content arrays (typed .ts files)
    │   ├── home/             ← home page section components
    │   ├── shared/           ← app-wide shared components (nav, footer, animation)
    │   └── ui/               ← shadcn/ui primitives
    ├── lib/
    │   └── utils.ts          ← cn() helper (clsx + tailwind-merge)
    ├── public/images/        ← image assets
    └── types/
        └── global.d.ts       ← ambient module declarations
```

---

## Build, Lint & Dev Commands

All commands run from `renuir-business/`.

| Purpose                 | Command      |
| ----------------------- | ------------ |
| Start dev server        | `pnpm dev`   |
| Production build        | `pnpm build` |
| Start production server | `pnpm start` |
| Lint                    | `pnpm lint`  |

**No test framework is configured.** Do not add test files unless the team explicitly introduces a testing stack.

To type-check without emitting:

```bash
npx tsc --noEmit
```

---

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config in `app/globals.css`) + shadcn/ui (new-york style)
- **Forms**: react-hook-form + Zod
- **Icons**: lucide-react
- **Component variants**: class-variance-authority (CVA)
- **Package manager**: pnpm (use `pnpm`, not `npm` or `yarn`)

---

## TypeScript

- Strict mode is enabled (`"strict": true`). Never use `any` unless absolutely unavoidable.
- Prefer `interface` for reusable component prop types; inline type annotations are acceptable for simple private sub-components.
- Path alias `@/*` maps to the project root. Use it for cross-directory imports.
- `noEmit: true` — the compiler is used for type-checking only; Next.js handles transpilation.

```ts
// Good — reusable component
interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

// Good — simple private sub-component inline type
function Step({ iconSrc, title, description }: { iconSrc: string; title: string; description: string }) { ... }
```

---

## Import Conventions

- Use **`@/` absolute imports** for cross-directory imports.
- Use **relative imports** for files within the same feature directory.
- Maintain this convention consistently — do not mix styles within a single file.

```ts
// Cross-directory — use @/
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/components/data/menuItems";

// Same directory — use relative
import TeamCard from "./TeamCard";
import { team } from "../data/team";
```

---

## Code Style & Formatting

No Prettier is configured. Follow the conventions already established in the codebase:

- **Semicolons**: Use semicolons at the end of statements (the majority of files do so).
- **Quotes**: Single quotes for strings in TypeScript/JS; double quotes inside JSX attributes.
- **Indentation**: 2 spaces.
- **Trailing commas**: Use trailing commas in multi-line objects and arrays.
- **Line length**: Keep lines reasonably short; no hard limit is enforced.
- When in doubt, match the style of the file you are editing.

---

## Naming Conventions

| Entity                      | Convention | Example                               |
| --------------------------- | ---------- | ------------------------------------- |
| Component files             | PascalCase | `TeamCard.tsx`, `HomeHero.tsx`        |
| Component functions         | PascalCase | `export function HomeHero()`          |
| Data files                  | camelCase  | `homefeatures.ts`, `menuItems.ts`     |
| Utility/helper files        | camelCase  | `utils.ts`                            |
| CSS custom utilities        | kebab-case | `.app-container`, `.animate-slide-up` |
| TypeScript types/interfaces | PascalCase | `TeamCardProps`, `FAQItem`            |
| Variables and functions     | camelCase  | `menuItems`, `handleSubmit`           |

---

## Component Patterns

### Export style

- **Named exports** for page-section components (most of `home/` and `about/`).
- **Default exports** for shared/layout components (`Nav`, `Footer`, `MobileNav`).
- Be consistent within a directory — check existing files before choosing.

### "use client" directive

Only add `"use client"` when a component requires:

- React state or effects (`useState`, `useEffect`, etc.)
- Browser APIs
- Event handlers that cannot be passed as Server Component props

Server components are the default. Do not add `"use client"` unnecessarily.

### Page composition pattern

Pages use a `SECTIONS` constant array and map over it:

```tsx
const SECTIONS = [
  { Component: HomeHero, className: "" },
  { Component: HowItWorks, className: "bg-muted" },
];

export default function Page() {
  return (
    <main>
      {SECTIONS.map(({ Component, className }, i) => (
        <Component key={i} className={className} />
      ))}
    </main>
  );
}
```

### Layout container

Use the `.app-container` utility class for consistent page-width layout:

```tsx
<div className="app-container"> ... </div>
// Equivalent to: max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12
```

---

## Styling (Tailwind v4)

- **No `tailwind.config.js/ts`** — all theme tokens are defined in `app/globals.css` under `@theme inline { ... }`.
- Use semantic color tokens (`bg-primary`, `text-foreground`, `bg-card`, etc.) rather than raw palette colors.
- Use `oklch()` color values when extending the theme in `globals.css`.
- Use the `cn()` helper from `@/lib/utils` for conditional/merged class names:

```ts
import { cn } from "@/lib/utils";
<div className={cn("base-class", isActive && "active-class", className)} />
```

- New shadcn/ui components must be added via the CLI:
  ```bash
  pnpm dlx shadcn@latest add <component>
  ```

---

## Static Data

All static page content lives in `components/data/*.ts` as exported typed constants. Colocate type definitions in the same data file when the type is only used there.

```ts
// components/data/team.ts
export type TeamMember = { name: string; role: string; image: string; linkedin?: string; };
export const team: TeamMember[] = [ ... ];
```

---

## Forms & Validation

Use `react-hook-form` with `@hookform/resolvers/zod` and a Zod schema. Keep the schema colocated with the form component.

```ts
const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
});
```

---

## Images

- Prefer `next/image` (`<Image>`) for all images. Provide explicit `width`/`height`, or use `fill` with a positioned parent and `object-cover`.
- Avoid plain `<img>` tags. If you must use one, add the ESLint suppression comment:
  ```tsx
  {
    /* eslint-disable-next-line @next/next/no-img-element */
  }
  ```
- Image assets live in `public/images/`.

---

## Error Handling

- No error boundaries or `error.tsx` files exist yet. Add `error.tsx` alongside `page.tsx` when a route has meaningful async operations.
- Validate all external/user input with Zod at the boundary.
- Do not silently swallow errors — either propagate them or display user-facing feedback.

# Agents

## What is Renuir?

Renuir is a lost & found platform. It connects people who lost items with
possible finders, and lets hotels, businesses, and institutions plug in via
API when someone forgets an item at their establishment.

## Before Starting Any Task

Always read the following files first:

1. `.legion/context/README.md`
2. `.legion/context/goals.md`
3. `.legion/context/priorities.md`
4. The relevant spec in `.legion/context/specs/` if one exists

## Stack

- **Framework:** Next.js 15 (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Package manager:** pnpm
- **Web apps:** `renuir-product-web` (public), `renuir-business` (partner dashboard)

## Audiences

- **Individuals** — lost something or found something
- **Businesses** — hotels, airports, restaurants integrating via API or dashboard
- **Developers** — building on top of the Renuir API

## Conventions

- Components go in `components/<section>/` (e.g. `components/individuals/`)
- Use server components by default; opt into `"use client"` only when needed
- Name component files PascalCase (e.g. `IndividualHero.tsx`)
- Each new feature gets a numbered spec folder in `.legion/context/specs/`
- Keep `decisions.md` updated when making architectural choices

## Tone & Copy Guidelines

- Warm, trustworthy, human — people are stressed when they've lost something
- For business pages: professional, efficiency-focused, integration-forward
- For developer pages: clear, direct, technical but not cold
