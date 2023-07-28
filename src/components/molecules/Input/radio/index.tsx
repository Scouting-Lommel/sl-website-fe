import { RadioInput as InputProps } from './types';

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const radioInput = ({ title, type, placeholder, required, options, redirect }: Props) => {
  return (
    <>
      {options.map((option: string) => {
        return (
          <>
            <input type={type} id={option} name={title} value={option} />{' '}
            <label htmlFor={option}>{option}</label>
          </>
        );
      })}
    </>
  );
};

export default radioInput;
