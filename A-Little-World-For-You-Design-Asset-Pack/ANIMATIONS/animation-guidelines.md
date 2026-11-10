# Animation Guidelines

Use Motion (`motion/react`, current package) for orchestrated UI animation and CSS for ambient loops. Confirm the installed package API before implementation.

## Principles
- Calm, organic, slow enough to feel tender.
- Most transitions: 350–700ms.
- Ambient loops: 4–12s, low amplitude.
- Avoid excessive parallax, rapid bouncing, flashing, or constant movement behind text.
- Keep content readable if animations fail.
- Respect `prefers-reduced-motion`.

## Suggested motion recipes
1. Envelope open: flap rotates around top edge; letter rises 18–28px and fades in.
2. Petals/hearts: 3–6 small decorative elements drift upward 20–50px with varied delays; stop or simplify on mobile.
3. Section reveal: opacity 0→1 and y 18→0; once per section.
4. Polaroid gallery: tiny rotation on hover/tap; lightbox fades and scales from 0.98→1.
5. Flower garden: petals scale from 0.7→1 with stagger; do not simulate complex botanical growth if it looks artificial.
6. Final hug: small heart scales 0.85→1.08→1 and emits a few particles.

## Technical requirements
- Use `whileInView` / viewport once for section reveals.
- Avoid animating layout-heavy properties; prefer transform and opacity.
- Use `will-change` only where needed.
- Avoid dozens of simultaneous particles.
- Disable nonessential ambient animation when `prefers-reduced-motion: reduce`.
- Do not auto-play music. Audio must require explicit user action.
- Test on a mid-range mobile device profile.
