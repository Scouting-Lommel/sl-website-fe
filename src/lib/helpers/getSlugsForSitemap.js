const getSlugsForSitemap = (sitemapData) => {
  const {
    homePage,
    groupsPage,
    rentalPage,
    infoPage,
    registerPage,
    contactPage,
    articlesPage,
    drugsAlcoholPolicyPage,
    privacyPolicyPage,
    groups,
    rentalLocations,
  } = sitemapData;

  const out = [];

  // Home page
  let page = homePage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Groups page
  page = groupsPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Rental page
  page = rentalPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Info page
  page = infoPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Register page
  page = registerPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Contact page
  page = contactPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Articles page
  page = articlesPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Drugs and alcohol policy page
  page = drugsAlcoholPolicyPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Privacy policy page
  page = privacyPolicyPage.data?.attributes;

  if (page && !page.pageMeta?.noIndex) {
    const pageObject = {
      lastMod: page.updatedAt,
      path: '/',
      slug: page.pageMeta.slug,
    };
    out.push(pageObject);
  }

  // Groups pages
  groups.data?.forEach(({ attributes }) => {
    if (attributes && !attributes.pageMeta?.noIndex) {
      const pageObject = {
        lastMod: attributes.updatedAt,
        path: 'takken',
        slug: attributes.slug,
      };
      out.push(pageObject);
    }
  });

  // Rental location pages
  rentalLocations.data?.forEach(({ attributes }) => {
    if (attributes && !attributes.pageMeta?.noIndex) {
      const pageObject = {
        lastMod: attributes.updatedAt,
        path: 'verhuur',
        slug: attributes.slug,
      };
      out.push(pageObject);
    }
  });

  return out;
};

export default getSlugsForSitemap;
