import BlockContainer from '@/components/atoms/BlockContainer';
import { FormBlock as FormBlockProps } from './types';
import Form from '@/components/organisms/Form';

type Props = FormBlockProps & React.HTMLAttributes<HTMLElement>;

const FormBlock = ({
  redirect,
  action,
  inputs,
  variant,
  orientation,
  modSmallPadding,
  modMargin,
}: Props) => {
  return (
    <BlockContainer
      variant={variant ? variant : 'light'}
      orientation={orientation ? orientation : 'default'}
      slug="form"
      modSmallPadding={modSmallPadding}
      modMargin={modMargin}
    >
      <Form redirect={redirect} action={action} inputs={inputs} />
    </BlockContainer>
  );
};

export default FormBlock;
