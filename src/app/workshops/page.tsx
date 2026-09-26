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

const modules = [
  {
    title: "Nutzerorientiertes Online Marketing",
    body: "Strategie-Fundament: Status Quo, Ziele, Customer Journey, Priorisierung.",
  },
  {
    title: "SEO / GEO",
    body: "Keywords, Tools, Planung und Umsetzung – inkl. Entwicklungen in der KI-Suche.",
  },
  {
    title: "Content",
    body: "Content-Strategie, Kanäle, Briefings und Werkzeuge für nachhaltigen Aufbau.",
  },
  {
    title: "UX / CRO",
    body: "Optimierung mit Daten, Heatmaps, Tests und klaren Entscheidungsregeln.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Seminare & Workshops
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Skills fürs Unternehmen – kurz, praxisnah, umsetzbar
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Zu viel Strategie-Blabla? Du brauchst einen Deep Dive fürs Team?
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
          <SectionHeading title="Module im Überblick" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {modules.map((m) => (
              <article
                key={m.title}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <h2 className="font-display text-2xl text-forest">{m.title}</h2>
                <p className="mt-3 text-ink-soft">{m.body}</p>
              </article>
            ))}
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
      />
    </>
  );
}
