import { BrandGeometry } from "@/components/brand-geometry";
import { BrandLogo } from "@/components/brand-logo";
import {
  CheckList,
  Container,
  CtaBand,
  LinkTile,
  PriceCard,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { packages, painHooks, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Beratung & Umsetzung",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-plane">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block">
          <BrandGeometry className="float-soft absolute -right-8 top-1/2 h-[min(78vh,560px)] w-auto -translate-y-1/2 opacity-90" />
        </div>

        <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="max-w-xl">
            <div className="reveal">
              <BrandLogo href={null} size="hero" priority />
            </div>

            <h1 className="reveal reveal-delay-1 mt-10 font-display text-[clamp(2.5rem,7vw,4.25rem)] leading-[0.98] text-forest text-balance">
              {site.claim}
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Online Marketing Beratung für Marketingabteilungen – Strategie von
              uns, Umsetzung durch euer Team.
            </p>

            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
              <Button href="/kontakt" size="lg">
                Kostenloses Erstgespräch
              </Button>
              <Button href="/online-marketing/audit" variant="outline" size="lg">
                Zum OM Audit
              </Button>
            </div>
          </div>

          <div className="reveal reveal-delay-2 mt-14 lg:hidden">
            <BrandGeometry className="mx-auto h-48 w-full max-w-md opacity-90" />
          </div>
        </Container>

        <div className="h-1 origin-left bg-copper draw-line" />
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Kommt euch bekannt vor?"
            title="Wenn Online Marketing sich anfühlt wie Blindflug"
            lead="Erfolgreiches Online Marketing ist nicht der LinkedIn-Post am Freitag, das grüne SEO-Häkchen oder drei planlose Anzeigen."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {painHooks.slice(0, 4).map((pain, i) => (
              <blockquote
                key={pain}
                className="border-l-[3px] border-copper pl-5 text-base leading-relaxed text-ink-soft"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                „{pain}“
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/70">
        <Container>
          <SectionHeading
            eyebrow="Drei klare Wege"
            title="Einstieg, Klarheit oder Umsetzung"
            lead="Je nachdem, wo ihr steht – wir holen euch genau dort ab."
          />
          <div className="mt-10">
            <LinkTile
              href="/online-marketing/audit"
              title="Einstieg: Audit"
              description="Status Quo, Potenziale und eine belastbare Datengrundlage – Ergebnis gehört euch."
            />
            <LinkTile
              href="/online-marketing/strategie"
              title="Klarheit: OM Strategie"
              description="Roadmap für 12+ Monate, Sparring bei der Umsetzung, Know-how-Transfer ins Team."
            />
            <LinkTile
              href="/code"
              title="Umsetzung: Code & Automatisierung"
              description="Website-Build entlang der Strategie – plus individuelle Schnittstellen, mit und ohne KI."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Investment"
              title="Beispielpreise – transparent und modular"
              lead="Finale Pakete hängen von Scope und Ressourcen ab. Die Zahlen unten sind realistische Orientierungen für den Soft-Launch."
            />
            <CheckList
              items={[
                "Keine starren Retainer mit Upselling-Agenda",
                "Audit-Ergebnis gehört euch – intern weiterarbeiten möglich",
                "Begleitung erst, wenn Umsetzung und Wirkung Zeit brauchen",
              ]}
            />
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PriceCard key={pkg.name} {...pkg} featured={index === 1} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-band-forest text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
                Für wen
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Marketingabteilungen mit Ressourcen und Hunger nach Klarheit
              </h2>
              <p className="mt-4 text-white/75">
                Startups, Mittelstand, Konzerne – solange Marketing nicht „die
                Azubine“ ist und Entscheidungen datenbasierter werden sollen.
              </p>
            </div>
            <CheckList
              tone="light"
              items={[
                "Marketingleitung, CMO, Online Marketing Manager",
                "Wunsch nach Input, Impulsen und Skill-Erweiterung",
                "Bereitschaft zu Roadmap, Reporting und Optimierung",
                "Optional: technische Digitalisierung der Marketing-Prozesse",
              ]}
            />
          </div>
        </Container>
      </Section>

      <CtaBand secondaryHref="/online-marketing" secondaryLabel="Leistungen ansehen" />
    </>
  );
}
