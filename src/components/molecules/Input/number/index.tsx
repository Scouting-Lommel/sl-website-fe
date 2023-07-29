import { NumberInput as InputProps } from './types';
import styles from './number.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label className="numberLabel" htmlFor={title}>
        {title}
        <input
          className="numberInput"
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
