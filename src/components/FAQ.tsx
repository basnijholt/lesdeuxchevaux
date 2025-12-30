"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n";

interface FAQItem {
  question: { nl: string; fr: string };
  answer: { nl: string; fr: string };
}

const faqItems: FAQItem[] = [
  {
    question: {
      nl: "Zijn honden welkom?",
      fr: "Les chiens sont-ils les bienvenus ?",
    },
    answer: {
      nl: "Ja, honden zijn welkom op de camping (aangelijnd). Ze zijn gratis!",
      fr: "Oui, les chiens sont les bienvenus au camping (tenus en laisse). C'est gratuit !",
    },
  },
  {
    question: {
      nl: "Is er WiFi beschikbaar?",
      fr: "Y a-t-il du WiFi disponible ?",
    },
    answer: {
      nl: "We hebben bewust beperkte WiFi. Dit is een plek om te ontspannen en de technologie even achter je te laten!",
      fr: "Nous avons volontairement un WiFi limité. C'est un endroit pour se détendre et laisser la technologie derrière soi !",
    },
  },
  {
    question: {
      nl: "Wat zijn de check-in en check-out tijden?",
      fr: "Quelles sont les heures d'arrivée et de départ ?",
    },
    answer: {
      nl: "Check-in is vanaf 15:00 uur, check-out vóór 11:00 uur. Flexibele tijden zijn mogelijk in overleg.",
      fr: "L'arrivée est à partir de 15h00, le départ avant 11h00. Des horaires flexibles sont possibles sur demande.",
    },
  },
  {
    question: {
      nl: "Moet ik de table d'hôtes van tevoren reserveren?",
      fr: "Dois-je réserver la table d'hôtes à l'avance ?",
    },
    answer: {
      nl: "Ja, graag minimaal een dag van tevoren zodat we verse ingrediënten kunnen inkopen.",
      fr: "Oui, veuillez réserver au moins un jour à l'avance afin que nous puissions acheter des ingrédients frais.",
    },
  },
  {
    question: {
      nl: "Welke betaalmethoden accepteren jullie?",
      fr: "Quels modes de paiement acceptez-vous ?",
    },
    answer: {
      nl: "We accepteren contant geld en bankoverschrijving. Pinbetalingen zijn helaas niet mogelijk.",
      fr: "Nous acceptons les espèces et les virements bancaires. Les paiements par carte ne sont malheureusement pas possibles.",
    },
  },
];

export default function FAQ() {
  const { locale } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const title = locale === "nl" ? "Veelgestelde vragen" : "Questions fréquentes";

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
          {title}
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-amber-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-amber-50 hover:bg-amber-100 transition-colors"
              >
                <span className="font-medium text-amber-900">
                  {item.question[locale]}
                </span>
                <svg
                  className={`w-5 h-5 text-amber-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{item.answer[locale]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
