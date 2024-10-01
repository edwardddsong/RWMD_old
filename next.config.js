const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Disable TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,  // 忽略 TypeScript 错误
  },

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint 错误
  },

  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);