module.exports = {
  plugins: {
    '@csstools/postcss-global-data': { files: ['src/assets/styles/settings/media-queries.pcss'] },
    'postcss-custom-media': {
      preserve: true,
    },
    'postcss-import': {},
    'postcss-nested': {},
    cssnano: {},
    'postcss-preset-env': {
      insertAfter: {
        cssnano: {
          preset: 'default',
        },
      },
      insertBefore: {
        'postcss-import': {},
        'postcss-nested': {},
      },
      features: {
        'custom-properties': {},
      },
    },
  },
};
