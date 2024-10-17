import cx from 'classnames';
import { Divider as DividerProps } from './types';
import styles from './Divider.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = DividerProps & React.HTMLAttributes<HTMLElement>;

const Divider = ({ variant = 'default' }: Props) => {
  const classNames = cx('sl-layout', 'divider', `divider--${variant}`);

  return <hr className={classNames} />;
};

export default Divider;
