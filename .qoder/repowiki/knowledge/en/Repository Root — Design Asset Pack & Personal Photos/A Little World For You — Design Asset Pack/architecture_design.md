The pack is a documentation-and-reference bundle organized by concern rather than code:
- `DESIGN/` holds the design system, color palette, and UI guidelines that define tokens and layout rules.
- `ASSETS/ui-reference/` contains two raster concept boards (master moodboard + character/story board) plus an `ASSET-MANIFEST.md` clarifying they are reference collages, not production-ready layered assets.
- `STORY/` provides the narrative copy in six chapter files plus an overview, which the implementation consumes as initial content.
- `ANIMATIONS/animation-guidelines.md` specifies motion behavior to be implemented with Motion/CSS on DOM elements.
- `CODEX/MASTER-PROMPT.md` is the single entry point: a 223-line instruction set that tells Codex how to inspect the host Next.js repo, adopt the stack (Next.js App Router, React, TypeScript, Tailwind, motion/react, Lucide), build the six-section site, and respect asset integrity constraints.
- `README.md` is the human-facing index describing style, contents, image caveats, and the five-step workflow of dropping the folder into a Codex workspace and pasting the master prompt.
Dependency direction is one-way: the master prompt reads DESIGN, STORY, ANIMATIONS, and ASSETS; nothing in those files references back to CODEX.