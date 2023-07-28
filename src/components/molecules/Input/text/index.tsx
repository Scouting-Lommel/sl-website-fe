import { TextInput as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <br />
      <input type={type} id={title} value={placeholder} required={required} {...options} />
    </>
  );
};

export default textInput;
