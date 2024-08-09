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

export const getOrganisationRole = (orgUnit: OrganisationRoles) => {
  return organisationRoles[orgUnit];
};
