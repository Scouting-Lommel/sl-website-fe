import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, NAMESPACES } from './locales';

export default getRequestConfig(async () => {
  const messages: { [key: string]: any } = {};
  const locale = defaultLocale;

  if (NAMESPACES.includes(locale)) return { locale, messages: {} };

  for (const ns in NAMESPACES) {
    messages[NAMESPACES[ns]] = (
      await import(`../../locales/${locale}/${NAMESPACES[ns]}.json`)
    ).default;
  }

  return { locale, messages };
});
