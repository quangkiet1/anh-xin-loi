import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * The two illustrated characters.
 *
 * Design contract (MASTER-PROMPT §5): face, hair and dominant clothing colour
 * never change between sections — only expression and pose do. Both are drawn
 * with flat watercolour-adjacent shapes on a shared 180×210 grid so scenes can
 * line them up without guessing offsets.
 *
 * Her look is abstracted from the photos only loosely (bob + round glasses);
 * no university logo, no ID card, nothing identifying is reproduced.
 */

export type PersonKind = "female" | "male";
export type PersonPose = "sit" | "offer" | "hug" | "wave";
export type PersonMood = "smile" | "soft" | "shy" | "look";

interface PersonProps {
  kind: PersonKind;
  pose?: PersonPose;
  mood?: PersonMood;
  /** Flip horizontally so the pair can face each other. */
  mirrored?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Only pass a value when the character carries meaning in context. */
  title?: string;
}

const palette = {
  hairFemale: "#3B3033",
  hairMale: "#241E20",
  skinFemale: "#F7D9C6",
  skinMale: "#EFCBAC",
  skinFemaleShade: "#EFC9B4",
  skinMaleShade: "#E6BF9F",
  top: "#FFFDF9",
  trim: "#A9C0DA",
  jacket: "#2E282A",
  lapel: "#3B3436",
  tee: "#FBF6F1",
  featureFemale: "#3A2F33",
  featureMale: "#2A2225",
  blush: "#E39AA0",
  frame: "#7F6668",
  mouth: "#B4707A",
  shadow: "#59464A",
} as const;

function Eyes({ kind, mood }: { kind: PersonKind; mood: PersonMood }) {
  const color = kind === "female" ? palette.featureFemale : palette.featureMale;
  const left = kind === "female" ? 76.5 : 77;
  const right = kind === "female" ? 103.5 : 103;

  if (mood === "soft") {
    return (
      <g stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d={`M${left - 3.2} 88.5q3.2 -3.2 6.4 0`} />
        <path d={`M${right - 3.2} 88.5q3.2 -3.2 6.4 0`} />
      </g>
    );
  }

  const shift = mood === "look" ? 1.8 : 0;

  return (
    <g fill={color}>
      <ellipse cx={left + shift} cy={88} rx={2.5} ry={2.9} />
      <ellipse cx={right + shift} cy={88} rx={2.5} ry={2.9} />
    </g>
  );
}

function Mouth({ mood }: { mood: PersonMood }) {
  const paths: Record<PersonMood, string> = {
    smile: "M84.5 103.5q5.5 5.5 11 0",
    soft: "M85.5 103.6q4.5 4 9 0",
    shy: "M86.5 104q3.5 3 7 0",
    look: "M85.5 103.8q4.5 3.4 9 0",
  };

  return (
    <path
      d={paths[mood]}
      stroke={palette.mouth}
      strokeWidth="2.1"
      strokeLinecap="round"
      fill="none"
    />
  );
}

function Arms({ kind, pose }: { kind: PersonKind; pose: PersonPose }) {
  const skin = kind === "female" ? palette.skinFemale : palette.skinMale;
  const sleeve = kind === "female" ? skin : palette.jacket;
  const width = kind === "female" ? 10 : 11.5;

  const paths: Record<PersonPose, [string, string]> = {
    sit: ["M67 140c-9 9-12 20-10 31", "M113 140c9 9 12 20 10 31"],
    offer: ["M67 140c-9 9-12 20-10 31", "M113 141c14-3 26-8 36-16"],
    hug: ["M67 141c-8 10-8 21-1 28", "M113 141c13 3 22 10 23 22"],
    wave: ["M67 140c-9 9-12 20-10 31", "M113 140c11-7 17-19 16-31"],
  };

  const [left, right] = paths[pose];

  return (
    <g stroke={sleeve} strokeWidth={width} strokeLinecap="round" fill="none">
      <path d={left} />
      <path d={right} />
      {kind === "male" ? (
        <g fill={skin} stroke="none">
          <circle cx={57} cy={173} r={5.4} />
          <circle cx={pose === "offer" ? 150 : pose === "wave" ? 129 : 123} cy={pose === "offer" ? 124 : pose === "wave" ? 108 : 173} r={5.4} />
        </g>
      ) : null}
    </g>
  );
}

export function Person({
  kind,
  pose = "sit",
  mood = "smile",
  mirrored = false,
  className,
  style,
  title,
}: PersonProps) {
  const isFemale = kind === "female";
  const skin = isFemale ? palette.skinFemale : palette.skinMale;
  const neckShade = isFemale ? palette.skinFemaleShade : palette.skinMaleShade;
  const blushOpacity = mood === "shy" ? 0.6 : 0.4;

  return (
    <svg
      viewBox="0 0 180 210"
      className={cn("h-auto w-full overflow-visible", className)}
      style={style}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <g transform={mirrored ? "translate(180 0) scale(-1 1)" : undefined}>
        <ellipse cx="90" cy="200" rx="55" ry="7" fill={palette.shadow} opacity="0.07" />

        {isFemale ? (
          <>
            {/* shoulder-length bob */}
            <path
              d="M45 98c0-29 20-50 45-50s45 21 45 50v42c0 9-11 11-13 3l-4-16H62l-4 16c-2 8-13 6-13-3z"
              fill={palette.hairFemale}
            />
            <ellipse cx="90" cy="86" rx="33" ry="36" fill={skin} />
            <path
              d="M58 73c1-21 15-33 32-33s31 12 32 33c-3-12-9-19-17-21-7 9-21 12-33 9-8-1-13 4-14 12z"
              fill={palette.hairFemale}
            />
            <rect x="83" y="115" width="14" height="17" rx="6" fill={neckShade} />
            {/* shirt with the blue trim from the photos, logo-free */}
            <path
              d="M90 128c-18 2-30 14-34 32-3 12-4 20-2 24 1 3 4 4 8 4h56c4 0 7-1 8-4 2-4 1-12-2-24-4-18-16-30-34-32z"
              fill={palette.top}
            />
            <path
              d="M54 179h72c1 4 1 7 0 9-1 3-4 4-8 4H62c-4 0-7-1-8-4-1-2-1-5 0-9z"
              fill={palette.trim}
            />
            <path
              d="M80 129c4 6 7 9 10 9s6-3 10-9"
              stroke="#E6D6D4"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <Arms kind={kind} pose={pose} />
            <g stroke={palette.frame} strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.3">
              <rect x="65" y="78" width="23" height="18" rx="8" />
              <rect x="92" y="78" width="23" height="18" rx="8" />
            </g>
            <path d="M88 86h4" stroke={palette.frame} strokeWidth="1.5" strokeLinecap="round" />
            <Eyes kind={kind} mood={mood} />
            <ellipse cx="64" cy="99" rx="8" ry="4.6" fill={palette.blush} opacity={blushOpacity} />
            <ellipse cx="116" cy="99" rx="8" ry="4.6" fill={palette.blush} opacity={blushOpacity} />
            <Mouth mood={mood} />
          </>
        ) : (
          <>
            <ellipse cx="59" cy="90" rx="4.6" ry="6" fill={neckShade} />
            <ellipse cx="121" cy="90" rx="4.6" ry="6" fill={neckShade} />
            <ellipse cx="90" cy="88" rx="32" ry="35" fill={skin} />
            <path
              d="M54 84c0-27 16-43 36-43s36 16 36 43c-5-11-11-17-19-19-8 6-23 7-33 3-10 1-16 6-20 16z"
              fill={palette.hairMale}
            />
            <path
              d="M74 57c5-6 15-6 20-1-6 3-14 4-20 1z"
              fill={palette.hairMale}
              opacity="0.85"
            />
            <rect x="84" y="117" width="13" height="16" rx="5.5" fill={neckShade} />
            <path
              d="M90 127c-19 2-31 15-35 34-2 11-2 19-1 23 1 3 4 4 8 4h56c4 0 7-1 8-4 1-4 1-12-1-23-4-19-16-32-35-34z"
              fill={palette.jacket}
            />
            <path d="M79 128l11 20 11-20 6 3-11 24H84l-11-24z" fill={palette.lapel} />
            <path d="M84 128h12l-6 14z" fill={palette.tee} />
            <path
              d="M90 150v45"
              stroke="#4A4345"
              strokeWidth="1.2"
              opacity="0.75"
              strokeLinecap="round"
            />
            <Arms kind={kind} pose={pose} />
            <g stroke={palette.featureMale} strokeWidth="2.2" strokeLinecap="round" fill="none">
              <path d="M71 76q4.5-2.6 9 0" />
              <path d="M100 76q4.5-2.6 9 0" />
            </g>
            <Eyes kind={kind} mood={mood} />
            <path
              d="M90 92v5.5q2.6 1.6 0 3"
              stroke={palette.skinMaleShade}
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <Mouth mood={mood} />
          </>
        )}
      </g>
    </svg>
  );
}

interface CoupleProps {
  /** gap in viewBox units between the two characters */
  gap?: number;
  className?: string;
  femalePose?: PersonPose;
  femaleMood?: PersonMood;
  malePose?: PersonPose;
  maleMood?: PersonMood;
  /** Characters lean toward each other when true. */
  together?: boolean;
}

/**
 * A pair arranged on one grid. Width is derived from the 180-unit character
 * grid plus the gap so the two never drift apart at different screen sizes.
 */
export function Couple({
  gap = 6,
  className,
  femalePose = "sit",
  femaleMood = "smile",
  malePose = "sit",
  maleMood = "smile",
  together = false,
}: CoupleProps) {
  const width = 180 + gap + 180;

  return (
    <svg
      viewBox={`0 0 ${width} 210`}
      className={cn("h-auto w-full overflow-visible", className)}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <g transform={together ? "translate(6 0)" : undefined}>
        <Person kind="female" pose={femalePose} mood={femaleMood} />
      </g>
      <g transform={`translate(${180 + gap} 0)`}>
        <Person kind="male" pose={malePose} mood={maleMood} mirrored />
      </g>
    </svg>
  );
}
