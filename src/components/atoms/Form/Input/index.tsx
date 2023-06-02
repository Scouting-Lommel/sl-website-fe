import { Input as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const Input = ({ id, name, label, type, value, placeholder }: Props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} placeholder={placeholder} />
    </>
  );
};

export default Input;
