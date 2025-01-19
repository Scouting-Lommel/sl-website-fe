'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { getActivities } from '@/lib/api/activities/api';
import { getEvents } from '@/lib/api/events/api';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Activity from '@/components/atoms/Activity';
import Button from '@/components/atoms/Button';
import Link from '@/components/atoms/Link';
import Loader from '@/components/atoms/Loader';
import { ActivitySection as ActivityProps } from './types';
import styles from './Activities.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Activities = ({ variant, groupSlug, initialItems }: ActivityProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupActivities, setActivities] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
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

    if (!groupSlug) {
      setLoading(false);
      setError(true);
      return;
    }

    try {
      const { activities } = await getActivities(groupSlug, dateString);

      if (!activities) {
        setError(true);
        setLoading(false);
        return;
      }

      setActivities(activities.data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      return;
    }
  }, [groupSlug]);

  const fetchEvents = useCallback(async () => {
    setActivities(null);
    setError(false);
    setLoading(true);

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    try {
      const { events } = await getEvents(dateString);

      if (!events) {
        setError(true);
        setLoading(false);
        return;
      }

      setActivities(events.data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      return;
    }
  }, []);

  const fetchData = useCallback(async () => {
    switch (variant) {
      case 'activities':
        fetchActivities();
        break;
      case 'events':
        fetchEvents();
        break;
      default:
        break;
    }
  }, [fetchActivities, fetchEvents, variant]);

  useEffect(() => {
    fetchData();
  }, [variant, fetchData]);

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
                label={variant === 'activities' ? t('showMoreActivities') : t('showMoreEvents')}
                variant="primary"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}
          {isOpen && (
            <div className="activities__button">
              <Button
                label={variant === 'activities' ? t('showLessActivities') : t('showLessEvents')}
                variant="primary"
                onClick={() => setIsOpen(false)}
              />
            </div>
          )}
        </>
      )}

      {groupActivities && groupActivities.length === 0 && (
        <p className="t-align-center">
          {variant === 'activities' ? t('noActivitiesFound') : t('noEventsFound')}
        </p>
      )}

      {!groupActivities && loading && (
        <Loader className="activities__loader" size="sm" modLabelVisible />
      )}

      {!groupActivities && error && (
        <>
          <p className="t-align-center">
            {variant === 'activities' ? t('fetchActivitiesError') : t('fetchEventsError')}
          </p>
          <div className="activities__try-again">
            <Link className="activities__try-again__btn" variant="link3" onClick={fetchData}>
              {t('tryAgain')}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
