"use client";

import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * Wraps Motion's hook so every component reads the same source and we have a
 * single place to change the strategy if needed.
 */
export function useReducedMotion(): boolean {
  return useMotionReducedMotion() ?? false;
}
