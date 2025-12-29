"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import { getImagePath } from "@/lib/config";
import { useTranslation } from "@/i18n";

export default function WieZijnWij() {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title={t.nav.whoAreWe}
        subtitle={t.whoAreWe.heroSubtitle}
        image="/uploads/2021/09/rob-en-yvonne-1.jpg"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                {t.whoAreWe.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{t.whoAreWe.text1}</p>
              <p className="text-lg text-gray-600 mb-4">{t.whoAreWe.text2}</p>
              <p className="text-lg text-gray-600">{t.whoAreWe.text3}</p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={getImagePath("/uploads/2021/09/rob-en-yvonne-1.jpg")}
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
                src={getImagePath("/uploads/2021/09/jip-2.jpg")}
                alt="Jip"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                {t.whoAreWe.jipTitle}
              </h2>
              <p className="text-lg text-gray-600">{t.whoAreWe.jipText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
