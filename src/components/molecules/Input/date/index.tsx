import { DateInput as InputProps } from './types';
import styles from './date.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="dateLabel" htmlFor={ID}>
        {label}
        <input className="dateInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
