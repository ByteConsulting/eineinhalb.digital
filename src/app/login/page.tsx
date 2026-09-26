import { BrandLogo } from "@/components/brand-logo";
import { LoginForm } from "@/app/login/login-form";
import { safeNextPath } from "@/lib/site-gate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Draft-Zugang",
  robots: { index: false, follow: false },
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = safeNextPath(params.next);

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-hero-plane">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--forest) 14%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-16 sm:px-8">
        <div className="reveal flex justify-center">
          <BrandLogo href={null} size="hero" priority className="object-center" />
        </div>

        <div className="reveal reveal-delay-1 mt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">
            Soft Launch
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,2.75rem)] leading-[1.05] text-forest text-balance">
            Noch nicht öffentlich
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
            Mit dem Zugangscode siehst du die aktuelle Version – bevor sie live
            geht.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-2">
          <LoginForm next={next} />
        </div>

        <p className="reveal reveal-delay-3 mt-10 text-center text-xs tracking-wide text-charcoal/60">
          Geschützter Vorab-Zugang · Bitte nicht weitergeben
        </p>
      </div>

      <div className="h-1 origin-left bg-copper draw-line" />
    </div>
  );
}
