/**
 * Generates structured data in JSON-LD format for an organization.
 *
 * @param data - The input data containing information about the organization.
 * @returns An object representing the structured data in JSON-LD format.
 *
 * @remarks
 * The function returns an object with the following properties:
 * - `@context`: The schema.org context URL.
 * - `@type`: The type of the entity, which is "Organization".
 * - `@id`: The URL of the organization.
 * - `name`: The name of the organization.
 * - `email`: The email address of the organization.
 * - `logo`: The URL of the organization's logo.
 * - `image`: The URL of the organization's image.
 * - `description`: A description of the organization.
 * - `url`: The URL of the organization.
 * - `foundingDate`: The founding date of the organization.
 * - `address`: An object representing the postal address of the organization.
 * - `parentOrganization`: An object representing the parent organization.
 */
const generateStructuredData = (data: any) => {
  if (!data) return {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': data.url,
    name: data.siteName,
    email: 'info@scoutinglommel.be',
    logo: data.logo?.data?.attributes?.url,
    image: data.image?.data?.attributes?.url,
    description: data.siteDescription,
    url: data.url,
    foundingDate: '1958-11-18',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nieuwe Kopen 4',
      addressLocality: 'Lommel',
      postalCode: '3920',
      addressCountry: 'BE',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Scouts & Gidsen Vlaanderen',
      url: 'https://www.scoutsengidsenvlaanderen.be',
    },
  };
};

export { generateStructuredData };
