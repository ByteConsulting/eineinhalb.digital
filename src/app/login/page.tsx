import { BrandLogo } from "@/components/brand-logo";
import { LoginForm } from "@/app/login/login-form";
import { safeNextPath } from "@/lib/site-gate";
import { site } from "@/lib/site";
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
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-hero-plane text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1 origin-left bg-copper draw-line" />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-6 py-16 sm:px-8">
        <div className="reveal">
          <BrandLogo href={null} priority inverted />
        </div>

        <div className="reveal reveal-delay-1 mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">
            Soft Launch
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,8vw,3.4rem)] leading-[0.95] text-balance">
            Noch nicht öffentlich.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            {site.name} ist im Draft. Mit dem Zugangscode siehst du die aktuelle
            Version – bevor sie live geht.
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <LoginForm next={next} />
        </div>

        <p className="reveal reveal-delay-3 mt-10 text-xs tracking-wide text-white/40">
          Geschützter Vorab-Zugang · Bitte nicht weitergeben
        </p>
      </div>
    </div>
  );
}
