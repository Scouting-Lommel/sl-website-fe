import { SubmitInput as InputProps } from './types';
import NextLink from 'next/link';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const submitInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  if (!redirect) return null;

  return (
    <NextLink href={redirect}>
      <input type={type} id={title} value={placeholder} {...options} />
    </NextLink>
  );
};

export default submitInput;
