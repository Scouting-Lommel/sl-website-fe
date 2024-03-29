const putToDB = async (date: { startDate: string; endDate: string; id: number }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/api/bookings`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CALENDAR_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        start: date.startDate,
        end: date.endDate,
        rental_location: date.id ? date.id : 1,
      },
    }),
  });

  const responseBody = await response.json();

  if (responseBody.errors) {
    throw new Error(responseBody.errors);
  }
  return responseBody.data;
};

const removeFromDB = async (date: { startDate: string; endDate: string; id: number }) => {
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
    throw new Error(responseBody.errors);
  }
  return responseBody.data;
};

export { putToDB, removeFromDB };
