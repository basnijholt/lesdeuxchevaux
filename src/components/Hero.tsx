import Image from "next/image";
import { getImagePath } from "@/lib/config";

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
      className={`relative ${fullHeight ? "h-[80vh] min-h-[600px]" : "h-[50vh] min-h-[350px]"} w-full overflow-hidden`}
    >
      {image && (
        <Image
          src={getImagePath(image)}
          alt={title}
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
      )}
      {/* Refined gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md max-w-3xl font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Subtle scroll indicator for full height hero */}
      {fullHeight && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
