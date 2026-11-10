import { cn } from "@/lib/utils";
import type { CommitmentIcon as IconName } from "@/types";

const ink = "#59464A";
const rose = "#D98FA0";
const roseDeep = "#8F4F60";
const peach = "#F3C3A8";
const sage = "#A3B393";

/**
 * Hand-drawn marks for the three commitments. Kept deliberately simple so they
 * read as watercolour doodles rather than UI icons.
 */
export function CommitmentIcon({ icon, className }: { icon: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      {icon === "listen" ? (
        <>
          <path
            d="M14 24.4C7.6 19.8 4 16.8 4 13 4 9.8 6.4 7.6 9.2 7.6c2 0 3.6 1 4.8 2.8 1.2-1.8 2.8-2.8 4.8-2.8 2.8 0 5.2 2.2 5.2 5.4 0 3.8-3.6 6.8-10 11.4z"
            fill={rose}
            opacity="0.85"
          />
          <path
            d="M24.4 11.4c1.3 1.3 1.3 3.3 0 4.6"
            stroke={roseDeep}
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M27.4 8.6c2.2 2.6 2.2 6.2 0 8.8"
            stroke={roseDeep}
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
        </>
      ) : null}

      {icon === "appreciate" ? (
        <>
          <g fill={peach} opacity="0.9">
            <circle cx="16" cy="8.6" r="5" />
            <circle cx="22.6" cy="13" r="5" />
            <circle cx="20.4" cy="20.6" r="5" />
            <circle cx="11.6" cy="20.6" r="5" />
            <circle cx="9.4" cy="13" r="5" />
          </g>
          <path
            d="M16 20.4c-3.4-2.4-5-4-5-5.9 0-1.6 1.2-2.8 2.7-2.8 1 0 1.8.5 2.3 1.4.5-.9 1.3-1.4 2.3-1.4 1.5 0 2.7 1.2 2.7 2.8 0 1.9-1.6 3.5-5 5.9z"
            fill={roseDeep}
          />
        </>
      ) : null}

      {icon === "action" ? (
        <>
          <path d="M16 26.4V14.6" stroke={sage} strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path
            d="M16 17.2c-4.4 0-7.4-2.6-8-6.6 4.4-.4 7.4 2 8 6.6z"
            fill={sage}
            opacity="0.95"
          />
          <path
            d="M16 13.4c3.6-.6 6-2.8 6.6-6.4-3.8-.2-6.2 2-6.6 6.4z"
            fill={sage}
            opacity="0.7"
          />
          <path d="M9.4 27h13.2" stroke={ink} strokeWidth="1.7" strokeLinecap="round" opacity="0.45" />
          <circle cx="12" cy="24.2" r="1.1" fill={peach} />
          <circle cx="19.6" cy="24.4" r="0.9" fill={peach} opacity="0.8" />
        </>
      ) : null}
    </svg>
  );
}
