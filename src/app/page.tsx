"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImageGallery";
import FadeIn from "@/components/FadeIn";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import OptimizedImage from "@/components/OptimizedImage";
import { useTranslation } from "@/i18n";

const galleryImages = [
  { src: "/uploads/2020/07/onze-achterkant.jpg", alt: "Achtertuin" },
  { src: "/uploads/2020/06/2020-05-28-09.55.31.jpg", alt: "Tuin" },
  { src: "/uploads/2020/07/Bergerie.jpg", alt: "La Bergerie" },
  {
    src: "/uploads/2020/07/les-deux-chevaux2.jpg",
    alt: "Les Deux Chevaux",
  },
];

export default function Home() {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t.home.highlights.camping.title,
      description: t.home.highlights.camping.description,
      image: "/uploads/2020/07/camping-2.jpg",
      href: "/wat-te-verwachten",
    },
    {
      title: t.home.highlights.chambres.title,
      description: t.home.highlights.chambres.description,
      image: "/uploads/2016/09/Les-2CV-3-copy.jpg",
      href: "/wat-te-verwachten",
    },
    {
      title: t.home.highlights.table.title,
      description: t.home.highlights.table.description,
      image: "/uploads/2016/09/tafelen.jpg",
      href: "/tarieven",
    },
  ];

  return (
    <>
      <Hero
        title="Les Deux Chevaux"
        subtitle={t.home.heroSubtitle}
        image="/uploads/2020/07/2020-06-29-20.12.14-2.jpg"
        fullHeight
      />

      {/* Welcome Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C5840] mb-8 heading-decorated-center">
                {t.home.welcomeTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                {t.home.welcomeText1}
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t.home.welcomeText2}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C5840] text-center mb-16 heading-decorated-center">
              {t.home.whatWeOffer}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <Card {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why the name section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5C5840] mb-8 heading-decorated">
                  {t.home.whyTheName}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t.home.whyTheNameText1}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.home.whyTheNameText2}
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <OptimizedImage
                  src="/uploads/2020/07/les-deux-chevaux2.jpg"
                  alt="Les Deux Chevaux - 2CV"
                  fill
                  className="hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C5840] text-center mb-16 heading-decorated-center">
              {t.home.impressions}
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <ImageGallery images={galleryImages} />
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#5C5840] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t.home.readyForStay}
            </h2>
            <p className="text-xl text-[#D4C9A8] mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.home.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                {t.common.contact}
              </Link>
              <Link href="/tarieven" className="btn-outline-white">
                {t.common.viewRates}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
