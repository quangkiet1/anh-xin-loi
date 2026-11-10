import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";
type Size = "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight " +
  "transition-[transform,background-color,color,box-shadow] duration-300 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose-deep " +
  "disabled:cursor-not-allowed disabled:opacity-60 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-rose-deep text-paper shadow-[0_14px_30px_-16px_rgb(143_79_96/0.85)] " +
    "hover:bg-ink hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-paper/90 text-ink border border-ink/12 shadow-paper hover:border-rose/50 hover:-translate-y-0.5",
  quiet:
    "bg-transparent text-rose-deep underline decoration-rose/50 decoration-1 underline-offset-4 " +
    "hover:decoration-rose-deep px-1",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.95rem]",
  lg: "min-h-[3.25rem] px-7 text-base",
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
