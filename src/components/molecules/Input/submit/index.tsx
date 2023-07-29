import { SubmitInput as InputProps } from './types';
import NextLink from 'next/link';
import styles from './submit.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const submitInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  if (!redirect) return null;

  return (
    <NextLink className="submitContainer" href={redirect}>
      <input className="submitInput" type={type} id={title} value={placeholder} {...options} />
    </NextLink>
  );
};

export default submitInput;
