"use client";

import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import OptimizedImage from "@/components/OptimizedImage";
import ReserveButton from "@/components/ReserveButton";
import { useTranslation } from "@/i18n";

const longereImages = [
  { src: "/uploads/2026/01/longere-1.jpg", alt: "La Longère interieur" },
  { src: "/uploads/2026/01/longere-2.jpg", alt: "La Longère slaapkamer" },
  { src: "/uploads/2026/01/longere-3.jpg", alt: "La Longère keuken" },
  { src: "/uploads/2026/01/longere-4.jpg", alt: "La Longère woonkamer" },
  { src: "/uploads/2026/01/longere-5.jpg", alt: "La Longère badkamer" },
];

const chezMarcoImages = [
  { src: "/uploads/2026/08/le-bel-etage-woonkamer.jpg", alt: "Le Bel Étage woonkamer door de deuren heen" },
  { src: "/uploads/2026/08/le-bel-etage-woonkamer-detail.jpg", alt: "Le Bel Étage woonkamer vanuit de entree" },
  { src: "/uploads/2026/08/le-bel-etage-kachel.jpg", alt: "Le Bel Étage houtkachel, trap en koffers" },
  { src: "/uploads/2026/08/le-bel-etage-binnenplaats.jpg", alt: "Le Bel Étage zithoek" },
  { src: "/uploads/2026/08/le-bel-etage-deur.jpg", alt: "Le Bel Étage houtkachel en mand" },
  { src: "/uploads/2026/08/le-bel-etage-keuken.png", alt: "Keuken van Le Bel Étage" },
];

const rodeKamerImages = [
  { src: "/uploads/2026/01/rode-kamer-1.jpg", alt: "Rode Kamer" },
];

const bergerieImages = [
  { src: "/uploads/2026/01/bergerie-1.jpg", alt: "La Bergerie interieur" },
  { src: "/uploads/2026/01/bergerie-2.jpg", alt: "La Bergerie exterieur" },
];

const tableDhotesImages = [
  { src: "/uploads/2026/eten/tafel-vol-gerechten.jpg", alt: "Tafel vol gegrilde gerechten en salades" },
  { src: "/uploads/2026/eten/paella.jpg", alt: "Paella met garnalen en mosselen" },
  { src: "/uploads/2026/eten/quiche-pannetje.jpg", alt: "Quiche uit het gietijzeren pannetje" },
  { src: "/uploads/2026/eten/spareribs.jpg", alt: "Spareribs op de grill" },
  { src: "/uploads/2026/eten/watermeloensalade.jpg", alt: "Watermeloensalade met feta en rucola" },
  { src: "/uploads/2026/eten/stoofpot-gietijzer.jpg", alt: "Stoofpot met groenten in gietijzeren pan" },
  { src: "/uploads/2026/eten/wraps.jpg", alt: "Wraps met pulled pork en verse groenten" },
  { src: "/uploads/2026/eten/rijst-en-spiesjes.jpg", alt: "Rijst en spiesjes op de Ofyr" },
  { src: "/uploads/2026/eten/bord-spies-aardappel.jpg", alt: "Bord met spies, gepofte aardappel en gegrilde groenten" },
  { src: "/uploads/2026/eten/voorbereiding-bbq.jpg", alt: "Voorbereidingen voor de barbecue" },
];

const campingImages = [
  { src: "/uploads/2020/07/camping-2.jpg", alt: "Camping met tent" },
  { src: "/uploads/2026/01/camping-1.jpg", alt: "Camping terrein" },
  { src: "/uploads/2026/01/camping-2.jpg", alt: "Camping uitzicht" },
  { src: "/uploads/2026/01/camping-3.jpg", alt: "Camping omgeving" },
  { src: "/uploads/2026/terrein/bank-om-boom.jpg", alt: "Houten bank rondom de boomstam" },
  { src: "/uploads/2026/terrein/houten-kar.jpg", alt: "Antieke houten kar op het terrein" },
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

      {/* Le Bel Etage */}
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

      {/* Additional Accommodations */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            {t.whatToExpect.additionalTitle}
          </h2>

          {/* Ingerichte Tent */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              {t.whatToExpect.luxuryTent.title}
            </h3>
            <p className="text-gray-600 mb-4">{t.whatToExpect.luxuryTent.text}</p>
            <p className="text-amber-600 font-medium mb-6">
              {t.whatToExpect.luxuryTent.note}
            </p>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="/uploads/2026/tent-avond.jpg"
                alt="Ingerichte tent bij avond met lampionnen"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
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

      {/* Camping */}
      <section className="py-16 bg-white">
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
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2026/table-dhotes-1.jpg"
                  alt="Samen aan tafel bij Table d'Hôtes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2026/table-dhotes-2.jpg"
                  alt="Eten onder de bomen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/uploads/2026/table-dhotes-3.jpg"
                  alt="De barbecue wordt klaargemaakt"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <ImageGallery images={tableDhotesImages} />
          </div>
        </div>
      </section>

      {/* Reserveren */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.common.interested}</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {t.common.contactUs}
          </p>
          <ReserveButton variant="light" />
        </div>
      </section>
    </>
  );
}
