import { DateTimeInput as InputProps } from './types';
import styles from './datetime-local.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, required, uid, ...options }: Props) => {
  return (
    <>
      <label className="datetimeLabel" htmlFor={uid}>
        {label}
        <input className="datetimeInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
