import {
  Container,
  CtaBand,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO-Newsletter / Quick Check",
  description:
    "Kostenloser GEO-E-Mail-Kurs: Zukunftssicher bei KI-Suche – mitarbeiten statt nur lesen.",
};

export default function GeoNewsletterPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Nerd-Wissen frei Haus
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
              GEO-Kurs-Newsletter: KI-Suche verstehen und vorbereiten
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Kein klassischer Newsletter zum Wegklicken. Du musst mitarbeiten –
              dafür bekommst du konkrete Checks, wie du dich auf Entwicklungen im
              Bereich KI-Suche vorbereitest.
            </p>
            <ul className="mt-6 space-y-2 text-ink-soft">
              <li>▸ Monatlicher Quick Check – kostenlos</li>
              <li>▸ Fokus GEO, Suchverhalten, moderne SEO</li>
              <li>▸ Double-Opt-In, abbestellbar, ohne Spam</li>
            </ul>
          </div>

          <form
            action="/kontakt"
            method="get"
            className="rounded-2xl border border-line bg-white/80 p-6 shadow-[0_30px_60px_-40px_rgba(20,40,32,0.35)] sm:p-8"
          >
            <h2 className="font-display text-2xl text-forest">Interessiert?</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Die Anbindung an den Versanddienst folgt. Bis dahin: kurz melden –
              wir setzen dich auf die Warteliste.
            </p>
            <label className="mt-6 block text-sm font-medium text-forest">
              E-Mail
              <input
                type="email"
                name="email"
                required
                placeholder="name@firma.de"
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-ink outline-none ring-copper focus:ring-2"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-forest">
              Name (optional)
              <input
                type="text"
                name="name"
                placeholder="Alex Beispiel"
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 text-ink outline-none ring-copper focus:ring-2"
              />
            </label>
            <Button type="submit" className="mt-6 w-full" size="lg">
              Auf Warteliste setzen
            </Button>
            <p className="mt-3 text-xs text-ink-soft/80">
              Mit dem Absenden akzeptierst du die Verarbeitung gemäß Datenschutz.
            </p>
          </form>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            title="Was dich erwartet"
            lead="Kurze Sequenzen statt endloser Mailflut – mit Aufgaben, die ihr im Team direkt anwenden könnt."
          />
        </Container>
      </Section>

      <CtaBand
        title="Lieber persönlich sprechen?"
        secondaryHref="/online-marketing/seo-geo-content"
        secondaryLabel="SEO/GEO Leistung"
      />
    </>
  );
}
