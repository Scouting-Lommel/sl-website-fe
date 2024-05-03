import { forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { FormInput as FormInputProps } from './types';
import styles from './Input.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormInputProps & React.InputHTMLAttributes<HTMLElement>;

const Input = forwardRef((props: Props, ref: any) => {
  const inputClassName = classNames('input', props.required && 'input--required');

  return (
    <div className={inputClassName}>
      <label htmlFor={props.id}>
        <Typography className="input__label">{props.label}</Typography>
      </label>
      <input className="input__field" {...props} ref={ref} />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
