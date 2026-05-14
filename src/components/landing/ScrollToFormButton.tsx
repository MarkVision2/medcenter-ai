import WhatsAppButton from "@/components/landing/WhatsAppButton";

interface ScrollToFormButtonProps {
  label?: string;
  className?: string;
  variant?: "whatsapp" | "cta-orange";
}

// Form path is disabled: every "Записаться" button now opens WhatsApp.
// Kept as a thin wrapper so the existing landing layout isn't touched.
const ScrollToFormButton = ({
  label = "Записаться на диагностику",
  className,
  variant,
}: ScrollToFormButtonProps) => (
  <WhatsAppButton label={label} className={className} variant={variant} />
);

export default ScrollToFormButton;
