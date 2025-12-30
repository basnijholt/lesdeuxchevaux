"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#5C5840] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-2 text-[#D4C9A8]">
              <p>
                <a
                  href="mailto:lesdeuxchevaux@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  lesdeuxchevaux@gmail.com
                </a>
              </p>
              <p>Yvonne: +33 786 141 714</p>
              <p>Rob: +33 768 859 020</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.address}</h3>
            <div className="text-[#D4C9A8]">
              <p>7 Impasse de la Tranquillité</p>
              <p>Nades, Allier</p>
              <p>Auvergne, France</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.navigation}</h3>
            <div className="space-y-2">
              <Link
                href="/tarieven"
                className="block text-[#D4C9A8] hover:text-white transition-colors"
              >
                {t.footer.rates}
              </Link>
              <Link
                href="/waar-zijn-wij"
                className="block text-[#D4C9A8] hover:text-white transition-colors"
              >
                {t.nav.whereAreWe}
              </Link>
              <Link
                href="/contact"
                className="block text-[#D4C9A8] hover:text-white transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#4A4635] text-center text-[#D4C9A8]">
          <p>
            &copy; {new Date().getFullYear()} Les Deux Chevaux.{" "}
            {t.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
}
