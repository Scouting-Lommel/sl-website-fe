import cn from 'classnames';
import { forwardRef, type JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import { Radio as RadioProps } from './types';
import styles from './Radio.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Radio = forwardRef((props: RadioProps, ref: any): JSX.Element => {
  const { hasError, ...radioProps } = props;

  const radioClassNames = cn(
    'radio',
    props.required && 'radio--required',
    props.hasError && 'radio--has-error',
  );

  return (
    <div className={radioClassNames}>
      <input className="radio__field" {...radioProps} ref={ref} type="radio" />
      <label htmlFor={props.id}>
        <Typography className="radio__label">{props.label}</Typography>
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
