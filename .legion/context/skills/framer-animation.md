# Skill: Framer Motion Animation System

## When to use

When adding animations to any component in renuir-product-web or renuir-business.
Always use this skill before writing any animation code. Never write raw framer-motion
code inline — always import from the central animation system.

---

## Step 1 — Install Framer Motion

Run this first. Only do this once per project:

```bash
pnpm add framer-motion
```

Verify it was added to package.json before continuing.

---

## Step 2 — Create the Animation System File

Create this file if it does not already exist:

**`lib/animations.ts`**

```ts
// lib/animations.ts
// Central animation system for Renuir.
// All components must import from here — never write inline variants.

import { Variants, Transition } from "framer-motion";

// ─────────────────────────────────────────
// TRANSITIONS
// ─────────────────────────────────────────

export const transitions = {
  smooth: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } satisfies Transition,
  snappy: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } satisfies Transition,
  slow: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } satisfies Transition,
  spring: { type: "spring", stiffness: 300, damping: 30 } satisfies Transition,
  bounce: { type: "spring", stiffness: 400, damping: 20 } satisfies Transition,
};

// ─────────────────────────────────────────
// FADE
// ─────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.smooth },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

// ─────────────────────────────────────────
// SCALE
// ─────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.bounce },
};

// ─────────────────────────────────────────
// STAGGER CONTAINERS
// Use on the parent wrapper. Children will animate in sequence.
// ─────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// ─────────────────────────────────────────
// SLIDE
// ─────────────────────────────────────────

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

// ─────────────────────────────────────────
// HERO — for large above-the-fold sections
// ─────────────────────────────────────────

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

// ─────────────────────────────────────────
// HOVER & TAP — for interactive elements
// ─────────────────────────────────────────

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: transitions.snappy,
};

export const hoverLift = {
  whileHover: { y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" },
  whileTap: { y: 0 },
  transition: transitions.snappy,
};

// ─────────────────────────────────────────
// PAGE TRANSITIONS
// ─────────────────────────────────────────

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
  exit: { opacity: 0, y: -16, transition: transitions.snappy },
};
```

---

## Step 3 — Create the AnimateIn Wrapper Component

Create this reusable wrapper so components don't need to manage motion logic:

**`components/ui/AnimateIn.tsx`**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeInUp, staggerContainer, Variants } from "@/lib/animations";

interface AnimateInProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  stagger?: boolean;
  once?: boolean;
}

export default function AnimateIn({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  stagger = false,
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const resolvedVariants = stagger ? staggerContainer : variants;

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={resolvedVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
```

---

## Step 4 — Apply to a Component

When animating any component, follow this exact pattern:

```tsx
"use client";

import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import {
  heroContainer,
  heroItem,
  fadeInUp,
  scaleIn,
  hoverScale,
  staggerContainer,
} from "@/lib/animations";

export default function ExampleSection() {
  return (
    // Stagger container — animates children in sequence
    <AnimateIn stagger className="flex flex-col gap-6">
      {/* Each child uses a variant from lib/animations */}
      <motion.h1 variants={heroItem}>Lost something?</motion.h1>

      <motion.p variants={fadeInUp}>
        Renuir connects you with people who may have found it.
      </motion.p>

      {/* Interactive element uses hover/tap helpers */}
      <motion.button variants={scaleIn} {...hoverScale}>
        Start searching
      </motion.button>
    </AnimateIn>
  );
}
```

---

## Step 5 — Page-level Transition (App Router)

Wrap page content in `layout.tsx` or individual `page.tsx` files:

```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/animations";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## Rules — Always Follow These

- NEVER write `variants={{ hidden: ..., visible: ... }}` inline in a component
- ALWAYS import variants from `@/lib/animations`
- ALWAYS add `"use client"` to any file using framer-motion
- ALWAYS use `AnimateIn` wrapper for scroll-triggered sections
- Use `staggerContainer` on the parent, named variants on each child
- For hero sections use `heroContainer` + `heroItem`
- For cards/lists use `staggerContainer` + `fadeInUp`
- For interactive buttons/cards use `hoverScale` or `hoverLift`
- For page transitions use `pageTransition` inside `AnimatePresence`

---

## Output

- `lib/animations.ts` created or already exists ✓
- `components/ui/AnimateIn.tsx` created ✓
- Target component updated to import from `@/lib/animations` ✓
- No inline variants anywhere ✓
