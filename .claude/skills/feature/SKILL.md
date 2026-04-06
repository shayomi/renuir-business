---
name: feature
description: >
  Use this skill whenever a team member wants to start a new feature. Reads all
  project context silently, asks targeted discovery questions one at a time, writes
  a completed spec file in .legion/context/specs/, and optionally scaffolds the
  initial component files following Renuir conventions.
risk: low
source: local
---

# New Feature Intake

A team member has invoked `/new` and wants to start building a feature for Renuir. Follow the phases below exactly.

---

## Phase 1 — Load Context (silent, no output to user)

Before saying anything, read ALL of the following files:

1. `AGENTS.md` — conventions, stack, naming rules, component patterns
2. `.legion/context/README.md` — what Renuir is and who it serves
3. `.legion/context/goals.md` — current OKRs and Q1-Q2 2026 targets
4. `.legion/context/priorities.md` — what the team is focused on right now
5. `.legion/context/projects.md` — active projects and their status
6. `.legion/context/decisions.md` — past architectural decisions (avoid re-litigating)
7. `.legion/context/constraints.md` — hard limits (legal, technical, budget)
8. `.legion/context/technical-debt.md` — known debt to be aware of
9. `.legion/context/specs/` directory listing — to determine the next spec number
10. `.legion/context/specs/templates/SPEC_TEMPLATE.md` — the spec format to use
11. `.legion/context/specs/templates/E2E_TEMPLATE.md` — the e2e format to use

Do not summarise what you read. Do not output anything yet. Proceed to Phase 2.

---

## Phase 2 — Discovery Questions

Greet the team member warmly and briefly (one sentence max). Then ask the questions below **one at a time** — wait for each answer before asking the next. Never dump all questions at once.

After each answer, briefly acknowledge it (one sentence). If the answer is vague or too broad, ask one focused follow-up before moving on. If the answer is clear, move on.

### Questions (in order)

**Q1.** What's the feature? Give me one sentence describing what it does.

**Q2.** Who is it for?
  - Individuals (lost something / found something)
  - Businesses (hotels, airports, restaurants — API or dashboard)
  - Developers (building on the Renuir API)
  - Internal team
  - More than one of the above?

**Q3.** What problem does it solve — or what gap does it fill? What's currently broken, missing, or painful?

**Q4.** What does "done" look like? What can a user do when this ships that they couldn't do before?

**Q5.** Are there any known constraints or edge cases to keep in mind? (technical limits, legal concerns, mobile vs desktop behaviour, API dependencies, etc.)

**Q6.** Any existing context — designs, prior discussions, related specs, tickets, or inspiration? (Paste links or describe briefly. Say "none" if not.)

**Q7.** What's the rough scope? Pick one:
  - **Small** — a single component or section update
  - **Medium** — a full page or multi-component flow
  - **Large** — involves API changes, new routes, or cross-cutting concerns
  - **Not sure yet**

---

## Phase 3 — Generate the Spec

Once you have answers to all seven questions:

### 3a. Determine the spec number
List `.legion/context/specs/` and find the highest existing `NNN-` prefix. Increment by 1. Use zero-padded 3-digit format (e.g. `001`, `002`, `003`). If no specs exist yet, start at `001`.

### 3b. Derive the spec slug
Convert the feature name from Q1 into kebab-case (e.g. "Business partner onboarding flow" → `business-partner-onboarding-flow`).

### 3c. Create the spec directory and file
Path: `.legion/context/specs/<NNN>-<slug>/spec.md`

Fill in every section of `.legion/context/specs/templates/SPEC_TEMPLATE.md` using the answers collected. Apply the following rules:

- **Problem**: Use the answer from Q3. Make it concrete — name the audience and the pain.
- **Audiences**: Derived from Q2.
- **User Stories**: Write at least 2–3. Format: "As a [user type], I want to [action], so that [outcome]." Ground them in Renuir's three audiences (individuals, businesses, developers).
- **Acceptance Criteria**: Write at least 3 checkable criteria derived from Q4. Each must be falsifiable — a QA engineer could tick it off.
- **Technical Notes**:
  - List component file paths following `AGENTS.md` naming conventions (PascalCase, under `components/<section>/`)
  - List any new routes needed under `app/(others)/<route>/page.tsx`
  - Note any API changes if scope is medium/large
  - Flag any `"use client"` requirements
  - Note any new shadcn/ui components needed (`pnpm dlx shadcn@latest add <component>`)
- **Edge Cases**: Derived from Q5. Add any you spotted during the conversation that the team member may not have mentioned.
- **Open Questions**: Anything that came up during the interview that is still unresolved.
- **Out of Scope**: Explicitly list at least 2 things this feature does NOT include to prevent scope creep.

### 3d. Create the E2E plan (if scope is Medium or Large)
Path: `.legion/context/specs/<NNN>-<slug>/e2e.md`

Fill in `.legion/context/specs/templates/E2E_TEMPLATE.md` with at least:
- A happy-path scenario
- One failure/negative scenario
- Relevant edge cases from Q5

### 3e. Update projects.md
Append a new entry under `## Active` in `.legion/context/projects.md`:

```
### <Feature Name>
Spec: .legion/context/specs/<NNN>-<slug>/spec.md
Audience: <from Q2>
Status: Spec written — not started.
```

---

## Phase 4 — Scaffold (optional)

After writing the spec, ask:

> "Want me to scaffold the initial files for this feature? I'll create empty shells following the project conventions — nothing you'd need to undo."

If the team member says **yes**:

1. Create the component file(s) listed in the spec's Technical Notes. Each file should:
   - Follow the PascalCase naming convention
   - Be a valid TypeScript React component (server component by default — only add `"use client"` if the spec calls for interactivity)
   - Include the correct import for `cn` from `@/lib/utils` if className is used
   - Export using the convention for that directory (check `AGENTS.md`)
   - Leave a `{/* TODO: implement */}` comment in the JSX body

2. If a new page route is needed, create `app/(others)/<route>/page.tsx` using the `SECTIONS` array pattern from `AGENTS.md`.

3. If a data file is needed, create `components/data/<featureName>.ts` with an empty typed array and the type definition.

4. Tell the team member exactly which files were created and what they need to fill in.

If the team member says **no**, skip scaffolding and move to Phase 5.

---

## Phase 5 — Handoff

Close with a short summary (bullet points):

- Spec location
- E2E plan location (if created)
- Projects.md updated: yes/no
- Files scaffolded (if any)
- Top 1–2 open questions they should resolve before starting to build
- A reminder to run `pnpm lint` and `npx tsc --noEmit` after any scaffolded files are filled in

Keep this summary tight — 8 lines max.
