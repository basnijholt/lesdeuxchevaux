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
  // When using fill, don't wrap in an extra div - let the parent handle positioning
  if (fill) {
    // Only default to object-cover when the caller hasn't chosen its own object-fit
    const hasObjectFit = /(^|\s)object-(contain|cover|fill|none|scale-down)(\s|$)/.test(
      className
    );
    return (
      <ExportedImage
        src={src}
        alt={alt}
        fill
        className={hasObjectFit ? className : `object-cover ${className}`}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        basePath="/lesdeuxchevaux"
        onClick={onClick}
      />
    );
  }

  return (
    <div className={className} onClick={onClick}>
      <ExportedImage
        src={src}
        alt={alt}
        width={width || 1920}
        height={height || 1080}
        priority={priority}
        sizes={sizes}
        placeholder="blur"
        basePath="/lesdeuxchevaux"
      />
    </div>
  );
}

export default OptimizedImage;
