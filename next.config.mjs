import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  transpilePackages: ['lucide-react'],
  reactStrictMode: true,
  distDir: '.next',
  images: {
    domains: ['res.cloudinary.com'],
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
};

export default withNextIntl(nextConfig);
