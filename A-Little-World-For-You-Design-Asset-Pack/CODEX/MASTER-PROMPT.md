# MASTER PROMPT — A LITTLE WORLD FOR YOU
### Single source of truth for design, copy, and implementation

> **This file is the only instruction set.** It merges the earlier English `CODEX/MASTER-PROMPT.md` with the longer Vietnamese specification. If any other file in this pack contradicts it, this file wins.
>
> Precedence: **this file → `DESIGN/` and `ANIMATIONS/` → `STORY/` → `ASSETS/` reference boards.**
>
> The `STORY/*.md` files are kept for reference only. Where this file and a chapter file disagree, follow this file and update the chapter file afterwards. Conflicts already resolved here:
> - Chapter 06 button direction: **“Nhận cái ôm của anh”** (he gives, she receives). The old “Gửi anh một cái ôm” label was retired and `STORY/chapter-06.md` has been aligned.
> - Chapter 03 Scene 1 wording follows `STORY/chapter-03.md`.
> - Chapter 01 uses the short subtitle plus the longer paragraph from `STORY/chapter-01.md`.
> - `STORY/story-overview.md` core message is superseded by §2 of this file.
> - Typography: **Pacifico only** for handwritten accents. Caveat is removed.

---

# 1. ROLE

You are a senior full-stack frontend developer, UI/UX designer, creative developer, and motion designer.

Build a complete, polished, responsive personal gift website called **A Little World For You**: a small world a boyfriend builds for his girlfriend after a misunderstanding hurt her.

This is not a commercial landing page, a dashboard, or a pre-made “sorry” template. Treat it as a creative product with its own story, art, and experience.

The most important goals:

- Make the recipient feel that the sender is sincere.
- Show that the sender actually understands what went wrong.
- Convey affection and appreciation without pressure.
- Feel surprising, sweet, and warm.
- Make the recipient feel cared for.
- Leave a lasting impression after the visit.

---

# 2. STORY CONTEXT AND CORE MESSAGE

He made the same kind of mistake twice on two consecutive days.

**Day one.** She wanted him to change his profile picture to one she liked. Her intention was care: she wanted him to have a nicer avatar. He refused and tried to defend his thinking. She was hurt.

He apologized, and they made up.

**Day two.** He brought the old topic up again and explained himself once more. He did change the avatar this time, but repeating the explanation upset her.

On reflection, he understood that the problem was never really the avatar. He had not accepted her care gently. He had focused on defending his own reasoning instead of noticing her feelings.

The website must express this understanding.

**Core message**

“Anh không muốn chỉ xin lỗi để em hết giận. Anh muốn hiểu vì sao cách anh phản ứng đã khiến em buồn, và học cách yêu em bằng sự thấu hiểu nhiều hơn.”

**Emotional arc**

1. Curiosity — a small world prepared for her.
2. Sincerity — a direct, personal apology.
3. Recognition — naming the two mistakes clearly.
4. Warmth — real memories.
5. Commitment — three realistic behavior changes.
6. Gentle closure — affection without demanding forgiveness.

**Writing rules**

- Vietnamese, using “anh” and “em”.
- Natural, warm, honest. Written like a real letter, not an essay or a marketing page.
- No melodrama, no self-pity, no grandiose promises.
- Never make the girlfriend the one at fault.
- Never demand forgiveness or set a deadline for it.
- Never guilt-trip her for not responding or not clicking something.
- Never invent dates, places, gifts, or inside jokes.

---

# 3. WORK FROM THE SUPPLIED MATERIALS

Before coding:

1. Inspect the existing repository: framework, package manager, app structure, existing work. Do not overwrite parts that already work.
2. Read every file in this pack, especially `DESIGN/`, `STORY/`, `ANIMATIONS/`, and `ASSETS/ASSET-MANIFEST.md`.
3. Inspect both concept boards in `ASSETS/ui-reference/`. They are raster collages: use them as style reference only, never as page backgrounds, and never crop regions out of them to fake production assets.
4. Inspect the real couple photos in `kỉ niệm/` at the workspace root (see §7.9).
5. If a Next.js project already exists, adapt to it. Otherwise create a clean Next.js App Router + TypeScript project.
6. Do not ask the user to re-supply anything already in this file. Use the marked placeholders for personal fields and keep building.

---

# 4. TECH STACK

- Next.js App Router
- React
- TypeScript (strict, no unnecessary `any`)
- Tailwind CSS (use the installed version; if starting fresh, use the current stable setup)
- Motion for React (`motion/react`) — check compatibility before installing
- Lucide React for interface icons only
- `next/font/google` for fonts
- Vercel as the deployment target

No database, auth, analytics, CMS, or backend. The site is static. Do not add unnecessary dependencies.

---

# 5. ART DIRECTION

**Watercolor storybook + romantic scrapbook + interactive illustration.**

Use:

- Watercolor washes, soft paper texture, hand-painted flowers.
- Watercolor clouds, hand-drawn hearts, romantic botanical illustration.
- Pastel illustration, paper cards, Polaroid frames, handwritten notes, small stickers, tiny tape strips.
- Gentle garden scenery, warm late-afternoon light.

Avoid:

- Glossy 3D, neon, hard gradients, oversaturated color.
- Inconsistent illustration styles between sections.
- Excessive glassmorphism.
- Pale pink body text.

**Characters.** Two illustrated humans must appear consistently throughout: one young man (the sender), one young woman (the recipient). Keep face, hair, and dominant clothing color consistent in every appearance. Expressions and poses may vary: smiling, shy, gently sad, apologizing, handing over a letter, holding hands, hugging, sitting side by side, looking at each other, walking in a flower garden. See §7.9 for deriving their look from the real photos — only with the couple’s consent.

Never distort faces with uncontrolled transforms.

---

# 6. DESIGN SYSTEM

## 6.1 Color tokens

| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#FFF9F2` | Main background |
| `--color-paper` | `#FFFDF9` | Letter and card surface |
| `--color-blush` | `#F7DCE2` | Secondary background |
| `--color-rose` | `#D98FA0` | Accent, decoration only — never text |
| `--color-rose-deep` | `#8F4F60` | Display accents and short emphasis text (≈5.4:1 on cream) |
| `--color-peach` | `#F5C7AE` | Decoration |
| `--color-sky` | `#DCEAF2` | Secondary background |
| `--color-sage` | `#C8D2BE` | Foliage, decoration only — never text |
| `--color-ink` | `#59464A` | Main text |
| `--color-muted` | `#7A6466` | Secondary text (darkened for contrast) |

Color balance: 55% cream/paper, 20% blush, 10% peach, 10% sky + sage, 5% rose accent. Alternate backgrounds between sections so the page never becomes uniformly pink.

**Contrast constraints (WCAG AA, verified against the backgrounds in this palette):**

- Body and UI text: `--color-ink` or `--color-muted` only. Both pass 4.5:1 on cream, paper, blush, and sky.
- `--color-rose-deep` (`#8F4F60`, ≈5.4:1 on cream) may carry short text at any size. The softer editorial rose `#A85F72` from the original palette is ≈4.4:1 and is therefore limited to **large text only**; the token is darkened so neither case fails AA.
- Never place `--color-rose`, `--color-peach`, or `--color-sage` as text color on any light surface.

## 6.2 Typography — Vietnamese diacritics are mandatory

All three faces must be loaded with the **`vietnamese` subset** from `next/font/google`:

| Role | Font | Rule |
|---|---|---|
| Display / headings | **Playfair Display** | Titles, chapter headings |
| Body | **Nunito** | All long-form text, UI, captions, buttons |
| Handwritten accent | **Pacifico** | Signature, tiny notes, decorative lines only |

Hard rules:

- **Pacifico is the only handwritten face.** `Caveat` must not be imported: it has no Vietnamese subset, so names and letters with diacritics would silently fall back to another face and look broken.
- Pacifico ships in a single weight (400). Do not fake bold with synthetic weights; use size and color for emphasis instead.
- Pacifico is never used for body copy or headings longer than a short phrase.
- If a second handwritten face is ever needed, use **Dancing Script** (it has a `vietnamese` subset). Do not substitute any face lacking that subset.
- Validation rule: every handwritten-styled string containing Vietnamese diacritics must render in a face that declares the `vietnamese` subset. If not, change the font, not the copy.
- Provide `display: 'swap'` and sensible fallbacks: serif → Georgia; sans → system-ui; handwriting → Pacifico only.

## 6.3 Shape and UI

- Card radius 20–28px; buttons pill (999px).
- Soft paper shadows, thin refined borders.
- Polaroids: white border, slight rotation, soft shadow.
- Letter: paper-like panel with subtle edge imperfection built in CSS.
- Glassmorphism: at most one small element.
- One primary action per section. Every button must do something real.

---

# 7. WEBSITE STRUCTURE

Single page, six chapters, plus small interlude features. Each chapter reveals on scroll. Nothing important is gated behind a click.

**Accessibility rule for the whole page:** all six chapters and every piece of the apology must be readable by simply scrolling, even if the recipient never opens the envelope, never taps a flower, and never finds a heart. Interaction adds warmth; it is never a prerequisite.

## CHAPTER 01 — THE LITTLE ENTRANCE

Idea: the door into a small world made only for her.

Visual: cream background; a watercolor envelope at the center; the two small characters at the sides or below; flowers and hearts around; a few slow moving details.

Copy:

- Paragraph (larger, `--color-muted`): “Anh có một điều nhỏ muốn gửi em. Không phải điều gì quá lớn lao, chỉ là một góc nhỏ anh chuẩn bị bằng tất cả sự chân thành.”
- Title: **A Little World For You**
- Subtitle: “Anh có một điều nhỏ muốn gửi em…”
- Button: **Mở món quà nhỏ**

Interaction on button click:

1. The envelope flap opens around its top edge.
2. A letter slides up out of it.
3. A few petals and hearts drift out.
4. The page scrolls smoothly to Chapter 02.

The envelope must be visible and still from the start — do not animate the envelope “appearing” after load. No long loading screen. If the button is never pressed, the site still works by scrolling.

## CHAPTER 02 — A LETTER FOR YOU

Idea: a love letter written on cream paper.

Visual: one large paper panel with paper texture, a small flower at the corner, a decorative stamp or pen, a handwritten signature; the two characters may appear beside the letter.

Copy (canonical — use exactly):

> Gửi cô gái anh thương,
>
> Anh biết hai ngày vừa rồi anh đã làm em buồn đến hai lần. Điều khiến anh thấy có lỗi là em chỉ muốn quan tâm, muốn anh có một chiếc avatar đẹp hơn, nhưng anh lại vội vàng từ chối và cố giải thích theo suy nghĩ của mình.
>
> Đến ngày hôm sau, anh lại tiếp tục giải thích thêm một lần nữa. Dù cuối cùng anh vẫn đổi avatar theo ý em, anh hiểu rằng việc làm theo thôi chưa đủ nếu anh vẫn chưa thật sự lắng nghe cảm xúc của em.
>
> Anh xin lỗi vì đã khiến một chuyện nhỏ trở thành điều làm em buồn. Anh nhận ra em không nhất thiết cần anh phải đồng ý ngay với mọi thứ; điều em xứng đáng nhận được là sự lắng nghe và thái độ trân trọng khi em muốn làm điều gì đó cho anh.
>
> Anh sẽ cố gắng chậm lại, lắng nghe nhiều hơn và không vội giải thích chỉ để bảo vệ suy nghĩ của mình. Anh muốn thể hiện điều đó bằng cách cư xử của anh, chứ không chỉ bằng lời nói hôm nay.
>
> Cảm ơn em vì những quan tâm nhỏ bé mà đôi khi anh đã chưa nhận ra đúng lúc.
>
> **Anh thương em.**

Postscript (smaller, `--color-muted`): “P.S. Em không cần phải hết giận ngay sau khi đọc những dòng này. Anh chỉ muốn em biết anh thật lòng xin lỗi.”

Signature block: `[CHỮ KÝ CỦA ANH]` in Pacifico, `[NGÀY GỬI THƯ]` beneath.

Interaction: letter fades in, paragraphs reveal in small groups, signature draws in, optional heart seal. No slow typewriter effect — the recipient must never wait to read.

## CHAPTER 03 — WHAT I DIDN'T REALIZE

Idea: the two days and what he understood.

Visual: an illustrated timeline with three scenes. Reveal on scroll; characters enter per scene; foliage moves gently; soft transitions.

Scene 1 — Ngày đầu tiên. Image: she offers an avatar choice, he refuses.

> “Em muốn chọn cho anh một chiếc avatar đẹp hơn. Nhưng anh đã từ chối và cố giải thích, thay vì đón nhận sự quan tâm ấy một cách nhẹ nhàng.”

Scene 2 — Ngày thứ hai. Image: the two talking, he explains again.

> “Sau khi hai đứa đã làm hòa, anh lại nhắc và giải thích thêm một lần nữa. Anh nghĩ mình chỉ muốn em hiểu, nhưng anh đã không để ý rằng điều đó có thể khiến em cảm thấy chuyện cũ lại bị khơi lên.”

Scene 3 — Điều anh nhận ra. Image: the two sitting side by side in a garden.

> “Anh hiểu rằng đôi khi điều quan trọng không phải là ai đúng trong một chuyện nhỏ, mà là cách mình lắng nghe và đối xử với cảm xúc của nhau. Anh có thể có sở thích riêng, nhưng anh cũng cần biết đón nhận sự quan tâm của em bằng sự dịu dàng.”

Never depict her as angry or aggressive. Both characters keep gentle, neutral expressions and end in understanding.

This chapter also hosts the **Secret Letter** interlude (see §8.1).

## CHAPTER 04 — OUR LITTLE MEMORIES

Idea: a scrapbook of the two of them.

Visual: Polaroid-style gallery, white frames, slight rotations, small stickers, paper notes. Mount the gallery on a `--color-sky` band with warm paper matting and tape strips: the photos are night shots with flash, so a cool pale background and paper framing integrate them far better than another cream section or a heavy filter.

**The owner has supplied five real photos in `kỉ niệm/` at the workspace root.** Use them — do not fall back to placeholders.

| Id | Source file (prefix) | Moment |
|---|---|---|
| `memory-01` | `1794239319020_5750092021923418156_…3bca7385b839f0bd671a809d1d82036b.jpg` | Both facing camera, she gives a peace sign |
| `memory-02` | `1794239319070_5750092021923418156_…5a7277c83a29ce9b167f0190c151acbf.jpg` | Her hand at her cheek, his head leaning toward her |
| `memory-03` | `1794239319091_5750092021923418156_…ce0b43bb9f59c23e8b12a3e8aace82fc.jpg` | She pouts playfully, he looks at her |
| `memory-04` | `1794239319111_5750092021923418156_…ccf99ab444d0bdbb89413a9d9122b233.jpg` | Same pose as `memory-03`, closer — near-duplicate |
| `memory-05` | `1794239319174_5750092021923418156_…8104a88d17a5a6dc2b7c23a1d451d6ee.jpg` | Different angle, her hand at her cheek, him grinning behind |

Pipeline requirements:

1. Do not serve the originals from `public/`. Copy them to `public/images/memories/` with clean ASCII names. Because `kỉ niệm` contains a non-ASCII directory name and the JPGs contain no useful naming, always use absolute paths when copying and verify each copy exists.
2. Convert to WebP at roughly 1200px on the long edge, quality ≈ 80. This also drops EXIF metadata. Keep the JPGs out of the repo.
3. Originals are about 3:2. Use a **3:2 instant-photo frame** and `object-fit: contain` with the no-crop rule — never crop a person out of frame.

Gallery: show **four cards** in the grid (`memory-01`, `memory-02`, `memory-03`, `memory-05`). Put all five in the lightbox so the near-duplicate `memory-04` stays available without taking a card slot.

Data (`src/data/memories.ts`):

```ts
export type Memory = {
  id: string;
  src: string;
  alt: string;        // real description of the photo content
  caption: string;    // [CHÚ THÍCH] — editable by the owner
  rotation: number;   // -3 to 3 degrees
};

export const memories: Memory[] = [
  { id: 'memory-01', src: '/images/memories/memory-01.webp', alt: '…', caption: '[CHÚ THÍCH]', rotation: -2 },
  // …one entry per supplied photo
];
```

Copy rules for this section:

- Captions are `[CHÚ THÍCH]` placeholders. Do not write emotional captions or invent the occasion, the date, or the place.
- A short owner-facing note may invite them to fill in the four captions.
- If photos are ever missing, render elegant watercolor placeholder cards (`MEMORY 01`…) rather than inventing memories.
- Alt text must describe what is actually visible (e.g. “Hai người ngồi trên bãi cỏ trong công viên về đêm”). Decorative stickers get empty alt.

Interaction: hover lifts and tilts the card slightly; click/tap opens a lightbox with close button, Escape, arrow-key and swipe navigation, focus trap, and focus restored to the trigger on close. Every control in the lightbox is ≥44px.

## CHAPTER 05 — THINGS I WANT TO DO BETTER

Idea: three small promises that matter.

Visual: three separate watercolor cards; sequential reveal with a slight scale; watercolor icon or small illustration each; no complicated flip effects.

**01 — Lắng nghe trước khi giải thích**
“Khi em chia sẻ điều gì, anh sẽ cố gắng nghe hết và hiểu cảm xúc của em trước khi đưa ra lý do hay quan điểm của mình.”

**02 — Trân trọng sự quan tâm**
“Anh sẽ để ý hơn đến ý tốt phía sau những điều nhỏ em làm, thay vì chỉ nhìn vào việc mình có thích hay không.”

**03 — Thay đổi bằng hành động**
“Anh không muốn hứa thật nhiều. Anh muốn bắt đầu bằng những việc nhỏ, thực tế và duy trì chúng mỗi ngày.”

These are commitments, not a demand that she trust or forgive him immediately.

## CHAPTER 06 — A HUG FOR YOU

Idea: a warm closing scene.

Background: a small garden in late afternoon — pink-orange sky, small flowers, the two characters standing together or hugging, soft light, a few hearts rising.

Copy:

- Heading: **Một cái ôm nhỏ dành cho em**
- Body:
  > “Nếu hôm nay em vẫn còn giận, anh hiểu.
  >
  > Em không cần phải vui lên ngay hay phải trả lời anh ngay lúc này.
  >
  > Anh chỉ mong em biết rằng anh thật lòng xin lỗi, trân trọng em và muốn học cách yêu em bằng sự thấu hiểu nhiều hơn.
  >
  > Khi nào em muốn, cho anh gửi em một cái ôm nhé.”

**Direction of the hug: he gives, she receives.** The body says “cho anh gửi em một cái ôm”, so the button must move in the same direction. The old “Gửi anh một cái ôm” button reversed it and is retired.

- Button: **Nhận cái ôm của anh**
- Optional secondary text link, quiet and non-demanding: “Khi nào em muốn, em gửi lại anh một cái ôm cũng được.” This is text, not a second primary action.

On click:

1. The two characters move toward each other.
2. A watercolor heart blooms between them.
3. Petals drift.
4. Confirmation appears: **“Anh đã gửi em một cái ôm. Cảm ơn em ❤️”**

Nothing is sent anywhere. Do not imply a real message was transmitted, and show no follow-up, no counter, and no guilt if she never clicks.

---

# 8. INTERLUDE FEATURES

Small details that make the world feel alive. All are optional for the visitor and never gate content.

## 8.1 Secret Letter

A small closed envelope tucked into Chapter 03, near Scene 3.

- Trigger: a small envelope button, `aria-label="Mở lá thư nhỏ bí mật"`, keyboard accessible, opens a small card over a soft scrim; Escape closes it; focus is trapped while open and restored on close.
- Never auto-open. It must look like a deliberate discovery, not a modal ad.
- Copy (canonical — **do not rewrite**):

  > “Anh giấu một điều nhỏ ở đây, vì anh chưa nói ra được.
  >
  > Anh không muốn em hiểu anh hơn. Anh muốn hiểu em hơn.
  >
  > Nếu một ngày em đọc lại những dòng này và thấy anh có tiến bộ hơn một chút, đó là điều anh đang cố làm mỗi ngày.”

- Keep the copy in `site-content.ts` so it stays editable. If the owner adds their own line later, replace this text rather than appending.

## 8.2 Little Flower Garden

A quiet strip between Chapter 05 and Chapter 06 — not a seventh chapter.

- 6–8 SVG watercolor flowers in sage, peach, and soft rose.
- Flowers open in sequence over time, swaying gently with staggered delays.
- At least half are just decoration, with no interaction.
- Three flowers are tappable and show a short note on tap and click. Their copy (canonical):

  1. “Anh sẽ nhớ là em luôn để ý đến anh, kể cả trong những chuyện nhỏ nhất.”
  2. “Lần sau anh sẽ dừng lại một nhịp trước khi giải thích.”
  3. “Anh thích được em chăm sóc. Anh chỉ cần nhớ đón nhận nó dịu dàng hơn.”

- Interactive flowers need a ≥44px hit area, an `aria-label`, and a visible focus ring. Their notes must also appear on tap, never hover-only.
- Do not require finding all three.

## 8.3 Hidden Hearts

Place one tiny rose-colored heart in five places: the Chapter 01 background, the Chapter 03 timeline, the end of the letter, the Chapter 04 scrapbook, and near the closing button.

- Each heart is a button with an `aria-label`, keyboard focusable, with a ≥44px hit area around a visually small glyph.
- Discovered copy (canonical):

  1. “Em là người duy nhất được ở trong thế giới nhỏ này.”
  2. “Anh viết đi viết lại lá thư này mấy lần, vì sợ nói không đủ.”
  3. “Điều anh học được: em không cần anh thắng, em cần anh hiểu.”
  4. “Trang này là nhờ em — những bức ảnh em chụp và những ngày em còn ở đây.”
  5. “Anh không cần thắng một cuộc tranh luận nào nữa.”

- Never gate progress, show a counter, or reveal a “you found all of them” state. If a heart is never found, nothing is missing from the experience.

## 8.4 Music Player

Only if a real audio file is placed in `public/audio/`.

- Play/pause, progress bar, current state, a way to turn it off.
- Never autoplay. Smooth fade-in on play only.
- If no file exists, omit the player entirely. Do not render a disabled or fake control.

---

# 9. ANIMATION SYSTEM

Motion is essential, but must serve the story and never compete with the text or the copy.

Use Motion for React, CSS animation, and SVG animation.

## 9.1 Required motion

- **Envelope:** flap rotates on its top edge, letter slides up, soft shadow, small hearts escape.
- **Scroll reveal:** fade in, slide up, scale in, stagger. Very light parallax only if the composition needs it.
- **Floating elements:** hearts, petals, flowers, stars, butterflies — slow and natural; never dozens at once.
- **Characters:** wave, blink, tilt the head, offer the letter, hold hands, hug. Implement with light transforms on SVG/DOM. Never deform faces.
- **Gallery:** hover/tap lift and tilt; lightbox transition.
- **Finale:** heart bloom when the hug is received.

## 9.2 Performance and restraint

- Animate `transform` and `opacity`; avoid animating layout properties.
- Never cause layout shift.
- Never run continuous animation on every element.
- Reduce or disable effects on low-power devices.
- Respect `prefers-reduced-motion`. With reduced motion, the envelope still opens, the letter still appears, and the heart still confirms — just without drift or rotation.
- Interaction must remain usable when JavaScript-driven transitions are disabled.

---

# 10. IMAGE AND ASSET MANAGEMENT

```
public/
  images/
    characters/male/ female/ couple/
    backgrounds/
    illustrations/
    flowers/
    decorations/
    letters/
    memories/        ← the five real photos as WebP
    textures/
    icons/
  audio/
```

Rules:

1. One folder per asset type.
2. Descriptive file names; ASCII only.
3. WebP or AVIF for large images; PNG only for transparency; SVG for vector.
4. Never reuse one illustration for every section.
5. Never stretch images out of aspect ratio.
6. Never crop the concept boards into “new” assets.
7. Lazy-load everything below the fold; set explicit dimensions to prevent layout shift.
8. All paths live in `src/lib/assets.ts`. Nothing hardcodes a path inside JSX.

---

# 11. PROJECT ARCHITECTURE

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    entrance/EnvelopeIntro.tsx
    letter/LoveLetter.tsx
    story/StoryTimeline.tsx
    memories/MemoryGallery.tsx
    memories/MemoryLightbox.tsx
    promises/PromiseCards.tsx
    ending/HugSection.tsx
    effects/SecretLetter.tsx
    effects/FloatingPetals.tsx
    effects/FloatingHearts.tsx
    effects/FlowerGarden.tsx
    effects/HiddenHearts.tsx
    music/MusicPlayer.tsx
    layout/SectionWrapper.tsx
    layout/ProgressIndicator.tsx
    ui/Button.tsx
    ui/PaperCard.tsx
    ui/SectionHeading.tsx
  data/
    site-content.ts
    memories.ts
    promises.ts
    interludes.ts
  hooks/
    useMusic.ts
    useReducedMotion.ts
  lib/
    assets.ts
    motion.ts
    utils.ts
  types/
    index.ts
```

Adapt to the existing repository if it already has a cleaner structure.

Code principles: small single-responsibility components; `page.tsx` only composes sections; data separated from view; motion separated from layout; strict TypeScript; no duplication; no global state unless required.

---

# 12. CONTENT MANAGEMENT

All personal content lives in `src/data/`, never scattered in JSX.

```ts
export const siteContent = {
  title: 'A Little World For You',
  boyfriendName: '[TÊN ANH]',
  girlfriendName: '[TÊN EM]',
  signature: '[CHỮ KÝ]',
  date: '[NGÀY GỬI]',
  subtitle: 'Anh có một điều nhỏ muốn gửi em…',
  letter: {
    greeting: 'Gửi cô gái anh thương',
    paragraphs: [ /* the six canonical paragraphs from Chapter 02 */ ],
    postscript: 'P.S. Em không cần phải hết giận ngay sau khi đọc những dòng này. Anh chỉ muốn em biết anh thật lòng xin lỗi.',
  },
  hug: {
    button: 'Nhận cái ôm của anh',
    confirmation: 'Anh đã gửi em một cái ôm. Cảm ơn em ❤️',
  },
};
```

Keep separate files for memories, captions, promises, secret letter, flower notes, and heart notes. Comment each placeholder clearly so the owner knows what to replace.

Do not invent personal details to fill a placeholder. Do not hardcode the whole site in one component.

---

# 13. RESPONSIVE DESIGN

Mobile-first. Test at 360px, 390px, 430px, 768px, 1024px, 1440px, and 1920px.

Mobile:

- Single column; readable type (body ≥16px, letter ≥17px/1.75).
- No horizontal overflow.
- Tap targets ≥44px.
- Photos never crop out a person; the 3:2 frame keeps both faces visible.
- Reduced animation complexity.
- Never depend on hover.
- Decorations never sit over text.

Desktop:

- Room for illustration; up to two columns.
- Reading width 620–720px; content max width 1080–1160px.
- Generous whitespace, large illustration scenes.

Check portrait and landscape mobile.

---

# 14. USER EXPERIENCE

- Everything readable by scrolling; no content locked behind interactions.
- The recipient can scroll back to any section.
- A progress indicator is allowed but must not imply forced progress.
- No annoying popups, no fake loading, no dead buttons, no autoplaying audio.
- A Back to Top control at the end.
- No guilt, no timers, no “you must click to continue”.

---

# 15. ACCESSIBILITY

- Semantic HTML and a logical heading hierarchy.
- Meaningful alt text for content images; empty alt for decoration.
- Full keyboard navigation with visible focus states.
- Appropriate `aria-label`s on icon-only controls.
- Lightbox and secret letter: focus trap, Escape to close, focus restored on close.
- Contrast per §6.1.
- `prefers-reduced-motion` honored.
- Handwritten Pacifico never used for essential information.

---

# 16. PERFORMANCE

- Optimize images (WebP, correct dimensions, lazy loading below the fold).
- Load only the font weights and subsets actually used.
- Minimize bundle size; avoid unnecessary libraries.
- Avoid hydration mismatches and event-listener leaks.
- No large background images.

---

# 17. DEVELOPMENT WORKFLOW

Do not build the whole site in one uncontrolled pass. Work through every phase and finish the product.

**Phase 1 — Inspection.** Repository, structure, packages, supplied images (`ASSETS/` and `kỉ niệm/`), all design docs; list what is missing. Never overwrite working code.

**Phase 2 — Design foundation.** Tokens, typography (Vietnamese subsets), global styles, base UI components, responsive foundation.

**Phase 3 — Sections.** Entrance → Letter → Timeline → Memories → Promises → Hug. Layout complete before complex motion.

**Phase 4 — Motion.** Envelope, scroll reveal, floating elements, character motion, gallery interactions, final heart bloom.

**Phase 5 — Personalization.** Names, signature, the five real photos in `public/images/memories/` as WebP, captions, letter content, music only if a file exists. Never invent personal data.

**Phase 6 — Testing** (§18).

**Phase 7 — Optimization.** Fix issues, optimize images, motion, responsive behavior, accessibility.

**Phase 8 — Deployment** (§19).

Browser/preview tools may not always be available. If you cannot inspect the rendered page, do not claim that you did; report the limitation instead.

---

# 18. TESTING REQUIREMENTS

**Functional**

- Envelope opens; letter reveals; every chapter reachable by scrolling.
- Timeline reveals in all three scenes.
- Lightbox opens and closes; previous/next works; Escape works; swipe works on mobile.
- Secret letter opens, closes, and is keyboard accessible.
- Flower notes open on tap and on click.
- All five hidden hearts respond.
- Hug button produces the bloom and the confirmation copy.
- Back to Top works.
- Music player works if and only if an audio file exists.

**Responsive.** All target widths, portrait and landscape.

**Technical.** Run the project’s lint, typecheck, and production build; fix what they report.

**Visual.** If a browser preview is available: open the site, inspect every section, check spacing, typography, color contrast, motion, and mobile. Never claim visual testing without actually inspecting it.

---

# 19. DEPLOYMENT — VERCEL

The site must be deployable as-is.

- No dependencies on files outside `public/`.
- No secrets in the client.
- No database or backend.
- Metadata (title, description), a fitting favicon, and Open Graph tags.
- Production build passes; works over HTTPS.

**Privacy (required for this project):** the supplied photos show identifiable people, plus a university uniform with a logo and a student ID card on a lanyard.

1. Crop or blur the ID card and the uniform logo, or choose frames where they are not legible.
2. Strip EXIF metadata during WebP conversion.
3. Add `noindex` (robots meta or `vercel.json` headers) so the site is not indexed.
4. Prefer an unguessable URL, or Vercel password protection if the owner wants extra privacy.

Steps:

1. Push the repository to GitHub.
2. Import into Vercel.
3. Confirm the framework preset.
4. Confirm the build command.
5. Deploy.
6. Check the live URL.
7. Check it on a phone.

Do not claim the site is deployed unless deployment actually happened.

---

# 20. ACCEPTANCE CRITERIA

Complete only when:

- All six chapters exist and form a coherent narrative.
- Vietnamese copy is sincere and matches this file.
- Watercolor + scrapbook style is consistent throughout.
- Both illustrated characters are visually consistent.
- All Vietnamese text renders in faces with the `vietnamese` subset; no fallback substitutions inside names or signatures.
- Pacifico is the only handwritten face, used only for short accents.
- Chapter 04 uses the five real photos as WebP with the 3:2 no-crop frame, four cards in the grid and all five in the lightbox.
- Captions remain editable placeholders — no invented memories, dates, or places.
- Chapter 06 reads in one direction: he gives the hug (“Nhận cái ôm của anh”).
- Secret letter, flower garden, and hidden hearts have the canonical copy and work on touch and keyboard.
- Motion is smooth, subtle, and `prefers-reduced-motion` aware.
- No horizontal overflow at any target width.
- Lightbox, secret letter, and all controls are keyboard accessible with visible focus.
- Contrast meets AA for all text.
- Lint, typecheck, and production build pass.
- Deployable to Vercel, with the privacy steps from §19 applied.

---

# 21. NON-NEGOTIABLE CREATIVE RULES

1. Do not design a template — design this couple’s little world.
2. Do not chase animation at the expense of copy.
3. Do not make everything pink.
4. Do not mix inconsistent illustration styles.
5. Do not fabricate memories.
6. Do not change the core meaning of the story.
7. Do not add decorative buttons that do nothing.
8. Do not force the recipient to interact to read the apology.
9. Do not use fast or jarring animation.
10. Do not stop at a wireframe or demo.

Prioritise subtlety, empathy, craft, and user experience. The result must feel like a gift prepared with real care, not a task completed.

---

# FINAL INSTRUCTION

Start by inspecting the repository, the design documents, the concept boards, and the real photos in `kỉ niệm/`. Then make the technical and design decisions and build the entire website in one continuous effort.

If an asset is missing, create a tasteful placeholder and keep building — do not wait.
If something breaks, diagnose it and fix it.

Deliver a real, beautiful, smooth, responsive, runnable, deployable product.

**The final experience should feel like opening a little illustrated world made with love.**

**A LITTLE WORLD FOR YOU.**
