import { ButtonInput as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const buttonInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return <input type={type} id={title} value={placeholder} required={required} {...options} />;
};

export default buttonInput;
