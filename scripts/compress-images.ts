import { Transformer } from "@napi-rs/image";
import { readdir, stat, readFile, writeFile, mkdir, copyFile } from "fs/promises";
import { join, extname, relative } from "path";
import { existsSync } from "fs";

const SOURCE_DIR = "./public/uploads";
const OUTPUT_DIR = "./public/uploads"; // In CI, we compress in-place since it's ephemeral
const QUALITY = 80;
const MIN_SIZE = 100 * 1024; // 100KB
const MAX_WIDTH = 1920;

// Skip if not in CI (to preserve local originals)
const IS_CI = process.env.CI === "true";

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

async function compressImage(filePath: string): Promise<number> {
  const originalBuffer = await readFile(filePath);
  const originalSize = originalBuffer.length;

  // Skip small files
  if (originalSize < MIN_SIZE) {
    return 0;
  }

  try {
    const transformer = new Transformer(originalBuffer);
    const metadata = await transformer.metadata();

    // Resize if too wide
    if (metadata.width && metadata.width > MAX_WIDTH) {
      transformer.resize(MAX_WIDTH);
    }

    const ext = extname(filePath).toLowerCase();
    let output: Buffer;

    if (ext === ".png") {
      output = await transformer.png();
    } else {
      output = await transformer.jpeg(QUALITY);
    }

    // Only save if we reduced size by at least 5%
    if (output.length < originalSize * 0.95) {
      await writeFile(filePath, output);
      return originalSize - output.length;
    }
  } catch (error) {
    console.error(`  ✗ ${filePath}: ${error}`);
  }

  return 0;
}

async function main() {
  if (!IS_CI) {
    console.log("⏭️  Skipping image compression (not in CI)");
    console.log("   Run with CI=true to force compression");
    return;
  }

  console.log("🖼️  Compressing images with @napi-rs/image...");

  const files = await getImageFiles(SOURCE_DIR);
  let totalSaved = 0;
  let compressed = 0;

  for (const file of files) {
    const saved = await compressImage(file);
    if (saved > 0) {
      totalSaved += saved;
      compressed++;
      console.log(`  ✓ ${file} (saved ${(saved / 1024).toFixed(1)}KB)`);
    }
  }

  if (compressed > 0) {
    console.log(`\n✅ Compressed ${compressed} images, saved ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  } else {
    console.log("\n✅ All images already optimized");
  }
}

main().catch(console.error);
