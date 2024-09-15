/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.solidbackgrounds.com",
      },
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
      },
      {
        protocol: "https",
        hostname: "hyperdigital.in",
      },
    ],
  },
};

export default nextConfig;
