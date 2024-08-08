'use client';

import { useState } from 'react';
import { ActivitySection as ActivityProps } from './types';
import Activity from '@/components/atoms/Activity';
import styles from './Activities.css';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ActivityProps & React.HTMLAttributes<HTMLElement>;

const Activities = ({ activities, initialItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="activities">
      {activities.length > 0 && (
        <>
          {activities.map((act, i) => {
            if (isOpen || i < initialItems) {
              return (
                <Activity
                  key={i}
                  title={act.attributes.title}
                  startDate={act.attributes.startDate}
                  startTime={act.attributes.startTime}
                  endDate={act.attributes.endDate}
                  endTime={act.attributes.endTime}
                  description={act.attributes.description}
                />
              );
            }
          })}
          {!isOpen && initialItems < activities.length && (
            <div className="activities__button">
              <Button
                label="Toon alle activiteiten"
                variant="primary"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}
          {isOpen && (
            <div className="activities__button">
              <Button
                label="Toon minder activiteiten"
                variant="primary"
                onClick={() => setIsOpen(false)}
              />
            </div>
          )}
        </>
      )}
      {activities.length === 0 && <p>Geen activiteiten gevonden.</p>}
    </div>
  );
};

export default Activities;
