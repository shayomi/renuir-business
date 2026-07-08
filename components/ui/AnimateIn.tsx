'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  // With reduced motion, render fully visible immediately (no hidden state),
  // which also guarantees content is never stuck invisible if a trigger misses.
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger ? staggerContainer : variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
