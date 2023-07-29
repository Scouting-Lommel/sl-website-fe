import { EmailInput as InputProps } from './types';
import styles from './email.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="emailLabel" htmlFor={uid}>
        {label}
        <input className="emailInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
