export const site = {
  name: "eineinhalb Digital",
  shortName: "eineinhalb",
  claim: "Zukunftssicher aufgestellt.",
  description:
    "Online Marketing Beratung für Marketingabteilungen: Strategie, SEO/GEO/Content, Workshops – und technische Umsetzung inklusive Automatisierung.",
  email: "hallo@eineinhalb.digital",
  phone: "+49 (0) 221 0000000",
};

export type NavSubItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavCluster = {
  title?: string;
  items: NavSubItem[];
};

export type NavItem = {
  label: string;
  href: string;
  megaTitle?: string;
  megaDescription?: string;
  clusters?: NavCluster[];
  children?: NavSubItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Einstiege",
    href: "/online-marketing/audit",
    megaTitle: "Einstiegsmöglichkeiten",
    megaDescription:
      "Schnelle Klarheit ohne langes Vorgeplänkel: Wir durchleuchten euren Status Quo, decken echte Hebel auf und liefern eine belastbare Datengrundlage.",
    clusters: [
      {
        items: [
          {
            label: "Online Marketing Audit",
            href: "/online-marketing/audit",
            description: "Status Quo über alle relevanten Kanäle",
          },
          {
            label: "SEO/GEO & Content Audit",
            href: "/online-marketing/seo-audit",
            description: "Organische Sichtbarkeit und KI-Readiness prüfen",
          },
          {
            label: "Code & Automatisierung",
            href: "/code",
            description: "Website, Schnittstellen & KI-Workflows",
          },
        ],
      },
    ],
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
    megaTitle: "Unsere Leistungen",
    megaDescription:
      "Ganzheitliche Beratung und technische Umsetzung: Strategie, Sichtbarkeit und Schnittstellen – modular, datenbasiert und ohne Agentur-Overhead.",
    clusters: [
      {
        title: "Online Marketing",
        items: [
          {
            label: "OM Strategie / Fundament",
            href: "/online-marketing/strategie",
            description: "Vom Status Quo zur 12-Monate-Roadmap",
          },
          {
            label: "SEO/GEO & Content",
            href: "/online-marketing/seo-geo-content",
            description: "Organisch sichtbar in Google und KI-Suche",
          },
          {
            label: "Website-Relaunch",
            href: "/online-marketing/relaunch",
            description: "Relaunch mit strategischem Fundament",
          },
        ],
      },
      {
        title: "Code & Entwicklung",
        items: [
          {
            label: "Websites & Frontend",
            href: "/code",
            description: "Performance-Builds entlang der Strategie",
          },
          {
            label: "Schnittstellen & Automatisierung",
            href: "/code",
            description: "Workflows & Integrationen mit und ohne KI",
          },
        ],
      },
    ],
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
    title: "1. Kick-off & Setup | Woche 1",
    body: "Wir klären eure wirtschaftlichen Ziele und checken euer internes Setup. Ihr übergebt uns die Systemzugänge – und wir starten ohne langes Vorgeplänkel direkt in die Arbeit.",
  },
  {
    title: "2. Die Auditphase | Woche 2-4",
    body: "Wir durchleuchten euer komplettes digitales Marketing datenbasiert und zu 100 % objektiv. Wir decken auf, wo aktuell Budget versickert und wo eure echten Hebel liegen.",
  },
  {
    title: "3. Strategiephase | Woche 6-8",
    body: "Wir übersetzen die Daten in einen konkreten Plan für euer Online Marketing. Ab sofort stellt ihr den User in den Mittelpunkt. Wir priorisieren Kanäle, definieren die Customer Journey und erstellen Konzepte, Briefings und Content-Pläne.",
  },
  {
    title: "4. Aktivierungsphase | ab Woche 9",
    body: "Die Roadmap startet. Euer Team übernimmt das operative Steuer, wir halten euch den strategischen Rücken frei. Wir wachen über die KPIs, stehen als Sparringspartner für Rückfragen bereit und sichern die Qualität bei der Umsetzung.",
  },
];

export const painHooks = [
  "Über die Website kommen zu wenige Anfragen.",
  "Eine langfristige Marketing-Planung haben wir nicht.",
  "Das CMS ist veraltet, Zeit für einen Relaunch.",
  "Social Media macht bei uns die Azubine.",
];
