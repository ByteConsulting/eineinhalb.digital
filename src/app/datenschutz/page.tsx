import { Container, Section } from "@/components/sections";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl text-forest">Datenschutz</h1>
        <p className="mt-6 text-ink-soft">
          Platzhalter-Datenschutzerklärung für den Soft-Launch. Vor produktivem
          Traffic durch eine vollständige, rechtsgeprüfte Fassung ersetzen.
        </p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-semibold text-forest">Verantwortliche Stelle</h2>
            <p className="mt-2">{site.name} – Kontaktdaten siehe Impressum.</p>
          </section>
          <section>
            <h2 className="font-semibold text-forest">Hostung</h2>
            <p className="mt-2">
              Die Website wird über eine Coolify-Instanz bzw. bei einem
              Hosting-Anbieter betrieben. Es fallen dabei technisch notwendige
              Server-Logdaten an.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-forest">Kontaktformular / Newsletter</h2>
            <p className="mt-2">
              Angaben aus Formularen werden nur zur Bearbeitung der Anfrage bzw.
              nach Double-Opt-In für den Newsletter verarbeitet.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-forest">Deine Rechte</h2>
            <p className="mt-2">
              Du hast u. a. Rechte auf Auskunft, Berichtigung, Löschung und
              Beschwerde bei einer Aufsichtsbehörde.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
