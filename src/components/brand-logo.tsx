import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: { className: "h-10 w-auto", width: 160, height: 160 },
  md: { className: "h-12 w-auto sm:h-14", width: 200, height: 200 },
  lg: { className: "h-24 w-auto sm:h-28", width: 320, height: 320 },
  hero: { className: "h-32 w-auto sm:h-40 md:h-48", width: 480, height: 480 },
} as const;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  /** Full lockup (mark + wordmark). Default — never crop. */
  size?: keyof typeof sizeMap;
};

/**
 * Renders the official lockup PNG as-is.
 * The asset already contains mark + “ein-ein-halb digital” — do not crop or duplicate text.
 */
export function BrandLogo({
  className,
  priority,
  href = "/",
  size = "md",
}: BrandLogoProps) {
  const dims = sizeMap[size];

  const mark = (
    <Image
      src="/brand/logo.png"
      alt="ein-ein-halb digital"
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={cn(dims.className, "object-contain object-left", className)}
    />
  );

  if (href === null) return mark;
  return (
    <Link
      href={href}
      aria-label="ein-ein-halb digital – Startseite"
      className="inline-flex shrink-0"
    >
      {mark}
    </Link>
  );
}
