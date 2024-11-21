import cn from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './Divider.css';
import { Divider as DividerProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Divider = ({ variant = 'default' }: DividerProps): JSX.Element => {
  const classNames = cn('sl-layout', 'divider', `divider--${variant}`);

  return <hr className={classNames} />;
};

export default Divider;
