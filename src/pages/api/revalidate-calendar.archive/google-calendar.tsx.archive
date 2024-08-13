import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

async function getGoogleCalendarEvents(): Promise<
  { startDate: string; endDate: string; id: number }[]
> {
  // Create a JWT client using the service account key
  const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_CALENDAR_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/calendar'],
  );

  // Authenticate the JWT client
  await jwtClient.authorize();

  // Use the Calendar API to retrieve events
  const calendar = google.calendar({ version: 'v3', auth: jwtClient });
  const response = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    maxResults: 1000,
    singleEvents: true,
    orderBy: 'updated',
  });

  let dataItems: { startDate: string; endDate: string; id: number }[] = [];

  for (const event of response.data.items!) {
    if (!event.start?.date || !event.end?.date) {
      const start = new Date(event.start?.dateTime!);
      const startyear = start.getFullYear();
      const startmonth = (start.getMonth() + 1).toString().padStart(2, '0');
      const startday = start.getDate().toString().padStart(2, '0');
      const startdateString = startyear + '-' + startmonth + '-' + startday;
      const end = new Date(event.end?.dateTime!);
      const endyear = end.getFullYear();
      const endmonth = (end.getMonth() + 1).toString().padStart(2, '0');
      const endday = end.getDate().toString().padStart(2, '0');
      const enddateString = endyear + '-' + endmonth + '-' + endday;
      dataItems.push({
        startDate: startdateString,
        endDate: enddateString,
        id: event.summary?.includes('weide') ? 2 : 1, // weide id = 2, lokaal = 1
      });
    } else {
      dataItems.push({
        startDate: event.start.date,
        endDate: event.end.date,
        id: event.summary?.includes('weide') ? 2 : 1,
      });
    }
  }

  return dataItems;
}

export { getGoogleCalendarEvents };
