import { Form as FormProps } from './types';
import Input from '@/components/molecules/Input';
import styles from './Form.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormProps & React.HTMLAttributes<HTMLElement>;

const Form = ({ redirect, action, inputs }: Props) => {
  return (
    <form action={action} target="_blank" method="POST" className="form">
      {inputs.map((input, key) => {
        return <Input key={key} redirect={redirect} {...input} />;
      })}
    </form>
  );
};

export default Form;
