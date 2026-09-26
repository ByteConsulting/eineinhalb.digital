import { BrandLogo } from "@/components/brand-logo";
import { site } from "@/lib/site";
import Link from "next/link";

const footerColumns = [
  {
    title: "Leistungen",
    links: [
      { href: "/online-marketing", label: "Online Marketing" },
      { href: "/online-marketing/strategie", label: "OM Strategie" },
      { href: "/online-marketing/seo-geo-content", label: "SEO/GEO & Content" },
      { href: "/online-marketing/relaunch", label: "Relaunch Beratung" },
      { href: "/code", label: "Code & Automatisierung" },
    ],
  },
  {
    title: "Einstiege",
    links: [
      { href: "/online-marketing/audit", label: "OM Audit" },
      { href: "/online-marketing/seo-audit", label: "SEO Audit" },
      { href: "/workshops", label: "Workshops" },
      { href: "/newsletter/geo", label: "GEO-Newsletter" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-forest-deep text-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <BrandLogo inverted href="/" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist/75">
            {site.claim} Online Marketing Beratung für Marketingabteilungen –
            Strategie, Sparring und technische Umsetzung.
          </p>
          <p className="mt-4 text-sm text-mist/60">
            <a className="hover:text-copper" href={`mailto:${site.email}`}>
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
                      className="text-sm text-mist/80 transition hover:text-white"
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
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Beispielpreise – finale Pakete nach Scope.</p>
        </div>
      </div>
    </footer>
  );
}
