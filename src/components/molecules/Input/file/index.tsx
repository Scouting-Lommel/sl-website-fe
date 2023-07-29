import { FileInput as InputProps } from './types';
import styles from './file.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="fileLabel" htmlFor={uid}>
        {label}
        <input className="fileInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
