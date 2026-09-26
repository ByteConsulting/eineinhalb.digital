import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
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
    <html lang="de" className={`${figtree.variable} ${instrument.variable} h-full`}>
      <body className="min-h-full bg-atmosphere text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
