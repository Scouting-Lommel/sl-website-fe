'use client';

import { useState } from 'react';
import { ActivitySection as ActivityProps } from './types';
import Activity from '@/components/atoms/Activity';
import styles from './Activities.css';
import Button from '@/components/atoms/Button';
import Modal from '@/components/molecules/Modal';
import CreateActivity from '@/components/molecules/CreateActivity';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ActivityProps & React.HTMLAttributes<HTMLElement>;

const Activities = ({ activities, initialItems, session, tak }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="activities">
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
              session={session}
              uid={act.id}
            />
          );
        }
      })}
      <div className="activities__button_container">
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
          <div className="activities__button">
            <Button
              label="Toon eerste activiteiten"
              variant="primary"
              onClick={() => setIsOpen(false)}
            ></Button>
          </div>
        )}
        {session && (
          <Modal
            button={
              <div className="activities__button">
                <Button label="Maak activiteit" variant="primary"></Button>
              </div>
            }
            modalData={<CreateActivity tak={tak} session={session} />}
          />
        )}
      </div>
    </div>
  );
};

export default Activities;
