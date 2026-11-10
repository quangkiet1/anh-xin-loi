import { cn } from "@/lib/utils";

type Tone = "rose" | "peach" | "sage" | "sky";

const tones: Record<Tone, { petal: string; core: string; stem: string }> = {
  rose: { petal: "#E9A9B7", core: "#D98FA0", stem: "#9FB08F" },
  peach: { petal: "#F3C3A8", core: "#E9A98A", stem: "#A3B393" },
  sage: { petal: "#CBD6C1", core: "#B4C2A6", stem: "#8FA07C" },
  sky: { petal: "#C7DCEB", core: "#AEC7DA", stem: "#9FB08F" },
};

interface FlowerProps {
  tone?: Tone;
  petals?: number;
  className?: string;
  /** Adds a stem and two leaves below the bloom. */
  stem?: boolean;
}

export function Flower({ tone = "rose", petals = 5, className, stem = false }: FlowerProps) {
  const c = tones[tone];
  const items = Array.from({ length: petals }, (_, i) => (i * 360) / petals);

  return (
    <svg
      viewBox={stem ? "0 0 100 190" : "0 0 100 100"}
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      {stem ? (
        <>
          <path
            d="M50 92c2 26-2 52-6 74"
            stroke={c.stem}
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M46 130c-12-4-18-12-20-22 12 0 20 6 22 16z" fill={c.stem} opacity="0.85" />
          <path d="M46 152c11-3 17-10 19-20-11 0-18 5-21 14z" fill={c.stem} opacity="0.7" />
        </>
      ) : null}
      <g transform={stem ? "translate(0 0)" : undefined}>
        {items.map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="28"
            rx="15"
            ry="20"
            fill={c.petal}
            opacity="0.82"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="11" fill={c.core} />
        <circle cx="50" cy="50" r="5.5" fill="#FFF6EE" opacity="0.75" />
      </g>
    </svg>
  );
}

export function Sprig({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 70 130"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M35 126C31 96 33 66 44 38"
        stroke="#9FB08F"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${34 - i * 1.5} ${104 - i * 22})`}>
          <ellipse
            cx="-10"
            cy="-4"
            rx="12"
            ry="6.4"
            fill="#B9C7AC"
            opacity="0.9"
            transform="rotate(-24)"
          />
          <ellipse
            cx="11"
            cy="-8"
            rx="11"
            ry="6"
            fill="#CBD6C1"
            opacity="0.9"
            transform="rotate(22)"
          />
        </g>
      ))}
    </svg>
  );
}

export function HeartGlyph({ className, tone = "#D98FA0" }: { className?: string; tone?: string }) {
  return (
    <svg
      viewBox="0 0 100 92"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M50 86C21 65 7 49 7 33 7 19 18 9 30 9c9 0 16 4 20 12 4-8 11-12 20-12 12 0 23 10 23 24 0 16-14 32-43 53z"
        fill={tone}
        opacity="0.9"
      />
      <path
        d="M35 25c-6 1-10 5-10 11"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function TapeStrip({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 34"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 6l14 3 14-4 14 4 14-4 14 4 14-4 14 4 6-2v24l-6 2-14-4-14 4-14-4-14 4-14-4-14 4-14-4-14 4V6z"
        fill="#F5C7AE"
        opacity="0.55"
      />
    </svg>
  );
}

export function SmallEnvelope({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 46"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="60" height="42" rx="5" fill="#FFFDF9" stroke="#E1CFCC" strokeWidth="1.6" />
      <path d="M4 6l28 20L60 6" fill="none" stroke="#D9BFC0" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="52" cy="36" r="6" fill="#D98FA0" opacity="0.8" />
    </svg>
  );
}

export function Stamp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 76"
      className={cn("h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="3"
        width="58"
        height="70"
        rx="3"
        fill="none"
        stroke="#C9B4B3"
        strokeWidth="1.6"
        strokeDasharray="4 4"
      />
      <rect x="10" y="10" width="44" height="56" rx="2" fill="#F7DCE2" opacity="0.7" />
      <path
        d="M32 56C21 48 16 42 16 36c0-5 4-9 9-9 4 0 6 2 7 5 1-3 3-5 7-5 5 0 9 4 9 9 0 6-5 12-16 20z"
        fill="#D98FA0"
      />
      <path d="M18 18h28" stroke="#C9B4B3" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
