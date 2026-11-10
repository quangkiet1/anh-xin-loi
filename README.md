# A Little World For You

A single-page illustrated apology gift: six chapters, two watercolour characters, the owner's
real photos, and small discoveries (a secret letter, a flower garden, five hidden hearts).
Built with Next.js 15 (App Router), React 19, Tailwind CSS v4 and Motion.

The design and copy source of truth is
`A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
npm run typecheck
```

## Personalise before sending

1. **Names, signature, date** — `src/data/site-content.ts` (`[TÊN ANH]`, `[TÊN EM]`,
   `[CHỮ KÝ CỦA ANH]`, `[NGÀY GỬI THƯ]`). The letter and Chapter 06 copy live in the same file;
   do not rewrite the canonical paragraphs.
2. **Photo captions** — `src/data/memories.ts`. Every caption is `[CHÚ THÍCH]` on purpose.
   Until you write one, the card shows a neutral `MEMORY 0N` label.
3. **Photos** — replace the source JPGs in `kỉ niệm/` (kept out of git) or edit the file map in
   `scripts/convert-memories.mjs`, then run:

   ```bash
   npm run memories   # 1200px WebP, q80, EXIF/GPS stripped → public/images/memories/
   ```

   Grid shows `memory-01/02/03/05`; the lightbox includes all five.
4. **Fonts** — Playfair Display, Nunito and Pacifico only, all with the `vietnamese` subset.
   Do not add Caveat: it has no Vietnamese subset and diacritics fall back.

## Privacy checklist (required)

The photos show identifiable people plus a student ID card and a university uniform logo.

- [x] Originals are not served from `public/` and are git-ignored.
- [x] WebP conversion strips EXIF/GPS.
- [x] `robots: noindex, nofollow` is set in `src/app/layout.tsx`.
- [ ] **Blur or crop the ID card and the uniform logo in the delivered photos** — this is the
      owner's decision per photo and has not been applied. Check each frame at full size.
- [ ] Share through an unguessable URL or Vercel password protection.

## Structure

```
src/app/                 layout, page composition, global styles, icon
src/components/          entrance, letter, story, memories, promises, ending,
                         effects, illustrations, layout, ui
src/data/                site-content, memories, interludes (canonical copy)
src/hooks/               useReducedMotion, useDialog (focus trap + Escape)
src/lib/                 assets, motion tokens, utilities
scripts/                 convert-memories.mjs
```

All chapters are readable by scrolling alone. Nothing is sent anywhere; the hug confirmation
is local state only.
