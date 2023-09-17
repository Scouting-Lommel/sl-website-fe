import BlockContainer from '@/components/atoms/BlockContainer';
import Register from '@/components/organisms/Register';
import HeroBlock from '../HeroBlock';

const RegisterBlock = () => {
  return (
    <>
      <HeroBlock
        title="Inschrijven"
        subtitle="Schrijf je in voor het nieuwe scoutsjaar"
        variant="default"
      />
      <BlockContainer variant="light" orientation="default" slug="Register">
        <Register />
      </BlockContainer>
    </>
  );
};

export default RegisterBlock;
