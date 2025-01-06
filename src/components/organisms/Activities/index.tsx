'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { getActivities } from '@/app/takken/[slug]/api';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Activity from '@/components/atoms/Activity';
import Button from '@/components/atoms/Button';
import { ActivitySection as ActivityProps } from './types';
import styles from './Activities.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Activities = ({ groupSlug, initialItems }: ActivityProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupActivities, setActivities] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const t = useTranslations('common');

  const fetchActivities = useCallback(async () => {
    setActivities(null);
    setError(false);
    setLoading(true);

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    const { activities } = await getActivities(groupSlug, dateString);

    if (!activities) {
      setError(true);
      setLoading(false);
      return;
    }

    setActivities(activities.data);
    setLoading(false);
  }, [groupSlug]);

  useEffect(() => {
    if (groupSlug) {
      fetchActivities();
    }
  }, [groupSlug, fetchActivities]);

  return (
    <div className="activities">
      {groupActivities && groupActivities.length > 0 && (
        <>
          {groupActivities.map((act: any, i: number) => {
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
          {!isOpen && initialItems < groupActivities.length && (
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

      {groupActivities && groupActivities.length === 0 && <p>{t('noActivitiesFound')}</p>}

      {!groupActivities && loading && <p>{t('loading')}</p>}

      {!groupActivities && error && <p>{t('fetchActivitiesError')}</p>}
    </div>
  );
};

export default Activities;
