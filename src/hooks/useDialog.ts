"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface UseDialogOptions {
  open: boolean;
  onClose: () => void;
  /** Extra keys (arrows, etc.). Escape and Tab are handled by the hook. */
  onKeyDown?: (event: KeyboardEvent) => void;
}

/**
 * Shared dialog behaviour for the secret letter and the photo lightbox:
 * Escape closes, Tab is trapped inside, the page behind is scroll-locked, the
 * first control receives focus on open, and focus returns to the trigger on
 * close. Callbacks are read through refs so the listeners are attached once.
 */
export function useDialog({ open, onClose, onKeyDown }: UseDialogOptions): RefObject<HTMLDivElement | null> {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const onCloseRef = useRef(onClose);
  const onKeyDownRef = useRef(onKeyDown);

  useEffect(() => {
    onCloseRef.current = onClose;
    onKeyDownRef.current = onKeyDown;
  });

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () => {
      const dialog = dialogRef.current;
      if (!dialog) return [];
      return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.getClientRects().length > 0,
      );
    };

    // Wait a frame so the entering dialog has its children mounted.
    const frame = window.requestAnimationFrame(() => {
      const first = focusables()[0] ?? dialogRef.current;
      first?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key === "Tab") {
        const items = focusables();
        if (items.length === 0) {
          event.preventDefault();
          return;
        }

        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;

        if (!dialogRef.current?.contains(active)) {
          event.preventDefault();
          first.focus();
        } else if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
        return;
      }

      onKeyDownRef.current?.(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      (previouslyFocused ?? null)?.focus();
    };
  }, [open]);

  return dialogRef;
}
