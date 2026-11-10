"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { HiddenHeart } from "@/components/effects/HiddenHearts";
import { Flower, TapeStrip } from "@/components/illustrations/Botanicals";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { MemoryLightbox } from "@/components/memories/MemoryLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { heartNotes } from "@/data/interludes";
import { featuredMemories, memories } from "@/data/memories";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { easing } from "@/lib/motion";
import { cn, resolveCaption } from "@/lib/utils";

/**
 * Chapter 04 — four polaroid cards on a pale sky band. The photos are night
 * flash shots, so the cool background plus paper matting keeps them from
 * fighting the pastel palette. All five photos live in the lightbox.
 */
export function MemoryGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="chapter-memories"
      labelledBy="memories-title"
      tone="sky"
      className="overflow-hidden"
    >
      <SectionHeading
        id="memories-title"
        eyebrow="Chương 04 — Kỷ niệm"
        title="Kỷ niệm của hai đứa"
        lead="Bốn tấm ảnh của hai đứa. Em chạm vào một tấm để xem lớn hơn nhé."
      />

      <HiddenHeart
        note={heartNotes[3]}
        panelSide="below"
        align="right"
        className="absolute right-2 top-3 sm:right-6"
      />

      <ul className="mx-auto mt-12 grid max-w-[880px] gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
        {featuredMemories.map((memory, position) => {
          const index = memories.findIndex((item) => item.id === memory.id);
          const caption = resolveCaption(memory.caption, index);

          return (
            <motion.li
              key={memory.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                delay: reducedMotion ? 0 : position * 0.08,
                ease: easing.gentle,
              }}
              className={cn(position % 2 === 1 && "sm:mt-10")}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-haspopup="dialog"
                aria-label={`Mở ảnh ${index + 1} trên ${memories.length}: ${memory.alt}`}
                className="group block w-full rounded-[12px] text-left"
              >
                <div
                  style={{ rotate: `${memory.rotation}deg` }}
                  className="paper-texture relative rounded-[10px] bg-paper p-3 pb-0 shadow-paper ring-1 ring-ink/10 transition-[translate,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lift"
                >
                  <TapeStrip className="absolute -top-3.5 left-1/2 z-10 w-20 -translate-x-1/2 opacity-90" />

                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[4px] bg-[#E7EDF1]">
                    <Image
                      src={memory.src}
                      alt={memory.alt}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 420px"
                      className="object-contain"
                    />
                  </div>

                  <p
                    className={cn(
                      "px-1 pb-4 pt-3.5",
                      caption.isPlaceholder
                        ? "text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-muted"
                        : "hand text-[1.15rem] leading-snug text-rose-deep",
                    )}
                  >
                    {caption.text}
                  </p>
                </div>
              </button>
            </motion.li>
          );
        })}
      </ul>

      <p className="mx-auto mt-12 max-w-[26rem] text-center text-[0.82rem] leading-relaxed text-muted">
        Mấy tấm ảnh này là ảnh thật, không chỉnh sửa gì thêm — vì anh thích đúng những gì đã có.
      </p>

      <Flower tone="sky" className="absolute -bottom-4 left-4 w-12 opacity-70 sm:left-10" />

      <MemoryLightbox
        memories={memories}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </SectionWrapper>
  );
}
