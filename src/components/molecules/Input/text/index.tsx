import { TextInput as InputProps } from './types';
import styles from './text.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="textLabel" htmlFor={uid}>
        {label}
        <input
          className="textInput"
          type={type}
          id={uid}
          name={uid}
          {...options}
          required={required}
        />
      </label>
    </>
  );
};

export default textInput;
