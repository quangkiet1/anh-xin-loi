"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import { SmallEnvelope } from "@/components/illustrations/Botanicals";
import { secretLetter } from "@/data/interludes";
import { useDialog } from "@/hooks/useDialog";

/**
 * The hidden letter in Chapter 03.
 *
 * Accessible dialog via `useDialog`: Escape closes, focus is trapped while
 * open, focus returns to the trigger on close, and the page behind is
 * scroll-locked. It never opens on its own.
 */
export function SecretLetter() {
  const [open, setOpen] = useState(false);
  const dialogRef = useDialog({ open, onClose: () => setOpen(false) });

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={secretLetter.ariaLabel}
        className="group mt-2 inline-flex items-center gap-3 rounded-2xl border border-dashed border-rose/60 bg-paper/70 px-4 py-3 text-left transition-colors duration-300 hover:border-rose-deep hover:bg-paper"
      >
        <SmallEnvelope className="w-10 shrink-0 transition-transform duration-500 group-hover:-rotate-3" />
        <span className="flex flex-col">
          <span className="text-[0.82rem] font-semibold text-ink">Có một lá thư nhỏ ở đây…</span>
          <span className="text-[0.75rem] text-muted">Chạm vào để mở</span>
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="secret-letter-title"
              tabIndex={-1}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="paper-texture relative w-full max-w-[26rem] rounded-[var(--radius-paper)] border border-ink/10 bg-paper p-6 shadow-lift focus:outline-none sm:p-8"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <p
                  id="secret-letter-title"
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-rose-deep"
                >
                  Thư mật
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={secretLetter.closeLabel}
                  className="-mr-2 -mt-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-blush/60 hover:text-ink"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <SmallEnvelope className="mx-auto mb-5 w-14" />

              <div className="space-y-3 text-[0.95rem] leading-[1.85] text-ink">
                {secretLetter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="hand mt-5 text-right text-[1.15rem] text-rose-deep">— anh</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
