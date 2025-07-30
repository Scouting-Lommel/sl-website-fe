import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';

const organisationPermissions = {
  '/': [
    'dashboard',
    'groups',
    'manuals',
    'adminpanel',
    'groups:kapoenen',
    'groups:welpen',
    'groups:akabe',
    'groups:jonggivers',
    'groups:givers',
    'groups:jin',
    'playground',
  ],
  '/Leiding': [
    'dashboard',
    'groups',
    'manuals',
    'adminpanel',
    'groups:kapoenen',
    'groups:welpen',
    'groups:akabe',
    'groups:jonggivers',
    'groups:givers',
    'groups:jin',
  ],
  '/Leiding/Kapoenen': ['dashboard', 'groups', 'manuals', 'groups:kapoenen'],
  '/Leiding/Welpen': ['dashboard', 'groups', 'manuals', 'groups:welpen'],
  '/Leiding/Akabe': ['dashboard', 'groups', 'manuals', 'groups:akabe'],
  '/Leiding/Jonggivers': ['dashboard', 'groups', 'manuals', 'groups:jonggivers'],
  '/Leiding/Givers': ['dashboard', 'groups', 'manuals', 'groups:givers'],
  '/Leiding/Jin': ['dashboard', 'groups', 'manuals', 'groups:jin'],
  '/VZW': ['dashboard', 'manuals'],
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
