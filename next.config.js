/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  assetPrefix: '/portfolio-demo',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
