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

export const getOrganisationRole = (orgUnit: keyof typeof organisationRoles) => {
  return organisationRoles[orgUnit];
};
