import { BrandLogo } from "@/components/brand-logo";
import { site } from "@/lib/site";
import Link from "next/link";

const footerColumns = [
  {
    title: "Einstiege",
    links: [
      { href: "/online-marketing/audit", label: "OM Audit" },
      { href: "/online-marketing/seo-audit", label: "SEO/GEO Audit" },
    ],
  },
  {
    title: "Leistungen",
    links: [
      { href: "/online-marketing/strategie", label: "Online Marketing Strategie" },
      { href: "/online-marketing/seo-geo-content", label: "SEO/GEO & Content" },
      { href: "/online-marketing/relaunch", label: "Relaunch Beratung" },
      { href: "/code", label: "Code & Automatisierung" },
    ],
  },
  {
    title: "Kontakt & Info",
    links: [
      { href: "/kontakt", label: "Kontakt" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/newsletter/geo", label: "GEO-Kurs Newsletter" },
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sand/80 text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_2fr] lg:px-8">
        <div>
          <BrandLogo href="/" size="lg" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            {site.claim} Online Marketing Beratung für Marketingabteilungen –
            Strategie, Sparring und technische Umsetzung.
          </p>
          <p className="mt-4 text-sm">
            <a
              className="font-medium text-forest underline-offset-4 hover:text-copper hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition hover:text-forest"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-charcoal/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Beispielpreise – finale Pakete nach Scope.</p>
        </div>
      </div>
    </footer>
  );
}
