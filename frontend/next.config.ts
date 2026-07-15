import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/:path*/`,
      },
      {
        source: '/api/hr/:path*',
        destination: 'http://localhost:3001/api/hr/:path*',
      },
      {
        source: '/api/training/:path*',
        destination: 'http://localhost:3001/api/training/:path*',
      },
      {
        source: '/survey/:path*',
        destination: 'http://localhost:3001/survey/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:3001/uploads/:path*',
      }
    ];
  },
};

export default nextConfig;
