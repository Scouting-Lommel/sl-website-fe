export const GOOGLE_SHEETS_CONFIG = {
  // Column headers
  COLUMNS: {
    FIRST_NAME: 'Voornaam',
    LAST_NAME: 'Familienaam',
    BIRTHDAY: 'Geboortedatum',
    ADDRESS: 'Adres',
    POSTAL_CODE: 'Postcode',
    CITY: 'Plaats',
    TELEPHONE_NUMBER: 'Telefoonnummer',
    EMAIL: 'E-mail',
    GENDER: 'Geslacht',
    COMMENTS: 'Opmerkingen',
    WORKING_YEAR: 'Werkjaar',
    MEMBER_GROUP: 'Tak',
    TIMESTAMP: 'Timestamp',
  },

  // Sheet settings
  SHEET_NAME: 'Inschrijvingen',
  RANGE: 'A:M',

  // Data formatting
  DATE_FORMAT: 'YYYY-MM-DD',
  TIMESTAMP_FORMAT: 'ISO',
} as const;

// Column order for data insertion
export const COLUMN_ORDER = [
  'firstName',
  'lastName',
  'birthday',
  'memberGroup',
  'gender',
  'email',
  'telephoneNumber',
  'address',
  'postalCode',
  'city',
  'workingYear',
  'timestamp',
  'comments',
] as const;
