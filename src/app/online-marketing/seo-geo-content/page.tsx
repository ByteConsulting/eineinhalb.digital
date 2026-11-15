import {
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

const reasons = [
  {
    title: "Nachfrage verstehen",
    body: "SEO ist mehr als Keywords – wir analysieren Nachfrage und Suchverhalten.",
  },
  {
    title: "Echter Expertenstatus",
    body: "Hochwertiger Content schafft Abgrenzung, Vertrauen und bildet die Marke – Basis für GEO.",
  },
  {
    title: "Überzeuge mit Mehrwert",
    body: "Mit Sichtbarkeit der eigenen Inhalte reduzierst du die Abhängigkeit von bezahltem Traffic.",
  },
  {
    title: "Nachhaltig & effizient",
    body: "Langfristig günstiger als Paid-Dauerfeuer in Push-Kanälen.",
  },
];

export default function SeoGeoContentPage() {
  return (
    <>
      <Section className="pb-8 pt-8 sm:pb-12 sm:pt-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            SEO / GEO / Content
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Sichtbarkeit ist kein Zufall. Sie ist ein kontinuierlicher Prozess.
            Und nur dann ein echter Lead-Kanal.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Fang an, die Website auf deine Kunden auszurichten – mit strategischer
            Grundlage und Fachwissen für SEO und GEO.
          </p>
          <div className="mt-8">
            <Button href="/kontakt" size="lg">
              Erstgespräch vereinbaren
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Was wir tun:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft sm:text-base">
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>wir zeigen dir, wie du aktuell im Bereich SEO aufgestellt bist</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>wir zeigen dir, was du machen musst, um besser gefunden zu werden</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>wir erstellen dir eine umfassende SEO-Strategie und Content-Planung</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>wir begleiten dich, so lange du willst</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-ink-soft">
                ...damit SEO nicht schon wieder verpufft.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Hör auf mit SEO Kosmetik!
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest">
                Metadaten, Keyword-Dichte und robots.txt machen dich nicht sichtbar.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Lass uns SEO ordentlich machen.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Warum unbedingt jetzt SEO?"
            title="Sichtbarkeit aufbauen und Unabhängigkeit stärken"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Timing und was du bekommst in einem:"
            title="Ablauf der Zusammenarbeit"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Phase 1
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest">
                Strategische Vorarbeit (ca. 3–4 Wochen)
              </h3>
              <p className="mt-3 text-base font-medium text-forest">
                Wir legen die Basis für eine bessere Sichtbarkeit
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                (Audit, Zielgruppe, Journey, Nachfrage-Analyse, URL-Plan, Keyword-Mapping, Roadmap)
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Phase 2
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest">
                SEO-Aktivierung & Monitoring
              </h3>
              <p className="mt-1 text-xs text-copper-deep">
                nach Abschluss Phase 1 / bis mind. 12 Wochen
              </p>
              <p className="mt-3 text-base font-medium text-forest">
                Gemeinsam starten wir die Umsetzung unserer Roadmap.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                (Content-Entwicklung, Content Management, Monitoring, Digital PR, Beratung und Sparring)
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="preise" className="bg-sand/40">
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

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Alternativen"
            title="Lieber einen Schritt nach dem anderen?"
            lead="Nicht jedes Unternehmen ist sofort bereit für eine 3-monatige Strategie-Begleitung. Wenn du erst einmal den Ist-Zustand validieren oder ein ganz spezifisches Thema knacken willst, haben wir zwei Abkürzungen für dich:"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-2xl text-forest">
                Das Fundament: Unser Audit zum Festpreis
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                Es ist nie nur die Social Media Kampagne, der SEO-Content oder die
                UX-Optimierung. Es ist immer das sinnvolle Zusammenspiel aller Disziplinen.
                Wir schauen uns alle Disziplinen aus der Vogelperspektive an. Du kannst
                damit komplett intern weiterarbeiten oder wir nutzen es als Basis für
                eine tiefergehende Zusammenarbeit.
              </p>
              <Button href="/online-marketing/seo-audit" variant="outline" className="mt-6">
                Zum SEO Audit
              </Button>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-2xl text-forest">
                Das Know-how: Workshops auf euch zugeschnitten
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                Dein Team braucht einen gezielten Deep Dive? Wir konzipieren ein
                Seminar exakt nach eurem Bedarf. Wir erarbeiten und behandeln gemeinsam
                die strategischen Konzepte und Leitplanken.
              </p>
              <Button href="/workshops" variant="outline" className="mt-6">
                Zu den Workshops
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Lass uns SEO ein letztes mal richtig angehen! ;-)"
        signoff={"Ich freu mich von dir zu hören!\nTorben"}
        primaryLabel="Erstgespräch vereinbaren"
        secondaryHref="/online-marketing/strategie"
        secondaryLabel="Zur OM Strategie"
      />
    </>
  );
}
