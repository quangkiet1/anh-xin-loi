import { FlowerGarden } from "@/components/effects/FlowerGarden";
import { HugSection } from "@/components/ending/HugSection";
import { EnvelopeIntro } from "@/components/entrance/EnvelopeIntro";
import { ProgressIndicator } from "@/components/layout/ProgressIndicator";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LoveLetter } from "@/components/letter/LoveLetter";
import { MemoryGallery } from "@/components/memories/MemoryGallery";
import { PromiseCards } from "@/components/promises/PromiseCards";
import { StoryTimeline } from "@/components/story/StoryTimeline";

/**
 * Single-page gift. Chapters render in narrative order and every one of them is
 * readable by scrolling alone — interactions only add warmth.
 */
export default function Home() {
  return (
    <>
      <a
        href="#chapter-letter"
        className="sr-only rounded-full bg-paper px-4 py-2 text-sm text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Bỏ qua phần mở đầu
      </a>

      <ProgressIndicator />

      <main id="main">
        <EnvelopeIntro />
        <LoveLetter />
        <StoryTimeline />
        <MemoryGallery />
        <PromiseCards />

        {/* The flower garden is a quiet strip between the promises and the hug. */}
        <section
          aria-label="Khu vườn nhỏ"
          className="relative overflow-hidden bg-gradient-to-b from-cream to-[#FBE3D8] px-5 pb-12 pt-2 sm:px-8 md:pb-14"
        >
          <p className="hand mb-10 text-center text-[1.15rem] text-rose-deep sm:text-[1.3rem]">
            Trước khi em đi tiếp, có một khu vườn nhỏ.
          </p>
          <FlowerGarden />
        </section>

        <HugSection />
      </main>

      <SiteFooter />
    </>
  );
}
