"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { seeded } from "@/lib/utils";

interface FloatingPetalsProps {
  count?: number;
  variant?: "petal" | "heart";
  className?: string;
}

const petalColors = ["#E9A9B7", "#F3C3A8", "#C7DCEB", "#CBD6C1"];

/**
 * Ambient drifting petals. Deterministic positions keep SSR and hydration
 * identical; with reduced motion the petals are simply not rendered.
 */
export function FloatingPetals({ count = 10, variant = "petal", className }: FloatingPetalsProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  const items = Array.from({ length: count }, (_, index) => {
    const left = seeded(index + 1) * 96;
    const size = 8 + seeded(index + 11) * 12;
    const delay = seeded(index + 21) * 6;
    const duration = 11 + seeded(index + 31) * 7;
    const drift = (seeded(index + 41) - 0.5) * 42;
    const color = petalColors[index % petalColors.length];

    return { index, left, size, delay, duration, drift, color };
  });

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {items.map((item) => (
        <motion.span
          key={item.index}
          className="absolute block"
          style={{ left: `${item.left}%`, bottom: "-8%", width: item.size, height: item.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: ["0vh", "-96vh"], x: [0, item.drift, 0], opacity: [0, 0.75, 0.55, 0] }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.7, 1],
          }}
        >
          {variant === "heart" ? (
            <svg viewBox="0 0 20 18" className="h-full w-full">
              <path
                d="M10 17C4 12.6 1 9.6 1 6.4 1 3.4 3.2 1.5 5.8 1.5c1.7 0 3.1.8 4.2 2.3 1.1-1.5 2.5-2.3 4.2-2.3C16.8 1.5 19 3.4 19 6.4c0 3.2-3 6.2-9 10.6z"
                fill={item.color}
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="h-full w-full">
              <ellipse cx="10" cy="10" rx="6.5" ry="9.5" fill={item.color} opacity="0.9" />
            </svg>
          )}
        </motion.span>
      ))}
    </div>
  );
}
