import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "cream" | "paper" | "blush" | "sky" | "peach" | "none";

const tones: Record<SectionTone, string> = {
  cream: "bg-cream",
  paper: "bg-paper",
  blush: "bg-blush/45",
  sky: "bg-sky/55",
  peach: "bg-peach/25",
  none: "",
};

interface SectionWrapperProps {
  id: string;
  labelledBy: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

/**
 * Shared section shell: consistent vertical rhythm, max content width, and a
 * background tone that alternates so the page never reads as "all pink".
 */
export function SectionWrapper({
  id,
  labelledBy,
  tone = "cream",
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative scroll-mt-6 px-5 py-20 sm:px-8 md:py-28", tones[tone], className)}
    >
      <div className={cn("mx-auto w-full max-w-[1120px]", containerClassName)}>{children}</div>
    </section>
  );
}
