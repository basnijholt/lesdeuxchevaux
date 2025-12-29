import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
