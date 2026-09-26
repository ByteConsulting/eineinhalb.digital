import { Container, Section } from "@/components/sections";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Container className="prose-like max-w-3xl">
        <h1 className="font-display text-4xl text-forest">Impressum</h1>
        <p className="mt-6 text-ink-soft">
          Platzhalter – bitte vor Go-Live mit echten Firmendaten ersetzen.
        </p>
        <div className="mt-8 space-y-4 text-ink-soft">
          <p>
            <strong className="text-forest">{site.name}</strong>
            <br />
            Musterstraße 1
            <br />
            50667 Köln
          </p>
          <p>
            E-Mail: {site.email}
            <br />
            Telefon: {site.phone}
          </p>
          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: [Name]
          </p>
        </div>
      </Container>
    </Section>
  );
}
