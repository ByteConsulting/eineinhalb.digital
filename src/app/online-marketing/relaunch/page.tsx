import {
  CheckList,
  Container,
  CtaBand,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website-Relaunch Beratung",
  description:
    "Relaunch mit strategischem Fundament: Ziele, IA, Content, Briefing und QS – optional mit Umsetzung.",
};

export default function RelaunchPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Relaunch Beratung
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Schmerzfrei zur neuen Website – mit Strategie statt Bauchgefühl
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Ein Relaunch scheitert selten am Design. Er scheitert, wenn Ziele,
            Nutzerreise, Inhalte und Technik nicht zusammengehören. Wir begleiten
            den Relaunch so, dass Marketing, Vertrieb und Entwicklung an einem
            Strang ziehen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Relaunch besprechen
            </Button>
            <Button href="/code" variant="outline" size="lg">
              Umsetzung ansehen
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Typische Schmerzpunkte" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Design wird vom Geschmack Einzelner diktiert",
                  "SEO-Sichtbarkeit bricht nach dem Launch ein",
                  "Tracking und Formulare sind nach dem Go-Live kaputt",
                  "Inhalte wurden 1:1 umgezogen – ohne Strategie",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading title="Unser Beitrag" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Ziele, KPIs und Customer Journey klären",
                  "Informationsarchitektur & Content-Richtung",
                  "Briefings für Design und Entwicklung",
                  "Qualitätssicherung vor und nach Launch",
                  "Optional: Umsetzung über unseren Code-Part",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Prozess"
            title="Vom Audit bis zur Messung"
            lead="Beratung und Build können getrennt oder aus einer Hand laufen."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Audit & Ziele",
              "IA / Content",
              "Briefing Dev & Design",
              "Umsetzung / Begleitung",
              "Launch-QS",
              "Messung & Iteration",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-line bg-white/60 px-5 py-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  Schritt {i + 1}
                </span>
                <p className="mt-2 font-display text-2xl text-forest">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        secondaryHref="/online-marketing/strategie"
        secondaryLabel="Zur OM Strategie"
      />
    </>
  );
}
