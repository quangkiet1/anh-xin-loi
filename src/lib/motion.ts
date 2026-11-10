import type { Transition, Variants } from "motion/react";

/**
 * Shared motion language (see ANIMATIONS/animation-guidelines.md):
 * calm, organic, 350–700ms for transitions, low amplitude for ambient loops.
 */
export const easing = {
  soft: [0.22, 0.61, 0.36, 1] as const,
  gentle: [0.16, 1, 0.3, 1] as const,
};

export const duration = {
  quick: 0.35,
  standard: 0.55,
  slow: 0.7,
  ambient: 9,
};

export const viewportOnce = { once: true, amount: 0.35 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.gentle },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.standard, ease: easing.soft } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.standard, ease: easing.gentle },
  },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 20,
  mass: 0.9,
};
