import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "development" ? "" : "/petitemimi-atelier-G";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: process.env.NODE_ENV !== "development",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
