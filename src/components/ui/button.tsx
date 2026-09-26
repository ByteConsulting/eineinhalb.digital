import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-copper text-white shadow-[0_10px_30px_-18px_rgba(192,106,58,0.9)] hover:bg-copper-deep hover:-translate-y-0.5",
        secondary:
          "bg-forest text-mist hover:bg-forest-deep hover:-translate-y-0.5",
        outline:
          "border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest/5",
        ghost: "text-mist/90 hover:bg-white/10 hover:text-white",
        light:
          "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18",
      },
      size: {
        sm: "h-9 px-3.5",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    children: ReactNode;
  };

export function Button({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={props.onClick as never}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
