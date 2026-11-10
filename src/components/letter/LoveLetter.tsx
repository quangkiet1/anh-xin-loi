"use client";

import { motion } from "motion/react";
import { Flower, Stamp } from "@/components/illustrations/Botanicals";
import { HiddenHeart } from "@/components/effects/HiddenHearts";
import { Person } from "@/components/illustrations/Characters";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PaperCard } from "@/components/ui/PaperCard";
import { heartNotes } from "@/data/interludes";
import { siteContent } from "@/data/site-content";
import { easing } from "@/lib/motion";

const paragraphReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.06 * index, ease: easing.gentle },
  }),
};

export function LoveLetter() {
  const { letter, signature, date } = siteContent;

  return (
    <SectionWrapper id="chapter-letter" labelledBy="letter-title" tone="blush" className="overflow-hidden">
      <div className="relative mx-auto max-w-[780px]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-rose-deep"
        >
          Chương 02 — Lá thư
        </motion.p>

        <PaperCard className="relative px-5 py-10 sm:px-10 sm:py-14 md:px-14">
          <h2 id="letter-title" className="sr-only">
            Lá thư cho em
          </h2>

          <Stamp className="absolute right-4 top-4 w-11 rotate-6 opacity-90 sm:right-7 sm:top-7 sm:w-14" />
          <Flower tone="rose" className="absolute -left-3 -top-4 w-12 sm:-left-5 sm:w-16" />
          <Flower tone="peach" className="absolute -bottom-5 right-6 w-10 rotate-12 sm:w-14" />

          <p className="hand text-[1.45rem] text-rose-deep sm:text-[1.7rem]">{letter.greeting}</p>

          <div className="letter-body mt-6 space-y-5">
            {letter.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                custom={index}
                variants={paragraphReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="mt-8 border-t border-ink/10 pt-6"
          >
            <p className="font-display text-[1.35rem] text-ink sm:text-[1.5rem]">{letter.closing}</p>

            <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <p className="hand text-[1.5rem] text-rose-deep sm:text-[1.75rem]">— {signature}</p>
              <p className="text-[0.78rem] uppercase tracking-[0.18em] text-muted">{date}</p>
            </div>
          </motion.div>

          <p className="mt-8 rounded-2xl bg-blush/35 px-4 py-3 text-[0.85rem] leading-relaxed text-muted">
            {letter.postscript}
          </p>

          <div className="mt-2 flex justify-end">
            <HiddenHeart note={heartNotes[1]} align="right" />
          </div>
        </PaperCard>

        {/* the pair sits beside the letter on wide screens only */}
        <div className="pointer-events-none absolute -left-24 bottom-6 hidden w-24 xl:block" aria-hidden="true">
          <Person kind="female" pose="sit" mood="soft" />
        </div>
        <div className="pointer-events-none absolute -right-24 bottom-6 hidden w-24 xl:block" aria-hidden="true">
          <Person kind="male" pose="sit" mood="smile" mirrored />
        </div>
      </div>
    </SectionWrapper>
  );
}
