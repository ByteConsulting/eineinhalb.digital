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
        "sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-line shadow-sm" : "border-line/60",
      )}
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <BrandLogo priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium text-ink-soft transition hover:bg-forest/5 hover:text-forest"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-40 w-80 translate-y-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="mt-2 overflow-hidden rounded-xl border border-line bg-paper p-2 shadow-[0_24px_60px_-30px_rgba(20,40,32,0.45)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition hover:bg-sand"
                      >
                        <span className="block text-sm font-semibold text-forest">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-ink-soft/80">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" size="sm">
            Erstgespräch
          </Button>
        </div>

        <details ref={detailsRef} className="group relative lg:hidden">
          <summary
            className="flex h-11 w-11 list-none cursor-pointer items-center justify-center rounded-md border border-line bg-paper text-forest marker:content-none [&::-webkit-details-marker]:hidden"
            aria-label="Menü"
          >
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span className="absolute left-0 top-0 h-0.5 w-5 bg-forest transition group-open:top-1.5 group-open:rotate-45" />
              <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-forest transition group-open:opacity-0" />
              <span className="absolute left-0 top-3 h-0.5 w-5 bg-forest transition group-open:top-1.5 group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(100vw-2rem,22rem)] rounded-2xl border border-line bg-paper p-4 shadow-[0_24px_60px_-30px_rgba(20,40,32,0.55)]">
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
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 pl-3 text-sm text-ink-soft"
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
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
