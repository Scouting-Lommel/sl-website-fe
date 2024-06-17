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
  const checkboxClassNames = classNames('checkbox', error && 'checkbox--has-error');

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
        <label htmlFor={props.id} className="checkbox__label">
          <Typography
            data={`${props.label}${
              props.required ? '<span className="checkbox__label__asterisk"> *</span>' : ''
            }`}
          />
        </label>
      </div>
      {error && <div className="checkbox__error">{error}</div>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
