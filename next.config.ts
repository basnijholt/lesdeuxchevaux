import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lesdeuxchevaux",
  assetPrefix: "/lesdeuxchevaux",
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ["next-image-export-optimizer"],
  trailingSlash: true,
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/uploads",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
};

export default nextConfig;
