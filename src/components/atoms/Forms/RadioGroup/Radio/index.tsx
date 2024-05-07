import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Radio as RadioProps } from './types';
import styles from './Radio.css';
import { forwardRef } from 'react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RadioProps & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef((props: Props, ref: any) => {
  const radioClassNames = classNames(
    'radio',
    props.required && 'radio--required',
    props.hasError && 'radio--has-error',
  );

  return (
    <div className={radioClassNames}>
      <input className="radio__field" {...props} ref={ref} type="radio" />
      <label htmlFor={props.id}>
        <Typography className="radio__label">{props.label}</Typography>
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
