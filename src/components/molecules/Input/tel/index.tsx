import { TelInput as InputProps } from './types';
import styles from './tel.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="telLabel" htmlFor={uid}>
        {label}
        <input className="telInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
