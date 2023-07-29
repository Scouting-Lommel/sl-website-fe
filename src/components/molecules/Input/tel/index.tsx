import { TelInput as InputProps } from './types';
import styles from './tel.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="telLabel" htmlFor={ID}>
        {label}
        <input className="telInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
