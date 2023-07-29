import { TextInput as InputProps } from './types';
import styles from './text.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label className="textLabel" htmlFor={ID}>
        {label}
        <input className="textInput" type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
