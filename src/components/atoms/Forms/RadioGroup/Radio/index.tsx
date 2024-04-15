import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Radio as RadioProps } from './types';
import styles from './Radio.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RadioProps & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ id, name, label, required, checked, autoComplete, value, onChange }: Props) => {
  const radioClassNames = classNames('radio', required && 'radio--required');

  return (
    <div className={radioClassNames}>
      <input
        className="radio__field"
        id={id}
        name={name}
        type="radio"
        value={value}
        required={required}
        autoComplete={autoComplete}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <Typography className="radio__label">{label}</Typography>
      </label>
    </div>
  );
};

export default Radio;
