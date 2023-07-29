import { FileInput as InputProps } from './types';
import styles from './file.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="fileLabel" htmlFor={ID}>
        {label}
        <input className="fileInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
