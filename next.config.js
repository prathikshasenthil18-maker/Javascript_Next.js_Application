/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 16 (ES2021 / Node.js 16)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
