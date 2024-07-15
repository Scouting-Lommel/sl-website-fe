import Activity from '@/components/atoms/Activity';
import { getActivities } from './api';

type Props = {
  title: string;
  slug: string;
};

const GroupSection = async ({ title, slug }: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const { activities } = await getActivities(slug, `${year}-${month}-${day}`);

  // console.log(activities);
  activities.data.forEach((activity: any) => {
    console.log(activity.attributes);
  });

  return (
    <>
      <h2>{title}</h2>
      <h3>Activiteiten</h3>
      <div>
        {activities.data.map((activity: any, key: any) => {
          return <Activity key={key} {...activity.attributes} />;
        })}
      </div>
      <h3>Bestanden</h3>
    </>
  );
};

export default GroupSection;
