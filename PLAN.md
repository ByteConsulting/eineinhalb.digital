# Website-Aufsetzplan: ein-ein-halb digital

**Status:** Planungsdokument (v1)  
**Ziel:** Fundament für die Unternehmenswebsite inkl. Beratung, Workshops, Einstiegsangebote und Code/Umsetzung  
**Deployment:** Coolify  
**Sprache der Site:** Deutsch (Du-Ansprache, wie in den Textentwürfen)

---

## 1. Zielbild & Positionierung

### Was die Website leisten muss
Die Site ist kein Agentur-Showcase „wir machen Social Media“, sondern ein **Klarheits- und Entscheidungsprodukt** für Marketingleitungen:

1. **Überzeugen**, dass Online Marketing nur als Zusammenspiel (Fundament → Kanäle → Optimierung) wirkt  
2. **Qualifizieren**, ob der Interessent passt (Marketingabteilung, Ressourcen, Wunsch nach Sparring)  
3. **Einstiege verkaufen** (Audit / Quick Check / Workshop) und in **längerfristige Begleitung** überführen  
4. **Code/Entwicklung** als Umsetzungsoption sichtbar machen (dein Part), ohne die Beratungsposition zu verwässern  

### Kernversprechen
> Zukunftssicher aufgestellt: Online Marketing Beratung für die Marketingabteilung. Strategie und Leitplanken von uns – Umsetzung durch die Abteilung, Begleitung während der Umsetzung.

### Differenziatoren (aus den Notizen)
| Position | Agentur-Klassik | ein-ein-halb digital |
|---|---|---|
| Kanal-Bias | „Ihr braucht SEO/Ads/Social“ | Keine Lieblingskanäle, Lieblingsergebnisse |
| Rolle | Operative Retainer | Sparring + Know-how-Transfer Inhouse |
| Ausgangspunkt | Maßnahme | Audit / Status Quo + Nutzerfokus |
| Unabhängigkeit | Upselling-Kanäle | Objektive Empfehlung inkl. „Finger in die Wunde“ |
| Zielkunde | Oft „alles für alle“ | Unternehmen **mit** Marketingabteilung und Ressourcen |

### Anti-Positionierung (explizit kommunizieren)
Nicht geeignet, wenn:
- Marketing = Azubi / Nebenbei  
- Website optisch vom Vertrieb diktiert wird  
- Keine Bereitschaft zu Daten, Prozessen, Mindestlaufzeit  
- Erwartung „Schaltknopf → Leads“

---

## 2. Marke, Name, Tonalität

### Arbeitstitel
**ein-ein-halb digital** (Schreibweise final festnageln: Domain, Logo, Impressum)

### Tonalität
- Direkt, praxisnah, leicht provokant (Blindflug beenden, Bauchgefühl, „der Redaktionsplan zählt nicht“)  
- Du-Form konsistent  
- Kein Agentur-Sprech, kein „ganzheitlich innovativ“  
- Humor dosiert (z. B. „Na, komm schon!“), nie zynisch gegenüber dem Kunden  

### Trust-Signale (Über uns / überall wiederholen)
- ca. 15 Jahre Online Marketing  
- 10 Jahre Werbeagentur, branchenübergreifend  
- Aufbau Abteilung (5 MA + Freelancer)  
- Nutzerorientiertes Marketing als Prinzip  
- Ungefilterte Empfehlungen aus echter Praxis  

### Offene Markenentscheidungen (vor Launch klären)
- [ ] Finaler Markenname + Claim („Zukunftssicher aufgestellt“ vs. eigener Claim)  
- [ ] Domain(s), E-Mail, rechtliche Gesellschaft  
- [ ] Logo, Typo, Farbwelt  
- [ ] Portrait/Team-Fotos, optional Video-Gesichter  
- [ ] Wer spricht „wir“ – 2 Gründer (Beratung + Code) klar machen  

---

## 3. Zielgruppen & Personas

### Primär (Kaufentscheidung)
1. **Marketingleitung / CMO** – braucht Klarheit, Priorisierung, politische Deckung gegenüber der Chefetage  
2. **Online Marketing Manager** – braucht Sparring, Methoden, Prozesse, Skills  

### Sekundär
- Geschäftsführung bei Mittelstand (Budgetfreigabe)  
- HR/People (bei Skill-/Ressourcenberatung)  

### Firmografie
Startups mit echter Marketing-Funktion, Mittelstand, Konzerne – **gemeinsamer Nenner: vorhandene Marketing-Ressourcen** und Wunsch nach Input/Impulsen.

### Pain-Hooks (Navigation, Ads, Hero, Audit-LPs)
Aus den Notizen wörtlich als Einstiege nutzen:
- „Wir machen irgendwie Social Media, aber so richtig klappt das nicht.“  
- „Die Website hat zu wenige Klicks/Leads/Anfragen.“  
- „Die Chefetage ist nicht zufrieden.“  
- „Langfristige Planung fehlt.“  
- „Marketing macht bei uns die Azubine.“  
- „Im Vertrieb steckt 3× mehr Personal und Budget.“  

### Potenzielle Referenz-/Case-Kontakte (interne Liste, nicht öffentlich ohne Freigabe)
Umfulana, Necom, Viva Cruises, Wünsche, KANN, QNix, Terranova, AOVO, HAPEKO, Zahngesundheit Eifel, Das Massivhaus, MEBEDO, WENDE INTERAKTIV, 247GRAD, INTENTION, Conlabz, STEULER  

**Regel:** Case Studies nur mit schriftlicher Freigabe; bis dahin anonymisierte „Ein Blick in die Praxis“-Beispiele (z. B. Magazin-/UX-/SEO-Muster ohne Kundenname).

---

## 4. Informationsarchitektur (Sitemap)

Empfohlene URL-Struktur – klar, SEO-fähig, nah an den Notizen, aber bereinigt (keine Doppelpfade):

```
/
├── /online-marketing                          # Kategorie: OM Beratung
│   ├── /online-marketing/audit                # Einstieg: OM Audit (LP)
│   ├── /online-marketing/strategie            # Kernprodukt: OM Strategie / Fundament
│   ├── /online-marketing/seo-geo-content      # Favorit: SEO/GEO/Content
│   ├── /online-marketing/relaunch             # Website-Relaunch Beratung
│   └── /online-marketing/operativ             # Spezial: UX/CRO, Digital PR, Social, Paid (Cluster)
│       ├── /online-marketing/operativ/ux-cro
│       ├── /online-marketing/operativ/digital-pr
│       ├── /online-marketing/operativ/social-media
│       └── /online-marketing/operativ/paid-ads
├── /workshops                                 # Seminare & Workshops
│   └── /workshops/online-marketing            # Workshop-Übersicht + Module
├── /code                                      # Code / Entwicklung / Schnittstellen (dein Part)
│   ├── /code/website-umsetzung                # Umsetzung der Strategie in Websites
│   └── /code/technik-schnittstellen           # Tracking, Performance, Integrationen
├── /newsletter                                # GEO-Kurs / Quick Check Einstieg
│   └── /newsletter/geo                        # GEO E-Mail-Kurs Landing
├── /ratgeber                                  # Content Hub (SEO/GEO Authority)
│   ├── /ratgeber/was-ist-seo
│   ├── /ratgeber/was-ist-geo
│   └── /ratgeber/...                          # weitere Artikel später
├── /ueber-uns
├── /referenzen                                # Platzhalter → Cases / Stimmen
├── /kontakt                                   # Formular + Buchungs-Widget
├── /impressum
├── /datenschutz
└── /agb                                       # optional, wenn Buchungen online
```

### Navigation (Header) – vorgeschlagen

**Einstiege**
- Online Marketing Audit  
- SEO/GEO & Content Audit  
- Code / Website-Umsetzung  

**Zukunftsfähig aufstellen**
- Online Marketing (→ Kategorie)  
  - Fundament / Strategie  
  - SEO/GEO & Content  
  - Website-Relaunch Begleitung  
- Code / Software / Schnittstellen  

**Workshops & Schulungen**  
**Newsletter (GEO)**  
**Über uns**  
**CTA-Button:** Kostenloses Erstgespräch  

Footer: Leistungen, Workshops, Code, Ratgeber, Rechtliches, Newsletter, Kontakt.

---

## 5. Seitentypen & Templates

Statt 30 Einzeldesigns: **5 Template-Typen**, die alle Inhalte tragen.

| Template | Nutzung | Pflichtbausteine |
|---|---|---|
| **Home** | Startseite | Brand-Hero, Problemrahmen, 3 Wege (Einstieg / Strategie / Code), Social Proof, CTA |
| **Kategorie** | `/online-marketing`, `/workshops`, `/code` | Intro-Text, Kacheln, Cross-Links, Newsletter-Teaser |
| **Leistungs-LP** | Strategie, SEO, Relaunch, Operativ-Unterseiten | Problem → Differenzierung → Prozess → Lieferumfang → Preise → Cases → CTA |
| **Einstiegs-LP** | OM Audit, SEO Audit | Pain-Hook, Was geprüft wird, Ergebnis, Preis/CTA, Upsell Strategie |
| **Utility** | Kontakt, Über uns, Newsletter, Ratgeber | Fokus auf eine Aktion |

Wiederkehrende Module (als Komponenten bauen):
1. Hero (Brand + 1 Headline + 1 Satz + CTA)  
2. Pain-Check / Selbsttest-Fragen  
3. Prozess (5 Schritte)  
4. „Was du bekommst“ / Lieferumfang  
5. Rollenverteilung Beratung vs. Umsetzung  
6. Preistabelle / Investment-Block  
7. Video-Platzhalter  
8. Case / Praxis-Beispiel  
9. Testimonials  
10. Cross-Sell-Cluster  
11. Kontakt / Buchungs-Widget  
12. Newsletter-Teaser  

---

## 6. Seitenweise Content-Status & Aufbau

### 6.1 Startseite `/`
**Ziel:** Marke setzen + in 3 Pfade lenken (Audit / Strategie / Code).  
**Hero-Budget:** Brand „ein-ein-halb digital“, ein Claim, ein Satz, CTA-Gruppe, ein starkes Visual (kein Dashboard, keine Stat-Strips).

Abschnitte (Reihenfolge):
1. Hero – Zukunftssicher aufgestellt / Klarheit statt Blindflug  
2. Problemrahmen – Zusammenspiel statt Einzelmaßnahmen  
3. Drei Wege – Einstieg (Audit), Fundament (Strategie), Umsetzung (Code)  
4. Für wen / nicht für wen  
5. Trust (Erfahrung)  
6. Kurz-Navigation zu Favoriten (SEO, Relaunch, Workshops)  
7. CTA Erstgespräch + Newsletter  

**Content-Lücke:** eigener Startseiten-Text in Notizen nur angedeutet → aus Kategorie- und Strategie-Text ableiten und verdichten.

### 6.2 Kategorie `/online-marketing`
**Status:** Text weitgehend vorhanden.  
Kacheln:
- Einstieg: Audit OM, Audit SEO  
- Zukunftsfähig: OM Strategie, SEO/GEO/Content, Relaunch  
- Workshops  
- GEO-Kurs / Newsletter  

### 6.3 `/online-marketing/strategie`
**Status:** stärkster Textblock – near-final.  
Reihenfolge wie in den Notizen: Klarheit → Anti-Fit → Selbstcheck → Benefits → Video → Fahrplan → Lieferumfang → Praxis → Preise → Testimonials → Workshops-Teaser → Über uns → Kontakt → Newsletter → Cross-Links.

**Preis (aktueller Stand aus Notizen – final vereinheitlichen!):**  
Ab 2.800 €/Monat, Mindestlaufzeit 3 Monate – siehe Abschnitt 8 (Preislogik bereinigen).

### 6.4 `/online-marketing/seo-geo-content`
**Status:** Text stark.  
Fokus: organische Sichtbarkeit, E-E-A-T, Rollen Beratung vs. Umsetzung, Audit + Sparring 3 Monate.  
Preispakete: Platzhalter → aus Modulsystem füllen.

### 6.5 `/online-marketing/relaunch`
**Status:** Überschrift vorhanden, **Text fehlt**.  
Zu schreiben:
- Schmerz: Relaunches ohne Strategie / Vertrieb bestimmt Design  
- Rolle: Beratung + Briefing + QS, optional Umsetzung über `/code`  
- Prozess: Audit → Ziele/CJ → IA/Content → Briefing Dev → Launch-Begleitung → Messung  
- Schnittstelle Beratung ↔ Code klar erklären (Upsell intern)  

### 6.6 Operative Spezialseiten
**Status:** nur Stichworte.  
Eine Cluster-Seite + 4 kurze Unterseiten (oder Tabs auf einer Seite in v1, um Scope zu begrenzen).  
Je Seite: Wann sinnvoll, was geliefert wird, dass es **im Rahmen der Strategie** läuft (kein Silo-Retainer).

### 6.7 Einstiegs-LPs Audit
**OM Audit** und **SEO/GEO & Content Audit** – Texte fehlen, Struktur vorgeben:

| Block | OM Audit | SEO/GEO Audit |
|---|---|---|
| Hook | Chefetage unzufrieden / kein Fahrplan | Ads teuer, organisch schwach |
| Scope | gesamter digitaler Fußabdruck | Sichtbarkeit, Content, Technik |
| Ergebnis | Report + Potenziale + Empfehlung nächster Schritt | Report + URL-/Content-Richtung |
| Preis | Festpreis (aus Fundament-Logik) | Festpreis |
| CTA | Erstgespräch / Audit buchen | analog |
| Upsell | → Strategie-Begleitung | → SEO-Sparring / Strategie |

### 6.8 `/workshops`
Module aus Notizen:
- Nutzerorientiertes OM (Strategie)  
- SEO/GEO (Keywords, Tools, Planung, Umsetzung)  
- Content (Strategie, Kanäle, Tools)  
- UX (Optimierung, Tools, Daten)  

Seite: Übersicht + „maßgeschneidert“ + CTA Anfrage. Einzelne Workshop-Detailseiten erst ab Nachfrage.

### 6.9 `/newsletter` + `/newsletter/geo`
Quick Check / GEO-Kurs:
- kostenlos, mitarbeitend (kein klassischer Newsletter)  
- Lead-Magnet für Top-of-Funnel  
- Double-Opt-In, DSGVO, Anbieter wählen (siehe Tech)

### 6.10 `/code` (dein Part)
**Positionierung:** „Wir beraten die Strategie – und können die Website auch so umsetzen, dass Strategie, UX, SEO und Tracking nicht an der Technik scheitern.“

Inhalte v1:
- Website-Umsetzung / Relaunch-Build nach Briefing aus der Beratung  
- Performance, Tracking, Schnittstellen, DSGVO-Technik  
- Zusammenarbeit: Beratung liefert Roadmap/IA/Content-Briefings → Code setzt um → gemeinsam QS  
- Kein klassisches Agentur-Portfolio nötig; 2–3 technische Kompetenzfelder + Prozess reichen für Launch  

### 6.11 `/ueber-uns`, `/referenzen`, `/kontakt`
- Über uns: Praxis-Story (Text vorhanden) + Team (2 Personen) + Arbeitsweise  
- Referenzen: Platzhalter-Design + echte Stimmen nachreichen  
- Kontakt: Formular + optional Cal.com/Calendly-Embed „Erstgespräch“  

### 6.12 Ratgeber
Frühe Authority-Seiten:
- Was ist SEO?  
- Was ist GEO?  
- Wie unterscheiden wir uns von Agenturen?  

Dienen SEO **und** Vertrieb (Einwände vorwegnehmen).

---

## 7. Conversion-Architektur

### Primäre Conversion
**Kostenloses Erstgespräch** (qualifizierend, 30 Min)

### Sekundäre Conversions
1. OM Audit / SEO Audit (bezahlter Einstieg)  
2. Newsletter / GEO-Kurs (Warmhalten)  
3. Workshop-Anfrage  
4. Code-Projektanfrage (nach Strategie oder Relaunch-Beratung)

### Qualifizierungsfragen (Formular / Buchung)
- Rolle (Marketingleitung / OM Manager / GF)  
- Teamgröße Marketing  
- Größtes Problem (Select + Freitext)  
- Website-URL  
- Zeitraum / Budget-Rahmen (optional, weich)  

### Funnel-Logik
```
Traffic (SEO/GEO Ratgeber, LinkedIn, Empfehlung)
    → Home / Kategorie / Audit-LP
        → Newsletter (nurture)
        → Erstgespräch
            → Audit / Fundament
                → Strategie-Begleitung (3–12 Monate)
                    → optional Code-Umsetzung
                    → optional Workshops
```

---

## 8. Preislogik bereinigen (wichtig vor Launch)

Die Notizen enthalten **mehrere, teils widersprüchliche Preismodelle**. Vor Go-Live **eine** öffentliche Logik festlegen.

### Empfohlene öffentliche Struktur (Vorschlag zur Entscheidung)

| Produkt | Öffentlich | Laufzeit | Rolle im Funnel |
|---|---|---|---|
| Sparring-Stunden | ab 150 €/h (oder Tagessatz) | flexibel | Kleinauftrag / Spezialfrage |
| Audit Fundament (einmalig) | Festpreis ab ~1.800 € | 1 Monat / Projekt | Einstieg, Ergebnis gehört dem Kunden |
| Begleitung FUNDAMENT+ | ab ~2.500–2.800 €/Monat | mind. 3 Monate | Roadmap + Sparring Umsetzung |
| DEEP DIVE | ab ~4.500–6.000 €/Monat | mind. 6–12 Monate | Intensiv, Schulungen inkl. |

### Interne Entscheidung nötig
- [ ] Welche Zahlen stehen **öffentlich** auf der Site?  
- [ ] „ab X“ vs. konkrete Paketmatrix (3-Spalten-Tabelle aus Notizen)  
- [ ] Ob die Matrix 1.900 / 2.500 / 4.500 final ist  
- [ ] Ob Strategie-Seite „ab 2.800“ oder Matrix-Preise nutzt  
- [ ] MwSt.-Ausweisung, Zahlungsweise, Kündigungsfristen  

**Empfehlung UX:** Auf Strategie-Seite **ein** klares Investment + Link „Details & Module“, Audit als Festpreis-Alternative, Workshops separat. Zu viele Tabellen verwirren CMOs.

---

## 9. Tech-Stack & Architektur (Coolify-tauglich)

### Empfehlung
**Next.js (App Router) + TypeScript + Tailwind + MDX/Content-Layer**

Begründung:
- Viele textlastige Landingpages, gute SEO-Kontrolle  
- Statische/ISR-Seiten → einfach hinter Coolify (Node oder Docker)  
- Erweiterbar um Ratgeber (MDX) ohne CMS-Zwang in v1  
- Formulare über API-Route → E-Mail/CRM  

### Alternativen (nur wenn gewollt)
- Astro: noch „statischer“, etwas weniger App-Feeling  
- WordPress: schneller Content-Edit für Nicht-Dev, aber mehr Pflege/Sicherheit – nur wenn Redaktion ohne Dev pflegen muss  

**Default für euch zwei:** Next.js – Code-Partner kann Qualität, Performance und Tracking sauber halten.

### Infrastruktur (Coolify)
```
[ Domain / DNS ]
      ↓
[ Coolify Proxy (Traefik/Caddy) + TLS ]
      ↓
[ App Service: Next.js Container ]
      ↓
[ optionale Services ]
   - Plausible oder Umami (Self-host in Coolify) – Analytics ohne Cookie-Banner-Ballast wo möglich
   - Listmonk / Brevo / Buttondown – Newsletter (Brevo/extern oft einfacher für DOI)
   - Kein eigener DB-Zwang in v1 (Formulare → E-Mail + CRM)
```

### Coolify-Setup (konkret)
1. Repo an Coolify anbinden (Git Deploy)  
2. Dockerfile oder Nixpacks Build (Next.js)  
3. Env: `SITE_URL`, SMTP/Resend, Newsletter-API, Booking-URL, `CONTACT_TO`  
4. Healthcheck `/` oder `/api/health`  
5. Preview-Deployments optional (Staging-Domain)  
6. Backups nur relevant wenn DB dazukommt  

### Domains
- Produktiv: `www.` + Apex Redirect  
- Staging: `staging.` (Basic Auth in Coolify)  

### Formulare & Legal
- Kontakt/Audit-Anfrage: Server Action + provider (Resend/SMTP)  
- Booking: Cal.com Embed (self-hostbar) oder Calendly  
- Newsletter: Double-Opt-In, AVV, Datenschutztext  
- Cookie/Consent nur für nicht-essenzielle Tracker  
- Impressum/Datenschutz vor Launch vollständigt  

### Tracking (passend zur Positionierung)
- Plausible/Umami self-hosted in Coolify **oder** GA4 nur mit Consent  
- Conversion-Events: Erstgespräch-Klick, Form-Submit, Newsletter-DOI, Audit-CTA  
- Später: Heatmaps nur projektbezogen beim Kunden, nicht pauschal auf eigener Site nötig  

---

## 10. Design-Richtung

### Visuelle Leitplanken
- Eine klare Markenwelt (keine generische Purple-SaaS-Optik)  
- Brand „ein-ein-halb digital“ im Hero dominant  
- Typografie mit Charakter (kein Inter/Roboto-Default)  
- Atmosphäre über Hintergrund/Textur/Fotografie; echte Praxis-Motive (Arbeitskontext, Screens als Abstraktion sparsam)  
- Keine Card-Grid-Helden; Kacheln erst in der Kategorie-Navigation  
- Motion: 2–3 gezielte Bewegungen (Hero reveal, Prozess-Schritte, CTA)  

### Content-Design-Prinzip
Lange Beratungsseiten scannbar machen:
- kurze Absätze  
- Checklisten / Gegenüberstellungen  
- klare Zwischenheadlines  
- CTAs alle 1–1,5 Viewport-Höhen auf Desktop  

### Responsive
Mobile: Navigation als kompaktes Panel; Preisblöcke gestapelt; Booking unter dem Fold erreichbar über sticky CTA optional.

---

## 11. Rollen & Arbeitsweise (ihr zwei)

| Bereich | Verantwortung |
|---|---|
| Positionierung, Texte, Angebote, Workshops, Newsletter-Inhalt | Kumpel (OM) |
| IA-Feinschliff, Tech, Design-Umsetzung, Performance, Tracking, Coolify, Code-Leistungsseiten | Du |
| Case Studies / Referenzen einholen | gemeinsam |
| Preise finalisieren | gemeinsam (Business) |
| Rechtstexte | extern oder Generator + Review |

### Redaktionsprozess
1. Text in Notion/Google Doc freigeben (Status: Entwurf / freigegeben)  
2. Freigegebene Texte → MDX/Repo  
3. Preview auf Staging  
4. Go-Live über Coolify Promote  

---

## 12. MVP-Scope vs. später

### Phase 0 – Fundamente (vor erstem Pixel-Feinschliff)
- [ ] Preise vereinheitlichen  
- [ ] Domain, Impressum-Daten, E-Mails  
- [ ] Markenbasics (Name, Claim, Farben, Fonts)  
- [ ] Calender/Booking + Postfach  

### Phase 1 – MVP Launch (verkaufsfähig)
Seiten:
- Home  
- `/online-marketing`  
- `/online-marketing/strategie`  
- `/online-marketing/seo-geo-content`  
- `/online-marketing/audit`  
- `/online-marketing/seo-geo-content` Audit-LP (oder `/online-marketing/seo-audit`)  
- `/workshops`  
- `/code` (schlank)  
- `/ueber-uns`  
- `/kontakt`  
- `/newsletter/geo`  
- Impressum, Datenschutz  

Funktionen:
- Kontaktformular  
- Booking-Embed  
- Newsletter-DOI  
- Analytics  
- Coolify Prod + Staging  

### Phase 2 – Vertiefung
- Relaunch-Seite (voll)  
- Operativ-Cluster  
- Referenzen / 1–2 Cases (Umfulana-Muster o. Ä. mit Freigabe)  
- Videos (Fahrplan, Transparenz, Case-Erklärung)  
- Ratgeber SEO/GEO/Differenzierung  
- Preismodule auf SEO-Seite  

### Phase 3 – Wachstum
- Weitere Ratgeber / Lead-Magnete  
- Workshop-Detailseiten  
- Kunden-Login nein (nicht nötig)  
- Optional leichtes CMS (z. B. Keystatic/Sanity), wenn Texte oft ohne Dev geändert werden  

---

## 13. SEO/GEO-Setup der eigenen Site (Glaubwürdigkeit)

Die eigene Site muss das liefern, was verkauft wird:

- Klare URL-Hierarchie, eine H1, sinnvolle Title/Meta  
- Leistungsseiten = Money Pages; Ratgeber = Demand Capture  
- Interne Verlinkung nach Cluster (wie in den Cross-Link-Blöcken der Texte)  
- Technische Basis: Core Web Vitals, sauberes Markup, Sitemap, robots, Schema `Organization` + `ProfessionalService` + FAQ wo sinnvoll  
- GEO: klare Aussagen, Autoren/Erfahrung sichtbar (E-E-A-T), zitierfähige Definitionen auf Ratgeber-Seiten  
- Keine Keyword-Spam-Nav; Navigation = Nutzerführung  

---

## 14. Content-Produktionsliste (Priorität)

| Prio | Deliverable | Owner | Status |
|---|---|---|---|
| P0 | Finale Preistabelle | beide | offen / widersprüchlich |
| P0 | Startseiten-Text | OM | fehlt |
| P0 | Audit-LP OM | OM | fehlt |
| P0 | Audit-LP SEO | OM | fehlt |
| P0 | Über uns Team (2 Personen) | beide | teilweise |
| P0 | Kontakt/Rechtliches | beide | fehlt |
| P1 | Strategie-Seite | OM | Text ~fertig |
| P1 | SEO/GEO-Seite | OM | Text ~fertig |
| P1 | Kategorie OM | OM | Text ~fertig |
| P1 | Workshops-Übersicht | OM | Stichworte |
| P1 | Code-Seiten-Text | Du + OM | fehlt |
| P1 | Newsletter-LP + Sequenz | OM | Konzept |
| P2 | Relaunch-Seite | OM | fehlt |
| P2 | Operativ-Seiten | OM | Stichworte |
| P2 | Videos | OM | Platzhalter |
| P2 | Cases/Testimonials | OM | Liste vorhanden |
| P2 | Ratgeber SEO/GEO/Differenzierung | OM | fehlt |

---

## 15. Coolify-Deployment-Checkliste

1. Server mit Coolify bereit (oder bestehendes Setup)  
2. Git-Repo verbinden, Branch `main` → Production  
3. Build: Docker/`output: standalone` für Next.js empfohlen  
4. Env-Vars setzen (Secrets nicht im Repo)  
5. Domain + TLS  
6. Staging-App mit gleicher Config, anderer Domain  
7. Deploy-Hook / Auto-Deploy on push  
8. Monitoring: Coolify Health + Uptime optional  
9. Backup-Strategie dokumentieren (bei DB)  
10. Rollback-Pfad: vorheriges Image/Release in Coolify  

---

## 16. Risiken & Entscheidungen

| Risiko | Mitigation |
|---|---|
| Preischaos auf der Site | Eine Matrix, Rest intern |
| Zu viele Seiten vor Content | Phase-1-MVP strikt halten |
| Code-Bereich verwässert Beratungsclaim | Code als „Umsetzung der Strategie“, nicht als Billig-Webdev |
| Keine Referenzen zum Launch | Starke Praxis-Beispiele anonym + klare Bio |
| Newsletter ohne Inhaltspipeline | Erst 4–6 GEO-Mails skripten, dann LP live |
| Recht/DSGVO | Vor Traffic Impressum/Datenschutz/AVV Newsletter |

---

## 17. Empfohlene nächste Schritte (konkret)

1. **Workshop 90 Min (ihr zwei):** Preise final, Sitemap bestätigen, Markenbasics  
2. **Repo scaffolden:** Next.js + Tailwind + Basis-Templates + Coolify Dockerfile  
3. **Texte Phase 1** in freigegebene Dateien überführen  
4. **Staging** in Coolify mit Dummy-Content  
5. **Design-Pass** auf Home + Strategie (Leitseite)  
6. **Formulare/Booking/Newsletter** anschließen  
7. **Rechtstexte + Tracking**  
8. Soft-Launch an 3–5 Warmkontakten aus der Potenzialliste  
9. Iterate, dann Phase 2  

---

## 18. Kurzfassung der Site-Logik

```
Einstieg (Audit / Newsletter / Pain)
        ↓
Klarheit (Strategie / SEO / Relaunch)
        ↓
Befähigung (Workshops + Begleitung)
        ↓
Umsetzung (Code) – optional, aber sichtbar
```

Alles, was auf der Site steht, muss diese Kette stützen: **Fundament vor Kanal, Sparring vor Retainer, Inhouse-Kompetenz vor Abhängigkeit.**

---

*Dokumentversion: 1.0 – Ableitung aus den Gründer-Notizen. Nächster Schritt nach Freigabe: technisches Scaffold + Coolify-Staging.*
