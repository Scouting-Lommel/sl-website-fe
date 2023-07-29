import { RangeInput as InputProps } from './types';
import styles from './range.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="rangeLabel" htmlFor={ID}>
        {label}
        <input className="rangeInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
