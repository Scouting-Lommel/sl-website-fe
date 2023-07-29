import { SubmitInput as InputProps } from './types';
import NextLink from 'next/link';
import styles from './submit.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const submitInput = ({ label, type, ID, redirect, ...options }: Props) => {
  return (
    <NextLink className="submitContainer" href={redirect}>
      <input className="submitInput" type={type} id={ID} value={label} {...options} />
    </NextLink>
  );
};

export default submitInput;
