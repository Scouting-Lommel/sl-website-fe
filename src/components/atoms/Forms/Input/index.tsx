import Typography from '@/components/atoms/Typography';
import { FormInput as FormInputProps } from './types';
import styles from './Input.css';
import classNames from 'classnames';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormInputProps & React.InputHTMLAttributes<HTMLElement>;

const Input = ({ id, name, label, type, placeholder, required, autoComplete }: Props) => {
  const inputClassName = classNames('input', required && 'input--required');

  return (
    <div className={inputClassName}>
      <label htmlFor={id}>
        <Typography className="input__label">{label}</Typography>
      </label>
      <input
        className="input__field"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default Input;
