import { Input as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const checkboxInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      <input type={type} id={title} name={options} value={options} required={required} />{' '}
      <label htmlFor={title}>{options}</label>
    </>
  );
};

export default checkboxInput;
