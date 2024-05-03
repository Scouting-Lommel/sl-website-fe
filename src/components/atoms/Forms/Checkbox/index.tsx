import { forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Checkbox as CheckboxProps } from './types';
import styles from './Checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef((props: Props, ref: any) => {
  const checkboxClassNames = classNames('checkbox', props.required && 'checkbox--required');

  return (
    <div className={checkboxClassNames}>
      <input className="checkbox__field" {...props} ref={ref} type="checkbox" />
      <label htmlFor={props.id}>
        <Typography className="checkbox__label" data={props.label} />
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
