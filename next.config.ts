import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yvwdq96zar5o004r.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "faces.site",
      },
    ],
  },
};

export default nextConfig;
