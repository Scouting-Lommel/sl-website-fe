import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Checkbox as CheckboxProps } from './types';
import styles from './Checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef((props: Props, ref: any) => {
  const { customChangeBehaviour, error, ...checkboxProps } = props;
  const checkboxClassNames = classNames(
    'checkbox',
    props.required && 'checkbox--required',
    error && 'checkbox--has-error',
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (customChangeBehaviour) {
      customChangeBehaviour(e);
    }

    if (!props.onChange) return;
    props.onChange(e);
  };

  return (
    <div>
      <div className={checkboxClassNames}>
        <input
          className="checkbox__field"
          type="checkbox"
          {...checkboxProps}
          ref={ref}
          onChange={handleChange}
        />
        <label htmlFor={props.id}>
          <Typography className="checkbox__label" data={props.label} />
        </label>
      </div>
      {error && <div className="checkbox__error">{error}</div>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
