"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { HiddenHeart } from "@/components/effects/HiddenHearts";
import { Person } from "@/components/illustrations/Characters";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { heartNotes } from "@/data/interludes";
import { siteContent } from "@/data/site-content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, easing } from "@/lib/motion";

function EnvelopeIllustration({ opened }: { opened: boolean }) {
  return (
    <svg
      viewBox="0 0 320 230"
      className="h-auto w-full overflow-visible drop-shadow-[0_18px_30px_rgba(89,70,74,0.16)]"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="160" cy="216" rx="118" ry="11" fill="#59464A" opacity="0.08" />

      {/* the letter itself — slides up out of the pocket */}
      <motion.g
        initial={false}
        animate={{ y: opened ? -72 : 0 }}
        transition={{ duration: 0.85, ease: easing.gentle, delay: opened ? 0.25 : 0 }}
      >
        <rect x="66" y="52" width="188" height="132" rx="5" fill="#FFFDF9" stroke="#EFE1DD" />
        <rect x="86" y="78" width="112" height="6" rx="3" fill="#EADBD7" />
        <rect x="86" y="94" width="148" height="6" rx="3" fill="#EADBD7" />
        <rect x="86" y="110" width="132" height="6" rx="3" fill="#EADBD7" />
        <rect x="86" y="126" width="96" height="6" rx="3" fill="#EADBD7" />
        <path
          d="M214 152c-7-5-11-9-11-14 0-3.4 2.6-6 6-6 2.4 0 4.2 1.4 5 3.2.8-1.8 2.6-3.2 5-3.2 3.4 0 6 2.6 6 6 0 5-4 9-11 14z"
          fill="#D98FA0"
        />
      </motion.g>

      {/* envelope body */}
      <rect x="24" y="84" width="272" height="124" rx="10" fill="#FFFDF9" stroke="#EBD9D6" />
      <path d="M24 96l136 92L24 208z" fill="#F8DEE4" />
      <path d="M296 96l-136 92 136-22z" fill="#F3D2DA" />
      <path d="M24 208l136-20 136 20z" fill="#EFC7D1" opacity="0.65" />

      {/* flap — rotates around its top edge when opened */}
      <motion.path
        d="M24 88l136 92 136-92-10-8a10 10 0 0 0-6-2H40a10 10 0 0 0-6 2z"
        fill="#F6D6DE"
        style={{ transformBox: "fill-box", transformOrigin: "top center" }}
        initial={false}
        animate={{ rotateX: opened ? -158 : 0 }}
        transition={{ duration: 0.9, ease: easing.gentle }}
      />
      <path d="M24 88l136 92 136-92" fill="none" stroke="#E7C3CC" strokeWidth="1.4" />

      {/* petals escaping the open envelope */}
      {[0, 1, 2, 3].map((index) => {
        const drift = (index - 1.5) * 26;
        return (
          <motion.circle
            key={index}
            cx={148 + index * 8}
            cy={126}
            r={3.4}
            fill={index % 2 === 0 ? "#E9A9B7" : "#F3C3A8"}
            initial={false}
            animate={
              opened
                ? { y: [-4, -46, -76], x: [0, drift, drift * 1.4], opacity: [0, 0.9, 0] }
                : { y: 0, x: 0, opacity: 0 }
            }
            transition={{ duration: 2.1, delay: 0.35 + index * 0.12, ease: "easeOut" }}
          />
        );
      })}
    </svg>
  );
}

export function EnvelopeIntro() {
  const [opened, setOpened] = useState(false);
  const reducedMotion = useReducedMotion();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const goToLetter = () => {
    document
      .getElementById("chapter-letter")
      ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const handleOpen = () => {
    if (opened) {
      goToLetter();
      return;
    }

    setOpened(true);
    timeoutRef.current = window.setTimeout(goToLetter, reducedMotion ? 200 : 1250);
  };

  return (
    <SectionWrapper
      id="chapter-entrance"
      labelledBy="entrance-title"
      tone="cream"
      className="overflow-hidden pt-14 pb-20 md:pt-20 md:pb-24"
    >
      <FloatingPetals count={9} className="-z-0" />

      <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease: easing.gentle }}
          className="max-w-[34rem] text-[0.95rem] leading-[1.9] text-muted sm:text-base"
        >
          {siteContent.entrance.paragraph}
        </motion.p>

        <motion.h1
          id="entrance-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: easing.gentle }}
          className="mt-5 font-display text-[2.35rem] leading-[1.1] text-ink sm:text-[3.4rem] md:text-[4rem]"
        >
          A Little World
          <span className="mt-1 block text-rose-deep">For You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-[0.98rem] text-muted sm:text-lg"
        >
          {siteContent.entrance.subtitle}
        </motion.p>

        <div className="relative mt-10 w-full max-w-[520px] sm:mt-12">
          <div className="pointer-events-none absolute -left-2 bottom-0 z-10 w-[22%] max-w-[110px] sm:-left-6">
            <Person kind="female" pose="wave" mood="shy" />
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-0 z-10 w-[22%] max-w-[110px] sm:-right-6">
            <Person kind="male" pose="wave" mood="smile" mirrored />
          </div>

          <div className="mx-auto w-[72%] max-w-[360px]">
            <EnvelopeIllustration opened={opened} />
          </div>
        </div>

        <div className="relative z-20 mt-8 flex flex-col items-center gap-4">
          <Button size="lg" onClick={handleOpen} aria-expanded={opened}>
            {opened ? "Đọc lá thư" : siteContent.entrance.button}
          </Button>
          <p className="text-[0.78rem] tracking-wide text-muted">
            Hoặc em cứ cuộn xuống, mọi thứ vẫn ở đó.
          </p>
        </div>

        <HiddenHeart
          note={heartNotes[0]}
          panelSide="below"
          align="right"
          className="absolute -right-1 top-2 sm:right-4"
        />
      </div>
    </SectionWrapper>
  );
}
