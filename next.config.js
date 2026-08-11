/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 24 (ES2024+ / Node.js 24)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
