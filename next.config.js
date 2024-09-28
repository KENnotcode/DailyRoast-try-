/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['iili.io', 'fake-coffee-api.vercel.app'], // Add all necessary domains here
  },
};

module.exports = nextConfig;
