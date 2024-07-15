import { getServerSession } from 'next-auth';
import { checkOrganisationPermission } from '@/lib/helpers/checkOrganisationPermission';
import { OrganisationRoles } from '@/lib/helpers/getOrganisationRole';
import BlockContainer from '@/components/atoms/BlockContainer';
import Button from '@/components/atoms/Button';
import Hero from '@/components/organisms/Hero';

const Groups = async () => {
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
      <BlockContainer slug="groups-title">
        <Hero title="Takken" subtitle="Takpagina's beheren" variant="simple" />
      </BlockContainer>

      <BlockContainer slug="groups">
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:kapoenen') && (
            <div>
              <h3>Kapoenen</h3>
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:welpen') && (
            <div>
              <h3>Welpen</h3>
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:akabe') && (
            <div>
              <h3>Akabe</h3>
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:jonggivers') && (
            <div>
              <h3>Jonggivers</h3>
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:givers') && (
            <div>
              <h3>Givers</h3>
            </div>
          )}
        {orgUnitData &&
          orgUnitData.orgUnitPath &&
          checkOrganisationPermission(orgUnitData.orgUnitPath, 'groups:jin') && (
            <div>
              <h3>Jin</h3>
            </div>
          )}
      </BlockContainer>
    </div>
  );
};

export default Groups;
