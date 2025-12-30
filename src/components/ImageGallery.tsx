"use client";

import { useState } from "react";
import OptimizedImage from "./OptimizedImage";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#837F5A] focus:ring-offset-2 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-10 h-10 text-white drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg
              className="h-8 w-8"
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
          </button>

          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage === 0 ? images.length - 1 : selectedImage - 1
              );
            }}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage === images.length - 1 ? 0 : selectedImage + 1
              );
            }}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
