import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-amber-100">
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
            <h3 className="text-lg font-semibold mb-4">Adres</h3>
            <div className="text-amber-100">
              <p>7 Impasse de la Tranquillité</p>
              <p>Nades, Allier</p>
              <p>Auvergne, Frankrijk</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigatie</h3>
            <div className="space-y-2">
              <Link
                href="/tarieven"
                className="block text-amber-100 hover:text-white transition-colors"
              >
                Tarieven
              </Link>
              <Link
                href="/contact"
                className="block text-amber-100 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/de-streek"
                className="block text-amber-100 hover:text-white transition-colors"
              >
                De streek
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-200">
          <p>
            &copy; {new Date().getFullYear()} Les Deux Chevaux. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
