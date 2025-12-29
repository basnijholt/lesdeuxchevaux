import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImageGallery";

const highlights = [
  {
    title: "Mini-Camping",
    description:
      "6 ruime plekken voor tent of caravan in een ontspannen sfeer",
    image: "/uploads/2020/07/camping-2-1024x656.jpg",
    href: "/wat-te-verwachten",
  },
  {
    title: "Chambres d'Hôtes",
    description: "Comfortabele kamers met heerlijk Frans ontbijt",
    image: "/uploads/2016/09/Les-2CV-3-copy-1024x683.jpg",
    href: "/wat-te-verwachten",
  },
  {
    title: "Table d'Hôtes",
    description: "Geniet van authentieke Franse maaltijden",
    image: "/uploads/2016/09/tafelen.jpg",
    href: "/tarieven",
  },
];

const galleryImages = [
  { src: "/uploads/2020/07/onze-achterkant-1024x768.jpg", alt: "Achtertuin" },
  { src: "/uploads/2020/06/2020-05-28-09.55.31-1024x768.jpg", alt: "Tuin" },
  { src: "/uploads/2020/07/Bergerie-1024x682.jpg", alt: "La Bergerie" },
  {
    src: "/uploads/2020/07/les-deux-chevaux2-1024x682.jpg",
    alt: "Les Deux Chevaux",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Les Deux Chevaux"
        subtitle="Mini-camping, chambres d'hôtes en table d'hôtes in de Auvergne"
        image="/uploads/2020/07/2020-06-29-20.12.14-2-1024x682.jpg"
        fullHeight
      />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Welkom in de Auvergne
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Welkom op de website van <strong>Les Deux Chevaux</strong>, een
              gezellige mini-camping, chambres d&apos;hôtes (Bed & Breakfast) en
              table d&apos;hôtes in het prachtige Auvergne, Frankrijk.
            </p>
            <p className="text-lg text-gray-600">
              Wij, Yvonne en Rob, heten u van harte welkom op ons stukje paradijs
              in het hartje van Frankrijk.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Wat bieden wij?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why the name section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Waarom &quot;Les Deux Chevaux&quot;?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                De naam &quot;Les Deux Chevaux&quot; verwijst naar de iconische
                Franse auto, de Citroën 2CV - oftewel &quot;deux chevaux&quot;
                (twee paardenkrachten).
              </p>
              <p className="text-lg text-gray-600">
                Deze auto symboliseert het relaxte, authentieke Franse
                plattelandsleven dat wij onze gasten willen bieden.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/uploads/2020/07/les-deux-chevaux2-1024x682.jpg"
                alt="Les Deux Chevaux - De iconische 2CV"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Impressies
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Klaar voor uw verblijf in de Auvergne?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor meer informatie of om een reservering
            te maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-amber-800 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Neem contact op
            </Link>
            <Link
              href="/tarieven"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Bekijk tarieven
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
