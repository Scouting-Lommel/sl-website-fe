import React from 'react';
import '../src/app/global.css';
import './storybook.css';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
    },
    theme,
  },
};

export const decorators = [(Story) => <Story />];
