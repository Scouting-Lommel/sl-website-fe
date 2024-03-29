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
      {activities.map((act, i) => {
        if (isOpen || i < initialItems) {
          return (
            <Activity
              key={i}
              title={activities[i].attributes.title}
              startDate={activities[i].attributes.startDate}
              startTime={activities[i].attributes.startTime}
              endDate={activities[i].attributes.endDate}
              endTime={activities[i].attributes.endTime}
              description={activities[i].attributes.description}
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
          ></Button>
        </div>
      )}
      {isOpen && (
        <div className="actButton">
          <Button
            label="Toon eerste activiteiten"
            variant="primary"
            onClick={() => setIsOpen(false)}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default Activities;
