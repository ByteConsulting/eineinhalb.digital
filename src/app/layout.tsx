import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Online Marketing Beratung`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://ein-ein-halb.digital"),
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-atmosphere text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
