import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], // Allow images from fakestoreapi.com
  },
};

export default nextConfig;
// In Next.js, the next/image component is used to optimize images. 
// Next.js performs several optimizations on the images, including resizing, lazy loading, and serving images in modern formats (like WebP) to improve performance. However, Next.js needs to know where it is allowed to fetch and optimize images from.

// By default, Next.js only allows images from 
// local sources (i.e., images stored inside your project’s public folder). 
// This is for security and performance reasons, as allowing external image sources 
// without restriction could lead to misuse or unnecessary bandwidth usage.

// The Problem:
// In your case, you’re trying to load images from an 
// external URL (fakestoreapi.com). When Next.js sees that you're
//  trying to use the next/image component with an external 
// image source, it checks its configuration to ensure it’s a trusted source.
//  Since fakestoreapi.com isn't included in the allowed domains list, Next.js throws an error.
