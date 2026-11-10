export interface Memory {
  id: string;
  src: string;
  /** Real description of the photo content — never a fabricated moment. */
  alt: string;
  /** Owner-editable caption. Stays a placeholder until the owner writes it. */
  caption: string;
  /** Slight scrapbook tilt, in degrees. */
  rotation: number;
  /** Shown as a card in the grid. Non-featured photos are lightbox-only. */
  featured: boolean;
}

export type CommitmentIcon = "listen" | "appreciate" | "action";

export interface Commitment {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: CommitmentIcon;
}

export type SceneIllustration = "avatar" | "conversation" | "garden";

export interface StoryScene {
  id: string;
  step: string;
  title: string;
  body: string;
  illustration: SceneIllustration;
}

export interface GardenNote {
  id: string;
  /** Accessible label describing the flower that hides this note. */
  ariaLabel: string;
  text: string;
}

export interface HeartNote {
  id: string;
  ariaLabel: string;
  text: string;
}
