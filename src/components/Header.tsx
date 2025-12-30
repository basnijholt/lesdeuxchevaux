"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.whoAreWe, href: "/wie-zijn-wij" },
    { title: t.nav.whereAreWe, href: "/waar-zijn-wij" },
    { title: t.nav.theRegion, href: "/de-streek" },
    { title: t.nav.whatToExpect, href: "/wat-te-verwachten" },
    { title: t.nav.rates, href: "/tarieven" },
    { title: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#837F5A] shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <ExportedImage
                src="/logo.jpg"
                alt="Les Deux Chevaux"
                width={200}
                height={85}
                className="h-16 w-auto"
                priority
                basePath="/lesdeuxchevaux"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#F5E6C8] hover:text-white transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-[#F5E6C8] hover:text-white hover:bg-[#6E6A4A] transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#6E6A4A]/50">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-[#F5E6C8] hover:text-white hover:bg-[#6E6A4A] rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
