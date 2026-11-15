import {
  Container,
  CtaBand,
  LinkTile,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Beratung",
  description:
    "Einstiegslösungen und strategische Bausteine für dein Online Marketing: Audits, Strategie, SEO/GEO, Relaunch und Workshops.",
};

export default function OnlineMarketingPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Einstiegslösungen"
            eyebrowVariant="tag"
            title="Erst den Ist-Zustand verstehen"
          />
          <div className="mt-8">
            <LinkTile
              href="/online-marketing/audit"
              title="Online Marketing Audit"
              description="Überblick über die aktuelle Situation im Online Marketing – datenbasierte Grundlage für Entscheidungen, Ressourcen und Ziele."
            />
            <LinkTile
              href="/online-marketing/seo-audit"
              title="SEO/GEO & Content Audit"
              description="Organische Sichtbarkeit und Content isoliert und ehrlich unter die Lupe nehmen. Wissen, was nötig ist, um die Sichtbarkeit wirklich zu steigern."
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/50">
        <Container>
          <SectionHeading
            eyebrow="Zukunftsfähig aufstellen"
            eyebrowVariant="tag"
            title="Nutzerorientiertes Online Marketing"
            lead="Strategische Ausrichtung, Sichtbarkeit und Begleitung für Marketingteams."
          />
          <div className="mt-8">
            <LinkTile
              href="/online-marketing/strategie"
              title="Nutzerorientiertes Online Marketing"
              description="Wie plane ich unser Online Marketing? Welche Kanäle funktionieren wirklich? Was brauche ich, um langfristig erfolgreich zu sein? Customer Journey, Potenziale, Kanäle, Roadmap und Begleitung."
            />
            <LinkTile
              href="/online-marketing/seo-geo-content"
              title="SEO/GEO/Content"
              description="Content zielgerichtet auf Nutzer ausrichten."
            />
            <LinkTile
              href="/online-marketing/relaunch"
              title="Website-Relaunch Beratung"
              description="Schmerzfrei zur neuen Website."
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Abgehobenes Modul: OM Workshops */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-6 sm:p-8 transition hover:border-copper">
              <span className="inline-block rounded-md bg-copper/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-copper-deep">
                Workshop Modul
              </span>
              <h3 className="mt-4 font-display text-2xl text-forest">
                OM Workshops
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Skills fürs Team: Strategie, SEO/GEO, Content und UX – praxisnah und genau nach eurem Bedarf.
              </p>
              <div className="mt-6">
                <Button href="/workshops" variant="outline" size="sm">
                  Workshop zusammenstellen →
                </Button>
              </div>
            </div>

            {/* Eigenes Element: GEO Newsletter */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-6 sm:p-8 transition hover:border-copper">
              <span className="inline-block rounded-md bg-forest/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest">
                Kostenloser Kurs
              </span>
              <h3 className="mt-4 font-display text-2xl text-forest">
                Nerd-Wissen frei Haus: GEO-Newsletter
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Wie du dich auf die neuen Entwicklungen im Bereich KI-Suche vorbereiten kannst. Der 6 Wochen Kurs direkt in dein Postfach.
              </p>
              <div className="mt-6">
                <Button href="/newsletter/geo" size="sm">
                  Kostenlos anmelden →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
