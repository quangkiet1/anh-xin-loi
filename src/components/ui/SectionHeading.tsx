import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-rose-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-[1.75rem] leading-[1.25] text-ink sm:text-4xl md:text-[2.6rem]"
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "max-w-[38rem] text-[0.98rem] leading-relaxed text-muted sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
