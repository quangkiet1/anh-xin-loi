"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CommitmentIcon } from "@/components/promises/CommitmentIcon";
import { PaperCard } from "@/components/ui/PaperCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { commitments } from "@/data/interludes";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { easing } from "@/lib/motion";

/**
 * Chapter 05 — three commitments. They are promises about his own behaviour,
 * not a request that she trust or forgive him on the spot.
 */
export function PromiseCards() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="chapter-promises"
      labelledBy="promises-title"
      tone="cream"
      className="overflow-hidden"
    >
      <SectionHeading
        id="promises-title"
        eyebrow="Chương 05 — Lời hứa"
        title="Ba điều anh muốn làm tốt hơn"
        lead="Không phải để em phải tin ngay. Chỉ là ba việc anh sẽ bắt đầu từ hôm nay."
      />

      <ul className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-7">
        {commitments.map((commitment, index) => (
          <motion.li
            key={commitment.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : index * 0.14,
              ease: easing.gentle,
            }}
            className="h-full"
          >
            <PaperCard className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush/45">
                  <CommitmentIcon icon={commitment.icon} className="h-7 w-7" />
                </span>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-rose-deep">
                  {commitment.eyebrow}
                </p>
              </div>

              <h3 className="mt-5 font-display text-[1.3rem] leading-snug text-ink sm:text-[1.4rem]">
                {commitment.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.85] text-muted">{commitment.body}</p>
            </PaperCard>
          </motion.li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-[32rem] text-center text-[0.85rem] leading-relaxed text-muted">
        Anh không viết ba điều này để em phải trả lời. Anh chỉ muốn em biết anh đang bắt đầu từ đâu.
      </p>
    </SectionWrapper>
  );
}
