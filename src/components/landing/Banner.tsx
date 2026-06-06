import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  className?: string;
  italic?: boolean;
}

const Banner = ({ children, className, italic = true }: BannerProps) => {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] bg-accent-deep px-5 py-5 text-center shadow-[0_8px_30px_rgba(22,80,60,0.15)] sm:rounded-2xl sm:px-6 sm:py-6",
        "font-extrabold uppercase text-highlight",
        "text-sm leading-tight sm:text-xl",
        italic && "italic",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Banner;
