import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://linktr.ee/durjam",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
