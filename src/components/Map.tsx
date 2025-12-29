"use client";

interface MapProps {
  className?: string;
}

// Coordinates for 7 Impasse de la Tranquillité, Nades, France
const LAT = 46.2833;
const LON = 3.0667;
const ZOOM = 14;

export default function Map({ className = "h-80" }: MapProps) {
  // OpenStreetMap embed URL with marker
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${LON - 0.02},${LAT - 0.01},${LON + 0.02},${LAT + 0.01}&layer=mapnik&marker=${LAT},${LON}`;

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location of Les Deux Chevaux"
        className="w-full h-full"
      />
    </div>
  );
}
