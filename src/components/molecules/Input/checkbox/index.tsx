import { CheckboxInput as InputProps } from './types';
import styles from './checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const checkboxInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label className="checkboxLabel" htmlFor={title}>
        <input
          className="checkboxInput"
          type={type}
          id={title}
          name={options}
          value={options}
          required={required}
        />
        {options}
      </label>
    </>
  );
};

export default checkboxInput;
