export const site = {
  name: "ein-ein-halb digital",
  shortName: "ein-ein-halb",
  claim: "Zukunftssicher aufgestellt.",
  description:
    "Online Marketing Beratung für Marketingabteilungen: Strategie, SEO/GEO/Content, Workshops – und technische Umsetzung inklusive Automatisierung.",
  email: "hallo@ein-ein-halb.digital",
  phone: "+49 (0) 221 0000000",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Einstiege",
    href: "/online-marketing/audit",
    children: [
      {
        label: "Online Marketing Audit",
        href: "/online-marketing/audit",
        description: "Status Quo über alle Disziplinen",
      },
      {
        label: "SEO/GEO & Content Audit",
        href: "/online-marketing/seo-audit",
        description: "Organische Sichtbarkeit prüfen",
      },
      {
        label: "Code & Automatisierung",
        href: "/code",
        description: "Website, Schnittstellen, KI-Workflows",
      },
    ],
  },
  {
    label: "Leistungen",
    href: "/online-marketing",
    children: [
      {
        label: "Online Marketing",
        href: "/online-marketing",
        description: "Beratung & Strategie-Cluster",
      },
      {
        label: "OM Strategie / Fundament",
        href: "/online-marketing/strategie",
        description: "Vom Status Quo zur Roadmap",
      },
      {
        label: "SEO/GEO & Content",
        href: "/online-marketing/seo-geo-content",
        description: "Organisch sichtbar werden",
      },
      {
        label: "Website-Relaunch",
        href: "/online-marketing/relaunch",
        description: "Relaunch mit strategischem Fundament",
      },
      {
        label: "Code & Entwicklung",
        href: "/code",
        description: "Umsetzung & Marketing-Automatisierung",
      },
    ],
  },
  { label: "Workshops", href: "/workshops" },
  { label: "Newsletter", href: "/newsletter/geo" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const pricing = {
  sparring: {
    name: "Sparring",
    priceFrom: 150,
    unit: "Stunde",
    duration: "flexibel",
    summary:
      "Konkrete Fragestellungen im Online Marketing – stunden- oder tageweise.",
    forWhom: "Wenn du eine klare Frage hast und schnellen Experten-Input brauchst.",
    includes: [
      "1:1 Sparring zu SEO, Strategie, UX oder Ads",
      "Konkrete Handlungsempfehlungen",
      "Optional Follow-up-Notiz",
    ],
  },
  audit: {
    name: "Audit / Fundament",
    priceFrom: 1900,
    unit: "einmalig",
    duration: "ca. 1 Monat",
    summary:
      "Kick-off, Rahmen, Audit, Potenziale und Customer Journey – Ergebnis gehört dir.",
    forWhom:
      "Wenn die Marketingabteilung strategische Leitplanken braucht und selbst umsetzt.",
    includes: [
      "Kick-off & Rahmenklärung",
      "Audit über relevante Disziplinen",
      "Potenzialanalyse & Customer Journey",
      "Priorisierte Roadmap (Basis)",
      "1× Abschluss-Reporting",
    ],
  },
  fundament: {
    name: "Begleitung Fundament",
    priceFrom: 2500,
    unit: "Monat",
    duration: "mind. 3 Monate",
    summary:
      "Roadmap, Beratungspauschale und Begleitung bei der operativen Umsetzung.",
    forWhom:
      "Leitplanken plus Betreuung und Know-how-Transfer für die Marketingabteilung.",
    includes: [
      "Alles aus Audit / Fundament",
      "Monatliche Analyse & Briefings",
      "Schulterblick & Qualitätssicherung",
      "1× Jour Fixe pro Monat",
      "3× Reporting in der Laufzeit",
      "Vorlagen & Prozessaufbau",
    ],
  },
  deepDive: {
    name: "Deep Dive",
    priceFrom: 4500,
    unit: "Monat",
    duration: "mind. 6 Monate",
    summary:
      "Intensive Strategie-Begleitung mit 1:1-Support, Schulungen und Jahresplanung.",
    forWhom:
      "Langfristiger Aufbau mit intensivem Austausch und Wissensaufbau im Team.",
    includes: [
      "Vollständige Strategie & operative Begleitung",
      "1:1 Support / Sparring",
      "2× Schulungen fürs Team inkl.",
      "6 Reportings",
      "1× Jahresplanung Folgejahr",
      "Impuls-Termine & Qualitätssicherung",
    ],
  },
  seoAudit: {
    name: "SEO/GEO & Content Audit",
    priceFrom: 1400,
    unit: "einmalig",
    duration: "2–3 Wochen",
    summary:
      "Fokus-Audit auf organische Sichtbarkeit, Content und technische Gesundheit.",
    forWhom: "Wenn Ads teuer werden und organisch zu wenig kommt.",
    includes: [
      "Rankings, Landingpages, Content-Stand",
      "Technik & Indexierung",
      "Nachfrage- und Potenzialskizze",
      "Priorisierte Content-/URL-Richtung",
    ],
  },
  seoSparring: {
    name: "SEO/GEO Sparring",
    priceFrom: 2200,
    unit: "Monat",
    duration: "mind. 3 Monate",
    summary:
      "Website-Strategie, Briefings und Sparring – Umsetzung durch euer Team.",
    forWhom: "Marketingteams, die organisch nachhaltig wachsen wollen.",
    includes: [
      "URL- & Keyword-Mapping",
      "Content-Briefings",
      "Prozessaufbau im Team",
      "Monatliches Sparring & Monitoring",
    ],
  },
  workshop: {
    name: "Workshop / Seminar",
    priceFrom: 1200,
    unit: "Tag",
    duration: "0,5–2 Tage",
    summary: "Maßgeschneiderte Schulung für euer Team – praxisnah und umsetzbar.",
    forWhom: "Skill-Aufbau zu Strategie, SEO/GEO, Content oder UX.",
    includes: [
      "Bedarfsabstimmung vorab",
      "Unterlagen & Übungen",
      "Konkrete nächste Schritte für euer Setup",
    ],
  },
  codeProject: {
    name: "Website-Umsetzung",
    priceFrom: 6500,
    unit: "Projekt",
    duration: "je nach Scope",
    summary:
      "Umsetzung von Relaunch oder Landingpages entlang der strategischen Roadmap.",
    forWhom: "Wenn Beratung und Build aus einer Hand greifen sollen.",
    includes: [
      "Technische Konzeption",
      "Frontend-Umsetzung (Next.js o. ä.)",
      "Tracking- & Performance-Basis",
      "Übergabe inkl. Dokumentation",
    ],
  },
  automation: {
    name: "Marketing-Automatisierung",
    priceFrom: 3800,
    unit: "Projekt",
    duration: "je nach Scope",
    summary:
      "Individuelle Schnittstellen und Workflows – mit und ohne KI – für automatisiertes Marketing.",
    forWhom:
      "Teams, die wiederkehrende Marketing-Prozesse digitalisieren und skalieren wollen.",
    includes: [
      "Ist-Analyse eurer Tools & Prozesse",
      "Individuelle API-/Schnittstellen-Entwicklung",
      "Optional KI-gestützte Schritte (z. B. Content-Assist, Klassifikation)",
      "Monitoring, Logging & Übergabe",
    ],
  },
};

export const packages = [
  pricing.audit,
  pricing.fundament,
  pricing.deepDive,
] as const;

export const processSteps = [
  {
    title: "Audit deiner aktuellen Situation",
    body: "Wir durchleuchten den digitalen Fußabdruck: Website, Content, Social, Profile, Technik, Tracking und DSGVO-Basis.",
  },
  {
    title: "Wohin wollen wir?",
    body: "Realistische Ziele, KPIs sowie Früh- und Spätindikatoren – Schluss mit Bauchgefühl.",
  },
  {
    title: "Potenziale & Customer Journey",
    body: "Nachfrage, Wettbewerb und die Reise eurer Nutzer – damit Angebote wirklich konvertieren.",
  },
  {
    title: "Kanal-Empfehlungen & Roadmap",
    body: "Welche Kanäle, welche Handlungen, in welcher Reihenfolge – passend zu Ressourcen und Budget.",
  },
  {
    title: "Begleitung der Umsetzung",
    body: "Euer Team setzt um. Wir sparren, reporten, optimieren und halten die Spur.",
  },
];

export const painHooks = [
  "Wir machen irgendwie Social Media, aber so richtig klappt das nicht.",
  "Die Website hat zu wenige Klicks, Leads oder Anfragen.",
  "Die Chefetage ist nicht zufrieden mit den Ergebnissen im Online Marketing.",
  "Eine langfristige Planung fürs Marketing haben wir gar nicht.",
  "Wie die Website aussieht, bestimmt der Vertrieb.",
  "Im Vertrieb steckt dreimal mehr Personal und Budget als im Marketing.",
];
