/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/6nxn4b7uf9q1/**', // ✅ your actual Contentful space ID
      },
    ],
  },
};

module.exports = nextConfig;
