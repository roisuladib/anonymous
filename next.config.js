import NextBundleAnalyzer from '@next/bundle-analyzer';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import env from './src/env.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({ enabled: env.ANALYZE });

export default withBundleAnalyzer(nextConfig);
