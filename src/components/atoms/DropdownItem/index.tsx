import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@/components/atoms/Typography';
import { DropdownItem as DropdownItemProps } from './types';
import styles from './DropdownItem.module.scss';

type Props = DropdownItemProps & React.HTMLAttributes<HTMLElement>;

const DropdownItem = ({ title, description, href }: Props) => {
  return (
    <li>
      <Link href={href} className={styles['dropdown-item']}>
        <div className={styles['dropdown-item__title']}>{title}</div>
        <Typography data={description} className={styles['dropdown-item__description']} />
      </Link>
    </li>
  );
};

DropdownItem.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
};

export default DropdownItem;
