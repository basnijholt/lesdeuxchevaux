import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lesdeuxchevaux",
  assetPrefix: "/lesdeuxchevaux",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
