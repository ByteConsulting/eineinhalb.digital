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
  title: "Workshops & Schulungen",
  description:
    "Maßgeschneiderte Online-Marketing-Workshops zu Strategie, SEO/GEO, Content und UX.",
};

const topics = [
  "Nutzerorientiertes Online Marketing",
  "Search & Organic",
  "Social Media Strategie organisch",
  "Performance Marketing Strategie",
  "Daten/UX/CRO Strategie",
  "Kundendaten/Newsletter",
];

export default function WorkshopsPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Skills fürs Unternehmen
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Zu viel Strategie-Blabla? Du brauchst einen Deep Dive fürs Team?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Gerade mit KI-Suche und wachsender Kanalkomplexität ist der richtige
            Zeitpunkt, Know-how intern aufzubauen.
          </p>
          <div className="mt-8">
            <Button href="/kontakt" size="lg">
              Workshop anfragen
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            eyebrow="Workshop Format"
            title="Deep Dive Online Marketing: Euer Workshop. Eure Agenda."
            lead="Holt euch genau das Know-how ins Haus, das euch aktuell fehlt. Aus den Disziplinen Strategie, SEO/GEO, Content und UX/CRO stellt ihr euch euren individuellen Workshop zusammen. Praxisnah, datenbasiert und direkt auf eure Herausforderungen zugeschnitten. Das Know How für ein handlungsfähiges Team."
          />

          <div className="mt-12">
            <h3 className="font-display text-2xl text-forest">
              Übersicht der Themenbereiche
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-line bg-paper p-5 transition hover:border-copper"
                >
                  <span className="text-copper" aria-hidden>
                    ▸
                  </span>
                  <p className="mt-2 font-display text-xl text-forest">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-xl">
          <PriceCard {...pricing.workshop} featured />
        </Container>
      </Section>

      <CtaBand
        title="Workshop maßschneidern"
        lead="Wir konzipieren Inhalt und Tiefe exakt nach eurem Bedarf – vor Ort oder remote."
        signoff={"Ich freu mich auf den Austausch!\nTorben"}
      />
    </>
  );
}
