"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n";

export default function ContactForm() {
  const { locale } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const labels = {
    nl: {
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      send: "Verstuur",
      sending: "Verzenden...",
      success: "Bericht verzonden! We nemen zo snel mogelijk contact met u op.",
      error: "Er is iets misgegaan. Probeer het opnieuw of mail ons direct.",
    },
    fr: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé ! Nous vous contacterons dès que possible.",
      error: "Une erreur s'est produite. Réessayez ou envoyez-nous un e-mail directement.",
    },
  };

  const t = labels[locale];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/7c3d342e562548b3bfc304b20d25aaf9", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
        />
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          {t.success}
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {t.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
