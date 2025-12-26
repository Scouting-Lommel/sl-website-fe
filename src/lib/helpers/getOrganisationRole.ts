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

const validOrgUnitPaths: OrganisationRoles[] = Object.keys(
  organisationRoles,
) as OrganisationRoles[];

/**
 * Type guard to check if a value is a valid OrganisationRoles.
 *
 * @param path - The value to check.
 * @returns `true` if the value is a valid OrganisationRoles, otherwise `false`.
 */
function isValidOrgUnitPath(path: unknown): path is OrganisationRoles {
  return typeof path === 'string' && validOrgUnitPaths.includes(path as OrganisationRoles);
}

/**
 * Retrieves the role of an organization unit.
 *
 * @param orgUnit - The organization unit whose role is to be retrieved.
 * @returns The role associated with the specified organization unit.
 */
const getOrganisationRole = (orgUnit: OrganisationRoles) => {
  return organisationRoles[orgUnit];
};

export { getOrganisationRole, isValidOrgUnitPath };
