import {
  CheckList,
  Container,
  CtaBand,
  PriceCard,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Audit",
  description:
    "Kostenpflichtiger Einstieg: Audit eures Online Marketings – Status Quo, Potenziale, Roadmap-Basis.",
};

export default function OmAuditPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Einstieg · OM Audit
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Der Reality-Check für euer Online Marketing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Bevor wieder Budget in Einzelmaßnahmen fließt: Wir schauen uns alle
            relevanten Disziplinen aus der Vogelperspektive an und schaffen eine
            belastbare Datengrundlage. Das Ergebnis gehört euch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Audit anfragen
            </Button>
            <Button href="/online-marketing/strategie" variant="outline" size="lg">
              Lieber direkt Strategie?
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Was wir prüfen" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Website & Content",
                  "Social Media",
                  "Google-Unternehmensprofil",
                  "Bewertungsportale",
                  "Brand Search / SERP-Eindruck",
                  "Technik, Tracking, DSGVO-Basis, Verzeichnisse",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading title="Was ihr bekommt" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Kick-off & Rahmenklärung",
                  "Ungeschönter Status Quo",
                  "Potenziale & Customer-Journey-Skizze",
                  "Priorisierte Roadmap (Basis)",
                  "Empfehlung: intern weiter oder Begleitung starten",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-xl">
          <PriceCard {...pricing.audit} featured href="/kontakt" />
        </Container>
      </Section>

      <CtaBand
        title="Audit buchen oder Erstgespräch?"
        lead="Wir klären in 30 Minuten, ob das Fundament-Audit oder direkt die Begleitung der richtige Einstieg ist."
      />
    </>
  );
}
