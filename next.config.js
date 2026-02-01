/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // PWA ve metadata için optimizasyonlar
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
