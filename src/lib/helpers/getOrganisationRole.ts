const organisationRoles = {
  '/': 'webmaster',
  '/Leiding': 'groepsleiding',
  '/Leiding/Kapoenen': 'kapoenenleiding',
  '/Leiding/Welpen': 'welpenleiding',
  '/Leiding/Akabe': 'akabeleiding',
  '/Leiding/Jonggivers': 'jonggiverleiding',
  '/Leiding/Givers': 'giverleiding',
  '/Leiding/Jin': 'jinleiding',
  '/VZW': 'vzw-lid',
};

export type OrganisationRoles = keyof typeof organisationRoles;

/**
 * Retrieves the role of an organization unit.
 *
 * @param orgUnit - The organization unit whose role is to be retrieved.
 * @returns The role associated with the specified organization unit.
 */
const getOrganisationRole = (orgUnit: OrganisationRoles) => {
  return organisationRoles[orgUnit];
};

export { getOrganisationRole };
