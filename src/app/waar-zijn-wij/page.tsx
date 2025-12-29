import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Waar zitten wij?",
  description:
    "Les Deux Chevaux ligt in het pittoreske dorpje Nades, Auvergne, Frankrijk - ongeveer 60 km ten noorden van Clermont-Ferrand.",
};

export default function WaarZijnWij() {
  return (
    <>
      <Hero
        title="Waar zitten wij?"
        subtitle="Onze locatie in het hart van de Auvergne"
        image="/uploads/2020/07/landschap-panorama-1024x405.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Nades, Auvergne
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Wij bevinden ons in het pittoreske dorpje{" "}
                <strong>Nades</strong> (spreek uit: &quot;nade&quot;), gelegen
                in het uiterste zuiden van het departement Allier, één van de
                vier departementen in de regio Auvergne.
              </p>

              <div className="bg-amber-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  Adres
                </h3>
                <address className="not-italic text-gray-700">
                  <strong>7 Impasse de la Tranquillité</strong>
                  <br />
                  Nades, Allier
                  <br />
                  Auvergne, Frankrijk
                </address>
                <p className="mt-4 text-sm text-gray-600">
                  Dit adres wordt herkend door zowel Google Maps als TomTom
                  navigatiesystemen.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Afstanden
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  🚗 Ongeveer <strong>60 km</strong> ten noorden van
                  Clermont-Ferrand
                </li>
                <li>
                  🚗 Ongeveer <strong>750 km</strong> van Zierikzee, Nederland
                  (halverwege de zuidelijke route)
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/uploads/2020/07/landschap-panorama-1024x405.jpg"
                  alt="Panorama van het landschap"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Routebeschrijving
                </h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7+Impasse+de+la+Tranquillité+Nades+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Bekijk op Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* French version */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Où sommes-nous?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Nous nous trouvons dans le pittoresque village de{" "}
              <strong>Nades</strong> (prononcé &quot;nade&quot;), situé à
              l&apos;extrême sud du département de l&apos;Allier, l&apos;un des
              quatre départements de la région Auvergne.
            </p>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                Adresse
              </h3>
              <address className="not-italic text-gray-700">
                <strong>7 Impasse de la Tranquillité</strong>
                <br />
                Nades, Allier
                <br />
                Auvergne, France
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
