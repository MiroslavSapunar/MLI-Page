import { WIDTHS } from './src/imageLoader.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.mjs',
    deviceSizes: WIDTHS,
    imageSizes: [],
  },
};

export default nextConfig;
