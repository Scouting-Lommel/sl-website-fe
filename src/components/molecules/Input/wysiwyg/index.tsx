import { WYSIWYGInput as InputProps } from './types';
import styles from './wysiwyg.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label htmlFor={uid}>
        {label}
        <input type={type} id={uid} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
