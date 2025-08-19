import cn from 'classnames';
import { forwardRef, type JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import { FormTextArea as FormTextAreaProps } from './types';
import styles from './TextArea.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const TextArea = forwardRef((props: FormTextAreaProps, ref: any): JSX.Element => {
  const { error, ...textareaProps } = props;
  const textAreaClassName = cn(
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
