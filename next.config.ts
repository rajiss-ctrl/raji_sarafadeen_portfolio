import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary domain
      // Add other domains if needed
    ],
    // Optional: For more advanced configurations
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  // Other Next.js configuration options...
};

export default nextConfig;