import type { StorybookConfig } from '@storybook/nextjs';
import { fixSvg } from './build/svgr';

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    await fixSvg(config);
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;

// TODO: Webpack svg setup
