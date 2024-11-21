import cn from 'classnames';
import { forwardRef } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import styles from './File.css';
import { FormFile as FormFileProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const File = forwardRef((props: FormFileProps, ref: any): JSX.Element => {
  const { error, ...fileProps } = props;
  const fileClassName = cn(
    'file-input',
    props.required && 'file-input--required',
    props.disabled && 'file-input--disabled',
    error && 'file-input--has-error',
  );

  return (
    <div className={fileClassName}>
      <label htmlFor={props.id}>
        <Typography className="file-input__label">{props.label}</Typography>
      </label>
      <input className="file-input__field" {...fileProps} ref={ref} />
      {error && <div className="file-input__error">{error}</div>}
    </div>
  );
});

File.displayName = 'File';

export default File;
