/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['iili.io', 'fake-coffee-api.vercel.app', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
