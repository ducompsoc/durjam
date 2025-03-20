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
        destination: "https://drive.google.com/file/d/1dkC5kIDCT_AXOTUbF05n5IPCsqDDFbBh",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
