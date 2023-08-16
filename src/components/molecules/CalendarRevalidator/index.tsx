'use client';

import { useEffect, useState } from 'react';
import styles from './CalendarRevalidator.css';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const CalendarRevalidator = () => {
  const [currState, setState] = useState(<Loader />);
  const [isHandling, setHandling] = useState(false);

  const handleRevalidate = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const response = await fetch(`/api/revalidate_calendar`, options);

    const result = await response.json();

    if (response.status == 200) setState(<>success: {result.data}</>);
    else setState(<>an error occured: {result.data}</>);
  };

  useEffect(() => {
    if (!isHandling) {
      setHandling(true);
      handleRevalidate();
    }
  });

  return (
    <div className="sl-layout">
      <BlockContainer variant="dark" orientation="default" slug="calendarRevalidator">
        <h2 className="revalidator">{currState}</h2>
      </BlockContainer>
    </div>
  );
};

export default CalendarRevalidator;
