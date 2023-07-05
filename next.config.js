/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arweave.net",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  // eslint: {
  //   ignoreDuringBuilds: process.env.CI === "false",
  // },
  // typescript: {
  //   ignoreBuildErrors: process.env.CI === "false",
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
