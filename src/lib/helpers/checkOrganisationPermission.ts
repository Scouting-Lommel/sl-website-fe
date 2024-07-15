import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';

export const organisationPermissions = {
  '/': ['dashboard', 'groups', 'groups:all'],
  '/Leiding': ['dashboard', 'groups', 'groups:all'],
  '/Leiding/Kapoenen': ['dashboard', 'groups', 'groups:kapoenen'],
  '/Leiding/Welpen': ['dashboard', 'groups', 'groups:welpen'],
  '/Leiding/Akabe': ['dashboard', 'groups', 'groups:akabe'],
  '/Leiding/Jonggivers': ['dashboard', 'groups', 'groups:jonggivers'],
  '/Leiding/Givers': ['dashboard', 'groups', 'groups:givers'],
  '/Leiding/Jin': ['dashboard', 'groups', 'groups:jin'],
  '/VZW': ['dashboard'],
};

export const checkOrganisationPermission = (orgUnit: OrganisationRoles, permission: string) => {
  return organisationPermissions[orgUnit].includes(permission);
};
