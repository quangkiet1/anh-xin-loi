"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useDialog } from "@/hooks/useDialog";
import { resolveCaption } from "@/lib/utils";
import type { Memory } from "@/types";

interface MemoryLightboxProps {
  memories: Memory[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const swipeThreshold = 48;
const slide = 26;

/**
 * Photo lightbox for Chapter 04. Arrow keys, swipe, and on-screen controls all
 * navigate the same list; Escape, the close button, and the scrim close it.
 */
export function MemoryLightbox({ memories, index, onClose, onIndexChange }: MemoryLightboxProps) {
  const [direction, setDirection] = useState<1 | -1>(1);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null;

  const go = useCallback(
    (delta: 1 | -1) => {
      if (index === null) return;
      setDirection(delta);
      onIndexChange((index + delta + memories.length) % memories.length);
    },
    [index, memories.length, onIndexChange],
  );

  const dialogRef = useDialog({
    open,
    onClose,
    onKeyDown: (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
    },
  });

  const memory = index === null ? null : memories[index];
  const caption = memory && index !== null ? resolveCaption(memory.caption, index) : null;

  return (
    <AnimatePresence>
      {open && memory && index !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Ảnh kỷ niệm ${index + 1} trên ${memories.length}`}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.97, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const delta = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(delta) > swipeThreshold) go(delta > 0 ? -1 : 1);
            }}
            className="relative flex w-full max-w-[900px] flex-col focus:outline-none"
          >
            <div className="mb-2 flex w-full items-center justify-between gap-3 px-1">
              <p
                aria-hidden="true"
                className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-paper/85"
              >
                {String(index + 1).padStart(2, "0")} / {String(memories.length).padStart(2, "0")}
              </p>
              <p className="sr-only" aria-live="polite">
                {`Ảnh ${index + 1} trên ${memories.length}: ${memory.alt}`}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng ảnh"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper transition-colors duration-200 hover:bg-paper/30"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[14px] bg-ink/40 ring-1 ring-paper/20">
              <div className="relative h-[min(62vh,540px)] w-full">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={memory.id}
                    initial={{ opacity: 0, x: direction * slide }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -slide }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={memory.src}
                      alt={memory.alt}
                      fill
                      sizes="(max-width: 768px) 94vw, 860px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Ảnh trước"
                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lift transition-colors duration-200 hover:bg-paper"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Ảnh sau"
                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lift transition-colors duration-200 hover:bg-paper"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-3 w-full px-2 text-center">
              <p
                className={
                  caption?.isPlaceholder
                    ? "text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-paper/80"
                    : "hand text-[1.2rem] text-paper"
                }
              >
                {caption?.text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
