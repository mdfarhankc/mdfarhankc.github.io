import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  typedRoutes: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
