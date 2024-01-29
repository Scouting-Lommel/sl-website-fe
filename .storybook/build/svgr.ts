export const fixSvg = async (config) => {
  // remove svg loader from webpack appConfig and use Storybook's svg loader instead
  config.module.rules = config.module.rules.filter(({ test }) => !test?.test('.svg'));

  // add chill SVG config
  config.module.rules.unshift({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          replaceAttrValues: {
            '#FFF': 'currentColor',
            '#000': 'currentColor',
            '#FFFFFF': 'currentColor',
            '#000000': 'currentColor',
          }, // allows for color to be passed
          titleProp: true,
          svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] }, // need viewBox for responsive
        },
      },
    ],
  });
};
