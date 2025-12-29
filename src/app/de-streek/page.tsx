import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { getImagePath } from "@/lib/config";

export const metadata: Metadata = {
  title: "De streek",
  description:
    "Ontdek de prachtige Auvergne - wandelen, fietsen, kajakken en meer. De perfecte bestemming voor natuurliefhebbers.",
};

const activities = [
  {
    title: "Wandelen",
    description:
      "Talloze paden met verschillende moeilijkheidsgraden door het prachtige landschap.",
    icon: "🥾",
  },
  {
    title: "Mountainbiken",
    description: "Een paradijs voor MTB-liefhebbers met uitdagende routes.",
    icon: "🚵",
  },
  {
    title: "Fietsen",
    description: "Ontdek de streek op de fiets via schilderachtige wegen.",
    icon: "🚴",
  },
  {
    title: "Vissen",
    description: "Vis in de rivier de Sioul, rijk aan diverse vissoorten.",
    icon: "🎣",
  },
  {
    title: "Kanoën",
    description: "Vaar over de Sioul en geniet van de natuur vanaf het water.",
    icon: "🛶",
  },
  {
    title: "Paardrijden",
    description: "Verken de omgeving te paard of met een ezel.",
    icon: "🐴",
  },
];

const attractions = [
  {
    title: "Puy de Dôme",
    description: "Iconische vulkaan met adembenemend uitzicht.",
  },
  {
    title: "Puy de Sancy",
    description: "Hoogste berg in het Centraal Massief.",
  },
  {
    title: "Kastelen en ruïnes",
    description: "Rijk historisch erfgoed in de omgeving.",
  },
  {
    title: "Parc Vulcania",
    description: "Avontuurlijk themapark over vulkanen bij Clermont-Ferrand.",
  },
  {
    title: "Automuseum Bellenave",
    description: "Voor liefhebbers van klassieke auto's.",
  },
  {
    title: "Rommelmarkten",
    description: "Gezellige markten met unieke vondsten.",
  },
];

const regionImages = [
  { src: "/uploads/2013/11/WS14.jpg", alt: "Landschap Auvergne" },
  { src: "/uploads/2013/11/WS17-764x1024.jpg", alt: "Wandelen" },
  {
    src: "/uploads/2018/11/winter-e1543590063310-768x1024.jpg",
    alt: "Winter in Auvergne",
  },
  { src: "/uploads/2016/09/kanoën-300x224.jpeg", alt: "Kanoën" },
];

export default function DeStreek() {
  return (
    <>
      <Hero
        title="Wat heeft de streek te bieden?"
        subtitle="Ontdek de prachtige Auvergne"
        image="/uploads/2013/11/WS14.jpg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-4">
              De Auvergne biedt het hele jaar door schoonheid met activiteiten
              voor iedereen. Het is een plek waar je echt tot rust kunt komen.
            </p>
            <p className="text-lg text-gray-500">
              Laat de technologie achter en geniet van een complete reset in de
              natuur.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Buitenactiviteiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{activity.icon}</span>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Attractions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Attracties binnen 60 km
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.title}
                className="border border-amber-200 p-6 rounded-xl hover:border-amber-400 transition-colors"
              >
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  {attraction.title}
                </h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winter Section */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/uploads/2018/11/winter-e1543590063310-768x1024.jpg")}
                alt="Winter in Auvergne"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Ook in de winter
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                De Auvergne is ook in de winter prachtig, met mogelijkheden voor
                winterse wandelingen en het genieten van de rust.
              </p>
              <p className="text-lg text-gray-600">
                Geniet van de besneeuwde landschappen en de gezellige sfeer bij
                de open haard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Impressies van de streek
          </h2>
          <ImageGallery images={regionImages} />
        </div>
      </section>
    </>
  );
}
