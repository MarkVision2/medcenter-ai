import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: "default" | "muted" | "accent";
  spacing?: "tight" | "default" | "loose";
}

const toneMap = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent-soft",
} as const;

const spacingMap = {
  tight: "py-8 sm:py-10",
  default: "py-12 sm:py-16",
  loose: "py-16 sm:py-24",
} as const;

const Section = ({
  children,
  className,
  tone = "default",
  spacing = "default",
  ...rest
}: SectionProps) => {
  return (
    <section
      className={cn("w-full px-5", spacingMap[spacing], toneMap[tone], className)}
      {...rest}
    >
      <div className="mx-auto w-full max-w-2xl">{children}</div>
    </section>
  );
};

export default Section;