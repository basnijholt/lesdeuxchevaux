"use client";

import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
}

export default function Card({ title, description, image, href }: CardProps) {
  const content = (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="relative h-52 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            fill
            className="group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#5C5840] mb-2 group-hover:text-[#837F5A] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
