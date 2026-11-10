"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { HeartGlyph } from "@/components/illustrations/Botanicals";
import { cn } from "@/lib/utils";
import type { HeartNote } from "@/types";

interface HiddenHeartProps {
  note: HeartNote;
  className?: string;
  panelClassName?: string;
  /** Align the note with the right edge when the heart sits near the page edge. */
  align?: "center" | "right";
  /** Use "below" when the heart sits at the top of a section that clips overflow. */
  panelSide?: "above" | "below";
}

/**
 * A small heart tucked into a section. Deliberately independent of any
 * progress state: missing one never removes anything from the experience.
 */
export function HiddenHeart({
  note,
  className,
  panelClassName,
  align = "center",
  panelSide = "above",
}: HiddenHeartProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = `heart-panel-${note.id}`;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    // The caller supplies the positioning; `relative` is only a fallback.
    <div className={className ?? "relative"}>
      <button
        ref={buttonRef}
        type="button"
        aria-label={note.ariaLabel}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="group inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 hover:bg-blush/50"
      >
        <HeartGlyph className="h-3.5 w-3.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            id={panelId}
            role="note"
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute z-30 w-60 rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-left text-[0.85rem] leading-relaxed text-ink shadow-paper",
              panelSide === "above" ? "bottom-full mb-2" : "top-full mt-2",
              align === "center" ? "left-1/2 -translate-x-1/2" : "right-0",
              panelClassName,
            )}
          >
            {note.text}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
