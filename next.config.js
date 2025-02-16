/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // Set this to your GitHub repo name
  images: {
    unoptimized: true, // Required for Next.js image support on GitHub Pages
  },
};

module.exports = nextConfig;
