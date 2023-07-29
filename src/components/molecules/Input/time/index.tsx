import { TimeInput as InputProps } from './types';
import styles from './time.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label className="timeLabel" htmlFor={title}>
        {title}
        <input
          className="timeInput"
          type={type}
          id={title}
          value={placeholder}
          required={required}
          {...options}
        />
      </label>
    </>
  );
};

export default textInput;
