import { google } from 'googleapis';
import { GOOGLE_SHEETS_CONFIG, COLUMN_ORDER } from '@/lib/config/google-sheets-config';

// Initialize Google Sheets API client
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  postalCode: string;
  city: string;
  telephoneNumber: string;
  email: string;
  gender: 'm' | 'v' | 'x';
  comments: string;
  workingYear: string;
  memberGroup?: string;
  timestamp: string;
}

export async function appendToGoogleSheet(data: RegisterFormData): Promise<void> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheets spreadsheet ID not configured');
    }

    // Convert data to array format for Google Sheets using the column order
    const values = [
      COLUMN_ORDER.map((key) => {
        const value = data[key];
        if (key === 'gender') {
          return value === 'm' ? 'M' : value === 'v' ? 'V' : 'X';
        }
        return value || '';
      }),
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${GOOGLE_SHEETS_CONFIG.SHEET_NAME}!${GOOGLE_SHEETS_CONFIG.RANGE}`,
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    throw error;
  }
}

export async function getSheetData(): Promise<any[]> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheets spreadsheet ID not configured');
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${GOOGLE_SHEETS_CONFIG.SHEET_NAME}!${GOOGLE_SHEETS_CONFIG.RANGE}`,
    });

    return response.data.values || [];
  } catch (error) {
    console.error('Error getting sheet data:', error);
    throw error;
  }
}

export async function createSheetHeaders(): Promise<void> {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheets spreadsheet ID not configured');
    }

    // Create headers row
    const headers = Object.values(GOOGLE_SHEETS_CONFIG.COLUMNS);

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${GOOGLE_SHEETS_CONFIG.SHEET_NAME}!A1:${String.fromCharCode(65 + headers.length - 1)}1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [headers],
      },
    });
  } catch (error) {
    console.error('Error creating sheet headers:', error);
    throw error;
  }
}
