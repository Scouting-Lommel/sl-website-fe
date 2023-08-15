import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

async function getGoogleCalendarEvents() : Promise<{StartDate: string, EndDate: string}[]> {
  // Create a JWT client using the service account key
  const jwtClient = new google.auth.JWT(
    process.env.google_calendar_client_email,
    undefined,
    process.env.google_calendar_private_key,
    ['https://www.googleapis.com/auth/calendar']
  );

  // Authenticate the JWT client
  await jwtClient.authorize();

  // Use the Calendar API to retrieve events
  const calendar = google.calendar({version: 'v3', auth: jwtClient});
  const response = await calendar.events.list({
    calendarId: process.env.google_calendar_ID,
    maxResults: 1000,
    singleEvents: true,
    orderBy: 'updated',
  });
  
  let dataItems : {StartDate: string, EndDate: string}[] = [];
  for(const event of response.data.items!){
    if(!event.start?.date || !event.end?.date){
      const start = new Date(event.start?.dateTime!);
      const syear = start.getFullYear();
      const smonth = (start.getMonth() + 1).toString().padStart(2, "0");
      const sday = start.getDate().toString().padStart(2, "0");
      const sdateString = syear + "-" + smonth + "-" + sday;
      const end = new Date(event.end?.dateTime!);
      const eyear = end.getFullYear();
      const emonth = (end.getMonth() + 1).toString().padStart(2, "0");
      const eday = end.getDate().toString().padStart(2, "0");
      const edateString = eyear + "-" + emonth + "-" + eday;
      dataItems.push({StartDate: sdateString, EndDate:edateString})
    }else{
      dataItems.push({StartDate: event.start.date, EndDate:event.end.date})
    }
  }

  return dataItems;
}

export { getGoogleCalendarEvents }