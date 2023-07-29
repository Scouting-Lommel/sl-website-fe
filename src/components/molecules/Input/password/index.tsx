import { PasswordInput as InputProps } from './types';
import styles from './password.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="passwordLabel" htmlFor={ID}>
        {label}
        <input className="passwordInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
