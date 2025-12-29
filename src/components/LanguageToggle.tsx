"use client";

import { useTranslation } from "@/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === "nl" ? "fr" : "nl");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6E6A4A] hover:bg-[#5C5840] transition-colors text-sm font-medium"
      aria-label={
        locale === "nl" ? "Changer en français" : "Overschakelen naar Nederlands"
      }
    >
      <span
        className={`transition-opacity ${locale === "nl" ? "text-white" : "text-[#D4C9A8]"}`}
      >
        NL
      </span>
      <span className="text-[#A09B7D]">/</span>
      <span
        className={`transition-opacity ${locale === "fr" ? "text-white" : "text-[#D4C9A8]"}`}
      >
        FR
      </span>
    </button>
  );
}
