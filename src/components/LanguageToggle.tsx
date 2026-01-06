"use client";

import { useTranslation } from "@/i18n";
import type { Locale } from "@/i18n";

const languages: { code: Locale; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#6E6A4A]">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLocale(lang.code)}
            className={`px-2 py-0.5 text-sm font-medium transition-colors rounded ${
              locale === lang.code
                ? "text-white"
                : "text-[#D4C9A8] hover:text-white"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-[#A09B7D] mx-0.5">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
