"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { Locale, Translations } from "./types";
import nl from "./locales/nl.json";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

const translations: Record<Locale, Translations> = {
  nl: nl as Translations,
  fr: fr as Translations,
  en: en as Translations,
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "lesdeuxchevaux-language";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "nl";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && (stored === "nl" || stored === "fr" || stored === "en")) {
    return stored;
  }
  return "nl";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t, locale, setLocale } = useLanguage();
  return { t, locale, setLocale };
}
