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

  const [huidige, setHuidige] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Bij wisselen: nieuwe bron laden en meteen afspelen.
  useEffect(() => {
    if (!meerdereClips) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {
      /* browser weigert automatisch afspelen; poster blijft staan */
    });
  }, [huidige, meerdereClips]);

  // Tweede video alvast ophalen terwijl de eerste speelt, zodat de wissel vloeiend gaat.
  useEffect(() => {
    if (!meerdereClips) return;
    clips.slice(1).forEach((src) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "video";
      link.href = src;
      document.head.appendChild(link);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`relative ${fullHeight ? "h-[80vh] min-h-[600px]" : "h-[50vh] min-h-[350px]"} w-full overflow-hidden`}
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

      {/* Video: op alle schermformaten, ook mobiel.
          Bij meerdere video's speelt hij ze om en om af. */}
      {clips.length > 0 && (
        <video
          key={meerdereClips ? clips[huidige] : undefined}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          loop={!meerdereClips}
          muted
          playsInline
          preload="auto"
          poster={image}
          aria-hidden="true"
          onEnded={
            meerdereClips
              ? () => setHuidige((i) => (i + 1) % clips.length)
              : undefined
          }
        >
          <source src={clips[huidige]} type="video/mp4" />
        </video>
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
