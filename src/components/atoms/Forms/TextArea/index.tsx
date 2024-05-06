import { forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { FormTextArea as FormTextAreaProps } from './types';
import styles from './TextArea.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormTextAreaProps & React.TextareaHTMLAttributes<HTMLElement>;

const TextArea = forwardRef((props: Props, ref: any) => {
  const { error, ...textareaProps } = props;
  const textAreaClassName = classNames(
    'text-area',
    props.required && 'text-area--required',
    error && 'text-area--has-error',
  );

  return (
    <div className={textAreaClassName}>
      <label htmlFor={props.id}>
        <Typography className="text-area__label">{props.label}</Typography>
      </label>
      <textarea className="text-area__field" {...textareaProps} ref={ref} />
      {error && <div className="text-area__error">{error}</div>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
