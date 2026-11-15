import {
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
    "Schmerzfrei zur neuen Website: Unabhängige Relaunch-Begleitung von Konzeption über Agentur-Auswahl bis Go-Live.",
};

const reasons = [
  {
    title: "Objektive Agentur-Auswahl",
    body: "Wir bewerten Pitches neutral und finden den Dienstleister, der fachlich wirklich abliefert – nicht den mit der besten Verkaufspräsentation.",
  },
  {
    title: "Wasserdichte Briefings",
    body: "Wir schreiben technische und strategische Lastenhefte, die keinen Interpretationsspielraum lassen und teure Überraschungen vermeiden.",
  },
  {
    title: "Tech-Stack nach Bedarf, nicht nach Trend",
    body: "Unabhängige Systemauswahl (CMS, Shop, Headless), die exakt zu euren internen Ressourcen passt, statt zu den Vorlieben der Agentur.",
  },
  {
    title: "Nutzerzentrierte Informationsarchitektur",
    body: "Wir bauen Navigation und URL-Strukturen nach echter Suchintention auf – nicht nach dem internen Organigramm eures Unternehmens.",
  },
  {
    title: "Absicherung gegen Traffic-Verluste",
    body: "Eine lückenlose SEO-Migrations-Strategie, damit eure Rankings und Umsätze nach dem Livegang nicht ins Bodenlose stürzen.",
  },
  {
    title: "Fokus auf Conversion statt Bauchgefühl",
    body: 'Wir lenken die Diskussion weg von subjektiven Design-Geschmäckern ("schick") hin zu einer datengetriebenen Customer Journey.',
  },
  {
    title: "Laufende Qualitätssicherung (QA)",
    body: "Regelmäßiges Testing der Staging-Umgebung (Testsystem) auf SEO, Technik und UX, bevor Fehler final in den Code gegossen werden.",
  },
  {
    title: "Kontinuierlicher Prozess statt Projektende",
    body: "Wir etablieren direkt ein Backlog für die Zeit nach dem Go-Live – denn ein Relaunch ist der Startpunkt für Optimierung, nicht das Ende.",
  },
];

const relaunchSteps = [
  {
    step: "1",
    title: "Setup & Status Quo",
    body: "Wir machen Kassensturz. Wir analysieren, welche aktuellen Inhalte, Rankings und Funktionen zwingend erhalten bleiben müssen und was endgültig wegkann. Wir definieren eure wirtschaftlichen Ziele, damit der Relaunch kein reines Design-Update wird, sondern messbar auf euer Geschäft einzahlt.",
  },
  {
    step: "2",
    title: "Konzept & wasserdichtes Lastenheft",
    body: "Wir gießen eure Anforderungen in klare Vorgaben. Wir definieren die optimale Seitenstruktur, den passenden Tech-Stack und die SEO-Spezifikationen. Das Ergebnis ist ein Briefing, das externen Agenturen keinen Interpretationsspielraum für teure Nachverhandlungen (Scope Creep) lässt.",
  },
  {
    step: "3",
    title: "Agentur-Auswahl & Pitch-Bewertung",
    body: "Wir übersetzen das Agentur-Sprech. Wenn ihr noch keinen Dienstleister habt, sichten wir Angebote, prüfen Pitches auf fachliche Substanz und helfen euch, den Partner zu finden, der technisch und strategisch wirklich abliefert – und nicht nur die buntesten Slides präsentiert.",
  },
  {
    step: "4",
    title: "Qualitätssicherung (QA) & Projektsteuerung",
    body: "Die Agentur setzt um, wir kontrollieren. Wir bleiben während der gesamten Entwicklungsphase euer Ansprechpartner. Wir testen Zwischenstände auf der Staging-Umgebung (Testsystem) auf Herz und Nieren, decken SEO- oder UX-Fehler auf und fordern Korrekturen ein, bevor sie in den finalen Code gegossen werden.",
  },
  {
    step: "5",
    title: "Go-Live Absicherung & Monitoring",
    body: "Der kritischste Tag des gesamten Projekts. Wir begleiten den Livegang engmaschig. Wir prüfen Weiterleitungen (Redirects), Tracking-Setups und Indexierungs-Freigaben, um zu garantieren, dass euer hart erarbeiteter Traffic und eure Rankings nicht über Nacht ins Bodenlose stürzen.",
  },
];

export default function RelaunchPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Relaunch Beratung
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Schmerzfrei zur neuen Website
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Ein Relaunch scheitert nie am Design. Er scheitert wenn die
            Ergebnisse ausbleiben. Wir begleiten den Relaunch, damit deine
            Ziele erreicht werden.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Relaunch besprechen
            </Button>
            <Button href="/code" variant="outline" size="lg">
              Umsetzung ansehen
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Wir klären:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft sm:text-base">
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Was ist für den Relaunch wirklich nötig?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Wen brauchen wir am Tisch?</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Welche Kosten muss ich tatsächlich einplanen?</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
                Wie du nix falsch machen kannst:
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest">
                Stell den User in den Fokus deines Website-Relaunchs.
              </h3>
              <p className="mt-4 text-base font-medium text-copper-deep">
                Wie? Meld dich! :-)
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Warum Relaunch Begleitung?"
            title="Die 8 Hebel für einen erfolgreichen Livegang"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-display text-xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Unser Fahrplan"
            title="Eure Relaunch-Begleitung Schritt für Schritt"
            lead="Besser jetzt als Schadensbegrenzung danach? Wo ihr aktuell steht, ist zweitrangig: Ob ihr die Planung noch komplett vor euch habt, gerade ratlos drei Agentur-Angebote vergleicht oder das Projekt bereits läuft und hakt – wir steigen genau dort ein, wo ihr fachliche Rückendeckung braucht."
          />
          <ol className="mt-10 space-y-6">
            {relaunchSteps.map((step) => (
              <li
                key={step.step}
                className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-display text-3xl text-copper">
                  0{step.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-forest">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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

      <CtaBand
        title="Der Relaunch ohne Schmerzen und mit Ergebnissen."
        signoff={"Ich freu mich von dir zu hören!\nTorben"}
        primaryLabel="Erstgespräch vereinbaren"
        secondaryHref="/code"
        secondaryLabel="Umsetzung & Code"
      />
    </>
  );
}
