import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Bekijk onze prijzen voor mini-camping, chambres d'hôtes en table d'hôtes bij Les Deux Chevaux.",
};

export default function Tarieven() {
  return (
    <>
      {/* Header */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Onze Tarieven</h1>
          <p className="text-xl text-amber-100">
            Prijzen voor camping, kamers en maaltijden
          </p>
        </div>
      </section>

      {/* Camping Rates */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Camping</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    Omschrijving
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    Prijs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Plek (2 personen + auto)</td>
                  <td className="px-6 py-4 text-right font-medium">€17,50</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Extra persoon</td>
                  <td className="px-6 py-4 text-right font-medium">€2,50</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Elektriciteit</td>
                  <td className="px-6 py-4 text-right font-medium text-green-600">
                    Inbegrepen
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Hond (aangelijnd)</td>
                  <td className="px-6 py-4 text-right font-medium text-green-600">
                    Gratis
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Toeristenbelasting</td>
                  <td className="px-6 py-4 text-right font-medium">
                    €0,25 p.p./dag
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
            Chambres d&apos;Hôtes (Bed & Breakfast)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    Accommodatie
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    Prijs per nacht
                  </th>
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">
                    Kamer in hoofdgebouw
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €75,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    2 personen, incl. ontbijt, eigen douche/toilet
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">La Longère</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €80,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    2 personen, incl. ontbijt, eigen badkamer
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 text-gray-500 pl-10">
                    + Extra persoon
                  </td>
                  <td className="px-6 py-4 text-right font-medium">€30,00</td>
                  <td className="px-6 py-4 text-gray-600">Per extra persoon</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">Chez Marco</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €80,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    2 personen, incl. ontbijt, eigen badkamer
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 text-gray-500 pl-10">
                    + Extra persoon
                  </td>
                  <td className="px-6 py-4 text-right font-medium">€30,00</td>
                  <td className="px-6 py-4 text-gray-600">Per extra persoon</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">Kleine caravan</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €70,00 / €65,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Met/zonder ontbijt (min. 2 nachten)
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">Luxe tent</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €70,00 / €65,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Met/zonder ontbijt (min. 2 nachten)
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4 font-medium">La Bergerie (huisje)</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €70,00 / €65,00
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    Met/zonder ontbijt
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
            Table d&apos;Hôtes (Maaltijden)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-4 text-left text-amber-900 font-semibold">
                    Maaltijd
                  </th>
                  <th className="px-6 py-4 text-right text-amber-900 font-semibold">
                    Prijs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Driegangen diner met koffie</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €20,00 p.p.
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Drankjes bij diner</td>
                  <td className="px-6 py-4 text-right font-medium">
                    €2,00 per stuk
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Lunch</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €7,50 p.p.
                  </td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-6 py-4">Ontbijt (los)</td>
                  <td className="px-6 py-4 text-right font-semibold text-amber-700">
                    €6,50 p.p.
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
          <h2 className="text-3xl font-bold mb-6">Interesse?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor meer informatie of om een reservering
            te maken.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
