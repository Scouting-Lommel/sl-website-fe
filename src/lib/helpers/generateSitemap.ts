/**
 * Generates a sitemap array based on the provided sitemap data.
 *
 * @param {any} sitemapData - The data used to generate the sitemap. It should contain the following properties:
 *   - homePage: Object containing data and attributes for the home page.
 *   - groupsPage: Object containing data and attributes for the groups page.
 *   - groups: Array of objects containing data and attributes for individual group pages.
 *   - rentalPage: Object containing data and attributes for the rental page.
 *   - rentalLocations: Array of objects containing data and attributes for individual rental location pages.
 *   - infoPage: Object containing data and attributes for the info page.
 *   - registerPage: Object containing data and attributes for the register page.
 *   - contactPage: Object containing data and attributes for the contact page.
 *   - articlesPage: Object containing data and attributes for the articles page.
 *   - drugsAlcoholPolicyPage: Object containing data and attributes for the drugs and alcohol policy page.
 *   - privacyPolicyPage: Object containing data and attributes for the privacy policy page.
 *
 * @returns {Array<Object>} An array of objects representing the sitemap. Each object contains:
 *   - url: The URL of the page.
 *   - lastModified: The last modified date of the page.
 */
const generateSitemap = (sitemapData: any): Array<object> => {
  const {
    homePage,
    groupsPage,
    groups,
    rentalPage,
    rentalLocations,
    infoPage,
    registerPage,
    contactPage,
    articlesPage,
    drugsAlcoholPolicyPage,
    privacyPolicyPage,
  } = sitemapData;

  const out = [];

  // Home page
  let page = homePage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Groups page
  page = groupsPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Groups pages
  groups?.data?.forEach(({ attributes }: { attributes: any }) => {
    if (attributes && !attributes.pageMeta?.noIndex) {
      const pageObject = {
        url: `${process.env.SITE_URL}/takken/${attributes.slug}`,
        lastModified: attributes.updatedAt,
      };
      out.push(pageObject);
    }
  });

  // Rental page
  page = rentalPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Rental location pages
  rentalLocations?.data?.forEach(({ attributes }: { attributes: any }) => {
    if (attributes && !attributes.pageMeta?.noIndex) {
      const pageObject = {
        url: `${process.env.SITE_URL}/verhuur/${attributes.slug}`,
        lastModified: attributes.updatedAt,
      };
      out.push(pageObject);
    }
  });

  // Info page
  page = infoPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Register page
  page = registerPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Contact page
  page = contactPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Articles page
  page = articlesPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Drugs and alcohol policy page
  page = drugsAlcoholPolicyPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  // Privacy policy page
  page = privacyPolicyPage?.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      url: `${process.env.SITE_URL}/${page.pageMeta.slug}`,
      lastModified: page.updatedAt,
    };
    out.push(pageObject);
  }

  return out;
};

export default generateSitemap;
