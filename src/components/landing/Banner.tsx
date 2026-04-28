import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  className?: string;
  /** italic + жёлтый текст на синем - как в референсе */
  italic?: boolean;
}

/**
 * "Колхозная" продающая плашка-баннер: синий фон, жёлтый жирный текст, на всю ширину.
 * Используется для главных тезисов / якорей внимания.
 */
const Banner = ({ children, className, italic = true }: BannerProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-banner px-5 py-5 text-center sm:px-6 sm:py-6",
        "text-banner-foreground font-extrabold uppercase",
        "text-sm leading-tight sm:text-xl md:text-2xl",
        "shadow-lg shadow-banner/20",
        italic && "italic",
        className,
      )}
    >
      {/* Shimmer overlay for attention */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" aria-hidden="true" />
      <span className="relative">{children}</span>
    </div>
  );
};

export default Banner;