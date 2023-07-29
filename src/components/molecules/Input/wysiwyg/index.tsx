import { WYSIWYGInput as InputProps } from './types';

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
