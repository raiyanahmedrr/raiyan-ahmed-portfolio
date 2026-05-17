/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This tells Vercel to ignore all TypeScript errors and just build the site
    ignoreBuildErrors: true,
  },
  eslint: {
    // This tells Vercel to ignore all Linting warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
