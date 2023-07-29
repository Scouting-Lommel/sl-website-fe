import { TimeInput as InputProps } from './types';
import styles from './time.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label className="timeLabel" htmlFor={uid}>
        {label}
        <input className="timeInput" type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
