import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "global-services-corporation.github.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
