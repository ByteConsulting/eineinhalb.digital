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
  title: "SEO/GEO & Content Audit",
  description:
    "Fokus-Audit auf organische Sichtbarkeit, Content und technische Website-Gesundheit.",
};

export default function SeoAuditPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Einstieg · SEO Audit
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Organische Sichtbarkeit ehrlich vermessen
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Wir zoomen eine Ebene tiefer: Rankings, Content, Indexierung,
            PageSpeed und die Richtung für SEO- und GEO-relevante Inhalte. Einmalig
            analysiert – als Basis für interne Arbeit oder tieferes Sparring.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              SEO Audit anfragen
            </Button>
            <Button href="/online-marketing/seo-geo-content" variant="outline" size="lg">
              Mehr zu SEO/GEO
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Im Scope" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Nutzerzahlen & Quellen",
                  "Rankings & Landingpages",
                  "Content-Qualität und Lücken",
                  "Indexierung & SEO-Technik",
                  "PageSpeed / Core Web Vitals (Überblick)",
                  "Erste GEO-/KI-Suche-Implikationen",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading title="Ergebnis" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Status-Quo-Report ohne Beschönigung",
                  "Potenziale mit Priorität",
                  "URL-/Content-Richtung",
                  "Harte KPIs als Startpunkt",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-xl">
          <PriceCard {...pricing.seoAudit} featured />
        </Container>
      </Section>

      <CtaBand secondaryHref="/online-marketing/seo-geo-content" secondaryLabel="SEO/GEO Leistung" />
    </>
  );
}
