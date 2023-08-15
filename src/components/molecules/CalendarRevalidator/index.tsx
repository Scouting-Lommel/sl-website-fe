'use client';

import { useEffect, useState } from 'react';

const CalendarRevalidator = () => {
  const [currState, setState] = useState('loading'); // loading | success | error-message

  const handleRevalidate = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const response = await fetch(`/api/revalidate_calendar`, options);

    if (response.status == 200) setState('success');
    else setState('an error occured');
  };

  useEffect(() => {
    handleRevalidate();
  });

  return (
    <div className="sl-layout">
      {currState === 'loading' && <div className="revalidator">Loading...</div>}
      {currState === 'success' && <div className="revalidator">Success!</div>}
      {currState != 'loading' && currState != 'success' && (
        <div className="revalidator">{currState}</div>
      )}
    </div>
  );
};

export default CalendarRevalidator;
