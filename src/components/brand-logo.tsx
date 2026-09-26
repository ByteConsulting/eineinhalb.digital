import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-9",
  md: "h-12 sm:h-14",
  lg: "h-16 sm:h-20",
  hero: "h-24 sm:h-28 md:h-[7.5rem]",
} as const;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  size?: keyof typeof sizeMap;
};

/**
 * Official lockup as SVG (transparent artwork, scales cleanly).
 * Source: public/brand/logo.svg (embedded transparent PNG in viewBox).
 */
export function BrandLogo({
  className,
  priority,
  href = "/",
  size = "md",
}: BrandLogoProps) {
  const mark = (
    // eslint-disable-next-line @next/next/no-img-element -- brand SVG lockup
    <img
      src="/brand/logo.svg"
      alt="eineinhalb Digital"
      width={612}
      height={302}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        sizeMap[size],
        "w-auto max-w-full object-contain object-left",
        className,
      )}
    />
  );

  if (href === null) return mark;
  return (
    <Link
      href={href}
      aria-label="eineinhalb Digital – Startseite"
      className="inline-flex shrink-0"
    >
      {mark}
    </Link>
  );
}
