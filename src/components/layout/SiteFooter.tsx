import { HeartGlyph } from "@/components/illustrations/Botanicals";
import { BackToTop } from "@/components/layout/BackToTop";
import { siteContent } from "@/data/site-content";

/** Quiet closing footer: signature, a note that nothing is transmitted, Back to Top. */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#F3E7DE] px-5 pb-12 pt-14 text-center sm:px-8">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-3">
        <HeartGlyph className="h-4 w-4 opacity-70" />

        <p className="hand text-[1.4rem] text-rose-deep">— {siteContent.signature}</p>

        <p className="max-w-[28rem] text-[0.82rem] leading-relaxed text-ink">
          Trang nhỏ này chỉ để em đọc. Không có gì được gửi đi cả.
        </p>

        <div className="mt-2">
          <BackToTop />
        </div>

        <p className="mt-4 text-[0.66rem] uppercase tracking-[0.3em] text-ink">
          A Little World For You
        </p>
      </div>
    </footer>
  );
}
