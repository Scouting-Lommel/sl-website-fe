const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@/atoms': path.resolve(__dirname, '../src/components/atoms'),
    '@/molecules': path.resolve(__dirname, '../src/components/molecules'),
    '@/organisms': path.resolve(__dirname, '../src/components/organisms'),
    '@': path.resolve(__dirname, '../src/'),
  };

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
