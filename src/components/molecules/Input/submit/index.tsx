import { SubmitInput as InputProps } from './types';
import styles from './submit.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const submitInput = ({ label, type, uid, redirect, ...options }: Props) => {
  return (
    <div className="submitContainer">
      <input className="submitInput" type={type} id={uid} value={label} {...options} />
    </div>
  );
};

export default submitInput;
