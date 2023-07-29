import { EmailInput as InputProps } from './types';
import styles from './email.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="emailLabel" htmlFor={ID}>
        {label}
        <input className="emailInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
