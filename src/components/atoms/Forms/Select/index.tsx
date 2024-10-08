import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import { FormSelect as FormSelectProps } from './types';
import styles from './Select.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormSelectProps & React.SelectHTMLAttributes<HTMLElement>;

const Select = forwardRef((props: Props, ref: any) => {
  const { customChangeBehaviour, error, ...selectProps } = props;
  const selectClassName = classNames(
    'select',
    props.required && 'select--required',
    error && 'select--has-error',
  );

  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    if (customChangeBehaviour) {
      customChangeBehaviour(e);
    }

    if (!props.onChange) return;
    props.onChange(e);
  };

  return (
    <div className={selectClassName}>
      <label htmlFor={props.id}>
        <Typography className="select__label">{props.label}</Typography>
      </label>
      <select className="select__field" {...selectProps} ref={ref} onChange={handleChange}>
        {props.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" aria-label="Select input" size="xs" className="select__chevron" />
      {error && <div className="select__error">{error}</div>}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
