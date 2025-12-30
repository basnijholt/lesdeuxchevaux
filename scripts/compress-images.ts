import { Transformer } from "@napi-rs/image";
import { readdir, readFile, writeFile, mkdir } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { existsSync } from "fs";

const SOURCE_DIR = "./public/uploads";
const QUALITY = 80;
const WEBP_QUALITY = 80;
const MIN_SIZE = 50 * 1024; // 50KB - process more images
const SIZES = [640, 960, 1280, 1920]; // Responsive breakpoints
const BLUR_WIDTH = 20; // Tiny placeholder

// Skip if not in CI (to preserve local originals)
const IS_CI = process.env.CI === "true";

interface ImageManifest {
  [path: string]: {
    blur: string; // base64 data URL
    sizes: number[]; // available widths
    originalWidth: number;
    originalHeight: number;
  };
}

async function getImageFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function processImage(
  filePath: string,
  manifest: ImageManifest
): Promise<{ saved: number; generated: number }> {
  const originalBuffer = await readFile(filePath);
  const originalSize = originalBuffer.length;
  let totalSaved = 0;
  let filesGenerated = 0;

  try {
    const transformer = new Transformer(originalBuffer);
    const metadata = await transformer.metadata();
    const originalWidth = metadata.width || 1920;
    const originalHeight = metadata.height || 1080;

    // Get relative path for manifest (remove ./public or public prefix)
    const relativePath = filePath.replace(/^(\.\/)?public/, "");
    const ext = extname(filePath).toLowerCase();
    const nameWithoutExt = basename(filePath, ext);
    const dir = dirname(filePath);

    // Generate blur placeholder
    const blurTransformer = new Transformer(originalBuffer);
    blurTransformer.resize(BLUR_WIDTH);
    const blurBuffer = await blurTransformer.jpeg(60);
    const blurDataUrl = `data:image/jpeg;base64,${blurBuffer.toString("base64")}`;

    // Track which sizes we generate
    const generatedSizes: number[] = [];

    // Generate WebP and resized versions
    for (const width of SIZES) {
      if (width > originalWidth) continue; // Skip sizes larger than original

      // Generate WebP version
      const webpTransformer = new Transformer(originalBuffer);
      if (width < originalWidth) {
        webpTransformer.resize(width);
      }
      const webpBuffer = await webpTransformer.webp(WEBP_QUALITY);
      const webpPath = join(dir, `${nameWithoutExt}-${width}w.webp`);
      await writeFile(webpPath, webpBuffer);
      filesGenerated++;
      generatedSizes.push(width);

      // Generate optimized JPEG/PNG fallback at this size
      const fallbackTransformer = new Transformer(originalBuffer);
      if (width < originalWidth) {
        fallbackTransformer.resize(width);
      }
      let fallbackBuffer: Buffer;
      if (ext === ".png") {
        fallbackBuffer = await fallbackTransformer.png();
      } else {
        fallbackBuffer = await fallbackTransformer.jpeg(QUALITY);
      }
      const fallbackPath = join(dir, `${nameWithoutExt}-${width}w${ext}`);
      await writeFile(fallbackPath, fallbackBuffer);
      filesGenerated++;
    }

    // Compress original in-place
    if (originalSize >= MIN_SIZE) {
      const compressTransformer = new Transformer(originalBuffer);
      let output: Buffer;
      if (ext === ".png") {
        output = await compressTransformer.png();
      } else {
        output = await compressTransformer.jpeg(QUALITY);
      }
      if (output.length < originalSize * 0.95) {
        await writeFile(filePath, output);
        totalSaved = originalSize - output.length;
      }
    }

    // Also generate a WebP of the original size
    const originalWebpTransformer = new Transformer(originalBuffer);
    const originalWebpBuffer = await originalWebpTransformer.webp(WEBP_QUALITY);
    const originalWebpPath = join(dir, `${nameWithoutExt}.webp`);
    await writeFile(originalWebpPath, originalWebpBuffer);
    filesGenerated++;

    // Add to manifest
    manifest[relativePath] = {
      blur: blurDataUrl,
      sizes: generatedSizes,
      originalWidth,
      originalHeight,
    };
  } catch (error) {
    console.error(`  ✗ ${filePath}: ${error}`);
  }

  return { saved: totalSaved, generated: filesGenerated };
}

async function loadExistingManifest(): Promise<ImageManifest> {
  const manifestPath = "./public/image-manifest.json";
  try {
    if (existsSync(manifestPath)) {
      const content = await readFile(manifestPath, "utf-8");
      return JSON.parse(content);
    }
  } catch {
    // Ignore errors, return empty manifest
  }
  return {};
}

async function main() {
  if (!IS_CI) {
    console.log("⏭️  Skipping image optimization (not in CI)");
    console.log("   Run with CI=true to force optimization");
    return;
  }

  // Check for cached manifest
  const existingManifest = await loadExistingManifest();
  const cachedCount = Object.keys(existingManifest).length;

  if (cachedCount > 0) {
    console.log(`📦 Found cached manifest with ${cachedCount} images`);
  }

  console.log("🖼️  Optimizing images with @napi-rs/image...");
  console.log("   → Generating WebP versions");
  console.log("   → Creating responsive sizes (640, 960, 1280, 1920)");
  console.log("   → Generating blur placeholders\n");

  const files = await getImageFiles(SOURCE_DIR);
  const manifest: ImageManifest = { ...existingManifest };
  let totalSaved = 0;
  let totalGenerated = 0;
  let processed = 0;
  let skipped = 0;

  for (const file of files) {
    const relativePath = file.replace(/^(\.\/)?public/, "");

    // Skip if already in cache
    if (existingManifest[relativePath]) {
      skipped++;
      continue;
    }

    const { saved, generated } = await processImage(file, manifest);
    processed++;
    totalSaved += saved;
    totalGenerated += generated;
    const progress = `[${processed}/${files.length - skipped}]`;
    console.log(`  ✓ ${progress} ${file} (+${generated} variants)`);
  }

  // Write manifest
  const manifestPath = "./public/image-manifest.json";
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n📄 Generated ${manifestPath}`);

  if (skipped > 0) {
    console.log(`\n⏭️  Skipped ${skipped} cached images`);
  }
  console.log(`✅ Processed ${processed} new images`);
  console.log(`   → Generated ${totalGenerated} optimized variants`);
  console.log(`   → Saved ${(totalSaved / 1024 / 1024).toFixed(2)}MB from originals`);
}

main().catch(console.error);
