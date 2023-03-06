export const getUrl = (locale, defaultLocale, path = '', slug = '', absolute = true) => {
  if (!locale) {
    throw new Error('Variable "locale" should be defined.');
  }

  if (!defaultLocale) {
    throw new Error('Variable "defaultLocale" should be defined.');
  }

  let url = '';

  if (absolute) {
    url = getSiteUrl();
  }

  if (locale !== defaultLocale) {
    url += `/${locale}`;
  }

  if (path && path !== '' && path !== '/') {
    url += `/${path}`;
  }

  if (slug && slug instanceof Array && slug.length > 0 && (slug.length !== 1 || slug[0] !== '')) {
    url += `/${slug.join('/')}`;
  }

  if (slug && typeof slug === 'string' && slug !== '') {
    url += `/${slug}`;
  }

  return url;
};

export const getSiteUrl = () => {
  let url;

  if (typeof window !== 'undefined') {
    // Env variable "SITE_URL" is not defined, you are probably using this on the clientside, falling back to protocol + hostname
    url = `${window.location.protocol}//${window.location.hostname}`;
  } else {
    if (!process.env.SITE_URL) {
      // eslint-disable-next-line no-console
      console.warn('No environment-variable SITE_URL');
    } else {
      url = process.env.SITE_URL;
    }
  }

  return url;
};
