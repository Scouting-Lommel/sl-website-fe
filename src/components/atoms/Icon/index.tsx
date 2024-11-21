import cx from 'classnames';
import * as icons from 'lucide-react';
import { iconMap } from './IconMap';
import { Icon as IconProps } from './types';
import styles from './Icon.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Icon = ({ name, size, className, ...props }: IconProps): JSX.Element => {
  const mappedName = iconMap[name];
  const LucideIcon = icons[mappedName];
  const classNames = cx('icon', `icon--${size}`, className);

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react icons.`);
    return <></>;
  }

  return <LucideIcon aria-hidden="true" className={classNames} {...props} />;
};

export default Icon;
