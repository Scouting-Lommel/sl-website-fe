import React from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { NAMESPACES, defaultLocale } from '../src/i18n/locales';

export const metadata = {
  title: {
    default: 'Goed',
    template: '%s',
  },
};

type Props = {
  children: React.ReactNode;
};

const Withi18n = ({ children }: Props) => {
  const messages: { [key: string]: any } = {};

  try {
    for (const ns in NAMESPACES) {
      if (NAMESPACES.hasOwnProperty(ns)) {
        messages[NAMESPACES[ns]] = require(`../locales/nl/${NAMESPACES[ns]}.json`);
      }
    }
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={defaultLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Withi18n;
