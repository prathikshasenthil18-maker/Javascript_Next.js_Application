/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Customer Version 18 (ES2022 / Node.js 18)
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
