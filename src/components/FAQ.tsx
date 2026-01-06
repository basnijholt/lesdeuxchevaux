"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n";

interface FAQItem {
  question: { nl: string; fr: string; en: string };
  answer: { nl: string; fr: string; en: string };
}

const faqItems: FAQItem[] = [
  {
    question: {
      nl: "Zijn honden welkom?",
      fr: "Les chiens sont-ils les bienvenus ?",
      en: "Are dogs welcome?",
    },
    answer: {
      nl: "Ja, honden zijn welkom op de camping (aangelijnd). Ze zijn gratis!",
      fr: "Oui, les chiens sont les bienvenus au camping (tenus en laisse). C'est gratuit !",
      en: "Yes, dogs are welcome at the campsite (on a leash). They're free!",
    },
  },
  {
    question: {
      nl: "Is er WiFi beschikbaar?",
      fr: "Y a-t-il du WiFi disponible ?",
      en: "Is WiFi available?",
    },
    answer: {
      nl: "Ja, we hebben uitstekende WiFi via Starlink in en rond het huis. Op de camping is geen WiFi beschikbaar - daar kun je echt even ontspannen!",
      fr: "Oui, nous avons un excellent WiFi via Starlink dans et autour de la maison. Il n'y a pas de WiFi au camping - là-bas, vous pouvez vraiment vous détendre !",
      en: "Yes, we have excellent WiFi via Starlink in and around the house. There's no WiFi at the campsite - there you can truly relax!",
    },
  },
  {
    question: {
      nl: "Wat zijn de check-in en check-out tijden?",
      fr: "Quelles sont les heures d'arrivée et de départ ?",
      en: "What are the check-in and check-out times?",
    },
    answer: {
      nl: "Check-in is vanaf 15:00 uur, check-out vóór 11:00 uur. Flexibele tijden zijn mogelijk in overleg.",
      fr: "L'arrivée est à partir de 15h00, le départ avant 11h00. Des horaires flexibles sont possibles sur demande.",
      en: "Check-in is from 3:00 PM, check-out before 11:00 AM. Flexible times are possible upon request.",
    },
  },
  {
    question: {
      nl: "Moet ik de table d'hôtes van tevoren reserveren?",
      fr: "Dois-je réserver la table d'hôtes à l'avance ?",
      en: "Do I need to book the table d'hôtes in advance?",
    },
    answer: {
      nl: "Ja, graag minimaal een dag van tevoren zodat we verse ingrediënten kunnen inkopen.",
      fr: "Oui, veuillez réserver au moins un jour à l'avance afin que nous puissions acheter des ingrédients frais.",
      en: "Yes, please book at least one day in advance so we can purchase fresh ingredients.",
    },
  },
  {
    question: {
      nl: "Welke betaalmethoden accepteren jullie?",
      fr: "Quels modes de paiement acceptez-vous ?",
      en: "What payment methods do you accept?",
    },
    answer: {
      nl: "We accepteren zowel pinbetalingen (via Sumup) als contant geld.",
      fr: "Nous acceptons les paiements par carte (via Sumup) ainsi que les espèces.",
      en: "We accept both card payments (via Sumup) and cash.",
    },
  },
];

export default function FAQ() {
  const { locale } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const title = locale === "nl" ? "Veelgestelde vragen" : locale === "fr" ? "Questions fréquentes" : "Frequently Asked Questions";

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
