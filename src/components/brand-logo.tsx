import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  inverted?: boolean;
};

export function BrandLogo({
  className,
  priority,
  href = "/",
  inverted = false,
}: BrandLogoProps) {
  const mark = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/brand/logo.png"
        alt="ein-ein-halb digital"
        width={180}
        height={180}
        priority={priority}
        className={cn(
          "h-12 w-12 rounded-md object-cover shadow-sm ring-1 ring-forest/10",
          inverted && "ring-white/20",
        )}
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-semibold tracking-tight",
            inverted ? "text-white" : "text-forest",
          )}
        >
          ein-ein-halb
        </span>
        <span
          className={cn(
            "block text-xs font-medium uppercase tracking-[0.22em]",
            inverted ? "text-copper" : "text-copper-deep",
          )}
        >
          digital
        </span>
      </span>
    </span>
  );

  if (href === null) return mark;
  return (
    <Link href={href} aria-label="ein-ein-halb digital – Startseite">
      {mark}
    </Link>
  );
}
