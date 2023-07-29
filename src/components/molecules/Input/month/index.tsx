import { MonthInput as InputProps } from './types';
import styles from './month.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="monthLabel" htmlFor={ID}>
        {label}
        <input className="monthInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
