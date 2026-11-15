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

const processSteps = [
  {
    step: "1",
    title: "Kick-off & Setup",
    body: "Ziele definieren, Systemzugänge (Search Console, Analytics) übergeben – und wir starten die Bestandsaufnahme.",
  },
  {
    step: "2",
    title: "Die Analyse",
    body: "Der Deep Dive. Wir analysieren Rankings, durchleuchten den Code nach SEO-Fehlern und messen euren Content am aktuellen Markt und der KI-Suche auf Relevanz.",
  },
  {
    step: "3",
    title: "Ergebnis & Übergabe",
    body: "Die Karten auf den Tisch. Wir übergeben die fertigen Dokumente (inklusive Tech-Backlog und C-Level-Report) und zeigen dir im gemeinsamen Call die exakten Hebel für mehr Sichtbarkeit.",
  },
];

export default function SeoAuditPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Einstieg · SEO Audit
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Ist dein SEO bereit für die neue Suche?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Rankings, Content, Technik: Wir zeigen deinen wahren SEO-Status. Einmalig
            analysiert klären wir, ob deine Website zukunftssicher für die KI-Suche
            (GEO) aufgestellt ist – und liefern Impulse und Ideen für den Ausbau
            eurer organischen Sichtbarkeit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              SEO Audit anfragen
            </Button>
            <Button href="/online-marketing/seo-geo-content" variant="outline" size="lg">
              Mehr zu SEO/GEO
            </Button>
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Aufn Punkt:
            </p>
            <p className="mt-2 text-base leading-relaxed text-forest sm:text-lg">
              Du willst nicht noch ein SEO-Paket ohne Ergebnisse? Wir sagen dir, was nötig ist!
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Was wir prüfen:" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Nutzerzahlen & Traffic-Quellen",
                  "Rankings & Landingpages",
                  "Content-Qualität & Suchintention",
                  "Indexierung & SEO-Technik",
                  "UX-Überblick",
                  "Wettbewerber-Benchmark",
                  "GEO- & KI-Readiness",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading title="Was du bekommst:" />
            <ol className="mt-6 space-y-3">
              {[
                "Das SEO & GEO Strategie-Dossier (PDF-Präsentation)",
                "Der Rankingstatus & Potenzial-Analyse (Excel/Google Sheets)",
                "Das Tech-SEO Fehlerprotokoll (Excel/Google Sheets)",
                "Das Management Summary (One-Pager als PDF)",
              ].map((item, idx) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-forest/10 text-xs font-bold text-forest">
                    {idx + 1}
                  </span>
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Die Zusammenarbeit"
            title="Wie es abläuft:"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <span className="font-display text-3xl text-copper">
                  {item.step}.
                </span>
                <h3 className="mt-3 font-display text-2xl text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/40">
        <Container className="max-w-xl">
          <PriceCard {...pricing.seoAudit} featured href="/kontakt" />
        </Container>
      </Section>

      <CtaBand
        title="Wenns noch Fragen gibt, einfach melden."
        lead="Wir klären in 30 Minuten, wie eine Zusammenarbeit aussehen kann."
        signoff={"Ich freu mich!\nTorben"}
        primaryLabel="Erstgespräch vereinbaren"
        secondaryHref="/online-marketing/seo-geo-content"
        secondaryLabel="SEO/GEO Leistung"
      />
    </>
  );
}
