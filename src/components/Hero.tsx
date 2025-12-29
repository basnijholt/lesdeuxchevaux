import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  image,
  fullHeight = false,
}: HeroProps) {
  return (
    <div
      className={`relative ${fullHeight ? "h-[70vh] min-h-[500px]" : "h-[40vh] min-h-[300px]"} w-full`}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
