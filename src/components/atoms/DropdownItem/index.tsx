import Link from 'next/link';
import Typography from '@/components/atoms/Typography';
import { DropdownItem as DropdownItemProps } from './types';
// @ts-ignore
import styles from './DropdownItem.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = DropdownItemProps & React.HTMLAttributes<HTMLElement>;

const DropdownItem = ({ title, description, href }: Props) => {
  return (
    <li>
      <Link href={href} className="dropdown-item">
        <div className="dropdown-item__title">{title}</div>
        <Typography data={description} className="dropdown-item__description" modNoStyle />
      </Link>
    </li>
  );
};

export default DropdownItem;
