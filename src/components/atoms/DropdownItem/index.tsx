import Link from 'next/link';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import { DropdownItem as DropdownItemProps } from './types';
import styles from './DropdownItem.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const DropdownItem = ({ title, description, href }: DropdownItemProps): JSX.Element => {
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
