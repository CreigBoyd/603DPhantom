/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Replace 'your-repo-name' with your actual GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/603DPhantom' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/603DPhantom/' : '',
};

export default nextConfig;