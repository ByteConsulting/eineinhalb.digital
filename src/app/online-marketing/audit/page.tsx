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

const auditSteps = [
  {
    step: "1",
    title: "Kick-off & Setup",
    body: "Gemeinsamer Austausch zu euren Zielen und internen Ressourcen. Ihr gebt uns die nötigen Systemzugänge (Analytics, Ads, Socials, etc.) und wir legen direkt los.",
  },
  {
    step: "2",
    title: "Die Analyse",
    body: "Wir ziehen uns zurück und durchleuchten euer komplettes digitales Setup. Ehrlich und datenbasiert.",
  },
  {
    step: "3",
    title: "Ergebnis & Übergabe",
    body: "Wir präsentieren die harte Faktenlage in einem gemeinsamen Termin, übergeben euch alle Dokumente (vom Tech-Backlog für die IT bis zum Management Summary) und zeigen die konkreten nächsten Hebel auf.",
  },
];

export default function OmAuditPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Einstieg · Online Marketing Audit
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Wo steht ihr wirklich?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Bevor wir Strategien bauen, brauchen wir Fakten. Wir definieren euren
            Ist-Zustand und liefern einen kompakten Überblick: Wo steht ihr aktuell,
            welche Optionen bieten die höchsten Chancen und welche Ressourcen sind nötig.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Audit anfragen
            </Button>
            <Button href="/online-marketing/strategie" variant="outline" size="lg">
              Lieber direkt Strategie?
            </Button>
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Aufn Punkt:
            </p>
            <p className="mt-2 text-base leading-relaxed text-forest sm:text-lg">
              Stopp die Budgetverschwendung. Wir zeigen dir, was wirklich funktioniert,
              Du bekommst die volle Kontrolle über dein Budget, klare Prioritäten für dein
              Team und harte Fakten, die auch die kritischsten Stimmen überzeugen.
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
                  "Website, Content & Customer Journey",
                  "Organische Sichtbarkeit (SEO/GEO) & Rankings",
                  "Paid Media (Google Ads, Social Ads)",
                  "Social Media & Google-Unternehmensprofil",
                  "Newsletter-Setup",
                  "Bewertungsportale",
                  "Wettbewerber-Benchmark",
                  "Technik & Tracking-Check",
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading title="Was du im Detail bekommst" />
            <div className="mt-6">
              <CheckList
                items={[
                  "Das Status-Quo Dossier (Die ungeschönte Analyse aller Kanäle)",
                  "Die Potenzial Übersicht (Die Auflistung der möglichen Kanäle)",
                  "Der Tech-Backlog (Die konkrete Fehlerliste für die IT/Entwickler)",
                  "Das Management Summary (Der One-Pager für die Chefetage)",
                ]}
              />
            </div>
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
            {auditSteps.map((item) => (
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
          <PriceCard {...pricing.audit} featured href="/kontakt" />
        </Container>
      </Section>

      <CtaBand
        title="Vor dem Audit kurz sprechen?"
        lead="Wir klären in 30 Minuten, wie eine Zusammenarbeit aussehen kann."
        signoff={"Ich freu mich!\nTorben"}
        primaryLabel="Erstgespräch vereinbaren"
      />
    </>
  );
}
