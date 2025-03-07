import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/link",
        destination: "https://linktr.ee/durjam",
        permanent: false,
      },
      {
        source: "/sponsor",
        destination: "https://drive.google.com/file/d/1MSkVKuZ1VIUbRjib5zWSvRZEzUO8Zrfs",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
