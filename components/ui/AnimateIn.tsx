'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
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
