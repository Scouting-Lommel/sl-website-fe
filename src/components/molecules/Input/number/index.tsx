import { NumberInput as InputProps } from './types';
import styles from './number.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="numberLabel" htmlFor={uid}>
        {label}
        <input className="numberInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
