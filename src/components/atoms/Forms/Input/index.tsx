import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { FormInput as FormInputProps } from './types';
import styles from './Input.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormInputProps & React.InputHTMLAttributes<HTMLElement>;

const Input = forwardRef((props: Props, ref: any) => {
  const { customChangeBehaviour, error, ...inputProps } = props;
  const inputClassName = classNames(
    'input',
    props.required && 'input--required',
    props.disabled && 'input--disabled',
    error && 'input--has-error',
  );

  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    if (customChangeBehaviour) {
      customChangeBehaviour(e);
    }

    if (!props.onChange) return;
    props.onChange(e);
  };

  return (
    <div className={inputClassName}>
      <label htmlFor={props.id}>
        <Typography className="input__label">{props.label}</Typography>
      </label>
      <input className="input__field" {...inputProps} ref={ref} onChange={handleChange} />
      {error && <div className="input__error">{error}</div>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
