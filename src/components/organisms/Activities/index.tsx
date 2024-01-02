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

const Activities = ({ activities, initialItems, session }: Props) => {
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
        {session &&
        <Modal
          button={
            <div className="activities__button">
              <Button label="Maak activiteit" variant="primary"></Button>
            </div>
          }
          modalData={<CreateActivity tak="testtak" />}
        />}
      </div>
    </div>
  );
};

export default Activities;
