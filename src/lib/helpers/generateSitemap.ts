const generateSitemap = (sitemapData: any) => {
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
