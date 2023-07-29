import { DateTimeInput as InputProps } from './types';
import styles from './datetime-local.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, required, ID, ...options }: Props) => {
  return (
    <>
      <label className="datetimeLabel" htmlFor={ID}>
        {label}
        <input className="datetimeInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
