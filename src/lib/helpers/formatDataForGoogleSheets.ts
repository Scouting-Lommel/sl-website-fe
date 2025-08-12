import { RegisterFormData } from '@/lib/services/google-sheets';

export function formatDataForGoogleSheets(data: any): RegisterFormData {
  return {
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    birthday: data.birthday ? new Date(data.birthday).toISOString().split('T')[0] : '',
    address: data.address || '',
    postalCode: data.postalCode || '',
    city: data.city || '',
    telephoneNumber: data.telephoneNumber || '',
    email: data.email || '',
    gender: data.gender || '',
    comments: data.comments || '',
    workingYear: data.workingYear || '',
    memberGroup: data.memberGroup || '',
    timestamp: new Date()
      .toLocaleString('nl-BE', { timeZone: 'Europe/Brussels' })
      .replace('T', ' '),
  };
}

export function validateGoogleSheetsData(data: RegisterFormData): boolean {
  const requiredFields = ['firstName', 'lastName', 'email', 'gender'];

  return requiredFields.every((field) => {
    const value = data[field as keyof RegisterFormData];
    return value !== undefined && value !== null && value !== '';
  });
}
