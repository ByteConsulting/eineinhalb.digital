import { Container, Section } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Erstgespräch vereinbaren oder Projekt anfragen.",
};

export default function ContactPage() {
  return (
    <Section className="pt-10 sm:pt-14">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Kontakt
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-forest sm:text-5xl">
            Lass uns den Blindflug beenden
          </h1>
          <p className="mt-6 text-lg text-ink-soft">
            Kurz beschreiben, wo der Schuh drückt – wir melden uns mit einem
            Terminvorschlag fürs Erstgespräch.
          </p>
          <div className="mt-8 space-y-2 text-sm text-ink-soft">
            <p>
              E-Mail:{" "}
              <a className="font-medium text-forest underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>Antwort in der Regel innerhalb von 1–2 Werktagen.</p>
          </div>
        </div>

        <form className="rounded-2xl border border-line bg-white/80 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-forest sm:col-span-1">
              Name
              <input
                name="name"
                required
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-copper"
              />
            </label>
            <label className="block text-sm font-medium text-forest">
              E-Mail
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-copper"
              />
            </label>
            <label className="block text-sm font-medium text-forest sm:col-span-2">
              Unternehmen
              <input
                name="company"
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-copper"
              />
            </label>
            <label className="block text-sm font-medium text-forest sm:col-span-2">
              Interesse
              <select
                name="interest"
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-copper"
                defaultValue="erstgespraech"
              >
                <option value="erstgespraech">Kostenloses Erstgespräch</option>
                <option value="audit">OM Audit</option>
                <option value="seo-audit">SEO Audit</option>
                <option value="strategie">OM Strategie</option>
                <option value="workshop">Workshop</option>
                <option value="code">Code / Automatisierung</option>
                <option value="newsletter">GEO-Newsletter</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-forest sm:col-span-2">
              Nachricht
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Kurz: Rolle, Teamgröße, größtes Problem, Website-URL…"
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 outline-none focus:ring-2 focus:ring-copper"
              />
            </label>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Hinweis: Formular-Versand ist im Soft-Launch noch Frontend-Dummy.
            Bitte parallel an {site.email} mailen oder wir verdrahten Resend/SMTP
            im nächsten Schritt.
          </p>
          <Button type="submit" className="mt-6 w-full" size="lg">
            Anfrage senden
          </Button>
        </form>
      </Container>
    </Section>
  );
}
