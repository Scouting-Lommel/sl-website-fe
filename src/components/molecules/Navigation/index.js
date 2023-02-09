import { useAuthContext, logout } from '@/lib/api/security/security';
import NavItem from '@/components/atoms/NavItem';
import styles from './Navigation.module.scss';

const Navigation = ({ navItems }) => {
  const [auth] = useAuthContext();

  return (
    <nav className={styles['navigation__wrapper']}>
      <ul className={styles['navigation']}>
        <span className={styles['navigation__list']}>
          {navItems.map((navItem, i) => {
            return (
              <NavItem
                key={`nav-item-${i}`}
                href={`/${navItem.page}` || navItem.link}
                label={navItem.label}
              />
            );
          })}
        </span>
        <span className={styles['navigation__list']}>
          {!auth.loggedIn && <NavItem href="/login" label="Inloggen" />}
          {auth.loggedIn && <NavItem label="Uitloggen" onClick={() => logout()} modButton />}
        </span>
      </ul>
    </nav>
  );
};

export default Navigation;
