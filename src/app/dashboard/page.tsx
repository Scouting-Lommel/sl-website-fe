import { getServerSession } from 'next-auth';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';
import BlockContainer from '@/components/atoms/BlockContainer';
import Button from '@/components/atoms/Button';
import Hero from '@/components/organisms/Hero';

const Dashboard = async () => {
  const session = await getServerSession();
  let orgUnitData: { orgUnitPath?: OrganisationRoles } | null = null;

  if (session && session.user) {
    const orgUnitResponse = await fetch(
      `${process.env.SITE_URL}/api/auth/get-org-unit?email=${session.user.email}`,
    );
    orgUnitData = await orgUnitResponse.json();
  }

  return (
    <div className="sl-layout">
      <BlockContainer slug="dashboard-title">
        <Hero title="Dashboard" subtitle="Interne navigatie" variant="simple" />
      </BlockContainer>

      <BlockContainer slug="dashboard-internal-navigation">
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups') && (
            <div>
              <h2>Takpagina&apos;s</h2>
              <p>Beheer de takpagina&apos;:</p>
              <ul>
                <li>Activiteiten toevoegen, aanpassen en verwijderen</li>
                <li>Bestanden en links toevoegen en verwijderen</li>
              </ul>
              <Button label="Naar takpagina beheren" href="/dashboard/takpagina" />
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          !checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups') && (
            <div>
              <p>Geen toegang tot beschikbare dashboard items.</p>
            </div>
          )}
      </BlockContainer>
    </div>
  );
};

export default Dashboard;
