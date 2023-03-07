// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

const nextTranslate = require('next-translate');
const { locales, defaultLocale } = require('./src/locales');

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: locales,
    defaultLocale: defaultLocale,
    localeDetection: false,
  },
  webpack: (config) => {
    // GQL loader
    config.module.rules.push({
      test: /\.g(raph)?ql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    // SVGR loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [{ source: '/home', destination: '/', permanent: true }];
  },
});

module.exports = withSentryConfig(module.exports, { silent: true }, { hideSourcemaps: true });
