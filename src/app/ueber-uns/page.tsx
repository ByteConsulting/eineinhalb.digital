import {
  Container,
  CtaBand,
  Section,
  SectionHeading,
} from "@/components/sections";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Daniel und Torben: Über 15 Jahre moderne Software-Architektur Nerd-Skills und 15 Jahre Online Marketing Leidenschaft.",
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
            Wir sind Daniel und Torben.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Über 15 Jahre moderne Software-Architektur Nerd-Skills und 15 Jahre
            Online Marketing Leidenschaft.
          </p>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading title="Zwei Nerds in ihrem Bereich" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Online Marketing Strategie & SEO
              </p>
              <h2 className="mt-2 font-display text-3xl text-forest">
                Torben
              </h2>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-soft sm:text-base">
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>ca. 15 Jahre Online Marketing Erfahrung</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>davon 4 Jahre Teamleitung</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Diverse Branchen und Kunden / B2B, B2C, E-Commerce</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span className="italic font-medium text-forest">head of „es kommt drauf an“</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/kontakt" variant="outline" size="sm">
                  Torben kontaktieren
                </Button>
              </div>
            </article>

            <article className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Software Architektur & Automatisierung
              </p>
              <h2 className="mt-2 font-display text-3xl text-forest">
                Daniel
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                Websites, Schnittstellen und Marketing-Automationen – damit die
                Strategie technisch trägt und Prozesse skalieren.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-soft sm:text-base">
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Programmierung</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Individuelle Integrationen</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-copper">▸</span>
                  <span>Digitalisierte Marketing-Workflows</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/kontakt" variant="outline" size="sm">
                  Daniel kontaktieren
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <BrandLogo href={null} size="lg" />
          <p className="max-w-2xl text-ink-soft">
            <strong className="text-forest">eineinhalb Digital</strong> steht
            für Klarheit zwischen Strategie und Umsetzung – halb Theorie, halb
            Handwerk, ganz Praxis.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
