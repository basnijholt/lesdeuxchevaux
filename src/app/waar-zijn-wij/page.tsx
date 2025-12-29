"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { getImagePath } from "@/lib/config";
import { useTranslation } from "@/i18n";
import Map from "@/components/Map";

export default function WaarZijnWij() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title={t.nav.whereAreWe}
        subtitle={t.whereAreWe.heroSubtitle}
        image="/uploads/2020/07/landschap-panorama-1024x405.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                {t.whereAreWe.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{t.whereAreWe.text}</p>

              <div className="bg-amber-50 p-6 rounded-xl my-8">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  {t.whereAreWe.addressTitle}
                </h3>
                <address className="not-italic text-gray-700">
                  <strong>7 Impasse de la Tranquillité</strong>
                  <br />
                  Nades, Allier
                  <br />
                  Auvergne, France
                </address>
                <p className="mt-4 text-sm text-gray-600">
                  {t.whereAreWe.addressNote}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                {t.whereAreWe.distances}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>🚗 {t.whereAreWe.distance1}</li>
                <li>🚗 {t.whereAreWe.distance2}</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={getImagePath(
                    "/uploads/2020/07/landschap-panorama-1024x405.jpg"
                  )}
                  alt="Panorama"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Map */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {t.whereAreWe.directions}
                </h3>
                <Map className="h-64" />
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.app.goo.gl/3MdgjqSP66RKNZdX8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    {t.common.viewOnGoogleMaps}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
