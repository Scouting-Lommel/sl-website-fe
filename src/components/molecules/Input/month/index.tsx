import { MonthInput as InputProps } from './types';
import styles from './month.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="monthLabel" htmlFor={uid}>
        {label}
        <input className="monthInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
