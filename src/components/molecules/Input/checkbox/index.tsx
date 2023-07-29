import { CheckboxInput as InputProps } from './types';
import styles from './checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const checkboxInput = ({ ID, type, required, options }: Props) => {
  return (
    <>
      <label className="checkboxLabel" htmlFor={ID}>
        <input className="checkboxInput" type={type} id={ID} name={ID} required={required} />
        {options}
      </label>
    </>
  );
};

export default checkboxInput;
