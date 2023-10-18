import { Request, Response } from 'express';
import { getGoogleCalendarEvents } from './google-calendar';
import { getStrapiCalendarEvents } from './strapi-calendar';
import { putToDB, removeFromDB } from './database-actions';

export default async function handler(req: Request, res: Response): Promise<unknown> {
  try {
    // fetch all data from the googlce calendar
    const googleCalendarData = await getGoogleCalendarEvents();
    // const googleCalendarData: { StartDate: string; EndDate: string; id: number }[] = []; // uncomment this and comment the line above to remove all entries from db

    // fetch all data from the database
    const { bookings } = await getStrapiCalendarEvents();
    let databaseCalendarData: { id: number; startDate: string; endDate: string }[] = [];
    for (const dbDate of bookings.data) {
      databaseCalendarData.push({
        id: dbDate.id,
        startDate: dbDate.attributes.start,
        endDate: dbDate.attributes.end,
      });
    }

    // add all data from google that are not in the database, TODO find a way to match google to correct rental location
    for (let i = 0; i < googleCalendarData.length; i++) {
      const gDate = googleCalendarData[i];
      if (!isInCalendar(gDate, databaseCalendarData)) putToDB(gDate);
    }

    // // remove all dates from database that are not in google
    for (let i = 0; i < databaseCalendarData.length; i++) {
      const dbDate = databaseCalendarData[i];
      if (!isInCalendar(dbDate, googleCalendarData)) removeFromDB(dbDate);
    }

    // send back positive responseputToDB
    res.status(200).json({ data: 'Revalidated calendar succesfully' });
    return;
  } catch (e) {
    // send back negative response
    console.error(e);
    res.status(400).json({ data: e });
    return;
  }
}

function isInCalendar(
  date: {
    startDate: string;
    endDate: string;
    id: number;
  },
  calendarDates: {
    startDate: string;
    endDate: string;
    id: number;
  }[],
) {
  for (const cDate of calendarDates) {
    if (cDate.startDate == date.startDate && cDate.endDate == date.endDate) {
      return true;
    }
  }
  return false;
}
