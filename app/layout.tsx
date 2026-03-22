import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Lenci's Restaurant – Bar – Event | Norderstedt",
    template: "%s | Lenci's Norderstedt",
  },
  description:
    "Lenci's Restaurant, Cocktailbar und Eventlocation in Norderstedt. Frische saisonale Küche, hausgemachte Cocktails, stilvolle Events. Rathausallee 35, 22846 Norderstedt.",
  keywords: [
    "Restaurant Norderstedt",
    "Cocktailbar Norderstedt",
    "Eventlocation Norderstedt",
    "Bar Norderstedt",
    "mediterranes Restaurant Norderstedt",
    "Seminarraum Norderstedt",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://lencis.de",
    siteName: "Lenci's Restaurant – Bar – Event",
    title: "Lenci's Restaurant – Bar – Event | Norderstedt",
    description:
      "Premium-Restaurant, Cocktailbar und Eventlocation in Norderstedt. Frische saisonale Küche, hausgemachte Cocktails, stilvolle Events.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
