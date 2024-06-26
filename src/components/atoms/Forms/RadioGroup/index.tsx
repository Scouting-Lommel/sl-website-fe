import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import Radio from './Radio';
import { RadioGroup as RadioGroupProps } from './types';
import { Radio as RadioProps } from './Radio/types';
import styles from './RadioGroup.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RadioGroupProps & React.InputHTMLAttributes<HTMLInputElement>;

const RadioGroup = ({
  id,
  label,
  name,
  required,
  error,
  direction = 'column',
  radioButtons,
  register,
}: Props) => {
  const radioGroupClassNames = classNames(
    'radio-group',
    `radio-group--${direction}`,
    required && 'radio-group--required',
  );

  return (
    <div className={radioGroupClassNames} id={id}>
      {label && <Typography className="radio-group__label">{label}</Typography>}
      <div className="radio-group__radios">
        {radioButtons?.map((radio: RadioProps, i: number) => (
          <Radio key={i} {...radio} {...register(name)} hasError={!!error} />
        ))}
      </div>
      {error && <div className="radio__error">{error}</div>}
    </div>
  );
};

export default RadioGroup;
