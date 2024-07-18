import { notFound } from 'next/navigation';
import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import Form from '@/components/organisms/Forms';
import { getActivities, getGroupPage } from './api';

export async function generateMetadata() {
  return { title: 'Takpagina beheren • Dashboard' };
}

const DashboardGroupPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];

  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = year + '-' + month + '-' + day;

  const { activities } = await getActivities(slug, dateString);

  if (!group) notFound();

  return (
    <div className="sl-layout">
      <BlockContainer slug="group-hero">
        <Hero title={group.attributes.pageTitle} subtitle="Takpagina beheren" variant="simple" />
      </BlockContainer>

      <BlockContainer slug="group-activity">
        <h2>Activiteiten</h2>
        {activities?.data.map((activity: any, key: any) => (
          <>
            <Form
              key={key}
              variant="activity"
              props={{ activity: { ...activity.attributes, id: activity.id } }}
              blockProperties={{ slug: 'activity', modSmallPadding: true }}
            />
            {key + 1 < activities?.data.length && <hr />}
          </>
        ))}
      </BlockContainer>
    </div>
  );
};

export default DashboardGroupPage;
