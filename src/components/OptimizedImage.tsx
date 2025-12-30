"use client";

import ExportedImage from "next-image-export-optimizer";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  fill = false,
  width,
  height,
  onClick,
}: OptimizedImageProps) {
  // ExportedImage needs width/height when not using fill
  const imageProps = fill
    ? { fill: true }
    : { width: width || 1920, height: height || 1080 };

  return (
    <div className={fill ? `relative ${className}` : className} onClick={onClick}>
      <ExportedImage
        src={src}
        alt={alt}
        {...imageProps}
        className={fill ? "object-cover" : ""}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        basePath="/lesdeuxchevaux"
      />
    </div>
  );
}

export default OptimizedImage;
