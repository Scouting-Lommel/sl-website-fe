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
  const textAreaClassName = classNames('text-area', props.required && 'text-area--required');

  return (
    <div className={textAreaClassName}>
      <label htmlFor={props.id}>
        <Typography className="text-area__label">{props.label}</Typography>
      </label>
      <textarea className="text-area__field" {...props} ref={ref} />
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
