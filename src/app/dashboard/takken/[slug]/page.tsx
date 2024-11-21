import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import ActivitiesSection from './components/ActivitiesSection';
import FileSection from './components/FilesSection';
import { getGroupPage } from './api';

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'Takpagina beheren • Dashboard',
  };
};

const DashboardGroupPage = async ({ params: { slug } }: Props): Promise<JSX.Element> => {
  const { groups } = await getGroupPage(slug);
  const group = groups.data[0];

  if (!group) notFound();

  const t = await getTranslations('dashboard.groupsDetail');

  return (
    <div className="sl-layout">
      <BlockContainer slug="group-hero">
        <Hero title={group.attributes.pageTitle} subtitle={t('subtitle')} variant="simple" />
      </BlockContainer>

      <FileSection group={group} />
      <ActivitiesSection group={group} />
    </div>
  );
};

export default DashboardGroupPage;
