/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.codeopx.com'], 
  },
  transpilePackages: ['@mantine/core', '@mantine/hooks'],
}

module.exports = nextConfig