import { ButtonInput as InputProps } from './types';
import styles from './button.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const buttonInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <input
      className="buttonInput"
      type={type}
      id={title}
      value={placeholder}
      required={required}
      {...options}
    />
  );
};

export default buttonInput;
