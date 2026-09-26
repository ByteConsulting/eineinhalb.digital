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
  title: "Code, Entwicklung & Marketing-Automatisierung",
  description:
    "Website-Umsetzung entlang der Strategie – plus individuelle Schnittstellen und vollautomatisierte Marketing-Prozesse, mit und ohne KI.",
};

const automationExamples = [
  {
    title: "Lead- & CRM-Pipelines",
    body: "Formulare, CRM, E-Mail und Ads-Plattformen sauber verbinden – Events, Tags, Scoring ohne Copy-Paste.",
  },
  {
    title: "Content- & Publishing-Flows",
    body: "Briefing → Freigabe → CMS-Publish automatisieren. Optional mit KI-Assistenz für Entwürfe, nie ohne menschliche QS.",
  },
  {
    title: "Reporting-Automationen",
    body: "Daten aus Analytics, Ads und CRM in ein Reporting ziehen, das die Marketingleitung wirklich liest.",
  },
  {
    title: "Individuelle APIs & Middleware",
    body: "Wenn Standard-Tools nicht reichen: eigene Schnittstellen zwischen euren Systemen – robust, dokumentiert, erweiterbar.",
  },
];

export default function CodePage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Code / Entwicklung
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Strategie umsetzen – und Marketing vollautomatisiert digitalisieren
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Wir bauen Websites und technische Fundamente entlang der
              Beratungs-Roadmap. Darüber hinaus entwickeln wir individuelle
              Schnittstellen, mit denen ihr Marketing-Prozesse digitalisiert und
              automatisiert – mit oder ohne KI, je nachdem was euer Setup wirklich
              braucht.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" size="lg">
                Projekt anfragen
              </Button>
              <Button href="/online-marketing/relaunch" variant="outline" size="lg">
                Relaunch Beratung
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-hero-plane p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Rollenklarheit
            </p>
            <p className="mt-3 font-display text-2xl">
              Beratung liefert die Roadmap. Code macht sie operativ und skalierbar.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/75">
              <li>Website & Landingpages</li>
              <li>Tracking, Performance, Integrationen</li>
              <li>Individuelle Automationen & KI-Workflows</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Website & Technik"
            title="Das technische Fundament zur Strategie"
            lead="Kein Billig-Webdev – Umsetzung mit SEO-, UX- und Tracking-Verständnis."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Website-Umsetzung",
                d: "Relaunch oder neue Auftritte (z. B. Next.js), die zur IA und Content-Strategie passen.",
              },
              {
                t: "Performance & Tracking",
                d: "Core Web Vitals, sauberes Event-Tracking, DSGVO-sensible Defaults.",
              },
              {
                t: "Schnittstellen",
                d: "CRM, Newsletter, Booking, Analytics und interne Tools zuverlässig verbinden.",
              },
            ].map((item) => (
              <article
                key={item.t}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <h2 className="font-display text-2xl text-forest">{item.t}</h2>
                <p className="mt-3 text-ink-soft">{item.d}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Marketing-Automatisierung"
            title="Vollautomatisiert digitalisieren – individuell, nicht von der Stange"
            lead="Standard-Zapier-Klicks reichen oft nicht. Wir entwickeln Schnittstellen und Workflows, die zu euren Prozessen passen – regelbasiert oder mit KI-Unterstützung."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {automationExamples.map((item) => (
              <article
                key={item.title}
                className="border-t border-line pt-5"
              >
                <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-forest text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Mit und ohne KI
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              KI dort, wo sie Hebel hat – Automatisierung auch ohne Hype
            </h2>
            <p className="mt-4 text-white/75">
              Nicht jeder Schritt braucht ein Modell. Manche Prozesse laufen
              stabiler mit klaren Regeln. Andere gewinnen durch Klassifikation,
              Zusammenfassung oder Assistenz. Wir entscheiden datenbasiert und
              bauen beides.
            </p>
          </div>
          <CheckList
            tone="light"
            items={[
              "Regelbasierte Automationen für wiederkehrende Handarbeit",
              "KI-Assistenten für Entwürfe, Tagging, Research-Hilfe",
              "Human-in-the-loop für Qualität und Markenstimme",
              "Logging, Fehlerhandling und Übergabe an euer Team",
              "Kein Vendor-Lock-in in undurchsichtige Blackboxes",
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Beispielpreise"
            title="Umsetzung und Automatisierung"
            lead="Orientierungswerte – konkrete Angebote nach Workshop/Scope."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <PriceCard {...pricing.codeProject} />
            <PriceCard {...pricing.automation} featured />
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="So arbeiten Beratung und Code zusammen"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "OM-Beratung definiert Ziele, IA und Briefings",
                  "Code setzt Website und Integrationen um",
                  "Gemeinsame QS: SEO, UX, Tracking, Automationen",
                  "Ihr behaltet Know-how und Zugang zu Systemen",
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl text-forest">Typische Auslöser</h3>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>„Die Strategie liegt – jetzt muss die Website mitziehen.“</li>
              <li>„Wir pflegen dieselben Daten in fünf Tools.“</li>
              <li>„Reporting frisst jeden Montag drei Stunden.“</li>
              <li>„Wir wollen KI nutzen, aber kontrolliert und integriert.“</li>
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Technik, die Marketing skaliert"
        lead="Erzähl uns, welche Prozesse euch Zeit und Nerven kosten – wir skizzieren Website, Schnittstellen und sinnvolle Automatisierung."
        secondaryHref="/online-marketing"
        secondaryLabel="Zur Beratung"
      />
    </>
  );
}
