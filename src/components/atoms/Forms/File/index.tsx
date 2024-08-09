import { forwardRef } from 'react';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { FormFile as FormFileProps } from './types';
import styles from './File.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormFileProps & React.InputHTMLAttributes<HTMLElement>;

const File = forwardRef((props: Props, ref: any) => {
  const { error, ...fileProps } = props;
  const fileClassName = classNames(
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
