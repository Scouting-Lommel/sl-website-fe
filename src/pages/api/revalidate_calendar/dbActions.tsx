const putToDB = async (date: { StartDate: string; EndDate: string; id: number }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/api/bookings`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CALENDAR_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        start: date.StartDate,
        end: date.EndDate,
        rental_location: date.id ? date.id : 1,
      },
    }),
  });

  const responseBody = await response.json();

  if (responseBody.errors) {
    console.error(responseBody.errors);
    throw new Error('Failed to fetch API');
  }
  return responseBody.data;
};

const removeFromDB = async (date: { StartDate: string; EndDate: string; id: number }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/api/bookings/${date.id}`,
    {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${process.env.CALENDAR_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  );
  const responseBody = await response.json();
  if (responseBody.errors) {
    console.error(responseBody.errors);
    throw new Error('Failed to fetch API');
  }
  return responseBody.data;
};

export { putToDB, removeFromDB };
