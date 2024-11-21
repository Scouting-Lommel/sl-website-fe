import cn from 'classnames';
import { ChangeEvent, forwardRef } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import styles from './Input.css';
import { FormInput as FormInputProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Input = forwardRef((props: FormInputProps, ref: any): JSX.Element => {
  const { customChangeBehaviour, error, ...inputProps } = props;
  const inputClassName = cn(
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
