import PropTypes from 'prop-types';
import { useContext } from 'react';
import classNames from 'classnames';
import { GeneralContext } from '@/context/GeneralContext';
import DropdownItem from '@/components/atoms/DropdownItem';
import Title from '@/components/atoms/Title';
import Button from '@/components/atoms/Button';
import RichText from '@/components/atoms/RichtText';
import styles from './Dropdown.module.scss';

const Dropdown = ({ path, dropdownTitle, dropdownButton, dropdownCta, dropdownItems }) => {
  const { general } = useContext(GeneralContext);
  let navItem = undefined;

  if (path === '/takken') {
    navItem = general.groups.data;
  }
  if (path === '/verhuur') {
    navItem = general.rentalLocations.data;
  }

  return (
    <span className={styles['dropdown__wrapper']}>
      <div className={styles['dropdown']}>
        <div className={classNames([styles['dropdown__content'], 'sl-layout'])}>
          <div className={styles['dropdown__nav']}>
            <Title title={dropdownTitle} variant="h2" className={styles['dropdown__nav__title']} />
            <ul className={styles['dropdown__nav__list']}>
              {navItem &&
                dropdownItems.map((item, i) => {
                  const dropdownItem = navItem.find(
                    (el) => el.attributes.slug === item.page.replace(new RegExp('_', 'g'), '-'),
                  );
                  return (
                    <DropdownItem
                      key={`dropdown-${path}-${i}`}
                      title={item.label}
                      description={dropdownItem.attributes.description}
                      href={`${path}/${dropdownItem.attributes.slug}`}
                    />
                  );
                })}
            </ul>
            <Button
              label={dropdownButton.label}
              href={dropdownButton.link}
              modLink
              modSmall
              className={styles['dropdown__nav__button']}
            />
          </div>
          <div className={styles['dropdown__cta']}>
            <Title
              title={dropdownCta.title}
              variant="h2"
              className={styles['dropdown__cta__title']}
            />
            <RichText data={dropdownCta.intro} className={styles['dropdown__cta__intro']} />
            <Button
              label={dropdownCta.ctaLabel}
              href={dropdownCta.ctaLink}
              modLink
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
