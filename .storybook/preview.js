import I18nProvider from 'next-translate/I18nProvider';
import common from '../src/locales/nl/common.json';

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
  },
};

export const decorators = [
  (Story) => (
    <I18nProvider lang="nl" namespaces={{ common }}>
      <Story />
    </I18nProvider>
  ),
];
