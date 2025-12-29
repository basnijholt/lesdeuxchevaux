import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Wie zijn wij?",
  description:
    "Maak kennis met Yvonne en Rob, de eigenaren van Les Deux Chevaux in de Auvergne.",
};

export default function WieZijnWij() {
  return (
    <>
      <Hero
        title="Wie zijn wij?"
        subtitle="Maak kennis met Yvonne en Rob"
        image="/uploads/2021/09/rob-en-yvonne-1.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Yvonne van de Velde & Rob Nijholt
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Wij zijn eind juni 2013 vanuit Zierikzee, Nederland, naar de
                Auvergne in Frankrijk verhuisd om ons droomleven te beginnen.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Nu runnen wij met veel plezier onze mini-camping en chambres
                d&apos;hôtes. We heten u van harte welkom om de rust en schoonheid
                van de Auvergne met ons te delen.
              </p>
              <p className="text-lg text-gray-600">
                Of u nu komt kamperen, overnachten in een van onze kamers, of
                genieten van onze table d&apos;hôtes - wij zorgen ervoor dat u
                zich thuis voelt.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/uploads/2021/09/rob-en-yvonne-1.jpg"
                alt="Yvonne en Rob"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Jip section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg lg:order-first">
              <Image
                src="/uploads/2021/09/jip-2.jpg"
                alt="Jip"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Onze trouwe vriend Jip
              </h2>
              <p className="text-lg text-gray-600">
                En dan is er nog <strong>Jip</strong>, ons trouwe maatje die u
                graag begroet bij aankomst! Jip is altijd blij om nieuwe gasten
                te ontmoeten en zorgt voor een warm welkom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* French version */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Qui sommes-nous?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Les Deux Chevaux</strong> est géré par{" "}
              <strong>Yvonne van de Velde</strong> et{" "}
              <strong>Rob Nijholt</strong>.
            </p>
            <p className="text-lg text-gray-600">
              Fin juin 2013, nous avons quitté Zierikzee, aux Pays-Bas, pour
              nous installer en Auvergne, en France, afin de réaliser notre
              rêve. Aujourd&apos;hui, nous gérons avec plaisir notre mini-camping
              et nos chambres d&apos;hôtes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
