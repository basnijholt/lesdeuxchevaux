import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://basnijholt.github.io/lesdeuxchevaux"),
  title: {
    default: "Les Deux Chevaux | Mini-camping & B&B in Auvergne",
    template: "%s | Les Deux Chevaux",
  },
  description:
    "Welkom bij Les Deux Chevaux - een gezellige mini-camping, chambres d'hôtes en table d'hôtes in de prachtige Auvergne, Frankrijk.",
  keywords: [
    "camping",
    "B&B",
    "bed and breakfast",
    "Auvergne",
    "Frankrijk",
    "France",
    "chambres d'hôtes",
    "table d'hôtes",
    "Nades",
    "vakantie",
  ],
  authors: [{ name: "Yvonne van de Velde & Rob Nijholt" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://lesdeuxchevaux.nl",
    siteName: "Les Deux Chevaux",
    title: "Les Deux Chevaux | Mini-camping & B&B in Auvergne",
    description:
      "Welkom bij Les Deux Chevaux - een gezellige mini-camping, chambres d'hôtes en table d'hôtes in de prachtige Auvergne, Frankrijk.",
    images: [
      {
        url: "/lesdeuxchevaux/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Les Deux Chevaux - Mini-camping & B&B in Auvergne",
      },
    ],
  },
  icons: {
    icon: "/lesdeuxchevaux/favicon.ico",
    apple: "/lesdeuxchevaux/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <Script
          defer
          data-domain="lesdeuxchevaux.nl"
          src="https://plausible.nijho.lt/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
