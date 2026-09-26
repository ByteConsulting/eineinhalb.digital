import {
  Container,
  CtaBand,
  Section,
  SectionHeading,
} from "@/components/sections";
import { BrandLogo } from "@/components/brand-logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Aus der Praxis für deine Praxis: Online Marketing Beratung und technische Umsetzung.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Über uns
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Aus der Praxis für deine Praxis
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Wir sind keine Theoretiker frisch von der Uni. Nach 15 Jahren Online
            Marketing, 10 Jahren in Werbeagenturen und dem Aufbau von
            Marketing-Abteilungen kennen wir den täglichen Hustle. Du bekommst
            ungefilterte Empfehlungen, echte Insights und Sparring auf Augenhöhe.
          </p>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading title="Zwei Seiten, ein Business" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Beratung
              </p>
              <h2 className="mt-3 font-display text-3xl text-forest">
                Online Marketing Strategie & Sparring
              </h2>
              <p className="mt-4 text-ink-soft">
                Audit, Potenziale, Roadmap, Begleitung. Fokus: Marketingabteilungen
                fit machen – nicht abhängig halten.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li>▸ ca. 15 Jahre OM-Erfahrung</li>
                <li>▸ 10 Jahre Agentur, viele Branchen</li>
                <li>▸ Aufbau Abteilung mit Team & Freelancern</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Code
              </p>
              <h2 className="mt-3 font-display text-3xl text-forest">
                Umsetzung & Automatisierung
              </h2>
              <p className="mt-4 text-ink-soft">
                Websites, Schnittstellen und Marketing-Automationen – damit die
                Strategie technisch trägt und Prozesse skalieren. Mit und ohne KI.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                <li>▸ Website-Relaunch & Performance</li>
                <li>▸ Individuelle Integrationen</li>
                <li>▸ Digitalisierte Marketing-Workflows</li>
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <BrandLogo href={null} className="scale-110" />
          <p className="max-w-2xl text-ink-soft">
            <strong className="text-forest">ein-ein-halb digital</strong> steht
            für Klarheit zwischen Strategie und Umsetzung – halb Theorie, halb
            Handwerk, ganz Praxis.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
