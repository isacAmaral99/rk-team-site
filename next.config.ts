/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'], // adicione outros domínios de imagens se necessário
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Isso ajuda a resolver problemas com o routes-manifest
  output: 'standalone',
}

module.exports = nextConfig