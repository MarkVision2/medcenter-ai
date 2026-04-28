import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: "default" | "muted" | "accent";
  containerClassName?: string;
}

const toneMap = {
  default: "bg-background",
  muted: "bg-muted",
  accent: "bg-accent-soft",
} as const;

const Section = ({ children, className, tone = "default", containerClassName, ...rest }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in viewport on mount - show instantly
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "w-full px-5 py-12 sm:py-16",
        toneMap[tone],
        animated
          ? "animate-fade-in-up"
          : "opacity-0",
        className,
      )}
      {...rest}
    >
      <div className={cn("mx-auto w-full max-w-2xl", containerClassName)}>{children}</div>
    </section>
  );
};

export default Section;