import classNames from 'classnames';
import { Icon as IconProps } from './types';
import styles from './Icon.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = IconProps & React.HTMLAttributes<HTMLElement>;

const Icon = ({ icon, size, title, className }: Props) => {
  const classes = classNames('icon', `icon--${size}`, className);

  if (!icon) {
    console.warn('Error: `icon` in <Icon /> is not defined.');
    return <></>;
  }

  const TagName = icon;

  return (
    <div className={classes}>
      <TagName title={title} className="icon__svg" />
    </div>
  );
};

export default Icon;
