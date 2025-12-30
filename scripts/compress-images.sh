#!/bin/bash

# Image compression script using ImageMagick
# Compresses JPG/PNG files larger than 100KB

UPLOADS_DIR="./public/uploads"
MAX_WIDTH=1920
QUALITY=80
MIN_SIZE=102400  # 100KB in bytes

echo "🖼️  Compressing images..."

total_saved=0
compressed=0

# Find all jpg/jpeg/png files
while IFS= read -r -d '' file; do
    # Get file size
    size=$(stat -c%s "$file" 2>/dev/null || stat -f%z "$file" 2>/dev/null)

    # Skip small files
    if [ "$size" -lt "$MIN_SIZE" ]; then
        continue
    fi

    # Get image width
    width=$(identify -format "%w" "$file" 2>/dev/null)

    if [ -z "$width" ]; then
        continue
    fi

    # Compress the image
    if [ "$width" -gt "$MAX_WIDTH" ]; then
        # Resize and compress
        convert "$file" -resize "${MAX_WIDTH}>" -quality "$QUALITY" "$file.tmp" 2>/dev/null
    else
        # Just compress
        convert "$file" -quality "$QUALITY" "$file.tmp" 2>/dev/null
    fi

    if [ -f "$file.tmp" ]; then
        new_size=$(stat -c%s "$file.tmp" 2>/dev/null || stat -f%z "$file.tmp" 2>/dev/null)

        # Only replace if we saved space
        if [ "$new_size" -lt "$size" ]; then
            saved=$((size - new_size))
            total_saved=$((total_saved + saved))
            compressed=$((compressed + 1))
            saved_kb=$((saved / 1024))
            mv "$file.tmp" "$file"
            echo "  ✓ $file (saved ${saved_kb}KB)"
        else
            rm "$file.tmp"
        fi
    fi
done < <(find "$UPLOADS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

if [ "$compressed" -gt 0 ]; then
    total_mb=$(echo "scale=2; $total_saved / 1024 / 1024" | bc)
    echo ""
    echo "✅ Compressed $compressed images, saved ${total_mb}MB"
else
    echo ""
    echo "✅ All images already optimized"
fi
