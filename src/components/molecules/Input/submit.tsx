import { Input as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const submitInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  if (!redirect) return null;
  return options.map((option: string) => {
    return (
      <input
        type={type}
        id={title}
        value={placeholder}
        {...options}
        onClick={() => {
          window.location.href = redirect;
        }}
      />
    );
  });
};

export default submitInput;
