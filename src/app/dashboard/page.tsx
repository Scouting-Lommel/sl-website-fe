import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';
import BlockContainer from '@/components/atoms/BlockContainer';
import Button from '@/components/atoms/Button';
import Hero from '@/components/organisms/Hero';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dashboard',
  };
}

const DashboardPage = async (): Promise<JSX.Element> => {
  const session = await getServerSession();
  let orgUnitData: { orgUnitPath?: OrganisationRoles } | null = null;

  const t = await getTranslations('dashboard.dashboard');

  if (session && session.user) {
    const orgUnitResponse = await fetch(
      `${process.env.SITE_URL}/api/auth/get-org-unit?email=${session.user.email}`,
    );
    orgUnitData = await orgUnitResponse.json();
  }

  return (
    <div className="sl-layout">
      <BlockContainer slug="dashboard-title">
        <Hero
          title={t('title')}
          subtitle={t('subtitle', { name: session?.user?.name })}
          variant="simple"
        />
      </BlockContainer>

      <BlockContainer slug="dashboard-internal-navigation">
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups') && (
            <BlockContainer slug="dashboard-groups" style={{ paddingTop: 0 }}>
              <h2>{t('manageGroups.title')}</h2>
              <p>{t('manageGroups.subtitle')}</p>
              <ul>
                <li>{t('manageGroups.manageActivities')}</li>
                <li>{t('manageGroups.manageFiles')}</li>
              </ul>
              <Button label={t('manageGroups.button.label')} href="/dashboard/takken" />
            </BlockContainer>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'manuals') && (
            <BlockContainer slug="dashboard-manuals">
              <h2>{t('manuals.title')}</h2>
              <p>{t('manuals.subtitle')}</p>
              <ul>
                <li>{t('manuals.internalManuals')}</li>
                <li>{t('manuals.publicManuals')}</li>
              </ul>
              <Button label={t('manuals.button.label')} href="/handleidingen" />
            </BlockContainer>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'adminpanel') && (
            <BlockContainer slug="dashboard-manuals">
              <h2>{t('adminPanel.title')}</h2>
              <p>{t('adminPanel.subtitle')}</p>
              <Button
                label={t('adminPanel.button.label')}
                href="https://admin.scoutinglommel.be/admin"
                target="_blank"
              />
            </BlockContainer>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          !checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups') && (
            <div>
              <p>{t('notFound')}</p>
            </div>
          )}
      </BlockContainer>
    </div>
  );
};

export default DashboardPage;
