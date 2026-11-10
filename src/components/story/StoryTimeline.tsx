"use client";

import { motion } from "motion/react";
import { HiddenHeart } from "@/components/effects/HiddenHearts";
import { SecretLetter } from "@/components/effects/SecretLetter";
import { StorySceneArt } from "@/components/illustrations/Scenes";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heartNotes, storyScenes } from "@/data/interludes";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function StoryTimeline() {
  return (
    <SectionWrapper id="chapter-story" labelledBy="story-title" tone="paper" className="overflow-hidden">
      <div className="relative">
        <SectionHeading
          id="story-title"
          eyebrow="Chương 03 — Điều anh chưa nhận ra"
          title="Hai ngày ấy, nhìn lại"
          lead="Không phải để giải thích thêm lần nữa. Chỉ là kể lại đúng như những gì đã xảy ra, và điều anh hiểu sau đó."
        />

        <HiddenHeart
          note={heartNotes[2]}
          panelSide="below"
          align="right"
          className="absolute -top-2 right-0 hidden sm:block"
        />

        <div className="relative mt-14 md:mt-20">
          <div
            className="absolute left-1/2 top-2 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose/40 to-transparent md:block"
            aria-hidden="true"
          />
          <div className="space-y-14 md:space-y-24">
            {storyScenes.map((scene, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.article
                  key={scene.id}
                  id={scene.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: easing.gentle }}
                  className="grid items-center gap-7 md:grid-cols-2 md:gap-14"
                >
                  <div className={cn("relative", isReversed && "md:order-2")}>
                    <StorySceneArt variant={scene.illustration} />
                  </div>

                  <div className={cn("relative", isReversed && "md:order-1 md:text-right")}>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -top-10 select-none font-display text-[3.4rem] leading-none text-rose/25 md:text-[4.4rem]",
                        isReversed ? "md:right-0" : "md:left-0",
                        "left-0",
                      )}
                    >
                      0{index + 1}
                    </span>

                    <p className="relative text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-rose-deep">
                      {scene.step}
                    </p>
                    <h3 className="relative mt-3 font-display text-[1.5rem] leading-snug text-ink sm:text-[1.9rem]">
                      {scene.title}
                    </h3>
                    <p className="relative mt-4 max-w-[34rem] text-[0.95rem] leading-[1.85] text-muted sm:text-base md:inline-block">
                      {scene.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <SecretLetter />
        </div>
      </div>
    </SectionWrapper>
  );
}
