import { Flower, Sprig } from "@/components/illustrations/Botanicals";
import { Couple, Person } from "@/components/illustrations/Characters";
import { cn } from "@/lib/utils";
import type { SceneIllustration } from "@/types";

function Hills({ tone = "sage" }: { tone?: "sage" | "sky" | "dusk" }) {
  const fills =
    tone === "sage"
      ? ["#CBD6C1", "#B7C6AB", "#A6B79A"]
      : tone === "sky"
        ? ["#D8E7F0", "#C6DBE7", "#B4CEDA"]
        : ["#EBC9B8", "#E3B4A6", "#D9A192"];

  return (
    <svg
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-[46%] w-full"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 66c52-26 96-28 148-10 46 16 96 18 148-2 40-16 72-14 104 2v64H0z" fill={fills[0]} />
      <path d="M0 86c46-18 88-16 134 0 44 16 100 18 150 0 42-15 78-13 116 4v30H0z" fill={fills[1]} />
      <path d="M0 104c58-14 112-12 168 2 46 11 106 10 156-2 30-7 56-5 76 4v12H0z" fill={fills[2]} />
    </svg>
  );
}

interface ScenePanelProps {
  tone?: "blush" | "sky" | "peach";
  hills?: "sage" | "sky" | "dusk";
  className?: string;
  children: React.ReactNode;
}

export function ScenePanel({ tone = "blush", hills = "sage", className, children }: ScenePanelProps) {
  const wash = tone === "sky" ? "wash-sky" : tone === "peach" ? "wash-peach" : "wash";

  return (
    <div
      className={cn(
        "relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-ink/8 sm:aspect-[4/3]",
        wash,
        className,
      )}
    >
      <Hills tone={hills} />
      {children}
    </div>
  );
}

/** A small polaroid-style card used by the "avatar" scene. */
function AvatarCard() {
  return (
    <div className="absolute left-1/2 top-[16%] w-[24%] -translate-x-1/2 rotate-[-6deg] rounded-[6px] bg-paper p-1.5 shadow-[0_10px_18px_-12px_rgb(89_70_74/0.7)]">
      <div className="aspect-square w-full rounded-[3px] bg-gradient-to-br from-blush via-paper to-sky" />
      <div className="mx-auto mt-1 h-1 w-3/5 rounded-full bg-ink/10" />
    </div>
  );
}

export function StorySceneArt({ variant }: { variant: SceneIllustration }) {
  if (variant === "avatar") {
    return (
      <ScenePanel tone="blush" hills="sage">
        <AvatarCard />
        <div className="absolute bottom-[3%] left-[1%] w-[46%]">
          <Person kind="female" pose="offer" mood="look" />
        </div>
        <div className="absolute bottom-[3%] right-[1%] w-[46%]">
          <Person kind="male" pose="wave" mood="soft" mirrored />
        </div>
        <Flower tone="rose" className="absolute bottom-[30%] left-[6%] w-[8%]" />
        <Sprig className="absolute bottom-[26%] right-[6%] w-[6%] opacity-80" flip />
      </ScenePanel>
    );
  }

  if (variant === "conversation") {
    return (
      <ScenePanel tone="sky" hills="sky">
        <div className="absolute left-[16%] top-[12%] flex gap-1.5 rounded-[18px] rounded-bl-[4px] bg-paper/90 px-3.5 py-2.5 shadow-[0_10px_20px_-18px_rgb(89_70_74/0.8)]">
          <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
        </div>
        <div className="absolute right-[14%] top-[24%] flex gap-1.5 rounded-[18px] rounded-br-[4px] bg-paper/90 px-3.5 py-2.5 shadow-[0_10px_20px_-18px_rgb(89_70_74/0.8)]">
          <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
        </div>
        <div className="absolute bottom-[3%] left-[2%] w-[45%]">
          <Person kind="female" pose="sit" mood="soft" />
        </div>
        <div className="absolute bottom-[3%] right-[2%] w-[45%]">
          <Person kind="male" pose="offer" mood="look" mirrored />
        </div>
      </ScenePanel>
    );
  }

  return (
    <ScenePanel tone="peach" hills="sage">
      <Flower tone="peach" className="absolute bottom-[34%] left-[8%] w-[10%]" stem />
      <Flower tone="rose" className="absolute bottom-[30%] right-[10%] w-[9%]" stem />
      <div className="absolute bottom-[2%] left-1/2 w-[86%] -translate-x-1/2">
        <Couple femalePose="sit" malePose="sit" femaleMood="soft" maleMood="smile" gap={-6} together />
      </div>
      <Sprig className="absolute bottom-[26%] right-[2%] w-[7%] opacity-80" />
    </ScenePanel>
  );
}

/**
 * Late-afternoon garden used behind Chapter 06. Rendered as a full-bleed band
 * so the ending feels like stepping outside rather than another card.
 */
export function SunsetGarden({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FBE3D8] via-[#F8DBDF] to-[#F3E7DE]">
      <div
        className="pointer-events-none absolute left-1/2 top-[8%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#F9D9B6] opacity-70 blur-[2px] sm:h-56 sm:w-56"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#EBD9C9] to-transparent" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
