"use client";

interface MapProps {
  className?: string;
}

// Coordinates for Slaperij Les Deux Chevaux, Nades, France
const LAT = 46.1586;
const LON = 2.96912;

export default function Map({ className = "h-80" }: MapProps) {
  // OpenStreetMap embed URL with marker - zoomed out to show France outline
  // France bounds: roughly -5 to 10 longitude, 41 to 51 latitude
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-5,42,10,51&layer=mapnik&marker=${LAT},${LON}`;

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
