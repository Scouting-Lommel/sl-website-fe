'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Activity from '@/components/atoms/Activity';
import Button from '@/components/atoms/Button';
import { ActivitySection as ActivityProps } from './types';
import styles from './Activities.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Activities = ({ activities, initialItems }: ActivityProps): JSX.Element => {
  const t = useTranslations('common');

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
      {activities.length === 0 && <p>{t('noActivitiesFound')}</p>}
    </div>
  );
};

export default Activities;
