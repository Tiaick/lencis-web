import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lencis.de",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
