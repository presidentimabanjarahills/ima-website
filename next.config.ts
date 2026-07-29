import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ima-india.org',
        port: '',
        pathname: '/ima/images/**',
      },
    ],
  },
};

export default nextConfig;
