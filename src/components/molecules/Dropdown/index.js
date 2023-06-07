// TODO: Rewrite in TS
// TODO: Add story

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconChevronDown } from '@/assets/icons';
import DropdownItem from '@/components/atoms/DropdownItem';
import Icon from '@/components/atoms/Icon';
import Title from '@/components/atoms/Title';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import styles from './Dropdown.module.scss';

const Dropdown = ({
  path,
  dropdownTitle,
  dropdownButton,
  dropdownCta,
  dropdownItems,
  groups,
  rentalLocations,
  toggleDropdown,
}) => {
  let navItem = undefined;

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
            />
            Terug
          </Button>
          <div className={styles['dropdown__nav']}>
            <Title
              title={dropdownTitle}
              variant="h2"
              tagName="p"
              className={styles['dropdown__nav__title']}
            />
            <ul className={styles['dropdown__nav__list']}>
              {navItem &&
                dropdownItems.map((item, i) => {
                  const dropdownItem = navItem.find(
                    (el) => el.slug === item.page.replace(new RegExp('_', 'g'), '-'),
                  );
                  return (
                    <DropdownItem
                      key={`dropdown-${path}-${i}`}
                      title={item.label}
                      description={dropdownItem.description}
                      href={`${path}/${dropdownItem.slug}`}
                    />
                  );
                })}
            </ul>
            <Button
              label={dropdownButton.label}
              href={dropdownButton.link}
              modSmall
              className={styles['dropdown__nav__button']}
            />
          </div>
          <div className={styles['dropdown__cta']}>
            <Title
              title={dropdownCta.title}
              variant="h2"
              tagName="p"
              className={styles['dropdown__cta__title']}
            />
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

Dropdown.propTypes = {
  path: PropTypes.string,
  dropdownCta: PropTypes.object,
  dropdownButton: PropTypes.object,
  dropdownTitle: PropTypes.string,
  dropdownItems: PropTypes.array.isRequired,
};

export default Dropdown;
