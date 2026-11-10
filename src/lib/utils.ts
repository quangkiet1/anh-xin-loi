/** Tiny class-name joiner — avoids pulling in `clsx` for one helper. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Deterministic pseudo-random value in [0,1) so SSR and client agree. */
export function seeded(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Captions ship as `[CHÚ THÍCH]` until the owner writes them. Show a neutral
 * `MEMORY 0N` label instead of a bracket placeholder that looks broken.
 */
export function resolveCaption(caption: string, index: number): { text: string; isPlaceholder: boolean } {
  const isPlaceholder = caption.trim().startsWith("[");
  return {
    isPlaceholder,
    text: isPlaceholder ? `Memory ${String(index + 1).padStart(2, "0")}` : caption,
  };
}
