/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/portfolio-demo',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
