import { ColorInput as InputProps } from './types';
import styles from './color.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, required, ID, ...options }: Props) => {
  return (
    <>
      <label className="colorLabel" htmlFor={ID}>
        {label}
        <input className="colorInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
