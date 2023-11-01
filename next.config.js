/** @type {import('next').NextConfig} */
const nextConfig = {
  // runtime: 'edge', // for Edge API Routes only
  // You can specify a runtime for individual route segments in your Next.js application. 
  // mer her nederst: https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
  // v 5 examples: https://github.com/nextauthjs/next-auth/tree/feat/nextjs-auth/apps/examples/nextjs
  // next-auth@latest: https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/reference/nextjs#in-middleware  In Route Handlers

// install: npm install next-auth@5 @auth/core

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "d1j2lkoxx8uycr.cloudfront.net"],
  },
  experimental: {
    // serverActions: true,
    // useFormStatus: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
