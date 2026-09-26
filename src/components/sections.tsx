import { Button } from "@/components/ui/button";
import { cn, formatEuro } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight text-forest sm:text-4xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title = "Lass uns den Blindflug beenden",
  lead = "Kostenloses Erstgespräch – wir schauen uns eure Situation an und sagen klar, was als Nächstes Sinn ergibt.",
  primaryHref = "/kontakt",
  primaryLabel = "Erstgespräch vereinbaren",
  secondaryHref,
  secondaryLabel,
}: {
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Section className="pb-24 pt-8">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-hero-plane px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-copper/20 blur-2xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Button href={secondaryHref} variant="light" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function PriceCard({
  name,
  priceFrom,
  unit,
  duration,
  summary,
  forWhom,
  includes,
  featured = false,
  href = "/kontakt",
}: {
  name: string;
  priceFrom: number;
  unit: string;
  duration: string;
  summary: string;
  forWhom: string;
  includes: string[];
  featured?: boolean;
  href?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 sm:p-7",
        featured
          ? "border-copper/40 bg-forest text-mist shadow-[0_30px_60px_-40px_rgba(20,40,32,0.8)]"
          : "border-line bg-white/70",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "font-display text-2xl",
            featured ? "text-white" : "text-forest",
          )}
        >
          {name}
        </h3>
        {featured ? (
          <span className="rounded-full bg-copper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Empfohlen
          </span>
        ) : null}
      </div>
      <p className={cn("mt-4 text-sm leading-relaxed", featured ? "text-mist/80" : "text-ink-soft")}>
        {summary}
      </p>
      <p className="mt-6">
        <span className="font-display text-4xl tracking-tight">
          ab {formatEuro(priceFrom)}
        </span>
        <span className={cn("ml-2 text-sm", featured ? "text-mist/70" : "text-ink-soft")}>
          / {unit}
        </span>
      </p>
      <p className={cn("mt-1 text-xs uppercase tracking-[0.16em]", featured ? "text-copper" : "text-copper-deep")}>
        Laufzeit {duration}
      </p>
      <p className={cn("mt-5 text-sm", featured ? "text-mist/75" : "text-ink-soft")}>
        <strong className={featured ? "text-white" : "text-forest"}>Für wen:</strong>{" "}
        {forWhom}
      </p>
      <ul className="mt-5 flex-1 space-y-2.5 text-sm">
        {includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={featured ? "text-copper" : "text-forest"} aria-hidden>
              ▸
            </span>
            <span className={featured ? "text-mist/85" : "text-ink-soft"}>{item}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        className="mt-8 w-full"
        variant={featured ? "primary" : "outline"}
      >
        Unverbindlich anfragen
      </Button>
    </article>
  );
}

export function LinkTile({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-b border-line py-5 transition hover:border-copper"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-forest transition group-hover:text-copper-deep">
          {title}
        </h3>
        <span className="text-copper transition group-hover:translate-x-1">→</span>
      </div>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
        {description}
      </p>
    </Link>
  );
}

export function CheckList({
  items,
  tone = "default",
}: {
  items: string[];
  tone?: "default" | "light";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm sm:text-base">
          <span
            className={cn(
              "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
              tone === "light"
                ? "bg-white/15 text-copper"
                : "bg-forest/10 text-forest",
            )}
          >
            ✓
          </span>
          <span className={tone === "light" ? "text-white/85" : "text-ink-soft"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
