import {
  CheckList,
  Container,
  CtaBand,
  Eyebrow,
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
      <section className="relative overflow-hidden">
        <div className="bg-hero-plane text-white">
          <Container className="grid min-h-[calc(100svh-4.5rem)] items-end gap-10 pb-14 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-20 lg:pt-20">
            <div>
              <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-copper">
                {site.name}
              </p>
              <h1 className="reveal reveal-delay-1 mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] text-balance">
                {site.claim}
                <span className="mt-3 block text-[0.55em] font-sans font-semibold tracking-normal text-white/85">
                  Online Marketing Beratung für die Marketingabteilung.
                </span>
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Strategie und Leitplanken von uns – Umsetzung durch euer Team.
                Optional digitalisieren wir Prozesse und Schnittstellen, damit
                Marketing messbar und automatisiert läuft.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt" size="lg">
                  Kostenloses Erstgespräch
                </Button>
                <Button href="/online-marketing/audit" variant="light" size="lg">
                  Zum OM Audit
                </Button>
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:min-h-[340px] sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(192,106,58,0.18))]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <Eyebrow>Prinzip</Eyebrow>
                  <p className="mt-3 font-display text-3xl text-white">
                    Einzelmaßnahmen wirken selten. Das Zusammenspiel entscheidet.
                  </p>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-white/75">
                  <li>Fundament → Kanäle in Handlungen → Optimierung</li>
                  <li>Nutzerfokus statt Bauchgefühl</li>
                  <li>Know-how bleibt in eurer Abteilung</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className="h-1 origin-left scale-x-100 bg-copper draw-line" />
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Kommt euch bekannt vor?"
            title="Wenn Online Marketing sich anfühlt wie Blindflug"
            lead="Erfolgreiches Online Marketing ist nicht der LinkedIn-Post am Freitag, das grüne SEO-Häkchen oder drei planlose Anzeigen."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {painHooks.slice(0, 4).map((pain) => (
              <blockquote
                key={pain}
                className="border-l-2 border-copper/70 bg-white/50 px-5 py-4 text-sm leading-relaxed text-ink-soft sm:text-base"
              >
                „{pain}“
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PriceCard key={pkg.name} {...pkg} featured={index === 1} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-forest text-white">
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
