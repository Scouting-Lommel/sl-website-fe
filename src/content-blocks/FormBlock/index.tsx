import BlockContainer from '@/components/atoms/BlockContainer';
import { FormBlock as FormBlockProps } from './types';
import Form from '@/components/organisms/Form';

type Props = FormBlockProps & React.HTMLAttributes<HTMLElement>;

const FormBlock = ({
    redirect, 
    action,
    inputs,
} : Props) => {
return (
    <BlockContainer
      variant='light'
      orientation="default"
      slug="form"
    >
      <Form
        redirect={redirect}
        action={action}
        inputs={inputs}
      />
    </BlockContainer>
    );
}

export default FormBlock;