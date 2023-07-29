import { NumberInput as InputProps } from './types';
import styles from './number.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="numberLabel" htmlFor={ID}>
        {label}
        <input className="numberInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
