/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.BACKEND_HOSTNAME,
        port: process.env.BACKEND_PORT,
      },
    ],
  },
};

export default nextConfig;
