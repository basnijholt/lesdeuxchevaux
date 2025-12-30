"use client";

import { useTranslation } from "@/i18n";

interface Review {
  name: string;
  rating: number;
  text: {
    nl: string;
    fr: string;
  };
  date: string;
}

const reviews: Review[] = [
  {
    name: "Denis",
    rating: 5,
    text: {
      nl: "De ontvangst is uitstekend. De kamer 'Bergerie' is aangenaam. De plek is rustig. We hebben het avondeten genomen dat erg lekker is... Het ontbijt is uitgebreid. Ik beveel deze plek van harte aan.",
      fr: "L'accueil est excellent. La chambre 'Bergerie' est agréable. Le lieu est calme. Nous avons pris le repas du soir qui est très bon... Le petit déjeuner est copieux. Je recommande vivement ce lieu.",
    },
    date: "2020",
  },
  {
    name: "Pascal",
    rating: 5,
    text: {
      nl: "Super gîte, warme en vriendelijke ontvangst. Ga er gerust heen, het dorp is prachtig.",
      fr: "Super gîte, accueil chaleureux et sympathique. Allez-y sans attendre, le village est magnifique.",
    },
    date: "2022",
  },
  {
    name: "Peter",
    rating: 5,
    text: {
      nl: "Gastvrijheid op zijn best. Aangenaam en rustig.",
      fr: "L'hospitalité à son meilleur. Agréable et calme.",
    },
    date: "2023",
  },
  {
    name: "Delphine",
    rating: 4,
    text: {
      nl: "Warme en authentieke ontvangst op deze vredige plek. Yvonne en Rob zijn zeer attente gastheren die uitstekend voor je zorgen.",
      fr: "Accueil chaleureux et authentique dans ce lieu paisible. Yvonne et Rob sont des hôtes très attentionnés qui sont aux petits soins.",
    },
    date: "2022",
  },
  {
    name: "Hugo",
    rating: 4,
    text: {
      nl: "Vredige gîte in het kleine dorpje Nades, met vriendelijke gastheren in een oud huis op een rustige locatie. Grote kamer, ontbijt inbegrepen. Ontspannend.",
      fr: "Gîte paisible dans le tout petit village de Nades, avec des hôtes sympathiques dans une vieille maison sur un site tranquille. Grande chambre, petit déjeuner inclus. Reposant.",
    },
    date: "2017",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-16 bg-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            {locale === "nl" ? "Wat onze gasten zeggen" : "Ce que disent nos hôtes"}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-gray-600 italic">
                &ldquo;{review.text[locale]}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-amber-800">{review.name}</span>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/3MdgjqSP66RKNZdX8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium"
          >
            {locale === "nl" ? "Bekijk alle reviews op Google Maps" : "Voir tous les avis sur Google Maps"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
