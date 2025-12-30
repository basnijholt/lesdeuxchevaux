"use client";

import ExportedImage from "next-image-export-optimizer";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import { useTranslation } from "@/i18n";

const regionImages = [
  { src: "/uploads/2013/11/WS14.jpg", alt: "Landschap Auvergne" },
  { src: "/uploads/2013/11/WS17.jpg", alt: "Wandelen" },
  {
    src: "/uploads/2018/11/winter-e1543590063310.jpg",
    alt: "Winter in Auvergne",
  },
  { src: "/uploads/2016/09/kanoën.jpeg", alt: "Kanoën" },
  { src: "/uploads/2024/streek/region-1.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-2.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-3.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-4.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-6.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-7.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-9.jpg", alt: "De streek" },
  { src: "/uploads/2024/streek/region-10.jpg", alt: "De streek" },
];

export default function DeStreek() {
  const { t } = useTranslation();

  const activities = [
    {
      title: t.theRegion.activities.hiking.title,
      description: t.theRegion.activities.hiking.description,
      icon: "🥾",
    },
    {
      title: t.theRegion.activities.mountainBiking.title,
      description: t.theRegion.activities.mountainBiking.description,
      icon: "🚵",
    },
    {
      title: t.theRegion.activities.cycling.title,
      description: t.theRegion.activities.cycling.description,
      icon: "🚴",
    },
    {
      title: t.theRegion.activities.fishing.title,
      description: t.theRegion.activities.fishing.description,
      icon: "🎣",
    },
    {
      title: t.theRegion.activities.canoeing.title,
      description: t.theRegion.activities.canoeing.description,
      icon: "🛶",
    },
    {
      title: t.theRegion.activities.motorcycling.title,
      description: t.theRegion.activities.motorcycling.description,
      icon: "🏍️",
    },
    {
      title: t.theRegion.activities.golf.title,
      description: t.theRegion.activities.golf.description,
      icon: "⛳",
    },
    {
      title: t.theRegion.activities.climbing.title,
      description: t.theRegion.activities.climbing.description,
      icon: "🧗",
    },
    {
      title: t.theRegion.activities.swimming.title,
      description: t.theRegion.activities.swimming.description,
      icon: "🏊",
    },
  ];

  const attractions = [
    {
      title: t.theRegion.attractions.puyDeDome.title,
      description: t.theRegion.attractions.puyDeDome.description,
      url: "https://www.panoramiquedesdomes.fr/",
    },
    {
      title: t.theRegion.attractions.puyDeSancy.title,
      description: t.theRegion.attractions.puyDeSancy.description,
      url: "https://www.sancy.com/",
    },
    {
      title: t.theRegion.attractions.castles.title,
      description: t.theRegion.attractions.castles.description,
    },
    {
      title: t.theRegion.attractions.vulcania.title,
      description: t.theRegion.attractions.vulcania.description,
      url: "https://www.vulcania.com/",
    },
    {
      title: t.theRegion.attractions.autoMuseum.title,
      description: t.theRegion.attractions.autoMuseum.description,
    },
    {
      title: t.theRegion.attractions.fleaMarkets.title,
      description: t.theRegion.attractions.fleaMarkets.description,
    },
    {
      title: t.theRegion.attractions.shoppingTowns.title,
      description: t.theRegion.attractions.shoppingTowns.description,
    },
    {
      title: t.theRegion.attractions.paleopolis.title,
      description: t.theRegion.attractions.paleopolis.description,
      url: "https://www.paleopolis-parc.com/",
    },
    {
      title: t.theRegion.attractions.accrobranche.title,
      description: t.theRegion.attractions.accrobranche.description,
    },
    {
      title: t.theRegion.attractions.charroux.title,
      description: t.theRegion.attractions.charroux.description,
      url: "https://www.charroux.com/",
    },
    {
      title: t.theRegion.attractions.vichy.title,
      description: t.theRegion.attractions.vichy.description,
      url: "https://vichymonamour.com/",
    },
    {
      title: t.theRegion.attractions.troncais.title,
      description: t.theRegion.attractions.troncais.description,
      url: "https://www.onf.fr/vivre-la-foret/forets-de-france/+/16fc::foret-domaniale-de-troncais.html",
    },
  ];

  return (
    <>
      <Hero
        title={t.theRegion.heroTitle}
        subtitle={t.theRegion.heroSubtitle}
        image="/uploads/2013/11/WS14.jpg"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-4">{t.theRegion.intro1}</p>
            <p className="text-lg text-gray-500">{t.theRegion.intro2}</p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            {t.theRegion.outdoorActivities}
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
            {t.theRegion.attractionsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.title}
                className="border border-amber-200 p-6 rounded-xl hover:border-amber-400 transition-colors"
              >
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  {attraction.url ? (
                    <a
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {attraction.title} ↗
                    </a>
                  ) : (
                    attraction.title
                  )}
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
              <ExportedImage
                src="/uploads/2018/11/winter-e1543590063310.jpg"
                alt="Winter in Auvergne"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                basePath="/lesdeuxchevaux"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                {t.theRegion.winterTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t.theRegion.winterText1}
              </p>
              <p className="text-lg text-gray-600">{t.theRegion.winterText2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            {t.theRegion.impressions}
          </h2>
          <ImageGallery images={regionImages} />
        </div>
      </section>
    </>
  );
}
