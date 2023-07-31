import BlockContainer from '@/components/atoms/BlockContainer';
import { FormBlock as FormBlockProps } from './types';
import Form from '@/components/organisms/Form';

type Props = FormBlockProps & React.HTMLAttributes<HTMLElement>;

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
      <Form
        redirect={redirect}
        action={action}
        inputs={inputs}
        formattedResponseMessage={formattedResponseMessage}
      />
    </BlockContainer>
  );
};

export default FormBlock;
