# Component Architecture

<cite>
**Referenced Files in This Document**
- [README.md](file://README.md)
- [package.json](file://package.json)
- [next.config.ts](file://next.config.ts)
- [src/app/layout.tsx](file://src/app/layout.tsx)
- [src/app/page.tsx](file://src/app/page.tsx)
- [src/types/index.ts](file://src/types/index.ts)
- [src/data/site-content.ts](file://src/data/site-content.ts)
- [src/data/memories.ts](file://src/data/memories.ts)
- [src/data/interludes.ts](file://src/data/interludes.ts)
- [src/lib/utils.ts](file://src/lib/utils.ts)
- [src/lib/assets.ts](file://src/lib/assets.ts)
- [src/lib/motion.ts](file://src/lib/motion.ts)
- [src/hooks/useDialog.ts](file://src/hooks/useDialog.ts)
- [src/hooks/useReducedMotion.ts](file://src/hooks/useReducedMotion.ts)
- [scripts/convert-memories.mjs](file://scripts/convert-memories.mjs)
</cite>

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

## Introduction
This project is a Next.js single-page gift site composed of narrative chapters: an entrance, a love letter, a story timeline, a memory gallery, promise cards, a small flower garden, and a closing hug section. The architecture separates content (data), types, shared utilities, motion configuration, hooks, and UI components. The root page composes the chapter components into one scrollable experience.

The repository also includes a build-time script that converts owner-supplied photos into optimized WebP assets for the gallery.

**Section sources**
- [README.md:1-37](file://README.md#L1-L37)
- [src/app/page.tsx:11-14](file://src/app/page.tsx#L11-L14)

## Project Structure
At a high level:
- App shell and layout live under `src/app`.
- Feature components are grouped by chapter or concern under `src/components`.
- Data lives under `src/data`, with typed models under `src/types`.
- Shared logic is split between `src/lib` (utilities, asset paths, motion constants) and `src/hooks` (dialog behavior, reduced motion).
- A Node script under `scripts` prepares image assets.

```mermaid
graph TB
subgraph "App Shell"
Layout["layout.tsx"]
Page["page.tsx"]
end
subgraph "Components"
Envelope["EnvelopeIntro.tsx"]
Letter["LoveLetter.tsx"]
Timeline["StoryTimeline.tsx"]
Gallery["MemoryGallery.tsx"]
Promises["PromiseCards.tsx"]
Garden["FlowerGarden.tsx"]
Hug["HugSection.tsx"]
Footer["SiteFooter.tsx"]
Progress["ProgressIndicator.tsx"]
end
subgraph "Data & Types"
SiteContent["site-content.ts"]
Memories["memories.ts"]
Interludes["interludes.ts"]
Types["types/index.ts"]
end
subgraph "Shared"
Utils["utils.ts"]
Assets["assets.ts"]
Motion["motion.ts"]
DialogHook["useDialog.ts"]
ReducedMotion["useReducedMotion.ts"]
end
Page --> Envelope
Page --> Letter
Page --> Timeline
Page --> Gallery
Page --> Promises
Page --> Garden
Page --> Hug
Page --> Footer
Page --> Progress
Envelope --> SiteContent
Letter --> SiteContent
Timeline --> Interludes
Gallery --> Memories
Promises --> Interludes
Garden --> Interludes
Hug --> SiteContent
Gallery --> Utils
Gallery --> Assets
Timeline --> Motion
Garden --> Motion
Hug --> Motion
Lightbox["Lightbox (in MemoryGallery)"] --> DialogHook
Lightbox --> ReducedMotion
```

**Diagram sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/app/layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

**Section sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/app/layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)

## Core Components
- Root layout configures fonts, metadata, and global CSS. It sets language to Vietnamese and exposes font variables for consistent typography across chapters.
- Root page composes the narrative flow: entrance, letter, story timeline, memories, promises, garden strip, hug, plus shared progress indicator and footer.
- Data modules provide canonical copy and media references:
  - `site-content.ts` centralizes personal fields and chapter copy.
  - `memories.ts` defines photo entries and derived featured lists.
  - `interludes.ts` defines story scenes, commitments, secret letter text, garden notes, and heart notes.
- Shared libraries:
  - `utils.ts` provides class joining, seeded pseudo-random values, clamping, and caption resolution.
  - `assets.ts` centralizes asset paths and helper functions for memory images and optional music.
  - `motion.ts` defines easing, durations, viewport triggers, and reusable variants for animations.
- Hooks:
  - `useDialog.ts` implements accessible dialog behavior (focus trap, Escape to close, scroll lock).
  - `useReducedMotion.ts` wraps Motion’s reduced-motion hook for accessibility.

**Section sources**
- [src/app/layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

## Architecture Overview
The application follows a unidirectional data flow:
- Data modules export plain objects and arrays.
- Components consume data via imports and render UI.
- Shared hooks and libraries encapsulate cross-cutting concerns (accessibility, animation, utilities).
- The root page orchestrates chapter order and composition.

```mermaid
graph LR
Data["Data Modules<br/>site-content.ts, memories.ts, interludes.ts"] --> Types["Types<br/>types/index.ts"]
Data --> Components["Chapter Components<br/>Envelope, Letter, Timeline, Gallery, Promises, Garden, Hug"]
Libs["Shared Libraries<br/>utils.ts, assets.ts, motion.ts"] --> Components
Hooks["Hooks<br/>useDialog.ts, useReducedMotion.ts"] --> Components
Page["Root Page<br/>page.tsx"] --> Components
Layout["Root Layout<br/>layout.tsx"] --> Page
```

**Diagram sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/app/layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

## Detailed Component Analysis

### Root Layout and Metadata
Responsibilities:
- Define Google Fonts with required subsets and expose CSS variables.
- Set SEO metadata, including title, description, robots policy, and Open Graph fields.
- Provide the root HTML structure with language attribute and font variable classes.

Key behaviors:
- Fonts are loaded with swap display for performance.
- Robots are set to noindex/nofollow to keep the gift private.

**Section sources**
- [src/app/layout.tsx:1-55](file://src/app/layout.tsx#L1-L55)

### Root Page Composition
Responsibilities:
- Compose all chapters in narrative order.
- Include accessibility helpers (skip link, aria labels).
- Render shared UI elements (progress indicator, footer).

Flow:
- Entrance → Love Letter → Story Timeline → Memory Gallery → Promise Cards → Flower Garden → Hug Section.

**Section sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)

### Data Layer
- `site-content.ts`: Centralized copy for personalization and chapter text.
- `memories.ts`: Typed photo entries with rotation and featured flags; derives featured list.
- `interludes.ts`: Defines story scenes, commitments, secret letter, garden notes, and heart notes.

Relationships:
- All data conforms to types defined in `types/index.ts`.
- Components import these arrays/objects directly to render content.

**Section sources**
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/types/index.ts:1-46](file://src/types/index.ts#L1-L46)

### Shared Utilities and Libraries
- `utils.ts`: Class joiner, seeded random, clamp, and caption resolver that replaces placeholder captions with neutral labels until the owner edits them.
- `assets.ts`: Centralizes asset paths and provides `memorySrc` for generating image URLs.
- `motion.ts`: Provides easing curves, duration presets, viewport trigger options, and reusable animation variants.

Usage patterns:
- Components use `cn` for conditional classes.
- Image galleries use `memorySrc` to resolve paths.
- Animated sections apply variants from `motion.ts`.

**Section sources**
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)

### Accessibility Hooks
- `useDialog.ts`: Implements focus trapping, Escape-to-close, scroll lock, and focus restoration. Used by modals such as the secret letter and lightbox.
- `useReducedMotion.ts`: Wraps Motion’s reduced-motion hook to respect user preferences.

Behavioral guarantees:
- Keyboard navigation remains predictable inside dialogs.
- Background scrolling is disabled while a dialog is open.
- Focus returns to the trigger on close.

**Section sources**
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

### Chapter Components Overview
- EnvelopeIntro: Presents the opening message and entry button.
- LoveLetter: Displays the apology letter with structured paragraphs and postscript.
- StoryTimeline: Renders the two-day reflection and realization scene.
- MemoryGallery: Shows a grid of featured photos and a lightbox view for all memories.
- PromiseCards: Presents three commitment cards with icons.
- FlowerGarden: Interactive flowers revealing hidden notes.
- HugSection: Closing interactive hug interaction with confirmation state.

These components primarily consume data from `site-content.ts`, `memories.ts`, and `interludes.ts`, and rely on shared libraries and hooks for rendering and interactions.

**Section sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)

### Data Models
```mermaid
classDiagram
class Memory {
+string id
+string src
+string alt
+string caption
+number rotation
+boolean featured
}
class Commitment {
+string id
+string eyebrow
+string title
+string body
+CommitmentIcon icon
}
class StoryScene {
+string id
+string step
+string title
+string body
+SceneIllustration illustration
}
class GardenNote {
+string id
+string ariaLabel
+string text
}
class HeartNote {
+string id
+string ariaLabel
+string text
}
class SiteContent {
+string title
+string boyfriendName
+string girlfriendName
+string signature
+string date
+Entrance entrance
+Letter letter
+Hug hug
+Labels labels
}
CommitmentIcon <.. Commitment : "uses"
SceneIllustration <.. StoryScene : "uses"
```

**Diagram sources**
- [src/types/index.ts:1-46](file://src/types/index.ts#L1-L46)

**Section sources**
- [src/types/index.ts:1-46](file://src/types/index.ts#L1-L46)

### Asset Pipeline
The project ships a script to convert original photos into optimized WebP files suitable for web delivery.

```mermaid
flowchart TD
Start(["Run npm run memories"]) --> ReadSource["Read original photos from 'kỉ niệm'"]
ReadSource --> PrepareTarget["Ensure target directory exists"]
PrepareTarget --> Process["For each photo:<br/>resize, rotate, optimize to WebP"]
Process --> WriteOutput["Write to public/images/memories/<id>.webp"]
WriteOutput --> LogInfo["Log dimensions and size"]
LogInfo --> End(["Done"])
```

**Diagram sources**
- [scripts/convert-memories.mjs:1-42](file://scripts/convert-memories.mjs#L1-L42)
- [package.json:5-12](file://package.json#L5-L12)

**Section sources**
- [scripts/convert-memories.mjs:1-42](file://scripts/convert-memories.mjs#L1-L42)
- [package.json:5-12](file://package.json#L5-L12)

### Dialog Interaction Flow (Lightbox Example)
```mermaid
sequenceDiagram
participant User as "User"
participant Gallery as "MemoryGallery"
participant Lightbox as "Lightbox"
participant Hook as "useDialog"
participant Body as "Document Body"
User->>Gallery : Click a memory card
Gallery->>Lightbox : Open lightbox with selected image
Lightbox->>Hook : useDialog({ open : true })
Hook->>Body : Lock background scroll
Hook->>Lightbox : Focus first focusable element
User->>Lightbox : Press Escape
Lightbox->>Hook : onClose()
Hook->>Body : Restore previous overflow
Hook->>Lightbox : Return focus to trigger
```

**Diagram sources**
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)

## Dependency Analysis
High-level dependencies:
- `page.tsx` depends on chapter components and shared layout components.
- Chapter components depend on data modules (`site-content.ts`, `memories.ts`, `interludes.ts`).
- Shared libraries (`utils.ts`, `assets.ts`, `motion.ts`) are consumed by multiple components.
- Hooks (`useDialog.ts`, `useReducedMotion.ts`) are used by interactive components (e.g., lightbox, secret letter).

```mermaid
graph TB
Page["page.tsx"] --> Envelope["EnvelopeIntro"]
Page --> Letter["LoveLetter"]
Page --> Timeline["StoryTimeline"]
Page --> Gallery["MemoryGallery"]
Page --> Promises["PromiseCards"]
Page --> Garden["FlowerGarden"]
Page --> Hug["HugSection"]
Envelope --> SiteContent["site-content.ts"]
Letter --> SiteContent
Timeline --> Interludes["interludes.ts"]
Gallery --> Memories["memories.ts"]
Promises --> Interludes
Garden --> Interludes
Hug --> SiteContent
Gallery --> Utils["utils.ts"]
Gallery --> Assets["assets.ts"]
Timeline --> Motion["motion.ts"]
Garden --> Motion
Hug --> Motion
Lightbox["Lightbox"] --> DialogHook["useDialog.ts"]
Lightbox --> ReducedMotion["useReducedMotion.ts"]
```

**Diagram sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

**Section sources**
- [src/app/page.tsx:1-52](file://src/app/page.tsx#L1-L52)
- [src/data/site-content.ts:1-65](file://src/data/site-content.ts#L1-L65)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/data/interludes.ts:1-111](file://src/data/interludes.ts#L1-L111)
- [src/lib/utils.ts:1-27](file://src/lib/utils.ts#L1-L27)
- [src/lib/assets.ts:1-25](file://src/lib/assets.ts#L1-L25)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)
- [src/hooks/useDialog.ts:1-98](file://src/hooks/useDialog.ts#L1-L98)
- [src/hooks/useReducedMotion.ts:1-12](file://src/hooks/useReducedMotion.ts#L1-L12)

## Performance Considerations
- Font loading uses `display: swap` to avoid invisible text during load.
- Images are preprocessed to WebP with controlled dimensions and quality to reduce payload.
- Animation timings and easings are centralized to maintain consistent, calm motion.
- Reduced motion support is provided through a dedicated hook to honor user preferences.
- The root layout avoids indexing the site to prevent unnecessary search engine crawling.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
- Missing memory images:
  - Ensure the conversion script has been run so that `public/images/memories/*.webp` exist.
  - Verify file names match the IDs referenced in `memories.ts`.
- Placeholder captions still visible:
  - Replace `[CHÚ THÍCH]` captions in `memories.ts` with real captions.
  - Until replaced, the utility resolves placeholders to neutral labels automatically.
- Dialog not trapping focus:
  - Confirm the component using `useDialog` mounts its children before focus is requested.
  - Check that focusable elements have proper attributes and are visible when the dialog opens.
- Animations feel too fast/slow:
  - Adjust timing through the centralized `motion.ts` constants rather than ad-hoc values in components.

**Section sources**
- [scripts/convert-memories.mjs:1-42](file://scripts/convert-memories.mjs#L1-L42)
- [src/data/memories.ts:1-59](file://src/data/memories.ts#L1-L59)
- [src/lib/utils.ts:16-26](file://src/lib/utils.ts#L16-L26)
- [src/hooks/useDialog.ts:21-96](file://src/hooks/useDialog.ts#L21-L96)
- [src/lib/motion.ts:1-62](file://src/lib/motion.ts#L1-L62)

## Conclusion
The codebase organizes a heartfelt, chapter-based single-page experience with clear separation of concerns: data, types, shared libraries, hooks, and components. The root page orchestrates the narrative flow, while shared utilities and hooks ensure consistency, accessibility, and performance. The asset pipeline ensures images are optimized for web delivery, and the design keeps the experience calm and readable.

[No sources needed since this section summarizes without analyzing specific files]