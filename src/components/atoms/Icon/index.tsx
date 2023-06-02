import classNames from 'classnames';
import { Icon as IconProps } from './types';
import styles from './Icon.module.scss';

type Props = IconProps & React.HTMLAttributes<HTMLElement>;

const Icon = ({ icon, size, title, className }: Props) => {
  const classes = classNames([styles['icon'], styles[`icon--${size}`], className]);

  if (!icon) {
    console.warn('Error: `icon` in <Icon /> is not defined.');
    return <></>;
  }

  const TagName = icon;

  return (
    <div className={classes}>
      <TagName title={title} className={styles['icon__svg']} />
    </div>
  );
};

export default Icon;
