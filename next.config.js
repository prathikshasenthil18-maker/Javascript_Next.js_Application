/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 14 (ES2020 / Node.js 14)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
