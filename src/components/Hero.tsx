"use client";

import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  /** Extra video's die na de eerste aan de beurt komen; daarna begint hij weer vooraan. */
  videos?: string[];
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  image,
  video,
  videos,
  fullHeight = false,
}: HeroProps) {
  // Alle video's op een rij: eerst `video`, daarna eventuele extra's.
  const clips = [...(video ? [video] : []), ...(videos ?? [])];
  const meerdereClips = clips.length > 1;

  // Hoe lang het overvloeien duurt (in seconden).
  const OVERVLOEI = 0.6;

  // Twee lagen over elkaar; er is er steeds één zichtbaar. Bij een wissel
  // vervaagt de ene terwijl de andere opkomt.
  const [actieveLaag, setActieveLaag] = useState(0);
  const [bronnen, setBronnen] = useState<[string, string]>([
    clips[0] ?? "",
    clips[1] ?? clips[0] ?? "",
  ]);
  const laagRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];
  const volgendeIndex = useRef(1 % Math.max(clips.length, 1));
  const bezig = useRef(false);

  // De tweede video pas ophalen zodra de eerste loopt, zodat de pagina
  // net zo snel opent als met één video.
  const [tweedeGeladen, setTweedeGeladen] = useState(false);
  useEffect(() => {
    if (!meerdereClips) return;
    const eerste = laagRefs[0].current;
    if (!eerste) return;
    const start = () => setTweedeGeladen(true);
    if (eerste.readyState >= 3) start();
    else eerste.addEventListener("canplaythrough", start, { once: true });
    return () => eerste.removeEventListener("canplaythrough", start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meerdereClips]);

  useEffect(() => {
    if (!meerdereClips) return;

    const wissel = () => {
      if (bezig.current) return;
      bezig.current = true;

      const nieuweLaag = actieveLaag === 0 ? 1 : 0;
      const el = laagRefs[nieuweLaag].current;
      if (el) {
        el.currentTime = 0;
        el.play().catch(() => {});
      }
      setActieveLaag(nieuweLaag);

      // Zodra het overvloeien klaar is, de zojuist verdwenen laag alvast
      // vullen met de vólgende video.
      window.setTimeout(() => {
        const oudeLaag = nieuweLaag === 0 ? 1 : 0;
        volgendeIndex.current = (volgendeIndex.current + 1) % clips.length;
        setBronnen((huidig) => {
          const kopie: [string, string] = [...huidig];
          kopie[oudeLaag] = clips[volgendeIndex.current];
          return kopie;
        });
        bezig.current = false;
      }, OVERVLOEI * 1000);
    };

    // Iets vóór het einde beginnen met overvloeien, zodat het naadloos oogt.
    const actief = laagRefs[actieveLaag].current;
    if (!actief) return;

    const bijTijd = () => {
      if (!actief.duration || Number.isNaN(actief.duration)) return;
      if (actief.currentTime >= actief.duration - OVERVLOEI) wissel();
    };

    actief.addEventListener("timeupdate", bijTijd);
    actief.addEventListener("ended", wissel);
    return () => {
      actief.removeEventListener("timeupdate", bijTijd);
      actief.removeEventListener("ended", wissel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actieveLaag, meerdereClips]);

  // De inactieve laag alvast inladen zodat de wissel niet hapert.
  useEffect(() => {
    if (!meerdereClips) return;
    const stil = laagRefs[actieveLaag === 0 ? 1 : 0].current;
    stil?.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bronnen, meerdereClips]);

  return (
    <div
      className={`relative ${
        fullHeight
          ? clips.length > 0
            ? // Met video op de telefoon: precies de vorm van het beeld (16:9), zodat
              // er niets van links en rechts wegvalt. Vanaf tablet weer beeldvullend.
              "aspect-video min-h-[240px] md:aspect-auto md:h-[80vh] md:min-h-[600px]"
            : "h-[80vh] min-h-[600px]"
          : "h-[50vh] min-h-[350px]"
      } w-full overflow-hidden`}
    >
      {/* Stilstaand beeld: alleen als er geen video is (anders dient het als poster) */}
      {image && clips.length === 0 && (
        <OptimizedImage
          src={image}
          alt={title}
          fill
          className="scale-105"
          priority
          sizes="100vw"
        />
      )}

      {/* Eén video: gewoon herhalen. */}
      {clips.length === 1 && (
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={image}
          aria-hidden="true"
        >
          <source src={clips[0]} type="video/mp4" />
        </video>
      )}

      {/* Meerdere video's: twee lagen die in elkaar overvloeien. */}
      {meerdereClips &&
        ([0, 1] as const).map((laag) => (
          <video
            key={laag}
            ref={laagRefs[laag]}
            src={bronnen[laag]}
            className={`absolute inset-0 w-full h-full object-cover md:scale-105 transition-opacity duration-[600ms] ease-in-out ${
              actieveLaag === laag ? "opacity-100" : "opacity-0"
            }`}
            autoPlay={laag === 0}
            muted
            playsInline
            // Laag 0 meteen laden, laag 1 pas als de eerste al draait:
            // zo blijft het openen van de pagina net zo snel als met één video.
            preload={laag === 0 ? "auto" : tweedeGeladen ? "auto" : "none"}
            poster={laag === 0 ? image : undefined}
            aria-hidden="true"
          />
        ))}
      {/* Refined gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10 md:py-16 sm:px-6 lg:px-8 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-6 drop-shadow-lg tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md max-w-3xl font-light tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Subtle scroll indicator for full height hero */}
      {fullHeight && (
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
