import type { StorybookConfig } from '@storybook/nextjs';
import { fixSvg } from './build/svgr';

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook',
  ],

  webpackFinal: async (config) => {
    await fixSvg(config);
    return config;
  },

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {},

  core: {
    disableTelemetry: true,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  managerHead: (head) => `
    ${head}
    ${'<meta name="robots" content="noindex nofollow">'}
  `,
};
export default config;
