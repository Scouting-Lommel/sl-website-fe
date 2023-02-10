import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Dropdown from '@/components/molecules/Dropdown';
import styles from './NavItem.module.scss';

const NavItem = ({
  label,
  href,
  dropdownItems,
  dropdownCta,
  dropdownTitle,
  dropdownButton,
  onClick,
  modButton,
  modDropdown,
}) => {
  if (modDropdown) {
    return (
      <li className={classNames([styles['nav-item'], styles['nav-item__dropdown-trigger']])}>
        <Link href={href}>{label}</Link>
        <span className={styles['nav-item__dropdown']}>
          <Dropdown
            path={href}
            dropdownItems={dropdownItems}
            dropdownTitle={dropdownTitle}
            dropdownCta={dropdownCta}
            dropdownButton={dropdownButton}
          />
        </span>
      </li>
    );
  }

  if (modButton) {
    return (
      <button onClick={onClick} className={styles['nav-item']}>
        {label}
      </button>
    );
  }

  return (
    <li className={styles['nav-item']}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  dropdownItems: PropTypes.array,
  dropdownCta: PropTypes.object,
  dropdownButton: PropTypes.object,
  dropdownTitle: PropTypes.string,
  onClick: PropTypes.func,
  modButton: PropTypes.bool,
  modDropdown: PropTypes.bool,
};

export default NavItem;
