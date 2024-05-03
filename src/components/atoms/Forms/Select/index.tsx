import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';
import { IconChevronDown } from '@/assets/icons';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import { FormSelect as FormSelectProps } from './types';
import styles from './Select.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormSelectProps & React.SelectHTMLAttributes<HTMLElement>;

const Select = forwardRef((props: Props, ref: any) => {
  const selectClassName = classNames('select', props.required && 'select--required');

  const { customChangeBehaviour, ...selectProps } = props;

  const handleChange = (e: ChangeEvent<HTMLElement>) => {
    customChangeBehaviour(e);

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
      <Icon title="Select input" size={'xs'} icon={IconChevronDown} className="select__chevron" />
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
