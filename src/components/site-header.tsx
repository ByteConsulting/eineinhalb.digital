"use client";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const syncOverflow = () => {
      document.body.style.overflow = details.open ? "hidden" : "";
    };
    const onToggle = () => syncOverflow();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        details.open = false;
        syncOverflow();
      }
    };

    details.addEventListener("toggle", onToggle);
    window.addEventListener("keydown", onKey);
    return () => {
      details.removeEventListener("toggle", onToggle);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
    document.body.style.overflow = "";
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md transition-[box-shadow,border-color] duration-300",
        scrolled ? "border-line shadow-[0_8px_30px_-18px_rgba(37,65,48,0.35)]" : "border-transparent",
      )}
    >
      <div className="mx-auto flex min-h-[5rem] max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <BrandLogo priority size="md" />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hauptnavigation">
          {mainNav.map((item) => {
            const hasMegaMenu = Boolean(item.clusters && item.clusters.length > 0);

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex h-10 items-center px-3.5 text-sm font-medium text-ink-soft transition hover:text-forest"
                >
                  {item.label}
                  {hasMegaMenu ? (
                    <span className="ml-1 text-[10px] text-ink-soft/60 transition group-hover:rotate-180">
                      ▾
                    </span>
                  ) : null}
                </Link>

                {hasMegaMenu ? (
                  <div className="invisible absolute left-0 top-full z-40 w-[600px] translate-y-1 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mt-2 grid grid-cols-[1fr_220px] overflow-hidden border border-line bg-cream shadow-[0_24px_50px_-28px_rgba(37,65,48,0.4)]">
                      {/* Left: Clusters & Items */}
                      <div className="p-4 sm:p-5">
                        {item.megaTitle ? (
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                            {item.megaTitle}
                          </p>
                        ) : null}

                        <div className="space-y-4">
                          {item.clusters?.map((cluster, cIdx) => (
                            <div key={cIdx}>
                              {cluster.title ? (
                                <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-forest">
                                  {cluster.title}
                                </p>
                              ) : null}
                              <div className={cn("space-y-1", cluster.title && "pl-2")}>
                                {cluster.items.map((sub) => (
                                  <Link
                                    key={sub.href + sub.label}
                                    href={sub.href}
                                    className="group/item block rounded-lg px-2.5 py-1.5 transition hover:bg-sand"
                                  >
                                    <span className="block text-sm font-semibold text-forest transition group-hover/item:text-copper-deep">
                                      {sub.label}
                                    </span>
                                    {sub.description ? (
                                      <span className="block text-xs text-ink-soft/80">
                                        {sub.description}
                                      </span>
                                    ) : null}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Description & Side Box */}
                      <div className="flex flex-col justify-between border-l border-line bg-sand/60 p-5">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                            Fokus & Sparring
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                            {item.megaDescription}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-line/60">
                          <Link
                            href="/kontakt"
                            className="inline-flex items-center text-xs font-semibold text-forest hover:text-copper"
                          >
                            Erstgespräch anfragen →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" size="sm">
            Erstgespräch
          </Button>
        </div>

        <details ref={detailsRef} className="group relative lg:hidden">
          <summary
            className="flex h-11 w-11 list-none cursor-pointer items-center justify-center border border-line bg-cream text-forest marker:content-none [&::-webkit-details-marker]:hidden"
            aria-label="Menü"
          >
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-forest transition group-open:top-1.5 group-open:rotate-45" />
              <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-forest transition group-open:opacity-0" />
              <span className="absolute left-0 top-3 h-0.5 w-5 bg-forest transition group-open:top-1.5 group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(100vw-2rem,22rem)] border border-line bg-cream p-4 shadow-[0_24px_50px_-28px_rgba(37,65,48,0.45)]">
            <nav className="flex flex-col" aria-label="Mobile Navigation">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-line/70 py-2 last:border-none"
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-semibold text-forest"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  {item.clusters ? (
                    <div className="space-y-2 pb-1">
                      {item.clusters.map((cluster, idx) => (
                        <div key={idx} className="pl-3">
                          {cluster.title ? (
                            <p className="pt-1 text-[11px] font-bold uppercase tracking-wider text-copper">
                              {cluster.title}
                            </p>
                          ) : null}
                          {cluster.items.map((sub) => (
                            <Link
                              key={sub.href + sub.label}
                              href={sub.href}
                              className="block py-1 text-sm text-ink-soft hover:text-forest"
                              onClick={closeMenu}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Button href="/kontakt" className="mt-3 w-full" onClick={closeMenu}>
                Erstgespräch buchen
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
