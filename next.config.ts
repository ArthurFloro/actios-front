import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gkpb.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sismf.museudofutebol.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.spaceappschallenge.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.folhape.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jundiai.sp.gov.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s1.static.brasilescola.uol.com.br",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "discovery-next.svc.sympla.com.br",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
