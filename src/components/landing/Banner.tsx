import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  className?: string;
  /** italic + жёлтый текст на синем — как в референсе */
  italic?: boolean;
  size?: "sm" | "md";
}

/**
 * "Колхозная" продающая плашка-баннер: синий фон, жёлтый жирный текст, на всю ширину.
 * size="sm" — компактный pill-бейдж для hero/якорей.
 * size="md" — полноформатный баннер для главных тезисов.
 */
const Banner = ({ children, className, italic = true, size = "md" }: BannerProps) => {
  if (size === "sm") {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-banner px-4 py-1.5",
          "text-banner-foreground font-bold uppercase tracking-wide",
          "text-xs sm:text-sm",
          italic && "italic",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-md bg-banner px-5 py-5 text-center sm:px-6 sm:py-6",
        "text-banner-foreground font-extrabold uppercase",
        "text-sm leading-tight sm:text-xl md:text-2xl",
        italic && "italic",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Banner;