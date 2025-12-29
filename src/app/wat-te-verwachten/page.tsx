"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { getImagePath } from "@/lib/config";
import { useTranslation } from "@/i18n";

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
  const { t } = useTranslation();

  const rooms = [
    {
      name: t.whatToExpect.rooms.red.name,
      capacity: t.whatToExpect.rooms.red.capacity,
      description: t.whatToExpect.rooms.red.description,
    },
    {
      name: t.whatToExpect.rooms.green.name,
      capacity: t.whatToExpect.rooms.green.capacity,
      description: t.whatToExpect.rooms.green.description,
    },
    {
      name: t.whatToExpect.rooms.blue.name,
      capacity: t.whatToExpect.rooms.blue.capacity,
      description: t.whatToExpect.rooms.blue.description,
    },
    {
      name: t.whatToExpect.rooms.family.name,
      capacity: t.whatToExpect.rooms.family.capacity,
      description: t.whatToExpect.rooms.family.description,
    },
  ];

  return (
    <>
      <Hero
        title={t.whatToExpect.heroTitle}
        subtitle={t.whatToExpect.heroSubtitle}
        image="/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600">{t.whatToExpect.intro}</p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            {t.whatToExpect.chambresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {rooms.map((room) => (
              <div key={room.name} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-amber-600 font-medium mb-2">{room.capacity}</p>
                <p className="text-gray-600">{room.description}</p>
              </div>
            ))}
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
            <Image
              src={getImagePath("/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg")}
              alt="Chambre"
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
                {t.whatToExpect.campingTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t.whatToExpect.campingText}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.campingFeatures.electricity}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.campingFeatures.dogs}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.campingFeatures.quiet}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.campingFeatures.sanitary}
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
            {t.whatToExpect.additionalTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                {t.whatToExpect.caravan.title}
              </h3>
              <p className="text-gray-600 mb-4">{t.whatToExpect.caravan.text}</p>
              <p className="text-amber-600 font-medium">
                {t.whatToExpect.caravan.note}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                {t.whatToExpect.bergerie.title}
              </h3>
              <p className="text-gray-600 mb-4">{t.whatToExpect.bergerie.text}</p>
              <p className="text-amber-600 font-medium">
                {t.whatToExpect.bergerie.note}
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
                {t.whatToExpect.tableTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t.whatToExpect.tableText}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.tableFeatures.dinner}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.tableFeatures.fresh}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">✓</span>
                  {t.whatToExpect.tableFeatures.atmosphere}
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
            {t.whatToExpect.impressions}
          </h2>
          <ImageGallery images={accommodationImages} />
        </div>
      </section>
    </>
  );
}
