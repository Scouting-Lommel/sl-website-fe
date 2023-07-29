import { CheckboxInput as InputProps } from './types';
import styles from './checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const checkboxInput = ({ uid, type, required, options }: Props) => {
  return (
    <>
      <label className="checkboxLabel" htmlFor={uid}>
        <input className="checkboxInput" type={type} id={uid} name={uid} required={required} />
        {options}
      </label>
    </>
  );
};

export default checkboxInput;
