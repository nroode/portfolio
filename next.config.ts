import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2160, 3840],
  },
};

export default nextConfig;
