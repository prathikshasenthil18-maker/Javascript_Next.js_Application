/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 26 (ES2026 target / Node.js 26)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
