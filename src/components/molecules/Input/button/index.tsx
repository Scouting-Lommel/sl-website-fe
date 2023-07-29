import { ButtonInput as InputProps } from './types';
import styles from './button.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const buttonInput = ({ uid, type, label, ...options }: Props) => {
  return <input className="buttonInput" type={type} id={uid} value={label} {...options} />;
};

export default buttonInput;
