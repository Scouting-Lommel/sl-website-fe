import { WYSIWYGInput as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, ID, required, ...options }: Props) => {
  return (
    <>
      <label htmlFor={ID}>
        {label}
        <input type={type} id={ID} required={required} {...options} />
      </label>
    </>
  );
};

export default textInput;
