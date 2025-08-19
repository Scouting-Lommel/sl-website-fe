import cn from 'classnames';
import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Divider as DividerProps } from './types';
import styles from './Divider.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Divider = ({ variant = 'default' }: DividerProps): JSX.Element => {
  const classNames = cn('sl-layout', 'divider', `divider--${variant}`);

  return <hr className={classNames} />;
};

export default Divider;
