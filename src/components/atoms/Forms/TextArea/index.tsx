import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { FormTextArea as FormTextAreaProps } from './types';
import styles from './TextArea.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormTextAreaProps & React.TextareaHTMLAttributes<HTMLElement>;

const TextArea = ({ id, name, label, placeholder, rows = 5, required, autoComplete }: Props) => {
  const textAreaClassName = classNames('text-area', required && 'text-area--required');

  return (
    <div className={textAreaClassName}>
      <label htmlFor={id}>
        <Typography className="text-area__label">{label}</Typography>
      </label>
      <textarea
        className="text-area__field"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default TextArea;
