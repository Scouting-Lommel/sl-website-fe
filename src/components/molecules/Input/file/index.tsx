import { FileInput as InputProps } from './types';
import styles from './file.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label className="fileLabel" htmlFor={title}>
        {title}
        <input
          className="fileInput"
          type={type}
          id={title}
          value={placeholder}
          required={required}
          {...options}
        />
      </label>
    </>
  );
};

export default textInput;
