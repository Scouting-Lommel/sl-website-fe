import React from 'react';
import { themes } from '@storybook/theming';
import { SessionProvider } from 'next-auth/react';
import Withi18n from './i18n';

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
    <Withi18n>
      <SessionProvider>
        <Story />
      </SessionProvider>
    </Withi18n>
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
export const tags = ['autodocs'];
