"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Flower } from "@/components/illustrations/Botanicals";
import { gardenNotes } from "@/data/interludes";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type Tone = "rose" | "peach" | "sky" | "sage";

/** Decorative flowers interleaved with the three interactive ones. */
const decorative: Array<{ tone: Tone; delay: number }> = [
  { tone: "sky", delay: 0.4 },
  { tone: "sage", delay: 1.2 },
  { tone: "sage", delay: 0.8 },
  { tone: "sky", delay: 1.6 },
  { tone: "peach", delay: 2 },
];

const interactiveTones: Tone[] = ["rose", "peach", "sage"];

/**
 * A quiet flower strip between the promises and the hug. Three flowers hold
 * notes; the rest only sway. Notes open on click *and* tap — never hover-only.
 */
export function FlowerGarden() {
  const reducedMotion = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const activeNote = gardenNotes.find((note) => note.id === selected) ?? null;

  const sway = (delay: number) =>
    reducedMotion
      ? undefined
      : {
          animate: { rotate: [-2.2, 2.2, -2.2] },
          transition: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      <div className="flex flex-wrap items-end justify-center gap-1.5 sm:gap-5">
        <motion.div {...sway(0.3)} className="w-4 sm:w-10">
          <Flower tone={decorative[0].tone} className="w-full opacity-80" />
        </motion.div>

        <motion.button
          type="button"
          aria-label={gardenNotes[0].ariaLabel}
          aria-expanded={selected === gardenNotes[0].id}
          onClick={() =>
            setSelected((current) => (current === gardenNotes[0].id ? null : gardenNotes[0].id))
          }
          className="flex h-16 w-11 items-end justify-center rounded-2xl pb-0.5 transition-transform duration-300 hover:-translate-y-1 sm:h-20 sm:w-14"
        >
          <Flower tone={interactiveTones[0]} className="w-full" />
        </motion.button>

        <motion.div {...sway(1.1)} className="w-5 sm:w-9">
          <Flower tone={decorative[1].tone} className="w-full opacity-75" />
        </motion.div>

        <motion.button
          type="button"
          aria-label={gardenNotes[1].ariaLabel}
          aria-expanded={selected === gardenNotes[1].id}
          onClick={() =>
            setSelected((current) => (current === gardenNotes[1].id ? null : gardenNotes[1].id))
          }
          className="flex h-20 w-11 items-end justify-center rounded-2xl transition-transform duration-300 hover:-translate-y-1 sm:h-24 sm:w-14"
        >
          <Flower tone={interactiveTones[1]} className="w-full" petals={6} />
        </motion.button>

        <motion.div {...sway(0.7)} className="w-4 sm:w-11">
          <Flower tone={decorative[2].tone} className="w-full opacity-80" />
        </motion.div>

        <motion.button
          type="button"
          aria-label={gardenNotes[2].ariaLabel}
          aria-expanded={selected === gardenNotes[2].id}
          onClick={() =>
            setSelected((current) => (current === gardenNotes[2].id ? null : gardenNotes[2].id))
          }
          className="flex h-14 w-11 items-end justify-center rounded-2xl transition-transform duration-300 hover:-translate-y-1 sm:h-16 sm:w-14"
        >
          <Flower tone={interactiveTones[2]} className="w-full" petals={5} />
        </motion.button>

        <motion.div {...sway(1.5)} className="w-5 sm:w-10">
          <Flower tone={decorative[3].tone} className="w-full opacity-75" />
        </motion.div>

        <motion.div {...sway(2.1)} className="w-4 sm:w-8">
          <Flower tone={decorative[4].tone} className="w-full opacity-70" />
        </motion.div>
      </div>

      <div aria-live="polite" className={cn("mt-5 min-h-[4.5rem] px-2 text-center")}>
        <AnimatePresence mode="wait">
          {activeNote ? (
            <motion.p
              key={activeNote.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-[26rem] text-[0.95rem] leading-relaxed text-ink"
            >
              {activeNote.text}
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[0.82rem] tracking-wide text-muted"
            >
              Có vài bông hoa giữ một lời nhắn nhỏ — em thử chạm vào nhé.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
