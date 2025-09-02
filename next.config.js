/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig