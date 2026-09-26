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

export default function StrategiePage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Klarheit für dein Online Marketing
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Frag eine SEO-Agentur und du brauchst SEO. Frag uns – und du
              bekommst Klarheit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Erfolgreiches Marketing startet nicht beim Social-Media-Post oder
              Website-Text. Es baut auf einer strategischen Basis auf. Wir haben
              keine Lieblingskanäle, sondern Lieblingsergebnisse.
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
          <div className="rounded-2xl border border-line bg-white/70 p-6">
            <p className="text-sm font-semibold text-forest">Nicht für euch, wenn …</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>… Marketing aus einem Azubi besteht</li>
              <li>… die Website so aussieht, weil es „jemandem gefällt“</li>
              <li>… ihr einen Schalter für Leads erwartet</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/60">
        <Container>
          <SectionHeading
            title="Schluss mit dem Bauchgefühl"
            lead="Ein paar ehrliche Fragen an euer aktuelles Setup:"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
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
                a: "Na, komm schon.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-line bg-paper p-5">
                <p className="font-semibold text-forest">{item.q}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Warum sich die Zusammenarbeit auszahlt"
            title="Daten, Prozesse, Inhouse-Kompetenz"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Entscheidungen auf Datenbasis",
                d: "Der Nutzer entscheidet, wie Online Marketing aussieht. Wir machen die Lücke zwischen Ist und Ziel sichtbar.",
              },
              {
                t: "Prozesse definieren",
                d: "Für neue Maßnahmen braucht es verständliche Abläufe – praxisnah und im Team verankert.",
              },
              {
                t: "Volle Inhouse-Kompetenz",
                d: "Wir machen die Marketingabteilung fit. Skills bleiben im Unternehmen.",
              },
              {
                t: "Unabhängig",
                d: "Keine versteckte Upselling-Agenda. Objektiv, was ihr wirklich braucht.",
              },
            ].map((item) => (
              <div key={item.t} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl text-forest">{item.t}</h3>
                <p className="mt-2 text-ink-soft">{item.d}</p>
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
            {processSteps.map((step, index) => (
              <li key={step.title} className="grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-3xl text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-white/75">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Was du bekommst"
              title="Vom Audit bis zur Begleitung"
            />
            <div className="mt-6">
              <CheckList
                items={[
                  "Status Quo / Audit (Website, Social, Profile, Technik, Tracking)",
                  "Potenziale: Kanäle, Keywords, Wettbewerb, Nachfrage",
                  "Customer Journey & Kanal-Empfehlungen",
                  "Roadmap mit konkreten Handlungen",
                  "Sparring: SEO/Content, Paid, Social, Digital PR, UX/CRO",
                  "Monitoring, Reporting, Optimierung",
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white/70 p-6 sm:p-8">
            <h3 className="font-display text-2xl text-forest">
              Was ihr mitbringt oder wir gemeinsam definieren
            </h3>
            <div className="mt-5">
              <CheckList
                items={[
                  "Ziele / KPIs und Ressourcen",
                  "Leistungen / Angebot",
                  "Skills intern/extern",
                  "Budget",
                  "Zielgruppe / Personas",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="preise" className="bg-sand/60">
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

      <CtaBand
        title="Jetzt kostenloses Erstgespräch vereinbaren"
        lead="Wir beenden den Blindflug – mit klarer Lageeinschätzung und nächsten Schritten."
        secondaryHref="/online-marketing/seo-geo-content"
        secondaryLabel="Weiter zu SEO/GEO"
      />
    </>
  );
}
