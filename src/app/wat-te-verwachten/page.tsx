"use client";

import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import OptimizedImage from "@/components/OptimizedImage";
import { useTranslation } from "@/i18n";

const accommodationImages = [
  {
    src: "/uploads/2016/09/Rode-kamer.jpg",
    alt: "Rode Kamer",
  },
  { src: "/uploads/2020/07/camping-2.jpg", alt: "Camping" },
  { src: "/uploads/2020/07/Bergerie.jpg", alt: "La Bergerie" },
  { src: "/uploads/2020/07/proost.jpg", alt: "Table d'Hôtes" },
];

export default function WatTeVerwachten() {
  const { t } = useTranslation();

  const rooms = [
    {
      name: t.whatToExpect.rooms.longere.name,
      capacity: t.whatToExpect.rooms.longere.capacity,
      description: t.whatToExpect.rooms.longere.description,
    },
    {
      name: t.whatToExpect.rooms.chezMarco.name,
      capacity: t.whatToExpect.rooms.chezMarco.capacity,
      description: t.whatToExpect.rooms.chezMarco.description,
    },
    {
      name: t.whatToExpect.rooms.red.name,
      capacity: t.whatToExpect.rooms.red.capacity,
      description: t.whatToExpect.rooms.red.description,
    },
  ];

  return (
    <>
      <Hero
        title={t.whatToExpect.heroTitle}
        subtitle={t.whatToExpect.heroSubtitle}
        image="/uploads/2016/09/Rode-kamer.jpg"
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
            <OptimizedImage
              src="/uploads/2016/09/Rode-kamer.jpg"
              alt="Chambre"
              fill
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
              <OptimizedImage
                src="/uploads/2020/07/camping-2.jpg"
                alt="Camping"
                fill
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
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2024/rob-cooking-1.jpg"
                  alt="Rob kookt voor Table d'Hôtes"
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2024/rob-cooking-2.jpg"
                  alt="Rob bereidt maaltijd"
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2024/rob-cooking-3.jpg"
                  alt="Table d'Hôtes gerecht"
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
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
