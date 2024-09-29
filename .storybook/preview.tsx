import React from 'react';
import { themes } from '@storybook/theming';
import { SessionProvider } from 'next-auth/react';
import '../src/app/global.css';
import './storybook.css';

export const parameters = {
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
  },
  docs: {
    theme: themes.light,
  },
};

export const decorators = [
  (Story: React.FC) => (
    <SessionProvider>
      <Story />
    </SessionProvider>
  ),
];

export const loaders = [
  async () => ({
    fn:
      (name: string) =>
      (...args: any[]) =>
        console.log(`${name} called with`, ...args),
  }),
];
