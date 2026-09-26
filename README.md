# ein-ein-halb digital

Unternehmenswebsite für Online-Marketing-Beratung (Strategie, SEO/GEO/Content, Workshops) und technische Umsetzung inkl. Marketing-Automatisierung.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- Deployment-ready: Docker/`output: "standalone"` für **Coolify**
- Dev-Port: **43127**

## Lokal starten

```bash
npm install
npm run dev
```

Öffnen: [http://127.0.0.1:43127](http://127.0.0.1:43127)

```bash
npm run build
npm start
```

## Draft-Passwortschutz

Solange `SITE_PASSWORD` gesetzt ist, leitet die Middleware auf `/login` um
(eigene Seite, Cookie-Session). Ohne Variable ist die Site öffentlich.

Lokal: `.env.local` (siehe `.env.example`).  
Coolify: `SITE_PASSWORD` setzen und neu deployen.  
Launch: Variable entfernen/leeren.

## Coolify

1. Repo anbinden, Build mit dem mitgelieferten `Dockerfile`
2. Port **43127** exponieren
3. Domain + TLS setzen
4. Env: `SITE_PASSWORD` für den Draft-Schutz
5. Optional Staging-App parallel

## Inhalte & Preise

Beispielpreise und Navigationsstruktur liegen in `src/lib/site.ts`.  
Logo: `public/brand/logo.png` (Dummy/Markenentwurf).  
Aufsetzplan: `PLAN.md`.

## Seiten

- `/` Start
- `/online-marketing` (+ Strategie, SEO/GEO, Audits, Relaunch)
- `/workshops`, `/code`, `/newsletter/geo`
- `/ueber-uns`, `/kontakt`, Impressum/Datenschutz (Platzhalter)
