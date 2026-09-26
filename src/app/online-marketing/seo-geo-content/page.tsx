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
  title: "SEO, GEO & Content",
  description:
    "Organische Sichtbarkeit als Prozess: SEO/GEO-Strategie, Content-Briefings und Sparring für Marketingteams.",
};

export default function SeoGeoContentPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            SEO / GEO / Content
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Sichtbarkeit ist kein Zufall. Sie ist ein kontinuierlicher Prozess.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Du willst organisch gefunden werden, kaufst aber teure User über Ads
            ein? Mediabudgets werden teurer, Conversion Rates schwächer. Fang an,
            die Website auf deine Kunden auszurichten – mit strategischer
            Grundlage, Methodik und Fachwissen für SEO und GEO.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Erstgespräch
            </Button>
            <Button href="/online-marketing/seo-audit" variant="outline" size="lg">
              SEO Audit
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Stärkster Pull-Kanal",
                d: "Organische Suche holt Nutzer ab, die aktiv nach einer Lösung suchen.",
              },
              {
                t: "Nutzeranalyse",
                d: "SEO ist mehr als Keywords – wir analysieren Nachfrage und Verhalten.",
              },
              {
                t: "Nachhaltig & effizient",
                d: "Langfristig günstiger als Dauerfeuer in Push-Kanälen, mit weniger Streuverlust.",
              },
              {
                t: "Echter Expertenstatus",
                d: "Hochwertiger Content schafft Abgrenzung, Marke und Vertrauen – Basis für GEO.",
              },
              {
                t: "Fokus statt Gießkanne",
                d: "Mit eigenen Inhalten reduzierst du die Abhängigkeit von bezahltem Traffic.",
              },
              {
                t: "E-E-A-T zuerst",
                d: "Erfahrung, Expertise, Autorität und Trust – SEO als digitaler Kundenservice.",
              },
            ].map((item) => (
              <div key={item.t} className="border-t border-line pt-5">
                <h2 className="font-display text-2xl text-forest">{item.t}</h2>
                <p className="mt-2 text-sm text-ink-soft sm:text-base">{item.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Klare Rollenverteilung"
              title="Unsere strategische Vorarbeit"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "Status-Quo-Analyse: Nutzerzahlen, Quellen, Rankings, Landingpages",
                  "Content, Indexierung, SEO-Technik",
                  "Bedarf der Zielgruppe klären",
                  "Nachfrage-Analyse mit Impact-Keywords",
                  "URL-Plan & Keyword-Mapping",
                  "Content-Planung, Briefings, Digital-PR-Richtung",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Eure Ausführung"
              title="Umsetzung bleibt im Team"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "Content-Umsetzung (Text, Bild, Video)",
                  "Pflege im CMS",
                  "Monitoring der KPIs",
                  "Optimierungsschritte selbstständig einleiten",
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Erwartungshaltung: Wirkung braucht oft Monate. Wir begleiten den
              Prozess – kein Versprechen über Nacht.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="preise" className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Preispakete"
            title="SEO, GEO und Content – einmalig oder begleitet"
            lead="Website-Strategie ausrichten, dann sparren – oder zuerst mit dem Audit starten."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <PriceCard {...pricing.seoAudit} />
            <PriceCard {...pricing.seoSparring} featured />
            <PriceCard {...pricing.workshop} href="/workshops" />
          </div>
        </Container>
      </Section>

      <CtaBand
        secondaryHref="/online-marketing/strategie"
        secondaryLabel="Zur OM Strategie"
      />
    </>
  );
}
