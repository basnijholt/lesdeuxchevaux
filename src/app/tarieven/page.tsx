"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n";

export default function Tarieven() {
  const { t } = useTranslation();

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.rates.heroTitle}</h1>
          <p className="text-xl text-amber-100">{t.rates.heroSubtitle}</p>
        </div>
      </section>

      {/* Camping Rates */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            {t.rates.campingTitle}
          </h2>
          <div className="overflow-x-auto max-w-4xl">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    {t.rates.description}
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    {t.rates.price}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.campingItems.pitch.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.campingItems.pitch.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.campingItems.extraPerson.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.campingItems.extraPerson.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.campingItems.electricity.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-green-600">
                    {t.rates.campingItems.electricity.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.campingItems.dog.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-green-600">
                    {t.rates.campingItems.dog.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.campingItems.touristTax.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.campingItems.touristTax.price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Chambres d'Hôtes Rates */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            {t.rates.chambresTitle}
          </h2>
          <div className="overflow-x-auto max-w-3xl">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    {t.rates.accommodation}
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    {t.rates.pricePerNight}
                  </th>
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    {t.rates.details}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.mainRoom.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.mainRoom.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.mainRoom.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.longere.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.longere.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.longere.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 text-gray-500 pl-10">
                    {t.rates.chambresItems.extraPerson.name}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.chambresItems.extraPerson.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.extraPerson.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.chezMarco.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.chezMarco.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.chezMarco.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 text-gray-500 pl-10">
                    {t.rates.chambresItems.extraPerson.name}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.chambresItems.extraPerson.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.extraPerson.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.smallCaravan.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.smallCaravan.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.smallCaravan.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.luxuryTent.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.luxuryTent.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.luxuryTent.details}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    {t.rates.chambresItems.bergerie.name}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.chambresItems.bergerie.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {t.rates.chambresItems.bergerie.details}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Table d'Hôtes Rates */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">
            {t.rates.tableTitle}
          </h2>
          <div className="overflow-x-auto max-w-4xl">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    {t.rates.meal}
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    {t.rates.price}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.tableItems.dinner.description}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.tableItems.dinner.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.tableItems.drinks.description}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {t.rates.tableItems.drinks.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.tableItems.lunch.description}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.tableItems.lunch.price}
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">
                    {t.rates.tableItems.breakfast.description}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    {t.rates.tableItems.breakfast.price}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.common.interested}</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {t.common.contactUs}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
          >
            {t.common.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
