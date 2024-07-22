import { notFound } from 'next/navigation';
import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import ActivitiesSection from './components/ActivitiesSection';
import { getGroupPage } from './api';

export async function generateMetadata() {
  return { title: 'Takpagina beheren • Dashboard' };
}

const DashboardGroupPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];

  if (!group) notFound();

  return (
    <div className="sl-layout">
      <BlockContainer slug="group-hero">
        <Hero title={group.attributes.pageTitle} subtitle="Takpagina beheren" variant="simple" />
      </BlockContainer>

      <ActivitiesSection group={group} />
    </div>
  );
};

export default DashboardGroupPage;
