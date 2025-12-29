import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/config";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
}

export default function Card({ title, description, image, href }: CardProps) {
  const content = (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getImagePath(image)}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
