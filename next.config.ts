import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,   // to skip ESLint on Vercel
  },
  typescript: {
    ignoreBuildErrors: true,    // skip TS type-checking on Vercel
  },
};

export default nextConfig;
