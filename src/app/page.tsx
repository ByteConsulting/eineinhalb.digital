import { BrandGeometry } from "@/components/brand-geometry";
import { BrandLogo } from "@/components/brand-logo";
import {
  CheckList,
  Container,
  CtaBand,
  LinkTile,
  PriceCard,
  Section,
  SectionHeading,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { packages, painHooks, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Marketing Beratung & Umsetzung",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-plane">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] lg:block">
          <BrandGeometry className="float-soft absolute -right-8 top-1/2 h-[min(60vh,460px)] w-auto -translate-y-1/2 opacity-90" />
        </div>

        <Container className="relative flex flex-col justify-center pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
          <div className="max-w-xl">
            <div className="reveal">
              <BrandLogo href={null} size="hero" priority />
            </div>

            <h1 className="reveal reveal-delay-1 mt-8 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.02] text-forest text-balance">
              {site.claim}
            </h1>

            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Ganzheitliche digitale Beratung: Du bekommst 15 Jahre Online
              Marketing Leidenschaft und über 15 Jahre moderne
              Software-Architektur Nerd-Skills. Wir sind Daniel und Torben.
            </p>

            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt" size="lg">
                Kostenloses Erstgespräch
              </Button>
              <Button href="/online-marketing/audit" variant="outline" size="lg">
                Zum OM Audit
              </Button>
            </div>
          </div>

          <div className="reveal reveal-delay-2 mt-10 lg:hidden">
            <BrandGeometry className="mx-auto h-40 w-full max-w-md opacity-90" />
          </div>
        </Container>

        <div className="h-1 origin-left bg-copper draw-line" />
      </section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Kommt dir das bekannt vor?"
            title="Wenn Online Marketing sich anfühlt wie Blindflug"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {painHooks.slice(0, 4).map((pain, i) => (
              <blockquote
                key={pain}
                className="border-l-[3px] border-copper pl-5 text-base leading-relaxed text-ink-soft"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                „{pain}“
              </blockquote>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Erfolgreiches Online Marketing ist nicht der LinkedIn-Post oder das
              grüne SEO-Häkchen. Einzelne Maßnahmen erzielen keine Wirkung, nur
              das geplante Zusammenspiel bringt Erfolg. Wenn sich Online Marketing
              anfühlt wie Blindflug, dann fehlt die Klarheit.
            </p>
            <div className="mt-6">
              <Button href="/kontakt" size="lg">
                Jetzt den Blindflug beenden!
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand/70">
        <Container>
          <SectionHeading
            eyebrow="Zwei klare Wege"
            title="Online Marketing oder Software Architektur"
            lead="Je nachdem, wo ihr steht – wir holen euch genau dort ab."
          />
          <div className="mt-10">
            <LinkTile
              href="/online-marketing"
              title="Nutzerorientiertes Online Marketing"
              description="Wir übersetzen Ziele in klare Roadmaps und bauen das nötige Know-how direkt in deiner Abteilung auf. Website, SEO, Content, Social Media, Conversion Rate Optimierung"
            />
            <LinkTile
              href="/code"
              title="Software Architektur"
              description="Dein Sparringspartner für komplexe IT-Herausforderungen, Software-Konzepte und reibungslose Schnittstellen."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Investment"
              title="Du bekommst"
              lead="Finale Pakete hängen von Scope und Ressourcen ab. Die Zahlen unten sind realistische Orientierungen für den Soft-Launch."
            />
            <CheckList
              items={[
                "Ungeschönte Beratung und konkrete Maßnahmen",
                "Keine Upselling-Agenda oder Agentur im Hintergrund",
                "Expertise und Know-How Inhouse aufbauen",
              ]}
            />
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <PriceCard key={pkg.name} {...pkg} featured={index === 1} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-band-forest text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
                Für wen
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Wenn du endlich einen klaren Plan für echte Ergebnisse willst
              </h2>
              <div className="mt-4 space-y-2 text-white/80">
                <p>Wenn du Marketing nicht als Side-Quest betrachtest</p>
                <p>Wenn du Entscheidungen datenbasierter treffen willst</p>
              </div>
            </div>
            <CheckList
              tone="light"
              items={[
                "Du bist Marketingleitung, CMO oder Online Marketing Manager",
                "Du hast den Wunsch nach Input, Impulsen und Skill-Erweiterung",
                "Du suchst nicht nach Full-Service, du brauchst gezielten Deep Dive",
              ]}
            />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Lass uns den Blindflug beenden"
        lead="Kostenloses Erstgespräch – wir schauen uns eure Situation an und sagen klar, welche Schritte angegangen werden müssen."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white/70 p-4">
            <p className="text-sm font-semibold text-forest">
              Du brauchst Online Marketing Beratung?
            </p>
            <p className="mt-1 text-sm text-ink-soft">Melde dich bei Torben</p>
            <Button href="/kontakt" className="mt-3 w-full" size="sm">
              Torben kontaktieren
            </Button>
          </div>
          <div className="rounded-xl border border-line bg-white/70 p-4">
            <p className="text-sm font-semibold text-forest">
              Du brauchst Beratung für Software?
            </p>
            <p className="mt-1 text-sm text-ink-soft">Melde dich bei Daniel</p>
            <Button href="/kontakt" variant="outline" className="mt-3 w-full" size="sm">
              Daniel kontaktieren
            </Button>
          </div>
        </div>
      </CtaBand>
    </>
  );
}
