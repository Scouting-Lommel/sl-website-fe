import BlockContainer from '@/components/atoms/BlockContainer';
import { FormBlock as FormBlockProps } from './types';
import dynamic from 'next/dynamic';
import Loader from '@/components/atoms/Loader';

type Props = FormBlockProps & React.HTMLAttributes<HTMLElement>;

const DynamicForm = dynamic(() => import('@/components/organisms/Form'), {
  ssr: false,
  loading: () => (
    <div className="formLoader">
      <Loader />
    </div>
  ),
});

const FormBlock = ({
  redirect,
  action,
  inputs,
  formVariant,
  formOrientation,
  formSmallPadding,
  formMargin,
  formattedResponseMessage,
}: Props) => {
  return (
    <BlockContainer
      variant={formVariant ? formVariant : 'light'}
      orientation={formOrientation ? formOrientation : 'default'}
      slug="form"
      modSmallPadding={formSmallPadding}
      modMargin={formMargin}
    >
      <DynamicForm
        redirect={redirect}
        action={action}
        inputs={inputs}
        formattedResponseMessage={formattedResponseMessage}
        className="sl-layout"
      />
    </BlockContainer>
  );
};

export default FormBlock;
