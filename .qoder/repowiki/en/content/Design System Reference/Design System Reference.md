# Design System Reference

<cite>
**Referenced Files in This Document**
- [README.md](file://A-Little-World-For-You-Design-Asset-Pack/README.md)
- [design-system.md](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md)
- [color-palette.md](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/color-palette.md)
- [ui-guidelines.md](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md)
- [animation-guidelines.md](file://A-Little-World-For-You-Design-Asset-Pack/ANIMATIONS/animation-guidelines.md)
- [MASTER-PROMPT.md](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md)
- [globals.css](file://src/app/globals.css)
- [layout.tsx](file://src/app/layout.tsx)
</cite>

## Update Summary
**Changes Made**
- Updated color palette specifications with WCAG AA compliant hex values
- Added detailed typography system documentation for Playfair Display, Nunito, and Pacifico fonts
- Enhanced watercolor aesthetic implementation details with specific CSS/SVG techniques
- Expanded accessibility requirements for Vietnamese diacritic support
- Added practical React component examples showing design token integration

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)
10. [Appendices](#appendices)

## Introduction
This design system reference documents the comprehensive watercolor-inspired visual identity for "A Little World For You," a romantic, story-driven website built as a personal gift experience. The system emphasizes warmth, intimacy, sincerity, and gentle storytelling over corporate or glossy UI patterns. It defines precise color tokens, a complete typography system with Vietnamese diacritic support, shape language, layout principles, UI rules, animation behavior, and accessibility expectations so that developers can implement consistent romantic interface elements across React components.

The aesthetic is built around soft watercolor washes, paper-like surfaces, warm cream backgrounds, blush pink, peach, muted rose, pale sky blue, and sage accents. Typography pairs elegant serif display faces (Playfair Display) with friendly sans-serif body text (Nunito) and uses handwritten accents sparingly (Pacifico). Layouts are mobile-first, narrative-driven, and intentionally spacious to support reading comfort and emotional pacing.

## Project Structure
The design asset pack organizes guidance into clear areas:
- `DESIGN/`: core design system, color palette, and UI/UX guidelines.
- `ANIMATIONS/`: motion principles and implementation recipes.
- `CODEX/MASTER-PROMPT.md`: end-to-end implementation instructions for building the website.
- `README.md`: overview of style direction, asset usage, and workflow.

```mermaid
graph TB
Root["Design Asset Pack"]
Design["DESIGN"]
Animations["ANIMATIONS"]
Codex["CODEX"]
Readme["README"]
Root --> Design
Root --> Animations
Root --> Codex
Root --> Readme
Design --> DS["design-system.md"]
Design --> CP["color-palette.md"]
Design --> UIG["ui-guidelines.md"]
Animations --> AG["animation-guidelines.md"]
Codex --> MP["MASTER-PROMPT.md"]
```

**Diagram sources**
- [README.md:12-17](file://A-Little-World-For-You-Design-Asset-Pack/README.md#L12-L17)
- [design-system.md:1-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L1-L51)
- [color-palette.md:1-22](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/color-palette.md#L1-L22)
- [ui-guidelines.md:1-57](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L1-L57)
- [animation-guidelines.md:1-29](file://A-Little-World-For-You-Design-Asset-Pack/ANIMATIONS/animation-guidelines.md#L1-L29)
- [MASTER-PROMPT.md:1-744](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L1-L744)

**Section sources**
- [README.md:1-36](file://A-Little-World-For-You-Design-Asset-Pack/README.md#L1-L36)

## Core Components
This section summarizes the foundational design tokens and rules that should be applied consistently across all components.

### Color Tokens
Use CSS custom properties or Tailwind theme tokens mapped from the following WCAG AA-compliant palette:

| Token | Hex | Usage Guidance |
|---|---|---|
| `--color-cream` | `#FFF9F2` | Main page background |
| `--color-paper` | `#FFFDF9` | Letter/card surface |
| `--color-blush` | `#F7DCE2` | Soft section tint |
| `--color-rose` | `#D98FA0` | Primary accent (decoration only) |
| `--color-rose-deep` | `#8F4F60` | Display accents and short emphasis text (≈5.4:1 on cream) |
| `--color-peach` | `#F5C7AE` | Secondary accent (decoration only) |
| `--color-sky` | `#DCEAF2` | Cool contrast background |
| `--color-sage` | `#C8D2BE` | Botanical accent (decoration only) |
| `--color-ink` | `#59464A` | Main text |
| `--color-muted` | `#7A6466` | Secondary text (darkened for AA contrast) |

Balance the palette approximately as:
- 55% cream / paper
- 20% blush / pale pink
- 10% peach
- 10% sky / sage
- 5% rose accents

Avoid making every section pink; alternate warm paper, pale sky, and botanical tones to create visual rhythm. Do not use pale pink for long body text.

**Updated** Enhanced color specifications with WCAG AA compliance and explicit usage constraints for decorative vs. text colors.

**Section sources**
- [design-system.md:6-20](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L6-L20)
- [color-palette.md:1-22](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/color-palette.md#L1-L22)
- [globals.css:9-26](file://src/app/globals.css#L9-L26)

### Typography Scale
The typography system uses three carefully selected fonts, all loaded with Vietnamese diacritic support:

| Role | Font Family | Usage |
|---|---|---|
| Display / Headings | Playfair Display | Chapter titles, headings, large text |
| Body | Nunito | All long-form text, UI elements, captions, buttons |
| Handwritten Accent | Pacifico | Signatures, tiny notes, decorative lines only |

Hard rules:
- All fonts must be loaded with the `vietnamese` subset from `next/font/google`.
- Pacifico is the only handwritten face allowed; Caveat is deliberately excluded due to lack of Vietnamese support.
- Pacifico ships in a single weight (400); do not fake bold with synthetic weights.
- Use `display: 'swap'` for optimal font loading performance.
- Provide sensible fallbacks: serif → Georgia; sans → system-ui; handwriting → Pacifico only.

Apply a clear hierarchy:
- H1/H2 for chapter titles using Playfair Display.
- H3/H4 for card titles and small sections.
- Body copy sized for comfortable reading width using Nunito.
- Handwritten type reserved for signatures, tiny labels, or decorative captions using Pacifico.

**Updated** Comprehensive typography system with Vietnamese diacritic support and specific font loading requirements.

**Section sources**
- [design-system.md:22-28](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L22-L28)
- [MASTER-PROMPT.md:152-170](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L152-L170)
- [layout.tsx:10-29](file://src/app/layout.tsx#L10-L29)

### Shape Language
- Cards: rounded corners around 20–28px (`--radius-card: 1.5rem`, `--radius-paper: 1.75rem`).
- Buttons: pill-shaped or softly rounded with large corner radius (999px).
- Letter panels: paper-like borders, subtle shadows, and slightly imperfect decorative edges implemented through CSS/SVG.
- Polaroids: white border, slight rotation, soft shadow.
- Decorative watercolor marks should be sparse and intentional.

### Layout Principles
- Mobile-first responsive structure.
- Max content width around 1080–1160px.
- Comfortable reading width around 620–720px.
- Generous vertical spacing between sections (88–120px desktop, 56–76px mobile).
- Clear vertical narrative flow; avoid dense dashboard layouts.
- One primary action per section.

**Section sources**
- [design-system.md:30-42](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L30-L42)

## Architecture Overview
The design system maps directly onto a single-page romantic storybook experience composed of six chapters. Each chapter has distinct visual treatment while sharing the same tokens, typography, shape language, and interaction principles.

```mermaid
graph TB
Entrance["Chapter 1<br/>The Little Entrance"]
Letter["Chapter 2<br/>A Letter For You"]
Story["Chapter 3<br/>What I Didn't Realize"]
Memories["Chapter 4<br/>Our Little Memories"]
Promises["Chapter 5<br/>Things I Want To Do Better"]
Hug["Chapter 6<br/>A Hug For You"]
Entrance --> Letter
Letter --> Story
Story --> Memories
Memories --> Promises
Promises --> Hug
subgraph "Shared Design System"
Tokens["Color Tokens"]
Type["Typography"]
Shapes["Shape Language"]
Layout["Layout Rules"]
Motion["Animation Guidelines"]
A11y["Accessibility"]
end
Tokens --- Entrance
Type --- Letter
Shapes --- Story
Layout --- Memories
Motion --- Promises
A11y --- Hug
```

**Diagram sources**
- [ui-guidelines.md:6-47](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L6-L47)
- [MASTER-PROMPT.md:188-358](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L188-L358)

## Detailed Component Analysis

### Watercolor Visual Identity Implementation
The watercolor aesthetic is achieved through layered, restrained techniques rather than heavy assets:

- **Soft edges**: Use generous border-radius on cards and buttons; apply subtle SVG filters or CSS blur where appropriate for decorative shapes.
- **Gentle gradients**: Blend cream, blush, peach, sky, and sage at low opacity to simulate watercolor washes. Avoid hard transitions or saturated gradients.
- **Paper-like textures**: Use off-white backgrounds like `--color-paper` and `--color-cream`, combined with faint noise or texture overlays when needed. Keep it subtle so text remains readable.
- **Organic decorations**: Small flowers, petals, hearts, envelopes, and garden scenes should feel hand-drawn and sparse.
- **Consistent illustration style**: If using vector illustrations, keep line weight, color saturation, and edge softness consistent across characters and scenes.

Implementation recommendations:
- Prefer CSS variables for colors and Tailwind theme mappings for consistency.
- Use lightweight SVG decorations instead of heavy PNGs whenever possible.
- Reserve complex illustrations for key moments such as the envelope, polaroid gallery, or final hug scene.
- Ensure all decorative visuals have empty alt attributes when they do not convey meaning.

**Updated** Enhanced watercolor implementation details with specific CSS techniques including paper texture overlays and watercolor wash effects.

**Section sources**
- [design-system.md:1-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L1-L51)
- [MASTER-PROMPT.md:103-125](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L103-L125)
- [globals.css:61-106](file://src/app/globals.css#L61-L106)

### UI Component Guidelines
Create reusable romantic UI components that follow these rules:

- **Envelope Intro**: Centered illustrated envelope on warm cream; gentle flap opening animation; letter rises and fades; smooth scroll to next section.
- **Love Letter Card**: Paper-like surface, serif heading, readable body copy, handwritten signature area; reveal with fade/slide; avoid slow typewriter effects.
- **Story Beat Cards**: Three illustrated beats with accountable, non-blaming copy; keep tone sincere and reflective.
- **Memory Gallery**: Polaroid-style cards with placeholders until real photos are provided; accessible lightbox with close button and keyboard support.
- **Promise Cards**: Three realistic promises presented as calm, behavior-focused statements.
- **Hug Section**: Soft watercolor garden or sunset feeling; optional heart bloom animation; no guilt-inducing copy if the user does not interact.

Interaction rules:
- One primary action per section.
- Buttons must have clear labels and visible focus states.
- No auto-play audio.
- No forced tasks or pressure to respond.
- All important text must remain readable without animation.
- Provide reduced-motion support.

**Section sources**
- [ui-guidelines.md:6-56](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L6-L56)
- [MASTER-PROMPT.md:188-358](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L188-L358)

### Animation and Motion Recipes
Motion should feel calm, organic, and tender:

- **Timing**: Most transitions 350–700ms; ambient loops 4–12s with low amplitude.
- **Techniques**: Prefer transform and opacity; avoid animating layout-heavy properties.
- **Triggers**: Use viewport-based reveals once per section; avoid excessive parallax or constant movement behind text.
- **Accessibility**: Respect `prefers-reduced-motion`; disable nonessential ambient animation when reduced motion is requested.
- **Performance**: Limit simultaneous particles; use `will-change` only where needed; test on mid-range mobile devices.

Suggested recipes:
- Envelope open: flap rotates around top edge; letter rises and fades in.
- Floating petals/hearts: small decorative elements drift upward with varied delays; simplify on mobile.
- Section reveal: opacity and vertical translation once per section.
- Polaroid hover/tap: tiny rotation; lightbox fades and scales gently.
- Final hug: small heart bloom with a few particles.

**Section sources**
- [animation-guidelines.md:1-29](file://A-Little-World-For-You-Design-Asset-Pack/ANIMATIONS/animation-guidelines.md#L1-L29)

### Practical Examples of Applying Design Tokens in React Components
When building React components, map design tokens to component props and styles:

- **Color application**:
  - Backgrounds: use `--color-cream` for page backgrounds and `--color-paper` for cards.
  - Accents: use `--color-rose` for primary actions and `--color-rose-deep` for readable text on light surfaces.
  - Tints: use `--color-blush`, `--color-peach`, `--color-sky`, and `--color-sage` for section backgrounds and decorative washes.
- **Typography application**:
  - Headings: apply serif display fonts (Playfair Display).
  - Body: apply sans-serif fonts (Nunito) with comfortable line height.
  - Handwritten: apply only to short labels, signatures, or decorative captions (Pacifico).
- **Shape application**:
  - Cards: apply 20–28px border-radius.
  - Buttons: apply pill or large rounded corners.
  - Polaroids: add white border, slight rotation, and soft shadow.
- **Layout application**:
  - Constrain main content width.
  - Maintain comfortable reading width.
  - Use generous vertical spacing between sections.
- **Interaction application**:
  - Ensure visible focus states.
  - Provide reduced-motion variants.
  - Avoid auto-playing media.

Component composition pattern:
- Page layout composes sections.
- Sections compose reusable UI components.
- Data files hold copy, memories, names, dates, and image paths.
- Assets are replaceable through a central configuration.

**Updated** Enhanced practical examples with specific React component integration patterns and design token mapping.

**Section sources**
- [design-system.md:6-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L6-L51)
- [MASTER-PROMPT.md:478-524](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L478-L524)

### Responsive Design Considerations
Mobile-first responsive behavior is essential:

- Test at common breakpoints: 360px, 390px, 430px, 768px, 1024px, 1440px, and wider.
- Prevent horizontal overflow.
- Keep text width and line-height comfortable.
- Ensure tap targets are at least around 44px.
- Stack scrapbook cards elegantly on narrow screens.
- Keep decorative elements away from text.
- Do not rely on hover for important actions; support tap.
- Use responsive images and lazy-load below-the-fold imagery.
- Test portrait and landscape mobile layouts.

**Section sources**
- [ui-guidelines.md:48-57](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L48-L57)
- [MASTER-PROMPT.md:557-578](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L557-L578)

### Accessibility Requirements
Accessibility ensures the warm, intimate style remains usable for everyone:

- Semantic HTML and logical heading hierarchy.
- Keyboard-operable interactions.
- Visible focus rings.
- Alt text for meaningful images; empty alt for decoration.
- Sufficient color contrast; avoid pale pink for long body text.
- Reduced-motion support.
- Accessible dialog/lightbox behavior.
- No autoplay audio; require explicit user action for any sound.
- Ensure all primary interactions work on touch screens.
- **Vietnamese diacritic support**: All text containing Vietnamese characters must render correctly with proper font subsets.

**Updated** Enhanced accessibility requirements with specific Vietnamese diacritic support and font validation rules.

**Section sources**
- [design-system.md:44-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L44-L51)
- [ui-guidelines.md:48-57](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L48-L57)
- [MASTER-PROMPT.md:592-602](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L592-L602)

## Dependency Analysis
The design system depends on shared tokens and guidelines that influence every component and section:

```mermaid
graph LR
DS["Design System<br/>Tokens, Typography, Shapes, Layout"]
CP["Color Palette<br/>Hex Values and Balance"]
UIG["UI Guidelines<br/>Chapters and UX Rules"]
AG["Animation Guidelines<br/>Motion Recipes"]
MP["Master Prompt<br/>Implementation Workflow"]
CSS["Global Styles<br/>CSS Custom Properties"]
FONT["Font Loading<br/>Vietnamese Subsets"]
DS --> UIG
CP --> DS
DS --> AG
MP --> DS
MP --> UIG
MP --> AG
CSS --> DS
FONT --> DS
```

**Diagram sources**
- [design-system.md:1-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L1-L51)
- [color-palette.md:1-22](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/color-palette.md#L1-L22)
- [ui-guidelines.md:1-57](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L1-L57)
- [animation-guidelines.md:1-29](file://A-Little-World-For-You-Design-Asset-Pack/ANIMATIONS/animation-guidelines.md#L1-L29)
- [MASTER-PROMPT.md:1-744](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L1-L744)
- [globals.css:1-141](file://src/app/globals.css#L1-L141)
- [layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)

**Section sources**
- [design-system.md:1-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L1-L51)
- [MASTER-PROMPT.md:1-744](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L1-L744)

## Performance Considerations
- Prefer transform and opacity animations to avoid layout thrashing.
- Limit particle counts and continuous ambient motion.
- Use viewport-triggered animations once per section.
- Disable nonessential animations under reduced-motion preferences.
- Optimize images and lazy-load below-the-fold assets.
- Avoid unnecessary dependencies and heavy assets.
- Test on mid-range mobile devices to ensure smooth performance.
- **Font optimization**: Load only necessary font weights and subsets (latin + vietnamese) to minimize bundle size.

## Troubleshooting Guide
Common issues and resolutions:

- **Colors look too pink or unreadable**:
  - Increase contrast by using `--color-ink` or `--color-muted` for body text.
  - Reduce blush/pink coverage and alternate with paper, sky, or sage tints.
- **Animations feel overwhelming**:
  - Shorten transition durations and reduce amplitude.
  - Simplify floating decorations on mobile.
  - Honor `prefers-reduced-motion`.
- **Layout feels cramped**:
  - Increase vertical spacing between sections.
  - Constrain content width and maintain comfortable reading width.
- **Interactions fail on mobile**:
  - Ensure tap targets are at least around 44px.
  - Avoid hover-only behaviors; support tap and keyboard navigation.
- **Images or assets break**:
  - Replace placeholders with real assets through a central configuration.
  - Verify paths and alt attributes.
- **Audio causes problems**:
  - Never autoplay audio; require explicit user action.
  - Provide a disabled placeholder if no audio file exists.
- **Vietnamese text renders incorrectly**:
  - Ensure all fonts are loaded with the `vietnamese` subset.
  - Verify Pacifico is used for handwritten text with diacritics.
  - Check that Caveat is not imported (lacks Vietnamese support).

**Updated** Added troubleshooting guidance for Vietnamese text rendering issues and font subset problems.

**Section sources**
- [design-system.md:6-51](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/design-system.md#L6-L51)
- [animation-guidelines.md:1-29](file://A-Little-World-For-You-Design-Asset-Pack/ANIMATIONS/animation-guidelines.md#L1-L29)
- [MASTER-PROMPT.md:592-602](file://A-Little-World-For-You-Design-Asset-Pack/CODEX/MASTER-PROMPT.md#L592-L602)

## Conclusion
This design system establishes a warm, intimate, watercolor-inspired visual identity grounded in clear tokens, thoughtful typography with Vietnamese diacritic support, gentle shape language, and respectful layout principles. By applying these guidelines consistently across React components, teams can build a romantic, story-driven interface that feels handmade, sincere, and accessible. The system balances aesthetic tenderness with practical constraints: readable contrast, reduced-motion support, responsive layouts, performance-aware animations, and proper font loading for international text support.

## Appendices

### Chapter Flow Reference
```mermaid
flowchart TD
Start(["Start"]) --> Entrance["Entrance"]
Entrance --> Letter["Letter"]
Letter --> Story["Story Beats"]
Story --> Memories["Memory Gallery"]
Memories --> Promises["Promise Cards"]
Promises --> Hug["Hug Section"]
Hug --> End(["End"])
```

**Diagram sources**
- [ui-guidelines.md:6-47](file://A-Little-World-For-You-Design-Asset-Pack/DESIGN/ui-guidelines.md#L6-L47)

### Font Loading Configuration
The typography system requires specific font loading configuration for Vietnamese diacritic support:

```typescript
// From src/app/layout.tsx
const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});
```

**Section sources**
- [layout.tsx:10-29](file://src/app/layout.tsx#L10-L29)