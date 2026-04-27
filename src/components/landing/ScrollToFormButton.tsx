import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollToFormButtonProps {
  label?: string;
  className?: string;
  variant?: "whatsapp" | "cta-orange";
  targetId?: string;
}

const ScrollToFormButton = ({
  label = "Записаться на диагностику",
  className,
  variant = "whatsapp",
  targetId = "diagnostic-form",
}: ScrollToFormButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Focus first input shortly after scroll begins for accessibility
      window.setTimeout(() => {
        const firstInput = el.querySelector<HTMLInputElement>(
          'input, [role="combobox"]',
        );
        firstInput?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <Button
      asChild
      variant={variant}
      size="cta"
      className={cn(
        "font-semibold leading-tight whitespace-normal text-center w-full",
        className,
      )}
    >
      <a href={`#${targetId}`} onClick={handleClick}>
        <span>{label}</span>
        <ArrowRight className="h-5 w-5" />
      </a>
    </Button>
  );
};

export default ScrollToFormButton;
