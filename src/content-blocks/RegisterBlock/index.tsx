import BlockContainer from '@/components/atoms/BlockContainer';
import Register from '@/components/organisms/RegisterForm';
import { RegisterBlock as RegisterBlockProps } from './types';

type Props = RegisterBlockProps & React.HTMLAttributes<HTMLElement>;

const RegisterBlock = (props: Props) => {
  return (
    <BlockContainer variant="light" orientation="default" slug="register" modSmallPadding>
      <Register {...props} />
    </BlockContainer>
  );
};

export default RegisterBlock;
