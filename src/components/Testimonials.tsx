"use client";

import { useTranslation } from "@/i18n";

interface Review {
  name: string;
  rating: number;
  text: {
    nl: string;
    fr: string;
    en: string;
  };
  date: string;
}

const reviews: Review[] = [
  {
    name: "Shirley Gorsira",
    rating: 5,
    text: {
      nl: "Echt een aanrader! Op onze terugreis vanuit de Ardeche naar Nederland zijn wij heel gastvrij ontvangen en hebben twee nachtjes geslapen in de longère. Een heerlijk huis, alles is aanwezig en vooral erg netjes en schoon. Table d'hôtes, dat hadden wij nog niet eerder meegemaakt... het was heerlijk! Rob (en zijn zoon) kunnen fantastisch koken. Wij komen graag nog een keer terug!",
      fr: "Vraiment recommandé ! Lors de notre voyage retour de l'Ardèche vers les Pays-Bas, nous avons été accueillis très chaleureusement et avons passé deux nuits dans la longère. Une maison merveilleuse, tout est présent et surtout très propre. Table d'hôtes, nous n'avions jamais essayé... c'était délicieux ! Rob (et son fils) cuisinent fantastiquement. Nous reviendrons avec plaisir !",
      en: "Highly recommended! On our way back from the Ardèche to the Netherlands, we were warmly welcomed and spent two nights in the longère. A wonderful house, everything is there and especially very neat and clean. Table d'hôtes, we had never experienced that before... it was delicious! Rob (and his son) are fantastic cooks. We would love to come back!",
    },
    date: "2025",
  },
  {
    name: "Dian Fluijt",
    rating: 5,
    text: {
      nl: "Slaperij Les deux chevaux voelt voor ons als thuiskomen. Alle credits voor eigenaren Rob en Yvonne die voortreffelijke gastheer en -vrouw zijn en ook nog eens heerlijk kunnen koken. We mogen zelf een plek kiezen voor onze caravan en genieten van de stilte en de natuur.",
      fr: "Les Deux Chevaux, c'est comme rentrer à la maison pour nous. Tous les mérites reviennent aux propriétaires Rob et Yvonne, des hôtes exceptionnels qui cuisinent également délicieusement. Nous pouvons choisir notre emplacement pour notre caravane et profiter du calme et de la nature.",
      en: "Les Deux Chevaux feels like coming home to us. All credits to owners Rob and Yvonne who are excellent hosts and can also cook deliciously. We can choose our own spot for our caravan and enjoy the silence and nature.",
    },
    date: "2025",
  },
  {
    name: "Henk Jan Willen",
    rating: 5,
    text: {
      nl: "Verborgen schat voor de rustzoeker! Geweldige plek met uitzicht op de Puy de Dôme en een geweldige gastvrijheid. Yvonne en Rob doen er werkelijk alles aan het je naar je zin te maken. Rob kan geweldig koken, dus vraag of je kunt aanschuiven. Wij komen er graag weer terug!",
      fr: "Un trésor caché pour ceux qui cherchent le calme ! Endroit magnifique avec vue sur le Puy de Dôme et une hospitalité exceptionnelle. Yvonne et Rob font vraiment tout pour vous satisfaire. Rob cuisine merveilleusement, alors demandez à vous joindre à table. Nous y retournerons avec plaisir !",
      en: "Hidden gem for those seeking peace! Amazing place with views of the Puy de Dôme and wonderful hospitality. Yvonne and Rob really do everything to make you feel comfortable. Rob is a great cook, so ask if you can join for dinner. We'd love to come back!",
    },
    date: "2025",
  },
  {
    name: "Cees van Hal",
    rating: 5,
    text: {
      nl: "Wat een enorm leuke camping cq bed and breakfast. Fantastisch leuke, gastvrije en gezellige mensen. Heerlijk eten. Mooie rustige omgeving. En je kan er gewoon Nederlands spreken.",
      fr: "Quel camping et chambre d'hôtes formidable ! Des gens fantastiques, accueillants et chaleureux. Délicieuse cuisine. Un bel environnement calme. Et on peut y parler néerlandais.",
      en: "What an amazing camping and bed & breakfast. Fantastic, friendly, hospitable and cozy people. Delicious food. Beautiful quiet surroundings. And you can even speak Dutch there.",
    },
    date: "2025",
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
            {locale === "nl" ? "Wat onze gasten zeggen" : locale === "fr" ? "Ce que disent nos hôtes" : "What our guests say"}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span>Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 4).map((review, index) => (
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
            {locale === "nl" ? "Bekijk alle reviews op Google Maps" : locale === "fr" ? "Voir tous les avis sur Google Maps" : "View all reviews on Google Maps"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
