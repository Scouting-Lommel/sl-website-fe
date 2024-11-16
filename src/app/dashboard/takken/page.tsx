import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';
import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import Button from '@/components/atoms/Button';

type Group = {
  title: string;
  slug: string;
  permission: string;
};

const allGroups: Group[] = [
  { title: 'Kapoenen', slug: 'kapoenen', permission: 'groups:kapoenen' },
  { title: 'Welpen', slug: 'welpen', permission: 'groups:welpen' },
  { title: 'Akabe', slug: 'akabe', permission: 'groups:akabe' },
  { title: 'Jonggivers', slug: 'jonggivers', permission: 'groups:jonggivers' },
  { title: 'Givers', slug: 'givers', permission: 'groups:givers' },
  { title: 'Jin', slug: 'jin', permission: 'groups:jin' },
];

export async function generateMetadata() {
  return {
    title: 'Takken • Dashboard',
  };
}

const DashboardGroupsOverviewPage = async () => {
  const session = await getServerSession();
  let orgUnitData: { orgUnitPath?: OrganisationRoles } | null = null;

  const t = await getTranslations('dashboard.groupsOverview');

  if (session && session.user) {
    const orgUnitResponse = await fetch(
      `${process.env.SITE_URL}/api/auth/get-org-unit?email=${session.user.email}`,
    );
    orgUnitData = await orgUnitResponse.json();
  }

  const availableGroups = allGroups
    .map((group) => {
      if (
        orgUnitData &&
        orgUnitData.orgUnitPath &&
        checkOrganisationPermission(orgUnitData.orgUnitPath, group.permission)
      )
        return group;
    })
    .filter((group) => group);

  return (
    <div className="sl-layout">
      <BlockContainer slug="groups-title">
        <Hero title={t('title')} subtitle={t('subtitle')} variant="simple" />
      </BlockContainer>

      {availableGroups.map((group: any, key: any) => {
        return (
          <BlockContainer key={key} slug={`groups-${group.slug}`}>
            <Button href={`/dashboard/takken/${group.slug}`}>
              {t('groupButton.label', { group: group.title })}
            </Button>
          </BlockContainer>
        );
      })}
    </div>
  );
};

export default DashboardGroupsOverviewPage;
