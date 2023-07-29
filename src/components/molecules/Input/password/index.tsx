import { PasswordInput as InputProps } from './types';
import styles from './password.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="passwordLabel" htmlFor={uid}>
        {label}
        <input className="passwordInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
