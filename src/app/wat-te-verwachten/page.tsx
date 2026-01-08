"use client";

import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import OptimizedImage from "@/components/OptimizedImage";
import { useTranslation } from "@/i18n";

const longereImages = [
  { src: "/uploads/2026/01/longere-1.jpg", alt: "La Longère interieur" },
  { src: "/uploads/2026/01/longere-2.jpg", alt: "La Longère slaapkamer" },
  { src: "/uploads/2026/01/longere-3.jpg", alt: "La Longère keuken" },
  { src: "/uploads/2026/01/longere-4.jpg", alt: "La Longère woonkamer" },
  { src: "/uploads/2026/01/longere-5.jpg", alt: "La Longère badkamer" },
];

const chezMarcoImages = [
  {
    src: "/uploads/2026/01/chez-marco-slaapkamer-new.jpg",
    alt: "Chez Marco slaapkamer",
  },
  {
    src: "/uploads/2026/01/chez-marco-extra.jpg",
    alt: "Chez Marco slaapkamer detail",
  },
  { src: "/uploads/2026/01/chez-marco-keuken.jpg", alt: "Chez Marco keuken" },
  { src: "/uploads/2026/01/chez-marco-2.jpg", alt: "Chez Marco interieur" },
  { src: "/uploads/2026/01/chez-marco-3.jpg", alt: "Chez Marco woonkamer" },
];

const rodeKamerImages = [
  { src: "/uploads/2026/01/rode-kamer-1.jpg", alt: "Rode Kamer" },
];

const bergerieImages = [
  { src: "/uploads/2026/01/bergerie-1.jpg", alt: "La Bergerie interieur" },
  { src: "/uploads/2026/01/bergerie-2.jpg", alt: "La Bergerie exterieur" },
];

const campingImages = [
  { src: "/uploads/2020/07/camping-2.jpg", alt: "Camping met tent" },
  { src: "/uploads/2026/01/camping-1.jpg", alt: "Camping terrein" },
  { src: "/uploads/2026/01/camping-2.jpg", alt: "Camping uitzicht" },
  { src: "/uploads/2026/01/camping-3.jpg", alt: "Camping omgeving" },
];

export default function WatTeVerwachten() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title={t.whatToExpect.heroTitle}
        subtitle={t.whatToExpect.heroSubtitle}
        image="/uploads/2016/09/huis.jpeg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600">{t.whatToExpect.intro}</p>
          </div>
        </div>
      </section>

      {/* Chambres Title with Gîte Sign */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-4">
              {t.whatToExpect.chambresTitle}
            </h2>
            <div className="relative h-48 w-64 rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="/uploads/2024/gite-sign.jpg"
                alt="Officieel Gîte de France"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* La Longère */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">
              {t.whatToExpect.rooms.longere.name}
            </h3>
            <p className="text-amber-600 font-medium mb-2">
              {t.whatToExpect.rooms.longere.capacity}
            </p>
            <p className="text-gray-600 mb-6">
              {t.whatToExpect.rooms.longere.description}
            </p>
          </div>
          <ImageGallery images={longereImages} />
        </div>
      </section>

      {/* Chez Marco */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">
              {t.whatToExpect.rooms.chezMarco.name}
            </h3>
            <p className="text-amber-600 font-medium mb-2">
              {t.whatToExpect.rooms.chezMarco.capacity}
            </p>
            <p className="text-gray-600 mb-6">
              {t.whatToExpect.rooms.chezMarco.description}
            </p>
          </div>
          <ImageGallery images={chezMarcoImages} />
        </div>
      </section>

      {/* Rode Kamer */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">
              {t.whatToExpect.rooms.red.name}
            </h3>
            <p className="text-amber-600 font-medium mb-2">
              {t.whatToExpect.rooms.red.capacity}
            </p>
            <p className="text-gray-600 mb-6">
              {t.whatToExpect.rooms.red.description}
            </p>
          </div>
          <ImageGallery images={rodeKamerImages} />
        </div>
      </section>

      {/* Camping */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              {t.whatToExpect.campingTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {t.whatToExpect.campingText}
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
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
          <ImageGallery images={campingImages} />
        </div>
      </section>

      {/* Additional Accommodations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            {t.whatToExpect.additionalTitle}
          </h2>

          {/* Kleine Caravan */}
          <div className="bg-amber-50 p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              {t.whatToExpect.caravan.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.whatToExpect.caravan.text}</p>
            <p className="text-amber-600 font-medium">
              {t.whatToExpect.caravan.note}
            </p>
          </div>

          {/* La Bergerie */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              {t.whatToExpect.bergerie.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.whatToExpect.bergerie.text}</p>
            <p className="text-amber-600 font-medium mb-6">
              {t.whatToExpect.bergerie.note}
            </p>
            <ImageGallery images={bergerieImages} />
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
    </>
  );
}
