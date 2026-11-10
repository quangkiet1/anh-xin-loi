# Design System — A Little World For You

## 1. Creative direction
A gentle watercolor storybook mixed with a romantic scrapbook. It should feel handmade, warm, intimate, and sincere. Avoid generic SaaS layouts, glossy gradients, excessive glassmorphism, or loud saturated pink.

## 2. Color tokens
| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#FFF9F2` | Main page background |
| `--color-paper` | `#FFFDF9` | Letter/card surface |
| `--color-blush` | `#F7DCE2` | Soft section tint |
| `--color-rose` | `#D98FA0` | Primary accent |
| `--color-rose-deep` | `#8F4F60` | Display accents and short emphasis text (≈5.4:1 on cream) |
| `--color-peach` | `#F5C7AE` | Secondary accent |
| `--color-sky` | `#DCEAF2` | Cool contrast |
| `--color-sage` | `#C8D2BE` | Botanical accent |
| `--color-ink` | `#59464A` | Main text |
| `--color-muted` | `#7A6466` | Secondary text (darkened for AA contrast) |

Keep text contrast readable. Body and UI text use `--color-ink` or `--color-muted` only. `--color-rose`, `--color-peach`, and `--color-sage` are decoration and never carry text. The original editorial rose `#A85F72` is ≈4.4:1 on cream, so if it is used at all it is limited to large text.

## 3. Typography
All faces must be loaded with the `vietnamese` subset. Caveat has no Vietnamese subset and must not be imported.

- Display / headings: `Playfair Display`.
- Body: `Nunito`.
- Handwritten accent: `Pacifico` only, used sparingly for short signatures and notes (single weight 400; no synthetic bold). A second handwritten face is allowed only if it ships a `vietnamese` subset (e.g. `Dancing Script`).
- Use `next/font/google` with `display: 'swap'` if the environment supports it; otherwise provide sensible serif/sans fallbacks.

## 4. Shape language
- Cards: rounded 20–28px.
- Buttons: pill or softly rounded 999px.
- Letter panels: paper-like border, subtle shadow, slightly imperfect decorative edges using CSS.
- Polaroids: white border, slight rotation, soft shadow.
- Use tiny watercolor-like decorations sparingly.

## 5. Layout
- Mobile-first.
- Main content max width: 1080–1160px.
- Comfortable reading width: 620–720px.
- Section spacing: generous, approximately 88–120px desktop and 56–76px mobile.
- Use a clear vertical narrative; avoid a dense dashboard-like layout.

## 6. UI rules
- One primary action per section.
- Buttons must have clear labels and visible focus states.
- Do not auto-play audio.
- Do not force the recipient to click, answer, or complete a task.
- All important text must remain readable without animation.
- Provide reduced-motion support.
