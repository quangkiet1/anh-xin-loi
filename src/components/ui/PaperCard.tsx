import { cn } from "@/lib/utils";

/** Paper-like surface used by the letter, promise cards and the scrapbook note. */
export function PaperCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "paper-texture rounded-[var(--radius-paper)] border border-ink/8 bg-paper shadow-paper",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
