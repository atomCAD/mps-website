import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static exports for the App Router.
  // @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: "export",

  // Set base path. This is the slug of the GitHub repository.
  // @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  basePath: isProduction ? "/mps-website" : "",

  // Disable server-based image optimization.
  // Next.js does not support dynamic features with static exports.
  // @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
