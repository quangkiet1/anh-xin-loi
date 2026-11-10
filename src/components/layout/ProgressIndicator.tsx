"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const chapters = [
  { id: "chapter-entrance", label: "Mở đầu" },
  { id: "chapter-letter", label: "Lá thư" },
  { id: "chapter-story", label: "Câu chuyện" },
  { id: "chapter-memories", label: "Kỷ niệm" },
  { id: "chapter-promises", label: "Lời hứa" },
  { id: "chapter-hug", label: "Cái ôm" },
] as const;

/**
 * Desktop-only chapter rail. Purely navigational — it never implies that the
 * reader must "finish" the story, and it is hidden on touch layouts where it
 * would crowd the text.
 */
export function ProgressIndicator() {
  const [active, setActive] = useState<string>(chapters[0].id);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.3, 0.6, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Các chương"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {chapters.map((chapter) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-2.5 rounded-full py-1 pl-2 pr-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-deep"
              >
                <span
                  className={cn(
                    "text-[0.7rem] font-medium tracking-wide transition-opacity duration-300",
                    isActive
                      ? "text-rose-deep opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
                  )}
                >
                  {chapter.label}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "block rounded-full transition-all duration-300",
                    isActive
                      ? "h-2.5 w-2.5 bg-rose-deep"
                      : "h-1.5 w-1.5 bg-ink/25 group-hover:bg-rose",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
