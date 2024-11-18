import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';

const organisationPermissions = {
  '/': [
    'dashboard',
    'groups',
    'groups:kapoenen',
    'groups:welpen',
    'groups:akabe',
    'groups:jonggivers',
    'groups:givers',
    'groups:jin',
  ],
  '/Leiding': [
    'dashboard',
    'groups',
    'groups:kapoenen',
    'groups:welpen',
    'groups:akabe',
    'groups:jonggivers',
    'groups:givers',
    'groups:jin',
  ],
  '/Leiding/Kapoenen': ['dashboard', 'groups', 'groups:kapoenen'],
  '/Leiding/Welpen': ['dashboard', 'groups', 'groups:welpen'],
  '/Leiding/Akabe': ['dashboard', 'groups', 'groups:akabe'],
  '/Leiding/Jonggivers': ['dashboard', 'groups', 'groups:jonggivers'],
  '/Leiding/Givers': ['dashboard', 'groups', 'groups:givers'],
  '/Leiding/Jin': ['dashboard', 'groups', 'groups:jin'],
  '/VZW': ['dashboard'],
};

/**
 * Checks if a given organisation unit has a specific permission.
 *
 * @param orgUnit - The organisation unit whose permissions are being checked.
 * @param permission - The permission to check for within the organisation unit.
 * @returns `true` if the organisation unit has the specified permission, otherwise `false`.
 */
const checkOrganisationPermission = (orgUnit: OrganisationRoles, permission: string) => {
  return organisationPermissions[orgUnit].includes(permission);
};

export { organisationPermissions, checkOrganisationPermission };
