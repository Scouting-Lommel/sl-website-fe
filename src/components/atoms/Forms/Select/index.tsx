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

const Select = ({ id, name, label, options, required, autoComplete }: Props) => {
  const selectClassName = classNames('select', required && 'select--required');

  return (
    <div className={selectClassName}>
      <label htmlFor={id}>
        <Typography className="select__label">{label}</Typography>
      </label>
      <select
        className="select__field"
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon title="Select input" size={'xs'} icon={IconChevronDown} className="select__chevron" />
    </div>
  );
};

export default Select;
