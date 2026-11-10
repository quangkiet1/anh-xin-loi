# Asset Manifest

| File | Purpose | Production status |
|---|---|---|
| `ui-reference/01-master-watercolor-moodboard.png` | Overall art direction and mood | Reference board |
| `ui-reference/02-character-story-design-board.png` | Character, background, UI and story reference | Reference board |
| `../../kỉ niệm/*.jpg` (5 files) | Real couple photos — the only true content for Chapter 04 | Owner-supplied, usable after WebP conversion |

The boards are raster collages, not individually separated character/background layers. Use them as reference only. For animation, build DOM/SVG/CSS elements or commission/generate individual consistent assets in a later pass.

The five photos in `kỉ niệm/` are the only real memories in this project. Copy them to `public/images/memories/` as `memory-01…05.webp` (metadata stripped, 3:2 frame, no crops that remove a person) and register them in `src/data/memories.ts`. Captions are `[CHÚ THÍCH]` placeholders — do not invent them. Before publishing, review the privacy note in `CODEX/MASTER-PROMPT.md` §19 (visible university logo, ID card, and identification risk).
