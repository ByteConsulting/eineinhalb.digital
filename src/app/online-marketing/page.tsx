import {
  Container,
  CtaBand,
  LinkTile,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Beratung",
  description:
    "Warum Website und Social nicht zünden – und wie strategisches Online Marketing Klarheit für 2–5 Jahre schafft.",
};

export default function OnlineMarketingPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            /online-marketing
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-forest sm:text-5xl">
            Online Marketing, das zusammenspielt – nicht nebeneinanderherläuft
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Warum bringt deine Website zu wenige Leads? Warum zünden die
            Social-Media-Kanäle nicht und warum ist die Chefetage unzufrieden?
            Erfolgreiches Online Marketing ist das langfristige Zusammenspiel der
            richtigen Kanäle mit einem definierten Optimierungsprozess. Genau
            diese Klarheit bringen wir in dein Unternehmen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Erstgespräch
            </Button>
            <Button href="/online-marketing/strategie" variant="outline" size="lg">
              Zur Strategie
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/50 pt-4">
        <Container>
          <SectionHeading
            eyebrow="Einstiegslösungen"
            title="Erst den Ist-Zustand verstehen"
          />
          <div className="mt-8">
            <LinkTile
              href="/online-marketing/audit"
              title="Online Marketing Audit"
              description="Überblick über die aktuelle Situation im Online Marketing – datenbasierte Grundlage für Entscheidungen."
            />
            <LinkTile
              href="/online-marketing/seo-audit"
              title="SEO/GEO & Content Audit"
              description="Organische Sichtbarkeit, Content und Technik isoliert und ehrlich unter die Lupe nehmen."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Zukunftsfähig aufstellen"
            title="Strategie, Sichtbarkeit, Relaunch"
            lead="Wir planen die nächsten 2 bis 5 Jahre – im Rahmen eurer Ressourcen und Budgets."
          />
          <div className="mt-8">
            <LinkTile
              href="/online-marketing/strategie"
              title="OM Strategie – Klarheit für dein Online Marketing"
              description="Vom Status Quo über Ziele und Customer Journey bis zur Roadmap und Begleitung."
            />
            <LinkTile
              href="/online-marketing/seo-geo-content"
              title="SEO/GEO/Content – sichtbar in Suchsystemen"
              description="Website-Inhalte zielgerichtet auf Nutzer ausrichten – organisch und zukunftssicher."
            />
            <LinkTile
              href="/online-marketing/relaunch"
              title="Website-Relaunch Beratung"
              description="Schmerzfrei zur neuen Website – mit Briefing, QS und optionaler Umsetzung."
            />
            <LinkTile
              href="/workshops"
              title="OM Workshops"
              description="Skills fürs Team: Strategie, SEO/GEO, Content und UX – praxisnah und maßgeschneidert."
            />
            <LinkTile
              href="/newsletter/geo"
              title="GEO-E-Mail-Kurs / Quick Check"
              description="Kostenloser Einstieg: Zukunftssicher bei KI-Suche – mitmachen statt nur lesen."
            />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
