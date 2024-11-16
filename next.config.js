/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  experimental: {
    // Enable if you're using the App Router
    appDir: true,
  },
  // This helps with the routes-manifest error
  generateBuildId: async () => {
    return 'build-id'
  }
}

module.exports = nextConfig