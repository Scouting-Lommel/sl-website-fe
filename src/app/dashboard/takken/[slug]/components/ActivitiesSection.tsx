'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';
import Form from '@/components/organisms/Forms';
import SectionTitle from './SectionTitle';
import { getActivities } from '../api';

type Props = {
  group: any;
};

const ActivitiesSection = ({ group }: Props) => {
  const [groupActivities, setActivities] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchActivities = useCallback(async () => {
    setError(false);
    setLoading(true);

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    const { activities } = await getActivities(group.attributes.slug, dateString);

    if (!activities) {
      setError(true);
      setLoading(false);
      return;
    }

    setActivities(activities.data);
    setLoading(false);
  }, [group]);

  useEffect(() => {
    if (group) {
      fetchActivities();
    }
  }, [group, fetchActivities]);

  return (
    <BlockContainer slug="group-activity">
      <SectionTitle title="Activiteiten" groupId={group.id} type={'activity'} />
      {error && !loading && <p>Er ging iets mis. Probeer het later nog eens.</p>}
      {!error && loading && <Loader size="sm" modLabelVisible />}
      {!error && !loading && groupActivities?.length === 0 && <p>Geen activiteiten gevonden.</p>}
      {!error &&
        !loading &&
        groupActivities?.length > 0 &&
        groupActivities?.map((activity: any, key: any) => (
          <Fragment key={`activity-${key}`}>
            <Form
              variant="activity"
              props={{
                activity: { ...activity.attributes, id: activity.id },
                callback: fetchActivities,
              }}
              blockProperties={{ slug: `activity-${activity.id}`, modSmallPadding: true }}
            />
            {key + 1 < groupActivities?.length && <hr />}
          </Fragment>
        ))}
    </BlockContainer>
  );
};

export default ActivitiesSection;
