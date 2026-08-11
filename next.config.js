/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 21 (ES2023+ / Node.js 21)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
