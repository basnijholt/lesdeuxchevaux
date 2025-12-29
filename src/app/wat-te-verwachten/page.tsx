import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { getImagePath } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wat te verwachten?",
  description:
    "Ontdek onze accommodaties: mini-camping, chambres d'hôtes en La Bergerie. Allemaal met warme gastvrijheid.",
};

const rooms = [
  {
    name: "Rode Kamer",
    capacity: "2 personen",
    description: "Comfortabel en sfeervol ingericht",
  },
  {
    name: "Groene Kamer",
    capacity: "2 personen",
    description: "Met uitzicht op de tuin",
  },
  {
    name: "Blauwe Kamer",
    capacity: "2-3 personen",
    description: "Ruim en licht",
  },
  {
    name: "Familie/Vrienden Kamers",
    capacity: "Tot 7 personen",
    description: "Perfect voor groepen",
  },
];

const accommodationImages = [
  {
    src: "/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg",
    alt: "Groene Kamer",
  },
  { src: "/uploads/2020/07/camping-2-1024x656.jpg", alt: "Camping" },
  { src: "/uploads/2020/07/Bergerie-1024x682.jpg", alt: "La Bergerie" },
  { src: "/uploads/2016/09/tafelen.jpg", alt: "Buiten tafelen" },
];

export default function WatTeVerwachten() {
  return (
    <>
      <Hero
        title="Wat kun je bij ons verwachten?"
        subtitle="Onze accommodaties en faciliteiten"
        image="/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600">
              Bij Les Deux Chevaux bieden we verschillende verblijfsmogelijkheden,
              van kamperen tot luxe kamers, allemaal met de warme gastvrijheid
              die u van ons mag verwachten.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Chambres d&apos;Hôtes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-amber-600 font-medium mb-2">
                  {room.capacity}
                </p>
                <p className="text-gray-600">{room.description}</p>
              </div>
            ))}
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
            <Image
              src={getImagePath("/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg")}
              alt="Groene Kamer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
        </div>
      </section>

      {/* Camping */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Mini-Camping
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Wij hebben <strong>6 plekken</strong> voor tenten en caravans,
                met een ontspannen sfeer en alle nodige faciliteiten.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Elektriciteit inbegrepen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Honden welkom (aangelijnd)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Rustige, groene omgeving
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Gedeelde sanitaire voorzieningen
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/uploads/2020/07/camping-2-1024x656.jpg")}
                alt="Camping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Accommodations */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Aanvullende Verblijfsopties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                Uitgeruste Caravan
              </h3>
              <p className="text-gray-600 mb-4">
                Voor wie wil kamperen zonder eigen spullen. Volledig ingericht
                en klaar voor gebruik.
              </p>
              <p className="text-amber-600 font-medium">
                Minimaal 2 nachten verblijf
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                La Bergerie
              </h3>
              <p className="text-gray-600 mb-4">
                Een romantisch huisje voor koppels. Privé en rustig gelegen op
                ons terrein.
              </p>
              <p className="text-amber-600 font-medium">
                Perfect voor een romantisch uitje
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table d'Hôtes */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-last">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Table d&apos;Hôtes
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Onze table d&apos;hôtes biedt heerlijke, vers bereide maaltijden.
                Geniet samen met andere gasten van een authentieke Franse
                eetervaring.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Driegangen diner met koffie
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Verse, lokale ingrediënten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  Gezellige sfeer met andere gasten
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/uploads/2016/09/tafelen.jpg")}
                alt="Table d'Hôtes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Impressies
          </h2>
          <ImageGallery images={accommodationImages} />
        </div>
      </section>
    </>
  );
}
