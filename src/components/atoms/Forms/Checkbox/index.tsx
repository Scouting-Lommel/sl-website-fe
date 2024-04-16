import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Checkbox as CheckboxProps } from './types';
import styles from './Checkbox.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ id, name, label, required, autoComplete, checked }: Props) => {
  const checkboxClassNames = classNames('checkbox', required && 'checkbox--required');

  return (
    <div className={checkboxClassNames}>
      <input
        className="checkbox__field"
        id={id}
        name={name}
        type="checkbox"
        required={required}
        autoComplete={autoComplete}
        checked={checked}
      />
      <label htmlFor={id}>
        <Typography className="checkbox__label" data={label} />
      </label>
    </div>
  );
};

export default Checkbox;
