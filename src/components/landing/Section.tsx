import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: "default" | "soft" | "white";
  contentClassName?: string;
}

const toneMap = {
  default: "bg-accent-soft/35",
  soft: "bg-background",
  white: "bg-background",
} as const;

const Section = ({
  children,
  className,
  contentClassName,
  tone = "default",
  ...rest
}: SectionProps) => {
  return (
    <section
      className={cn("w-full px-2 py-10 sm:px-6 sm:py-16", toneMap[tone], className)}
      {...rest}
    >
      <div className={cn("mx-auto w-full max-w-lg sm:max-w-2xl", contentClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
