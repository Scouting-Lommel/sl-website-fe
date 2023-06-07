import PropTypes from 'prop-types';
// import { useAuthContext, logout } from '@/lib/api/security/security';
import NavItem from '@/components/molecules/NavItem';
import styles from './Navigation.module.scss';

const Navigation = ({ navItems, groups, rentalLocations }) => {
  // const [auth] = useAuthContext();

  return (
    <nav className={styles['navigation__wrapper']}>
      <ul className={styles['navigation']}>
        <span className={styles['navigation__list']}>
          {navItems.map((navItem, i) => {
            return (
              <NavItem
                key={`nav-item-${i}`}
                label={navItem.label}
                href={`/${navItem.page.replace(new RegExp('_', 'g'), '-')}` || navItem.link}
                dropdownItems={navItem.dropdownItems}
                dropdownCta={navItem.dropdownCta}
                dropdownTitle={navItem.dropdownTitle}
                dropdownButton={navItem.dropdownButton}
                groups={groups}
                rentalLocations={rentalLocations}
                modDropdown={navItem.dropdownItems.length > 0}
              />
            );
          })}
        </span>
        {/* <span className={styles['navigation__list']}>
          {!auth.loggedIn && <NavItem href="/login" label="Log In" />}
          {auth.loggedIn && <NavItem label="Uitloggen" onClick={() => logout()} modButton />}
        </span> */}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
