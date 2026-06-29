import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['10.192.121.222'],
  async redirects() {
    return [
      {
        source: '/portfolio%20website',
        destination: '/portfolio-website',
        permanent: true,
      },
      {
        source: '/portfolio website',
        destination: '/portfolio-website',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
