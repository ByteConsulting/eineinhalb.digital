import {
  CheckList,
  Container,
  CtaBand,
  PriceCard,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { packages, processSteps, pricing } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Strategie",
  description:
    "Unabhängige Online Marketing Strategie: Audit, Potenziale, Roadmap und Begleitung – ohne Agentur-Upselling.",
};

const setupQuestions = [
  {
    q: "Habt ihr einen klaren Marketing-Fahrplan für mind. 12 Monate?",
    a: "Der Redaktionsplan für Instagram zählt nicht.",
  },
  {
    q: "Werden Entscheidungen ausschließlich auf Datenbasis getroffen?",
    a: "Die Meinung der Kollegen ist keine Datenbasis.",
  },
  {
    q: "Sind Reporting und Optimierung fester Bestandteil?",
    a: "Ein neuer News-Beitrag ist kein Optimierungsprozess.",
  },
  {
    q: "Kennt ihr Nutzerzahlen und Quellen eurer Website?",
    a: "Na, komm schon :-)",
  },
];

const benefits = [
  {
    title: "Entscheidungen auf Datenbasis",
    body: "Wir machen die Lücke zwischen deiner aktuellen Situation und deinen Zielen sichtbar.",
  },
  {
    title: "Prozesse definieren",
    body: "Für neue Maßnahmen müssen auch verständliche Prozesse definiert werden. Wir implementieren gemeinsam praxisorientierte Abläufe.",
  },
  {
    title: "Volle Inhouse-Kompetenz",
    body: "Wir machen deine Marketingabteilung fit.",
  },
  {
    title: "Unabhängige Expertise",
    body: "Kein Agentur-Overhead, nur Daniel und Torben, 15 Jahre Erfahrung. Wir sagen euch zu 100 % objektiv, welches Setup ihr wirklich braucht.",
  },
];

export default function StrategiePage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Klarheit für dein Online Marketing
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Frag eine SEA-Agentur und du brauchst SEA. Frag eine Social Media
              Agentur und du brauchst… Frag uns – und du bekommst Klarheit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Wir haben keine Lieblingskanäle, sondern Lieblingsergebnisse.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" size="lg">
                Blindflug beenden
              </Button>
              <Button href="#preise" variant="outline" size="lg">
                Preise ansehen
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading title="Ein paar Fragen an euer aktuelles Setup:" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {setupQuestions.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-line bg-paper p-5"
              >
                <p className="font-semibold text-forest">{item.q}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Aufn Punkt:
              </p>
              <div className="mt-4 space-y-1 font-display text-2xl text-forest">
                <p>1x gemacht.</p>
                <p>5 Jahre Klarheit.</p>
                <p>Für immer der Kunde im Fokus.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Was wir tun:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft sm:text-base">
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Wir zeigen dir warum es bisher noch nicht so richtig funktioniert</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Wir zeigen dir, was möglich ist</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Wir zeigen dir, was du dafür tun musst</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Wir begleiten dich solange, du es brauchst</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-ink-soft">
                ...damit du Budget, Ressourcen und Zeit für den Erfolg einschätzen kannst.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Warum sich die Zusammenarbeit auszahlt"
            title="Klarheit"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {benefits.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl text-forest">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-forest text-white">
        <Container>
          <SectionHeading
            eyebrow="Unser Fahrplan"
            title="Schritt für Schritt zum erfolgreichen Marketing"
          />
          <ol className="mt-10 space-y-6">
            {processSteps.map((step) => (
              <li
                key={step.title}
                className="border-t border-white/15 pt-6"
              >
                <h3 className="text-xl font-semibold text-copper">{step.title}</h3>
                <p className="mt-2 text-white/85 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Was du im Detail bekommst"
              title="Vom Audit bis zum Monitoring"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "Status Quo / Audit (Website, Social, Technik, Tracking)",
                  "Potenziale: Kanäle, Keywords, Wettbewerb, Nachfrage",
                  "Customer Journey & Kanal-Empfehlungen",
                  "Funnel und Marketing-Trigger Analyse",
                  "Roadmap mit konkreten Handlungen & Ressourcen",
                  "Sparring & Beratung über die gesamte Laufzeit",
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white/70 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Infobox
            </p>
            <h3 className="mt-2 font-display text-2xl text-forest">
              Was müsst ihr vorbereitet haben?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Nichts. Wir klären Zugänge und Infos im ersten Gespräch.
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-soft">
              Eure Leistungen/Produkte, Ziele und Zielgruppen bilden die Basis.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Über uns
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">
              Expertise aus der Praxis für die Praxis
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Nach 15 Jahren Online Marketing und über 15 Jahren Softwareentwicklung
              wissen wir, warum Projekte scheitern, wie Budgets verbrannt werden –
              und wie man es richtig macht. Du bekommst von uns ungefilterte
              Empfehlungen, echte Insights und strategisches Sparring auf Augenhöhe.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="preise">
        <Container>
          <SectionHeading
            eyebrow="Investment"
            title="Deine Investition in Klarheit"
            lead={`Online Marketing ist kein Schalter. Orientierung: ab ${pricing.fundament.priceFrom.toLocaleString("de-DE")} €/Monat bei mind. 3 Monaten – oder zuerst das einmalige Fundament-Audit.`}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PriceCard key={pkg.name} {...pkg} featured={index === 1} />
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <PriceCard {...pricing.sparring} />
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
              <Button href="/online-marketing/audit" variant="outline" className="mt-6">
                Zum Online Marketing Audit
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
        title="Lass uns dein Online Marketing gemeinsam aufräumen."
        signoff={"Ich freu mich von dir zu hören!\nTorben"}
        primaryLabel="Erstgespräch vereinbaren"
      />
    </>
  );
}
