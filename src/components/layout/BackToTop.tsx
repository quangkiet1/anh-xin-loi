"use client";

import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BackToTop() {
  const reducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })
      }
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/12 bg-paper/90 px-5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-rose/60 hover:text-rose-deep"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
      Lên đầu trang
    </button>
  );
}
