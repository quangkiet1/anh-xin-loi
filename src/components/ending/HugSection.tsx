"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HiddenHeart } from "@/components/effects/HiddenHearts";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { Flower, HeartGlyph, Sprig } from "@/components/illustrations/Botanicals";
import { Person } from "@/components/illustrations/Characters";
import { SunsetGarden } from "@/components/illustrations/Scenes";
import { Button } from "@/components/ui/Button";
import { heartNotes } from "@/data/interludes";
import { siteContent } from "@/data/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { easing } from "@/lib/motion";

/**
 * Chapter 06 — the closing scene. Direction is fixed: he sends the hug, she
 * receives it. Nothing is transmitted; the confirmation says exactly that.
 */
export function HugSection() {
  const [hugs, setHugs] = useState(0);
  const reducedMotion = useReducedMotion();
  const hugged = hugs > 0;
  const { hug } = siteContent;

  return (
    <SunsetGarden>
      <section
        id="chapter-hug"
        aria-labelledby="hug-title"
        className="relative scroll-mt-6 px-5 pb-24 pt-20 sm:px-8 md:pb-32 md:pt-28"
      >
        <FloatingPetals count={7} variant="heart" className="opacity-70" />

        <div className="relative mx-auto flex max-w-[720px] flex-col items-center text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-rose-deep">
            Chương 06 — Cái ôm
          </p>

          <h2
            id="hug-title"
            className="mt-3 font-display text-[1.9rem] leading-[1.2] text-ink sm:text-4xl md:text-[2.7rem]"
          >
            {hug.heading}
          </h2>

          <div className="mt-6 max-w-[36rem] space-y-4 text-[0.98rem] leading-[1.9] text-ink sm:text-base">
            {hug.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: easing.gentle }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="relative mt-10 w-full max-w-[430px] sm:mt-14">
            <Flower
              tone="peach"
              stem
              className="absolute -bottom-2 left-[2%] w-10 opacity-85 sm:w-12"
            />
            <Sprig className="absolute -bottom-1 right-[4%] w-8 opacity-80 sm:w-9" flip />

            <div className="relative flex items-end justify-center">
              <motion.div
                animate={
                  reducedMotion ? undefined : { x: hugged ? "34%" : "0%", rotate: hugged ? 5 : 0 }
                }
                transition={{ duration: 0.9, ease: easing.gentle }}
                className="relative z-10 w-[46%] max-w-[190px]"
                style={{ transformOrigin: "bottom center" }}
              >
                <Person
                  kind="female"
                  pose={hugged ? "hug" : "sit"}
                  mood={hugged ? "shy" : "soft"}
                />
              </motion.div>

              <motion.div
                animate={
                  reducedMotion ? undefined : { x: hugged ? "-34%" : "0%", rotate: hugged ? -5 : 0 }
                }
                transition={{ duration: 0.9, ease: easing.gentle }}
                className="relative z-20 w-[46%] max-w-[190px]"
                style={{ transformOrigin: "bottom center" }}
              >
                <Person kind="male" pose={hugged ? "hug" : "sit"} mood="smile" mirrored />
              </motion.div>

              {hugged ? (
                <motion.div
                  key={hugs}
                  className="pointer-events-none absolute bottom-[44%] left-1/2 z-30 w-14 -translate-x-1/2 sm:w-16"
                  initial={{ opacity: 0, scale: 0.2, rotate: -10 }}
                  animate={{ opacity: [0, 1, 0.95], scale: [0.2, 1.15, 1], rotate: [-10, 5, 0] }}
                  transition={{ duration: 1.15, ease: easing.gentle }}
                >
                  <HeartGlyph className="w-full" />
                </motion.div>
              ) : null}
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center gap-4">
            <Button size="lg" onClick={() => setHugs((value) => value + 1)}>
              {hugged ? hug.nudgedButton : hug.button}
            </Button>

            <div className="min-h-[3.25rem]">
              <div aria-live="polite">
                <AnimatePresence mode="wait">
                  {hugged ? (
                    <motion.p
                      key="confirmation"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="hand max-w-[24rem] text-[1.2rem] leading-snug text-rose-deep sm:text-[1.4rem]"
                    >
                      {hug.confirmation}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {hugged ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-2 text-[0.82rem] leading-relaxed text-ink"
                  >
                    {hug.secondaryNote}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          <HiddenHeart note={heartNotes[4]} className="relative mt-4" />
        </div>
      </section>
    </SunsetGarden>
  );
}
