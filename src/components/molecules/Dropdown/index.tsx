import classNames from 'classnames';
import { IconChevronDown } from '@/assets/icons';
import DropdownItem from '@/components/atoms/DropdownItem';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import { Dropdown as DropdownProps, DropdownNavItem } from './types';
import styles from './Dropdown.module.scss';

type Props = DropdownProps & React.HTMLAttributes<HTMLElement>;

const Dropdown = ({
  path,
  dropdownTitle,
  dropdownButton,
  dropdownCta,
  dropdownItems,
  groups,
  rentalLocations,
  toggleDropdown,
}: Props) => {
  let navItem: DropdownNavItem[] = [];
  if (path === '/takken') {
    navItem = groups;
  }
  if (path === '/verhuur') {
    navItem = rentalLocations;
  }

  return (
    <span className={styles['dropdown__wrapper']}>
      <div className={styles['dropdown']}>
        <div className={classNames([styles['dropdown__content'], 'sl-layout'])}>
          <Button
            variant="link1"
            onClick={() => toggleDropdown()}
            className={styles['dropdown__content__back-button']}
          >
            <Icon
              icon={IconChevronDown}
              className={styles['dropdown__content__back-button__chevron']}
              size="xs"
              title="Collapse"
            />
            Terug
          </Button>
          <div className={styles['dropdown__nav']}>
            <p className={classNames(styles['dropdown__nav__title'], 't-headline-2')}>
              {dropdownTitle}
            </p>
            <ul className={styles['dropdown__nav__list']}>
              {dropdownItems.map((item, i) => {
                const dropdownItem = navItem.find(
                  (el) => el.slug === item.page.replace(new RegExp('_', 'g'), '-'),
                );
                if (dropdownItem) {
                  return (
                    <DropdownItem
                      key={`dropdown-${path}-${i}`}
                      title={item.label}
                      description={dropdownItem.description}
                      href={`${path}/${dropdownItem.slug}`}
                    />
                  );
                }
              })}
            </ul>
            <Button
              label={dropdownButton.label}
              href={dropdownButton.href}
              modSmall
              className={styles['dropdown__nav__button']}
            />
          </div>
          <div className={styles['dropdown__cta']}>
            <p className={classNames(styles['dropdown__cta__title'], 't-headline-2')}>
              {dropdownCta.title}
            </p>
            <Typography data={dropdownCta.intro} className={styles['dropdown__cta__intro']} />
            <Button
              label={dropdownCta.ctaLabel}
              href={dropdownCta.ctaLink}
              modSmall
              className={styles['dropdown__cta__button']}
            />
          </div>
        </div>
      </div>
    </span>
  );
};

export default Dropdown;
