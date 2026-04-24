import yuriPhoto from "@/assets/yuri.png";
import { cn } from "@/lib/utils";

interface AuthorBadgeProps {
  className?: string;
}

/**
 * Мини-карточка автора для hero: фото + имя + роль.
 * Снимает «холодность» оффера, добавляет доверие сразу.
 */
const AuthorBadge = ({ className }: AuthorBadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border bg-background p-2 pr-5 shadow-sm",
        className,
      )}
    >
      <img
        src={yuriPhoto}
        alt="Юрий"
        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-accent-soft"
      />
      <div className="leading-tight">
        <p className="text-sm font-bold text-foreground">Юрий</p>
        <p className="text-xs text-muted-foreground">
          автор системы «Врач на миллион»
        </p>
      </div>
    </div>
  );
};

export default AuthorBadge;