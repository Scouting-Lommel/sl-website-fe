module.exports = {
  plugins: {
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
        'custom-properties': {
          disableDeprecationNotice: true,
        },
      },
      importFrom: [
        'src/assets/styles/settings/media-queries.pcss',
        'src/assets/styles/global.pcss',
      ],
    },
  },
};
