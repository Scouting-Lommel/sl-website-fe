import { ColorInput as InputProps } from './types';
import styles from './color.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, required, uid, ...options }: Props) => {
  return (
    <>
      <label className="colorLabel" htmlFor={uid}>
        {label}
        <input className="colorInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
