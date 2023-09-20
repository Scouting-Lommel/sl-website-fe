import BlockContainer from '@/components/atoms/BlockContainer';
import Register from '@/components/organisms/RegisterForm';
import HeroBlock from '../HeroBlock';
import { RegisterBlock as RegisterBlockProps } from './types';

type Props = RegisterBlockProps & React.HTMLAttributes<HTMLElement>;

const RegisterBlock = (props: Props) => {
  return (
    <>
      <HeroBlock
        title="Inschrijven"
        subtitle="Schrijf je in voor het nieuwe scoutsjaar"
        variant="default"
      />
      <BlockContainer variant="light" orientation="default" slug="Register">
        <Register {...props} />
      </BlockContainer>
    </>
  );
};

export default RegisterBlock;
